import type { FramePlan } from "./useFrame";

const VERT_SRC = `#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const COMPOSITE_FRAG = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_text;
uniform sampler2D u_tile;
uniform int u_frameShape;
uniform vec2 u_plateSize;
uniform float u_ringThickness;
uniform float u_tileScaleMm;
uniform vec2 u_tileVRange;

uniform vec2 u_ringCenter;
uniform float u_ringCenterlineRadius;

uniform vec2 u_rectCenter;
uniform vec2 u_rectAB;
uniform float u_rectRC;

const float PI = 3.14159265359;
const float TWO_PI = 6.28318530718;
const float HALF_PI = 1.57079632679;

vec2 closestPointRing(vec2 mm) {
  vec2 d = mm - u_ringCenter;
  float dist = length(d);
  float t = dist - u_ringCenterlineRadius;
  float angle = atan(d.y, d.x);
  if (angle < 0.0) angle += TWO_PI;
  return vec2(angle * u_ringCenterlineRadius, t);
}

vec2 closestPointRect(vec2 mm) {
  float a = u_rectAB.x;
  float b = u_rectAB.y;
  float rc = u_rectRC;
  vec2 rel = mm - u_rectCenter;
  float au = abs(rel.x);
  float av = abs(rel.y);
  float sx = rel.x >= 0.0 ? 1.0 : -1.0;
  float sy = rel.y >= 0.0 ? 1.0 : -1.0;
  float arc = HALF_PI * rc;
  float P = 4.0 * a + 4.0 * b + 2.0 * PI * rc;

  float s = 0.0;
  float t = 0.0;

  if (au > a && av > b) {
    vec2 center = vec2(sx * a, sy * b);
    vec2 d = rel - center;
    float dist = length(d);
    t = dist - rc;
    float angle = atan(d.y, d.x);
    float sStart;
    float angleOffset;
    if (sx > 0.0 && sy > 0.0)      { sStart = b;                                   angleOffset = 0.0; }
    else if (sx < 0.0 && sy > 0.0) { sStart = b + arc + 2.0 * a;                   angleOffset = HALF_PI; }
    else if (sx < 0.0 && sy < 0.0) { sStart = b + 2.0 * arc + 2.0 * a + 2.0 * b;   angleOffset = -PI; }
    else                           { sStart = b + 3.0 * arc + 4.0 * a + 2.0 * b;   angleOffset = -HALF_PI; }
    s = sStart + (angle - angleOffset) * rc;
  } else if (au > a) {
    t = au - (a + rc);
    if (sx > 0.0) {
      s = rel.y >= 0.0 ? rel.y : P + rel.y;
    } else {
      float sLE = b + 2.0 * arc + 2.0 * a;
      s = sLE + (b - rel.y);
    }
  } else if (av > b) {
    t = av - (b + rc);
    if (sy > 0.0) {
      float sTE = b + arc;
      s = sTE + (a - rel.x);
    } else {
      float sBE = b + 3.0 * arc + 2.0 * a + 2.0 * b;
      s = sBE + (rel.x + a);
    }
  } else {
    float dx = (a + rc) - au;
    float dy = (b + rc) - av;
    if (dx < dy) {
      t = au - (a + rc);
      if (sx > 0.0) {
        s = rel.y >= 0.0 ? rel.y : P + rel.y;
      } else {
        float sLE = b + 2.0 * arc + 2.0 * a;
        s = sLE + (b - rel.y);
      }
    } else {
      t = av - (b + rc);
      if (sy > 0.0) {
        float sTE = b + arc;
        s = sTE + (a - rel.x);
      } else {
        float sBE = b + 3.0 * arc + 2.0 * a + 2.0 * b;
        s = sBE + (rel.x + a);
      }
    }
  }

  return vec2(s, t);
}

void main() {
  vec2 mm = v_uv * u_plateSize;
  float textVal = texture(u_text, v_uv).r;
  float frameVal = 0.0;
  if (u_frameShape > 0) {
    vec2 st = (u_frameShape == 1) ? closestPointRing(mm) : closestPointRect(mm);
    float halfT = u_ringThickness * 0.5;
    if (abs(st.y) <= halfT) {
      float stripX = fract(st.x / u_tileScaleMm);
      float stripY = clamp((st.y + halfT) / u_ringThickness, 0.0, 1.0);
      float tileV = mix(u_tileVRange.x, u_tileVRange.y, stripY);
      frameVal = texture(u_tile, vec2(stripX, tileV)).r;
    }
  }
  float depth = max(textVal, frameVal);
  outColor = vec4(depth, depth, depth, 1.0);
}`;

