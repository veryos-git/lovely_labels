<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  source: HTMLCanvasElement | null;
}>();

const container = ref<HTMLDivElement | null>(null);
let mounted: HTMLCanvasElement | null = null;

watch(
  () => props.source,
  (canvas) => {
    const host = container.value;
    if (!host) return;
    if (mounted && mounted !== canvas) {
      if (mounted.parentElement === host) host.removeChild(mounted);
    }
    mounted = canvas ?? null;
    if (canvas && canvas.parentElement !== host) {
      canvas.classList.add("strip-canvas");
      host.appendChild(canvas);
    }
  },
  { immediate: true, flush: "post" },
);
</script>

<template>
  <section class="panel">
    <header>Tiled strip (pre-warp)</header>
    <div class="stage" ref="container"></div>
  </section>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  background: #11131a;
  border: 1px solid #2a2f3d;
  border-radius: 6px;
  min-height: 0;
  min-width: 0;
}
header {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8b94aa;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #2a2f3d;
}
.stage {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
}
.stage :deep(.strip-canvas) {
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: auto;
  object-fit: contain;
  image-rendering: pixelated;
  background: #000;
  border-radius: 4px;
}
</style>