const DOWNSAMPLE_FRAG = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;
uniform sampler2D u_src;
void main() {
  outColor = texture(u_src, v_uv);
}`;

function compile(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader {
  const sh = gl.createShader(type);
  if (!sh) throw new Error("createShader failed");
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh);
    gl.deleteShader(sh);
    throw new Error("shader compile failed: " + log);
  }
  return sh;
}

function link(gl: WebGL2RenderingContext, vsSrc: string, fsSrc: string): WebGLProgram {
  const vs = compile(gl, gl.VERTEX_SHADER, vsSrc);
  const fs = compile(gl, gl.FRAGMENT_SHADER, fsSrc);
  const prog = gl.createProgram();
  if (!prog) throw new Error("createProgram failed");
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.bindAttribLocation(prog, 0, "a_pos");
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(prog);
    throw new Error("program link failed: " + log);
  }
  return prog;
}

interface CompositeUniforms {
  text: WebGLUniformLocation | null;
  tile: WebGLUniformLocation | null;
  frameShape: WebGLUniformLocation | null;
  plateSize: WebGLUniformLocation | null;
  ringThickness: WebGLUniformLocation | null;
  tileScaleMm: WebGLUniformLocation | null;
  tileVRange: WebGLUniformLocation | null;
  ringCenter: WebGLUniformLocation | null;
  ringCenterlineRadius: WebGLUniformLocation | null;
  rectCenter: WebGLUniformLocation | null;
  rectAB: WebGLUniformLocation | null;
  rectRC: WebGLUniformLocation | null;
}

export interface GLRenderParams {
  textCanvas: HTMLCanvasElement;
  textVersion: number;
  tileImage: HTMLImageElement | null;
  tileKey: string | null;
  tileVRange: [number, number];
  plateWidthMm: number;
  plateHeightMm: number;
  framePlan: FramePlan | null;
  nx: number;
  ny: number;
}

export interface GLRenderResult {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  data: Uint8ClampedArray;
}

const SUPERSAMPLE = 2;

export class GLDepthRenderer {
  readonly canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private compProg: WebGLProgram;
  private dsProg: WebGLProgram;
  private compUniforms: CompositeUniforms;
  private dsSrcLoc: WebGLUniformLocation | null;
  private vao: WebGLVertexArrayObject;
  private hiResTex: WebGLTexture;
  private hiResFB: WebGLFramebuffer;
  private hiResW = 0;
  private hiResH = 0;
  private textTex: WebGLTexture;
  private textVersion = -1;
  private tileTex: WebGLTexture;
  private tileKey: string | null = null;
  private readBuf: Uint8Array | null = null;

  constructor() {
    this.canvas = document.createElement("canvas");
    const gl = this.canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      depth: false,
      premultipliedAlpha: false,
      // We display the canvas directly as the depth preview; preserve the
      // buffer so it survives compositor repaints between renders.
      preserveDrawingBuffer: true,
    });
    if (!gl) throw new Error("WebGL2 unavailable");
    this.gl = gl;

    this.compProg = link(gl, VERT_SRC, COMPOSITE_FRAG);
    this.dsProg = link(gl, VERT_SRC, DOWNSAMPLE_FRAG);

    this.compUniforms = {
      text: gl.getUniformLocation(this.compProg, "u_text"),
      tile: gl.getUniformLocation(this.compProg, "u_tile"),
      frameShape: gl.getUniformLocation(this.compProg, "u_frameShape"),
      plateSize: gl.getUniformLocation(this.compProg, "u_plateSize"),
      ringThickness: gl.getUniformLocation(this.compProg, "u_ringThickness"),
      tileScaleMm: gl.getUniformLocation(this.compProg, "u_tileScaleMm"),
      tileVRange: gl.getUniformLocation(this.compProg, "u_tileVRange"),
      ringCenter: gl.getUniformLocation(this.compProg, "u_ringCenter"),
      ringCenterlineRadius: gl.getUniformLocation(this.compProg, "u_ringCenterlineRadius"),
      rectCenter: gl.getUniformLocation(this.compProg, "u_rectCenter"),
      rectAB: gl.getUniformLocation(this.compProg, "u_rectAB"),
      rectRC: gl.getUniformLocation(this.compProg, "u_rectRC"),
    };
    this.dsSrcLoc = gl.getUniformLocation(this.dsProg, "u_src");

    const vao = gl.createVertexArray();
    if (!vao) throw new Error("createVertexArray failed");
    this.vao = vao;
    gl.bindVertexArray(vao);

    const quadBuf = gl.createBuffer();
    if (!quadBuf) throw new Error("createBuffer failed");
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);

    this.hiResTex = gl.createTexture()!;
    this.hiResFB = gl.createFramebuffer()!;
    this.textTex = gl.createTexture()!;
    this.tileTex = gl.createTexture()!;

    gl.bindTexture(gl.TEXTURE_2D, this.textTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    gl.bindTexture(gl.TEXTURE_2D, this.tileTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }

  render(params: GLRenderParams): GLRenderResult {
    const gl = this.gl;
    const { nx, ny } = params;
    const hiW = nx * SUPERSAMPLE;
    const hiH = ny * SUPERSAMPLE;

    if (this.canvas.width !== nx || this.canvas.height !== ny) {
      this.canvas.width = nx;
      this.canvas.height = ny;
    }
    if (hiW !== this.hiResW || hiH !== this.hiResH) {
      gl.bindTexture(gl.TEXTURE_2D, this.hiResTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, hiW, hiH, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.hiResFB);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.hiResTex, 0);
      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      if (status !== gl.FRAMEBUFFER_COMPLETE) throw new Error("hiRes FBO incomplete: 0x" + status.toString(16));
      this.hiResW = hiW;
      this.hiResH = hiH;
    }

    if (params.textVersion !== this.textVersion) {
      gl.bindTexture(gl.TEXTURE_2D, this.textTex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE, params.textCanvas);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      this.textVersion = params.textVersion;
    }

    if (params.tileImage && params.tileKey && params.tileKey !== this.tileKey) {
      gl.bindTexture(gl.TEXTURE_2D, this.tileTex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE, params.tileImage);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      this.tileKey = params.tileKey;
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.hiResFB);
    gl.viewport(0, 0, hiW, hiH);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(this.compProg);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.textTex);
    gl.uniform1i(this.compUniforms.text, 0);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.tileTex);
    gl.uniform1i(this.compUniforms.tile, 1);

    gl.uniform2f(this.compUniforms.plateSize, params.plateWidthMm, params.plateHeightMm);
    gl.uniform2f(this.compUniforms.tileVRange, params.tileVRange[0], params.tileVRange[1]);

    const plan = params.framePlan;
    const cx = params.plateWidthMm * 0.5;
    const cy = params.plateHeightMm * 0.5;
    if (!plan || !params.tileImage) {
      gl.uniform1i(this.compUniforms.frameShape, 0);
      gl.uniform1f(this.compUniforms.ringThickness, 1.0);
      gl.uniform1f(this.compUniforms.tileScaleMm, 1.0);
      gl.uniform2f(this.compUniforms.ringCenter, cx, cy);
      gl.uniform1f(this.compUniforms.ringCenterlineRadius, 1.0);
      gl.uniform2f(this.compUniforms.rectCenter, cx, cy);
      gl.uniform2f(this.compUniforms.rectAB, 1.0, 1.0);
      gl.uniform1f(this.compUniforms.rectRC, 1.0);
    } else if (plan.shape === "ring") {
      gl.uniform1i(this.compUniforms.frameShape, 1);
      gl.uniform1f(this.compUniforms.ringThickness, plan.ringThicknessMm);
      gl.uniform1f(this.compUniforms.tileScaleMm, plan.tileScaleMm);
      gl.uniform2f(this.compUniforms.ringCenter, cx, cy);
      gl.uniform1f(this.compUniforms.ringCenterlineRadius, plan.centerlineRadiusMm);
      gl.uniform2f(this.compUniforms.rectCenter, cx, cy);
      gl.uniform2f(this.compUniforms.rectAB, 1.0, 1.0);
      gl.uniform1f(this.compUniforms.rectRC, 1.0);
    } else {
      gl.uniform1i(this.compUniforms.frameShape, 2);
      gl.uniform1f(this.compUniforms.ringThickness, plan.ringThicknessMm);
      gl.uniform1f(this.compUniforms.tileScaleMm, plan.tileScaleMm);
      gl.uniform2f(this.compUniforms.ringCenter, cx, cy);
      gl.uniform1f(this.compUniforms.ringCenterlineRadius, 1.0);
      gl.uniform2f(this.compUniforms.rectCenter, cx, cy);
      gl.uniform2f(this.compUniforms.rectAB, plan.a, plan.b);
      gl.uniform1f(this.compUniforms.rectRC, plan.rc);
    }

    gl.bindVertexArray(this.vao);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, nx, ny);
    gl.useProgram(this.dsProg);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.hiResTex);
    gl.uniform1i(this.dsSrcLoc, 0);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    gl.bindVertexArray(null);

    const byteLen = nx * ny * 4;
    if (!this.readBuf || this.readBuf.byteLength !== byteLen) {
      this.readBuf = new Uint8Array(byteLen);
    }
    gl.readPixels(0, 0, nx, ny, gl.RGBA, gl.UNSIGNED_BYTE, this.readBuf);

    // readPixels returns rows bottom-up (FB row 0 = bottom of display), which
    // already lines up with mesh-Y (j=0 = bottom edge of plate). No flip.
    const data = new Uint8ClampedArray(this.readBuf);

    return { canvas: this.canvas, width: nx, height: ny, data };
  }

  dispose(): void {
    const gl = this.gl;
    gl.deleteProgram(this.compProg);
    gl.deleteProgram(this.dsProg);
    gl.deleteVertexArray(this.vao);
    gl.deleteTexture(this.hiResTex);
    gl.deleteFramebuffer(this.hiResFB);
    gl.deleteTexture(this.textTex);
    gl.deleteTexture(this.tileTex);
  }
}
