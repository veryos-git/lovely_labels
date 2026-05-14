(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Al(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const re={},ss=[],wn=()=>{},ph=()=>!1,lo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),co=n=>n.startsWith("onUpdate:"),Ae=Object.assign,wl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},dd=Object.prototype.hasOwnProperty,Zt=(n,t)=>dd.call(n,t),Bt=Array.isArray,rs=n=>Ks(n)==="[object Map]",mh=n=>Ks(n)==="[object Set]",xc=n=>Ks(n)==="[object Date]",Ht=n=>typeof n=="function",fe=n=>typeof n=="string",Cn=n=>typeof n=="symbol",ie=n=>n!==null&&typeof n=="object",gh=n=>(ie(n)||Ht(n))&&Ht(n.then)&&Ht(n.catch),_h=Object.prototype.toString,Ks=n=>_h.call(n),pd=n=>Ks(n).slice(8,-1),vh=n=>Ks(n)==="[object Object]",Rl=n=>fe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Is=Al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uo=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},md=/-\w/g,pn=uo(n=>n.replace(md,t=>t.slice(1).toUpperCase())),gd=/\B([A-Z])/g,Ni=uo(n=>n.replace(gd,"-$1").toLowerCase()),xh=uo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ro=uo(n=>n?`on${xh(n)}`:""),Tn=(n,t)=>!Object.is(n,t),Co=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Mh=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},_d=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Mc;const ho=()=>Mc||(Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cl(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=fe(i)?Sd(i):Cl(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(fe(n)||ie(n))return n}const vd=/;(?![^(]*\))/g,xd=/:([^]+)/,Md=/\/\*[^]*?\*\//g;function Sd(n){const t={};return n.replace(Md,"").split(vd).forEach(e=>{if(e){const i=e.split(xd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function $s(n){let t="";if(fe(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=$s(n[e]);i&&(t+=i+" ")}else if(ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const yd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ed=Al(yd);function Sh(n){return!!n||n===""}function Td(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Pl(n[i],t[i]);return e}function Pl(n,t){if(n===t)return!0;let e=xc(n),i=xc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Cn(n),i=Cn(t),e||i)return n===t;if(e=Bt(n),i=Bt(t),e||i)return e&&i?Td(n,t):!1;if(e=ie(n),i=ie(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Pl(n[o],t[o]))return!1}}return String(n)===String(t)}const yh=n=>!!(n&&n.__v_isRef===!0),Ie=n=>fe(n)?n:n==null?"":Bt(n)||ie(n)&&(n.toString===_h||!Ht(n.toString))?yh(n)?Ie(n.value):JSON.stringify(n,Eh,2):String(n),Eh=(n,t)=>yh(t)?Eh(n,t.value):rs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Po(i,r)+" =>"]=s,e),{})}:mh(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Po(e))}:Cn(t)?Po(t):ie(t)&&!Bt(t)&&!vh(t)?String(t):t,Po=(n,t="")=>{var e;return Cn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class bd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Te&&(Te.active?(this.parent=Te,this.index=(Te.scopes||(Te.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Te;try{return Te=this,t()}finally{Te=e}}}on(){++this._on===1&&(this.prevScope=Te,Te=this)}off(){if(this._on>0&&--this._on===0){if(Te===this)Te=this.prevScope;else{let t=Te;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ad(){return Te}let se;const Lo=new WeakSet;class Th{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&(Te.active?Te.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Lo.has(this)&&(Lo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ah(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sc(this),wh(this);const t=se,e=mn;se=this,mn=!0;try{return this.fn()}finally{Rh(this),se=t,mn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Il(t);this.deps=this.depsTail=void 0,Sc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Lo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ba(this)&&this.run()}get dirty(){return ba(this)}}let bh=0,Us,Ns;function Ah(n,t=!1){if(n.flags|=8,t){n.next=Ns,Ns=n;return}n.next=Us,Us=n}function Ll(){bh++}function Dl(){if(--bh>0)return;if(Ns){let t=Ns;for(Ns=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Us;){let t=Us;for(Us=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function wh(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Rh(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Il(i),wd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function ba(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ch(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Ch(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ks)||(n.globalVersion=ks,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ba(n))))return;n.flags|=2;const t=n.dep,e=se,i=mn;se=n,mn=!0;try{wh(n);const s=n.fn(n._value);(t.version===0||Tn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{se=e,mn=i,Rh(n),n.flags&=-3}}function Il(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Il(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function wd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let mn=!0;const Ph=[];function Wn(){Ph.push(mn),mn=!1}function Xn(){const n=Ph.pop();mn=n===void 0?!0:n}function Sc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=se;se=void 0;try{t()}finally{se=e}}}let ks=0;class Rd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ul{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!se||!mn||se===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==se)e=this.activeLink=new Rd(se,this),se.deps?(e.prevDep=se.depsTail,se.depsTail.nextDep=e,se.depsTail=e):se.deps=se.depsTail=e,Lh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=se.depsTail,e.nextDep=void 0,se.depsTail.nextDep=e,se.depsTail=e,se.deps===e&&(se.deps=i)}return e}trigger(t){this.version++,ks++,this.notify(t)}notify(t){Ll();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Dl()}}}function Lh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Lh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Aa=new WeakMap,Pi=Symbol(""),wa=Symbol(""),Ws=Symbol("");function Ce(n,t,e){if(mn&&se){let i=Aa.get(n);i||Aa.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Ul),s.map=i,s.key=e),s.track()}}function Vn(n,t,e,i,s,r){const o=Aa.get(n);if(!o){ks++;return}const a=l=>{l&&l.trigger()};if(Ll(),t==="clear")o.forEach(a);else{const l=Bt(n),c=l&&Rl(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Ws||!Cn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Ws)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Pi)),rs(n)&&a(o.get(wa)));break;case"delete":l||(a(o.get(Pi)),rs(n)&&a(o.get(wa)));break;case"set":rs(n)&&a(o.get(Pi));break}}Dl()}function Hi(n){const t=$t(n);return t===n?t:(Ce(t,"iterate",Ws),nn(n)?t:t.map(gn))}function fo(n){return Ce(n=$t(n),"iterate",Ws),n}function Sn(n,t){return Yn(n)?fs(Li(n)?gn(t):t):gn(t)}const Cd={__proto__:null,[Symbol.iterator](){return Do(this,Symbol.iterator,n=>Sn(this,n))},concat(...n){return Hi(this).concat(...n.map(t=>Bt(t)?Hi(t):t))},entries(){return Do(this,"entries",n=>(n[1]=Sn(this,n[1]),n))},every(n,t){return Dn(this,"every",n,t,void 0,arguments)},filter(n,t){return Dn(this,"filter",n,t,e=>e.map(i=>Sn(this,i)),arguments)},find(n,t){return Dn(this,"find",n,t,e=>Sn(this,e),arguments)},findIndex(n,t){return Dn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Dn(this,"findLast",n,t,e=>Sn(this,e),arguments)},findLastIndex(n,t){return Dn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Dn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Io(this,"includes",n)},indexOf(...n){return Io(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return Io(this,"lastIndexOf",n)},map(n,t){return Dn(this,"map",n,t,void 0,arguments)},pop(){return Ss(this,"pop")},push(...n){return Ss(this,"push",n)},reduce(n,...t){return yc(this,"reduce",n,t)},reduceRight(n,...t){return yc(this,"reduceRight",n,t)},shift(){return Ss(this,"shift")},some(n,t){return Dn(this,"some",n,t,void 0,arguments)},splice(...n){return Ss(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return Ss(this,"unshift",n)},values(){return Do(this,"values",n=>Sn(this,n))}};function Do(n,t,e){const i=fo(n),s=i[t]();return i!==n&&!nn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Pd=Array.prototype;function Dn(n,t,e,i,s,r){const o=fo(n),a=o!==n&&!nn(n),l=o[t];if(l!==Pd[t]){const h=l.apply(n,r);return a?gn(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,Sn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function yc(n,t,e,i){const s=fo(n),r=s!==n&&!nn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Sn(n,c)),e.call(this,c,Sn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?Sn(n,l):l}function Io(n,t,e){const i=$t(n);Ce(i,"iterate",Ws);const s=i[t](...e);return(s===-1||s===!1)&&Ol(e[0])?(e[0]=$t(e[0]),i[t](...e)):s}function Ss(n,t,e=[]){Wn(),Ll();const i=$t(n)[t].apply(n,e);return Dl(),Xn(),i}const Ld=Al("__proto__,__v_isRef,__isVue"),Dh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cn));function Dd(n){Cn(n)||(n=String(n));const t=$t(this);return Ce(t,"has",n),t.hasOwnProperty(n)}class Ih{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Gd:Oh:r?Fh:Nh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!s){let l;if(o&&(l=Cd[e]))return l;if(e==="hasOwnProperty")return Dd}const a=Reflect.get(t,e,Pe(t)?t:i);if((Cn(e)?Dh.has(e):Ld(e))||(s||Ce(t,"get",e),r))return a;if(Pe(a)){const l=o&&Rl(e)?a:a.value;return s&&ie(l)?Ca(l):l}return ie(a)?s?Ca(a):po(a):a}}class Uh extends Ih{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Bt(t)&&Rl(e);if(!this._isShallow){const c=Yn(r);if(!nn(i)&&!Yn(i)&&(r=$t(r),i=$t(i)),!o&&Pe(r)&&!Pe(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:Zt(t,e),l=Reflect.set(t,e,i,Pe(t)?t:s);return t===$t(s)&&(a?Tn(i,r)&&Vn(t,"set",e,i):Vn(t,"add",e,i)),l}deleteProperty(t,e){const i=Zt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Vn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Cn(e)||!Dh.has(e))&&Ce(t,"has",e),i}ownKeys(t){return Ce(t,"iterate",Bt(t)?"length":Pi),Reflect.ownKeys(t)}}class Id extends Ih{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Ud=new Uh,Nd=new Id,Fd=new Uh(!0);const Ra=n=>n,or=n=>Reflect.getPrototypeOf(n);function Od(n,t,e){return function(...i){const s=this.__v_raw,r=$t(s),o=rs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Ra:t?fs:gn;return!t&&Ce(r,"iterate",l?wa:Pi),Ae(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function ar(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Bd(n,t){const e={get(s){const r=this.__v_raw,o=$t(r),a=$t(s);n||(Tn(s,a)&&Ce(o,"get",s),Ce(o,"get",a));const{has:l}=or(o),c=t?Ra:n?fs:gn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ce($t(s),"iterate",Pi),s.size},has(s){const r=this.__v_raw,o=$t(r),a=$t(s);return n||(Tn(s,a)&&Ce(o,"has",s),Ce(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=$t(a),c=t?Ra:n?fs:gn;return!n&&Ce(l,"iterate",Pi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ae(e,n?{add:ar("add"),set:ar("set"),delete:ar("delete"),clear:ar("clear")}:{add(s){const r=$t(this),o=or(r),a=$t(s),l=!t&&!nn(s)&&!Yn(s)?a:s;return o.has.call(r,l)||Tn(s,l)&&o.has.call(r,s)||Tn(a,l)&&o.has.call(r,a)||(r.add(l),Vn(r,"add",l,l)),this},set(s,r){!t&&!nn(r)&&!Yn(r)&&(r=$t(r));const o=$t(this),{has:a,get:l}=or(o);let c=a.call(o,s);c||(s=$t(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Tn(r,u)&&Vn(o,"set",s,r):Vn(o,"add",s,r),this},delete(s){const r=$t(this),{has:o,get:a}=or(r);let l=o.call(r,s);l||(s=$t(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Vn(r,"delete",s,void 0),c},clear(){const s=$t(this),r=s.size!==0,o=s.clear();return r&&Vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Od(s,n,t)}),e}function Nl(n,t){const e=Bd(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Zt(e,s)&&s in i?e:i,s,r)}const zd={get:Nl(!1,!1)},Hd={get:Nl(!1,!0)},Vd={get:Nl(!0,!1)};const Nh=new WeakMap,Fh=new WeakMap,Oh=new WeakMap,Gd=new WeakMap;function kd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wd(n){return n.__v_skip||!Object.isExtensible(n)?0:kd(pd(n))}function po(n){return Yn(n)?n:Fl(n,!1,Ud,zd,Nh)}function Xd(n){return Fl(n,!1,Fd,Hd,Fh)}function Ca(n){return Fl(n,!0,Nd,Vd,Oh)}function Fl(n,t,e,i,s){if(!ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=Wd(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function Li(n){return Yn(n)?Li(n.__v_raw):!!(n&&n.__v_isReactive)}function Yn(n){return!!(n&&n.__v_isReadonly)}function nn(n){return!!(n&&n.__v_isShallow)}function Ol(n){return n?!!n.__v_raw:!1}function $t(n){const t=n&&n.__v_raw;return t?$t(t):n}function Yd(n){return!Zt(n,"__v_skip")&&Object.isExtensible(n)&&Mh(n,"__v_skip",!0),n}const gn=n=>ie(n)?po(n):n,fs=n=>ie(n)?Ca(n):n;function Pe(n){return n?n.__v_isRef===!0:!1}function Rn(n){return Bh(n,!1)}function Br(n){return Bh(n,!0)}function Bh(n,t){return Pe(n)?n:new qd(n,t)}class qd{constructor(t,e){this.dep=new Ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:$t(t),this._value=e?t:gn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||nn(t)||Yn(t);t=i?t:$t(t),Tn(t,e)&&(this._rawValue=t,this._value=i?t:gn(t),this.dep.trigger())}}function Bl(n){return Pe(n)?n.value:n}const jd={get:(n,t,e)=>t==="__v_raw"?n:Bl(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Pe(s)&&!Pe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function zh(n){return Li(n)?n:new Proxy(n,jd)}class Kd{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return Ah(this,!0),!0}get value(){const t=this.dep.track();return Ch(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $d(n,t,e=!1){let i,s;return Ht(n)?i=n:(i=n.get,s=n.set),new Kd(i,s,e)}const lr={},Kr=new WeakMap;let Ti;function Zd(n,t=!1,e=Ti){if(e){let i=Kr.get(e);i||Kr.set(e,i=[]),i.push(n)}}function Jd(n,t,e=re){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=b=>s?b:nn(b)||s===!1||s===0?ri(b,1):ri(b);let u,h,f,d,g=!1,_=!1;if(Pe(n)?(h=()=>n.value,g=nn(n)):Li(n)?(h=()=>c(n),g=!0):Bt(n)?(_=!0,g=n.some(b=>Li(b)||nn(b)),h=()=>n.map(b=>{if(Pe(b))return b.value;if(Li(b))return c(b);if(Ht(b))return l?l(b,2):b()})):Ht(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){Wn();try{f()}finally{Xn()}}const b=Ti;Ti=u;try{return l?l(n,3,[d]):n(d)}finally{Ti=b}}:h=wn,t&&s){const b=h,U=s===!0?1/0:s;h=()=>ri(b(),U)}const m=Ad(),p=()=>{u.stop(),m&&m.active&&wl(m.effects,u)};if(r&&t){const b=t;t=(...U)=>{b(...U),p()}}let A=_?new Array(n.length).fill(lr):lr;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const U=u.run();if(s||g||(_?U.some((P,w)=>Tn(P,A[w])):Tn(U,A))){f&&f();const P=Ti;Ti=u;try{const w=[U,A===lr?void 0:_&&A[0]===lr?[]:A,d];A=U,l?l(t,3,w):t(...w)}finally{Ti=P}}}else u.run()};return a&&a(y),u=new Th(h),u.scheduler=o?()=>o(y,!1):y,d=b=>Zd(b,!1,u),f=u.onStop=()=>{const b=Kr.get(u);if(b){if(l)l(b,4);else for(const U of b)U();Kr.delete(u)}},t?i?y(!0):A=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ri(n,t=1/0,e){if(t<=0||!ie(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Pe(n))ri(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)ri(n[i],t,e);else if(mh(n)||rs(n))n.forEach(i=>{ri(i,t,e)});else if(vh(n)){for(const i in n)ri(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ri(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zs(n,t,e,i){try{return i?n(...i):n()}catch(s){mo(s,t,e)}}function Pn(n,t,e,i){if(Ht(n)){const s=Zs(n,t,e,i);return s&&gh(s)&&s.catch(r=>{mo(r,t,e)}),s}if(Bt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Pn(n[r],t,e,i));return s}}function mo(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||re;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Wn(),Zs(r,null,10,[n,l,c]),Xn();return}}Qd(n,e,s,i,o)}function Qd(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ue=[];let xn=-1;const os=[];let ii=null,es=0;const Hh=Promise.resolve();let $r=null;function tp(n){const t=$r||Hh;return n?t.then(this?n.bind(this):n):t}function ep(n){let t=xn+1,e=Ue.length;for(;t<e;){const i=t+e>>>1,s=Ue[i],r=Xs(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function zl(n){if(!(n.flags&1)){const t=Xs(n),e=Ue[Ue.length-1];!e||!(n.flags&2)&&t>=Xs(e)?Ue.push(n):Ue.splice(ep(t),0,n),n.flags|=1,Vh()}}function Vh(){$r||($r=Hh.then(kh))}function np(n){Bt(n)?os.push(...n):ii&&n.id===-1?ii.splice(es+1,0,n):n.flags&1||(os.push(n),n.flags|=1),Vh()}function Ec(n,t,e=xn+1){for(;e<Ue.length;e++){const i=Ue[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ue.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gh(n){if(os.length){const t=[...new Set(os)].sort((e,i)=>Xs(e)-Xs(i));if(os.length=0,ii){ii.push(...t);return}for(ii=t,es=0;es<ii.length;es++){const e=ii[es];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ii=null,es=0}}const Xs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function kh(n){try{for(xn=0;xn<Ue.length;xn++){const t=Ue[xn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Zs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;xn<Ue.length;xn++){const t=Ue[xn];t&&(t.flags&=-2)}xn=-1,Ue.length=0,Gh(),$r=null,(Ue.length||os.length)&&kh()}}let An=null,Wh=null;function Zr(n){const t=An;return An=n,Wh=n&&n.type.__scopeId||null,t}function ip(n,t=An,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Uc(-1);const r=Zr(t);let o;try{o=n(...s)}finally{Zr(r),i._d&&Uc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function gi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Wn(),Pn(l,e,8,[n.el,a,n,t]),Xn())}}function sp(n,t){if(Fe){let e=Fe.provides;const i=Fe.parent&&Fe.parent.provides;i===e&&(e=Fe.provides=Object.create(i)),e[n]=t}}function zr(n,t,e=!1){const i=em();if(i||as){let s=as?as._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Ht(t)?t.call(i&&i.proxy):t}}const rp=Symbol.for("v-scx"),op=()=>zr(rp);function fn(n,t,e){return Xh(n,t,e)}function Xh(n,t,e=re){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ae({},e),l=t&&i||!t&&r!=="post";let c;if(qs){if(r==="sync"){const d=op();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=wn,d.resume=wn,d.pause=wn,d}}const u=Fe;a.call=(d,g,_)=>Pn(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{Ve(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():zl(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Jd(n,t,a);return qs&&(c?c.push(f):l&&f()),f}function ap(n,t,e){const i=this.proxy,s=fe(n)?n.includes(".")?Yh(i,n):()=>i[n]:n.bind(i,i);let r;Ht(t)?r=t:(r=t.handler,e=t);const o=Js(this),a=Xh(s,r.bind(i),e);return o(),a}function Yh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const lp=Symbol("_vte"),cp=n=>n.__isTeleport,up=Symbol("_leaveCb");function Hl(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Hl(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Fi(n,t){return Ht(n)?Ae({name:n.name},t,{setup:n}):n}function qh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Tc(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Jr=new WeakMap;function Fs(n,t,e,i,s=!1){if(Bt(n)){n.forEach((_,m)=>Fs(_,t&&(Bt(t)?t[m]:t),e,i,s));return}if(Os(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Fs(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Yl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===re?a.refs={}:a.refs,h=a.setupState,f=$t(h),d=h===re?ph:_=>Tc(u,_)?!1:Zt(f,_),g=(_,m)=>!(m&&Tc(u,m));if(c!=null&&c!==l){if(bc(t),fe(c))u[c]=null,d(c)&&(h[c]=null);else if(Pe(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Ht(l))Zs(l,a,12,[o,u]);else{const _=fe(l),m=Pe(l);if(_||m){const p=()=>{if(n.f){const A=_?d(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Bt(A)&&wl(A,r);else if(Bt(A))A.includes(r)||A.push(r);else if(_)u[l]=[r],d(l)&&(h[l]=u[l]);else{const y=[r];g(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else _?(u[l]=o,d(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const A=()=>{p(),Jr.delete(n)};A.id=-1,Jr.set(n,A),Ve(A,e)}else bc(n),p()}}}function bc(n){const t=Jr.get(n);t&&(t.flags|=8,Jr.delete(n))}ho().requestIdleCallback;ho().cancelIdleCallback;const Os=n=>!!n.type.__asyncLoader,jh=n=>n.type.__isKeepAlive;function hp(n,t){Kh(n,"a",t)}function fp(n,t){Kh(n,"da",t)}function Kh(n,t,e=Fe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(go(t,i,e),e){let s=e.parent;for(;s&&s.parent;)jh(s.parent.vnode)&&dp(i,t,e,s),s=s.parent}}function dp(n,t,e,i){const s=go(t,n,i,!0);$h(()=>{wl(i[t],s)},e)}function go(n,t,e=Fe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Wn();const a=Js(e),l=Pn(t,e,n,o);return a(),Xn(),l});return i?s.unshift(r):s.push(r),r}}const jn=n=>(t,e=Fe)=>{(!qs||n==="sp")&&go(n,(...i)=>t(...i),e)},pp=jn("bm"),Vl=jn("m"),mp=jn("bu"),gp=jn("u"),Gl=jn("bum"),$h=jn("um"),_p=jn("sp"),vp=jn("rtg"),xp=jn("rtc");function Mp(n,t=Fe){go("ec",n,t)}const Sp=Symbol.for("v-ndc");function cr(n,t,e,i){let s;const r=e,o=Bt(n);if(o||fe(n)){const a=o&&Li(n);let l=!1,c=!1;a&&(l=!nn(n),c=Yn(n),n=fo(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?fs(gn(n[u])):gn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ie(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Pa=n=>n?xf(n)?Yl(n):Pa(n.parent):null,Bs=Ae(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pa(n.parent),$root:n=>Pa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Jh(n),$forceUpdate:n=>n.f||(n.f=()=>{zl(n.update)}),$nextTick:n=>n.n||(n.n=tp.bind(n.proxy)),$watch:n=>ap.bind(n)}),Uo=(n,t)=>n!==re&&!n.__isScriptSetup&&Zt(n,t),yp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Uo(i,t))return o[t]=1,i[t];if(s!==re&&Zt(s,t))return o[t]=2,s[t];if(Zt(r,t))return o[t]=3,r[t];if(e!==re&&Zt(e,t))return o[t]=4,e[t];La&&(o[t]=0)}}const c=Bs[t];let u,h;if(c)return t==="$attrs"&&Ce(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==re&&Zt(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,Zt(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Uo(s,t)?(s[t]=e,!0):i!==re&&Zt(i,t)?(i[t]=e,!0):Zt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==re&&a[0]!=="$"&&Zt(n,a)||Uo(t,a)||Zt(r,a)||Zt(i,a)||Zt(Bs,a)||Zt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Zt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ac(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let La=!0;function Ep(n){const t=Jh(n),e=n.proxy,i=n.ctx;La=!1,t.beforeCreate&&wc(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:y,unmounted:b,render:U,renderTracked:P,renderTriggered:w,errorCaptured:C,serverPrefetch:X,expose:x,inheritAttrs:T,components:Z,directives:O,filters:j}=t;if(c&&Tp(c,i,null),o)for(const K in o){const N=o[K];Ht(N)&&(i[K]=N.bind(e))}if(s){const K=s.call(e,e);ie(K)&&(n.data=po(K))}if(La=!0,r)for(const K in r){const N=r[K],ht=Ht(N)?N.bind(e,e):Ht(N.get)?N.get.bind(e,e):wn,dt=!Ht(N)&&Ht(N.set)?N.set.bind(e):wn,mt=oi({get:ht,set:dt});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>mt.value,set:zt=>mt.value=zt})}if(a)for(const K in a)Zh(a[K],i,e,K);if(l){const K=Ht(l)?l.call(e):l;Reflect.ownKeys(K).forEach(N=>{sp(N,K[N])})}u&&wc(u,n,"c");function V(K,N){Bt(N)?N.forEach(ht=>K(ht.bind(e))):N&&K(N.bind(e))}if(V(pp,h),V(Vl,f),V(mp,d),V(gp,g),V(hp,_),V(fp,m),V(Mp,C),V(xp,P),V(vp,w),V(Gl,A),V($h,b),V(_p,X),Bt(x))if(x.length){const K=n.exposed||(n.exposed={});x.forEach(N=>{Object.defineProperty(K,N,{get:()=>e[N],set:ht=>e[N]=ht,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===wn&&(n.render=U),T!=null&&(n.inheritAttrs=T),Z&&(n.components=Z),O&&(n.directives=O),X&&qh(n)}function Tp(n,t,e=wn){Bt(n)&&(n=Da(n));for(const i in n){const s=n[i];let r;ie(s)?"default"in s?r=zr(s.from||i,s.default,!0):r=zr(s.from||i):r=zr(s),Pe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function wc(n,t,e){Pn(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Zh(n,t,e,i){let s=i.includes(".")?Yh(e,i):()=>e[i];if(fe(n)){const r=t[n];Ht(r)&&fn(s,r)}else if(Ht(n))fn(s,n.bind(e));else if(ie(n))if(Bt(n))n.forEach(r=>Zh(r,t,e,i));else{const r=Ht(n.handler)?n.handler.bind(e):t[n.handler];Ht(r)&&fn(s,r,n)}}function Jh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Qr(l,c,o,!0)),Qr(l,t,o)),ie(t)&&r.set(t,l),l}function Qr(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Qr(n,r,e,!0),s&&s.forEach(o=>Qr(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=bp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const bp={data:Rc,props:Cc,emits:Cc,methods:Ps,computed:Ps,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Ps,directives:Ps,watch:wp,provide:Rc,inject:Ap};function Rc(n,t){return t?n?function(){return Ae(Ht(n)?n.call(this,this):n,Ht(t)?t.call(this,this):t)}:t:n}function Ap(n,t){return Ps(Da(n),Da(t))}function Da(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Le(n,t){return n?[...new Set([].concat(n,t))]:t}function Ps(n,t){return n?Ae(Object.create(null),n,t):t}function Cc(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:Ae(Object.create(null),Ac(n),Ac(t??{})):t}function wp(n,t){if(!n)return t;if(!t)return n;const e=Ae(Object.create(null),n);for(const i in t)e[i]=Le(n[i],t[i]);return e}function Qh(){return{app:null,config:{isNativeTag:ph,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rp=0;function Cp(n,t){return function(i,s=null){Ht(i)||(i=Ae({},i)),s!=null&&!ie(s)&&(s=null);const r=Qh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Rp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:am,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ht(u.install)?(o.add(u),u.install(c,...h)):Ht(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Ge(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Yl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Pn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=as;as=c;try{return u()}finally{as=h}}};return c}}let as=null;const Pp=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${pn(t)}Modifiers`]||n[`${Ni(t)}Modifiers`];function Lp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||re;let s=e;const r=t.startsWith("update:"),o=r&&Pp(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>fe(u)?u.trim():u)),o.number&&(s=e.map(_d)));let a,l=i[a=Ro(t)]||i[a=Ro(pn(t))];!l&&r&&(l=i[a=Ro(Ni(t))]),l&&Pn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Pn(c,n,6,s)}}const Dp=new WeakMap;function tf(n,t,e=!1){const i=e?Dp:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ht(n)){const l=c=>{const u=tf(c,t,!0);u&&(a=!0,Ae(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ie(n)&&i.set(n,null),null):(Bt(r)?r.forEach(l=>o[l]=null):Ae(o,r),ie(n)&&i.set(n,o),o)}function _o(n,t){return!n||!lo(t)?!1:(t=t.slice(2).replace(/Once$/,""),Zt(n,t[0].toLowerCase()+t.slice(1))||Zt(n,Ni(t))||Zt(n,t))}function Pc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=Zr(n);let p,A;try{if(e.shapeFlag&4){const b=s||i,U=b;p=yn(c.call(U,b,u,h,d,f,g)),A=a}else{const b=t;p=yn(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),A=t.props?a:Ip(a)}}catch(b){zs.length=0,mo(b,n,1),p=Ge(ui)}let y=p;if(A&&_!==!1){const b=Object.keys(A),{shapeFlag:U}=y;b.length&&U&7&&(r&&b.some(co)&&(A=Up(A,r)),y=ds(y,A,!1,!0))}return e.dirs&&(y=ds(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&Hl(y,e.transition),p=y,Zr(m),p}const Ip=n=>{let t;for(const e in n)(e==="class"||e==="style"||lo(e))&&((t||(t={}))[e]=n[e]);return t},Up=(n,t)=>{const e={};for(const i in n)(!co(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Np(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Lc(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(ef(o,i,f)&&!_o(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lc(i,o,c):!0:!!o;return!1}function Lc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(ef(t,n,r)&&!_o(e,r))return!0}return!1}function ef(n,t,e){const i=n[e],s=t[e];return e==="style"&&ie(i)&&ie(s)?!Pl(i,s):i!==s}function Fp({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const nf={},sf=()=>Object.create(nf),rf=n=>Object.getPrototypeOf(n)===nf;function Op(n,t,e,i=!1){const s={},r=sf();n.propsDefaults=Object.create(null),of(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Xd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Bp(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=$t(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(_o(n.emitsOptions,f))continue;const d=t[f];if(l)if(Zt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=pn(f);s[g]=Ia(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{of(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!Zt(t,h)&&((u=Ni(h))===h||!Zt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Ia(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!Zt(t,h))&&(delete r[h],c=!0)}c&&Vn(n.attrs,"set","")}function of(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Is(l))continue;const c=t[l];let u;s&&Zt(s,u=pn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:_o(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=$t(e),c=a||re;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Ia(s,l,h,c[h],n,!Zt(c,h))}}return o}function Ia(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=Zt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ht(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Js(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ni(e))&&(i=!0))}return i}const zp=new WeakMap;function af(n,t,e=!1){const i=e?zp:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ht(n)){const u=h=>{l=!0;const[f,d]=af(h,t,!0);Ae(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ie(n)&&i.set(n,ss),ss;if(Bt(r))for(let u=0;u<r.length;u++){const h=pn(r[u]);Dc(h)&&(o[h]=re)}else if(r)for(const u in r){const h=pn(u);if(Dc(h)){const f=r[u],d=o[h]=Bt(f)||Ht(f)?{type:f}:Ae({},f),g=d.type;let _=!1,m=!0;if(Bt(g))for(let p=0;p<g.length;++p){const A=g[p],y=Ht(A)&&A.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=Ht(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||Zt(d,"default"))&&a.push(h)}}const c=[o,a];return ie(n)&&i.set(n,c),c}function Dc(n){return n[0]!=="$"&&!Is(n)}const kl=n=>n==="_"||n==="_ctx"||n==="$stable",Wl=n=>Bt(n)?n.map(yn):[yn(n)],Hp=(n,t,e)=>{if(t._n)return t;const i=ip((...s)=>Wl(t(...s)),e);return i._c=!1,i},lf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(kl(s))continue;const r=n[s];if(Ht(r))t[s]=Hp(s,r,i);else if(r!=null){const o=Wl(r);t[s]=()=>o}}},cf=(n,t)=>{const e=Wl(t);n.slots.default=()=>e},uf=(n,t,e)=>{for(const i in t)(e||!kl(i))&&(n[i]=t[i])},Vp=(n,t,e)=>{const i=n.slots=sf();if(n.vnode.shapeFlag&32){const s=t._;s?(uf(i,t,e),e&&Mh(i,"_",s,!0)):lf(t,i)}else t&&cf(n,t)},Gp=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=re;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:uf(s,t,e):(r=!t.$stable,lf(t,s)),o=t}else t&&(cf(n,t),o={default:1});if(r)for(const a in s)!kl(a)&&o[a]==null&&delete s[a]},Ve=qp;function kp(n){return Wp(n)}function Wp(n,t){const e=ho();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=wn,insertStaticContent:g}=n,_=(R,M,q,J=null,$=null,W=null,ot=void 0,et=null,S=!!M.dynamicChildren)=>{if(R===M)return;R&&!ys(R,M)&&(J=_t(R),zt(R,$,W,!0),R=null),M.patchFlag===-2&&(S=!1,M.dynamicChildren=null);const{type:v,ref:L,shapeFlag:F}=M;switch(v){case vo:m(R,M,q,J);break;case ui:p(R,M,q,J);break;case Fo:R==null&&A(M,q,J,ot);break;case Ne:Z(R,M,q,J,$,W,ot,et,S);break;default:F&1?U(R,M,q,J,$,W,ot,et,S):F&6?O(R,M,q,J,$,W,ot,et,S):(F&64||F&128)&&v.process(R,M,q,J,$,W,ot,et,S,kt)}L!=null&&$?Fs(L,R&&R.ref,W,M||R,!M):L==null&&R&&R.ref!=null&&Fs(R.ref,null,W,R,!0)},m=(R,M,q,J)=>{if(R==null)i(M.el=a(M.children),q,J);else{const $=M.el=R.el;M.children!==R.children&&c($,M.children)}},p=(R,M,q,J)=>{R==null?i(M.el=l(M.children||""),q,J):M.el=R.el},A=(R,M,q,J)=>{[R.el,R.anchor]=g(R.children,M,q,J,R.el,R.anchor)},y=({el:R,anchor:M},q,J)=>{let $;for(;R&&R!==M;)$=f(R),i(R,q,J),R=$;i(M,q,J)},b=({el:R,anchor:M})=>{let q;for(;R&&R!==M;)q=f(R),s(R),R=q;s(M)},U=(R,M,q,J,$,W,ot,et,S)=>{if(M.type==="svg"?ot="svg":M.type==="math"&&(ot="mathml"),R==null)P(M,q,J,$,W,ot,et,S);else{const v=R.el&&R.el._isVueCE?R.el:null;try{v&&v._beginPatch(),X(R,M,$,W,ot,et,S)}finally{v&&v._endPatch()}}},P=(R,M,q,J,$,W,ot,et)=>{let S,v;const{props:L,shapeFlag:F,transition:G,dirs:H}=R;if(S=R.el=o(R.type,W,L&&L.is,L),F&8?u(S,R.children):F&16&&C(R.children,S,null,J,$,No(R,W),ot,et),H&&gi(R,null,J,"created"),w(S,R,R.scopeId,ot,J),L){for(const rt in L)rt!=="value"&&!Is(rt)&&r(S,rt,null,L[rt],W,J);"value"in L&&r(S,"value",null,L.value,W),(v=L.onVnodeBeforeMount)&&vn(v,J,R)}H&&gi(R,null,J,"beforeMount");const ct=Xp($,G);ct&&G.beforeEnter(S),i(S,M,q),((v=L&&L.onVnodeMounted)||ct||H)&&Ve(()=>{try{v&&vn(v,J,R),ct&&G.enter(S),H&&gi(R,null,J,"mounted")}finally{}},$)},w=(R,M,q,J,$)=>{if(q&&d(R,q),J)for(let W=0;W<J.length;W++)d(R,J[W]);if($){let W=$.subTree;if(M===W||pf(W.type)&&(W.ssContent===M||W.ssFallback===M)){const ot=$.vnode;w(R,ot,ot.scopeId,ot.slotScopeIds,$.parent)}}},C=(R,M,q,J,$,W,ot,et,S=0)=>{for(let v=S;v<R.length;v++){const L=R[v]=et?Hn(R[v]):yn(R[v]);_(null,L,M,q,J,$,W,ot,et)}},X=(R,M,q,J,$,W,ot)=>{const et=M.el=R.el;let{patchFlag:S,dynamicChildren:v,dirs:L}=M;S|=R.patchFlag&16;const F=R.props||re,G=M.props||re;let H;if(q&&_i(q,!1),(H=G.onVnodeBeforeUpdate)&&vn(H,q,M,R),L&&gi(M,R,q,"beforeUpdate"),q&&_i(q,!0),(F.innerHTML&&G.innerHTML==null||F.textContent&&G.textContent==null)&&u(et,""),v?x(R.dynamicChildren,v,et,q,J,No(M,$),W):ot||N(R,M,et,null,q,J,No(M,$),W,!1),S>0){if(S&16)T(et,F,G,q,$);else if(S&2&&F.class!==G.class&&r(et,"class",null,G.class,$),S&4&&r(et,"style",F.style,G.style,$),S&8){const ct=M.dynamicProps;for(let rt=0;rt<ct.length;rt++){const at=ct[rt],Pt=F[at],st=G[at];(st!==Pt||at==="value")&&r(et,at,Pt,st,$,q)}}S&1&&R.children!==M.children&&u(et,M.children)}else!ot&&v==null&&T(et,F,G,q,$);((H=G.onVnodeUpdated)||L)&&Ve(()=>{H&&vn(H,q,M,R),L&&gi(M,R,q,"updated")},J)},x=(R,M,q,J,$,W,ot)=>{for(let et=0;et<M.length;et++){const S=R[et],v=M[et],L=S.el&&(S.type===Ne||!ys(S,v)||S.shapeFlag&198)?h(S.el):q;_(S,v,L,null,J,$,W,ot,!0)}},T=(R,M,q,J,$)=>{if(M!==q){if(M!==re)for(const W in M)!Is(W)&&!(W in q)&&r(R,W,M[W],null,$,J);for(const W in q){if(Is(W))continue;const ot=q[W],et=M[W];ot!==et&&W!=="value"&&r(R,W,et,ot,$,J)}"value"in q&&r(R,"value",M.value,q.value,$)}},Z=(R,M,q,J,$,W,ot,et,S)=>{const v=M.el=R?R.el:a(""),L=M.anchor=R?R.anchor:a("");let{patchFlag:F,dynamicChildren:G,slotScopeIds:H}=M;H&&(et=et?et.concat(H):H),R==null?(i(v,q,J),i(L,q,J),C(M.children||[],q,L,$,W,ot,et,S)):F>0&&F&64&&G&&R.dynamicChildren&&R.dynamicChildren.length===G.length?(x(R.dynamicChildren,G,q,$,W,ot,et),(M.key!=null||$&&M===$.subTree)&&hf(R,M,!0)):N(R,M,q,L,$,W,ot,et,S)},O=(R,M,q,J,$,W,ot,et,S)=>{M.slotScopeIds=et,R==null?M.shapeFlag&512?$.ctx.activate(M,q,J,ot,S):j(M,q,J,$,W,ot,S):Q(R,M,S)},j=(R,M,q,J,$,W,ot)=>{const et=R.component=tm(R,J,$);if(jh(R)&&(et.ctx.renderer=kt),nm(et,!1,ot),et.asyncDep){if($&&$.registerDep(et,V,ot),!R.el){const S=et.subTree=Ge(ui);p(null,S,M,q),R.placeholder=S.el}}else V(et,R,M,q,$,W,ot)},Q=(R,M,q)=>{const J=M.component=R.component;if(Np(R,M,q))if(J.asyncDep&&!J.asyncResolved){K(J,M,q);return}else J.next=M,J.update();else M.el=R.el,J.vnode=M},V=(R,M,q,J,$,W,ot)=>{const et=()=>{if(R.isMounted){let{next:F,bu:G,u:H,parent:ct,vnode:rt}=R;{const wt=ff(R);if(wt){F&&(F.el=rt.el,K(R,F,ot)),wt.asyncDep.then(()=>{Ve(()=>{R.isUnmounted||v()},$)});return}}let at=F,Pt;_i(R,!1),F?(F.el=rt.el,K(R,F,ot)):F=rt,G&&Co(G),(Pt=F.props&&F.props.onVnodeBeforeUpdate)&&vn(Pt,ct,F,rt),_i(R,!0);const st=Pc(R),pt=R.subTree;R.subTree=st,_(pt,st,h(pt.el),_t(pt),R,$,W),F.el=st.el,at===null&&Fp(R,st.el),H&&Ve(H,$),(Pt=F.props&&F.props.onVnodeUpdated)&&Ve(()=>vn(Pt,ct,F,rt),$)}else{let F;const{el:G,props:H}=M,{bm:ct,m:rt,parent:at,root:Pt,type:st}=R,pt=Os(M);_i(R,!1),ct&&Co(ct),!pt&&(F=H&&H.onVnodeBeforeMount)&&vn(F,at,M),_i(R,!0);{Pt.ce&&Pt.ce._hasShadowRoot()&&Pt.ce._injectChildStyle(st,R.parent?R.parent.type:void 0);const wt=R.subTree=Pc(R);_(null,wt,q,J,R,$,W),M.el=wt.el}if(rt&&Ve(rt,$),!pt&&(F=H&&H.onVnodeMounted)){const wt=M;Ve(()=>vn(F,at,wt),$)}(M.shapeFlag&256||at&&Os(at.vnode)&&at.vnode.shapeFlag&256)&&R.a&&Ve(R.a,$),R.isMounted=!0,M=q=J=null}};R.scope.on();const S=R.effect=new Th(et);R.scope.off();const v=R.update=S.run.bind(S),L=R.job=S.runIfDirty.bind(S);L.i=R,L.id=R.uid,S.scheduler=()=>zl(L),_i(R,!0),v()},K=(R,M,q)=>{M.component=R;const J=R.vnode.props;R.vnode=M,R.next=null,Bp(R,M.props,J,q),Gp(R,M.children,q),Wn(),Ec(R),Xn()},N=(R,M,q,J,$,W,ot,et,S=!1)=>{const v=R&&R.children,L=R?R.shapeFlag:0,F=M.children,{patchFlag:G,shapeFlag:H}=M;if(G>0){if(G&128){dt(v,F,q,J,$,W,ot,et,S);return}else if(G&256){ht(v,F,q,J,$,W,ot,et,S);return}}H&8?(L&16&&yt(v,$,W),F!==v&&u(q,F)):L&16?H&16?dt(v,F,q,J,$,W,ot,et,S):yt(v,$,W,!0):(L&8&&u(q,""),H&16&&C(F,q,J,$,W,ot,et,S))},ht=(R,M,q,J,$,W,ot,et,S)=>{R=R||ss,M=M||ss;const v=R.length,L=M.length,F=Math.min(v,L);let G;for(G=0;G<F;G++){const H=M[G]=S?Hn(M[G]):yn(M[G]);_(R[G],H,q,null,$,W,ot,et,S)}v>L?yt(R,$,W,!0,!1,F):C(M,q,J,$,W,ot,et,S,F)},dt=(R,M,q,J,$,W,ot,et,S)=>{let v=0;const L=M.length;let F=R.length-1,G=L-1;for(;v<=F&&v<=G;){const H=R[v],ct=M[v]=S?Hn(M[v]):yn(M[v]);if(ys(H,ct))_(H,ct,q,null,$,W,ot,et,S);else break;v++}for(;v<=F&&v<=G;){const H=R[F],ct=M[G]=S?Hn(M[G]):yn(M[G]);if(ys(H,ct))_(H,ct,q,null,$,W,ot,et,S);else break;F--,G--}if(v>F){if(v<=G){const H=G+1,ct=H<L?M[H].el:J;for(;v<=G;)_(null,M[v]=S?Hn(M[v]):yn(M[v]),q,ct,$,W,ot,et,S),v++}}else if(v>G)for(;v<=F;)zt(R[v],$,W,!0),v++;else{const H=v,ct=v,rt=new Map;for(v=ct;v<=G;v++){const Ut=M[v]=S?Hn(M[v]):yn(M[v]);Ut.key!=null&&rt.set(Ut.key,v)}let at,Pt=0;const st=G-ct+1;let pt=!1,wt=0;const Dt=new Array(st);for(v=0;v<st;v++)Dt[v]=0;for(v=H;v<=F;v++){const Ut=R[v];if(Pt>=st){zt(Ut,$,W,!0);continue}let Lt;if(Ut.key!=null)Lt=rt.get(Ut.key);else for(at=ct;at<=G;at++)if(Dt[at-ct]===0&&ys(Ut,M[at])){Lt=at;break}Lt===void 0?zt(Ut,$,W,!0):(Dt[Lt-ct]=v+1,Lt>=wt?wt=Lt:pt=!0,_(Ut,M[Lt],q,null,$,W,ot,et,S),Pt++)}const Et=pt?Yp(Dt):ss;for(at=Et.length-1,v=st-1;v>=0;v--){const Ut=ct+v,Lt=M[Ut],te=M[Ut+1],I=Ut+1<L?te.el||df(te):J;Dt[v]===0?_(null,Lt,q,I,$,W,ot,et,S):pt&&(at<0||v!==Et[at]?mt(Lt,q,I,2):at--)}}},mt=(R,M,q,J,$=null)=>{const{el:W,type:ot,transition:et,children:S,shapeFlag:v}=R;if(v&6){mt(R.component.subTree,M,q,J);return}if(v&128){R.suspense.move(M,q,J);return}if(v&64){ot.move(R,M,q,kt);return}if(ot===Ne){i(W,M,q);for(let F=0;F<S.length;F++)mt(S[F],M,q,J);i(R.anchor,M,q);return}if(ot===Fo){y(R,M,q);return}if(J!==2&&v&1&&et)if(J===0)et.beforeEnter(W),i(W,M,q),Ve(()=>et.enter(W),$);else{const{leave:F,delayLeave:G,afterLeave:H}=et,ct=()=>{R.ctx.isUnmounted?s(W):i(W,M,q)},rt=()=>{W._isLeaving&&W[up](!0),F(W,()=>{ct(),H&&H()})};G?G(W,ct,rt):rt()}else i(W,M,q)},zt=(R,M,q,J=!1,$=!1)=>{const{type:W,props:ot,ref:et,children:S,dynamicChildren:v,shapeFlag:L,patchFlag:F,dirs:G,cacheIndex:H,memo:ct}=R;if(F===-2&&($=!1),et!=null&&(Wn(),Fs(et,null,q,R,!0),Xn()),H!=null&&(M.renderCache[H]=void 0),L&256){M.ctx.deactivate(R);return}const rt=L&1&&G,at=!Os(R);let Pt;if(at&&(Pt=ot&&ot.onVnodeBeforeUnmount)&&vn(Pt,M,R),L&6)lt(R.component,q,J);else{if(L&128){R.suspense.unmount(q,J);return}rt&&gi(R,null,M,"beforeUnmount"),L&64?R.type.remove(R,M,q,kt,J):v&&!v.hasOnce&&(W!==Ne||F>0&&F&64)?yt(v,M,q,!1,!0):(W===Ne&&F&384||!$&&L&16)&&yt(S,M,q),J&&Yt(R)}const st=ct!=null&&H==null;(at&&(Pt=ot&&ot.onVnodeUnmounted)||rt||st)&&Ve(()=>{Pt&&vn(Pt,M,R),rt&&gi(R,null,M,"unmounted"),st&&(R.el=null)},q)},Yt=R=>{const{type:M,el:q,anchor:J,transition:$}=R;if(M===Ne){nt(q,J);return}if(M===Fo){b(R);return}const W=()=>{s(q),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(R.shapeFlag&1&&$&&!$.persisted){const{leave:ot,delayLeave:et}=$,S=()=>ot(q,W);et?et(R.el,W,S):S()}else W()},nt=(R,M)=>{let q;for(;R!==M;)q=f(R),s(R),R=q;s(M)},lt=(R,M,q)=>{const{bum:J,scope:$,job:W,subTree:ot,um:et,m:S,a:v}=R;Ic(S),Ic(v),J&&Co(J),$.stop(),W&&(W.flags|=8,zt(ot,R,M,q)),et&&Ve(et,M),Ve(()=>{R.isUnmounted=!0},M)},yt=(R,M,q,J=!1,$=!1,W=0)=>{for(let ot=W;ot<R.length;ot++)zt(R[ot],M,q,J,$)},_t=R=>{if(R.shapeFlag&6)return _t(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const M=f(R.anchor||R.el),q=M&&M[lp];return q?f(q):M};let Ft=!1;const It=(R,M,q)=>{let J;R==null?M._vnode&&(zt(M._vnode,null,null,!0),J=M._vnode.component):_(M._vnode||null,R,M,null,null,null,q),M._vnode=R,Ft||(Ft=!0,Ec(J),Gh(),Ft=!1)},kt={p:_,um:zt,m:mt,r:Yt,mt:j,mc:C,pc:N,pbc:x,n:_t,o:n};return{render:It,hydrate:void 0,createApp:Cp(It)}}function No({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function _i({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Xp(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function hf(n,t,e=!1){const i=n.children,s=t.children;if(Bt(i)&&Bt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Hn(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&hf(o,a)),a.type===vo&&(a.patchFlag===-1&&(a=s[r]=Hn(a)),a.el=o.el),a.type===ui&&!a.el&&(a.el=o.el)}}function Yp(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function ff(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ff(t)}function Ic(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function df(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?df(t.subTree):null}const pf=n=>n.__isSuspense;function qp(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):np(n)}const Ne=Symbol.for("v-fgt"),vo=Symbol.for("v-txt"),ui=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),zs=[];let $e=null;function ue(n=!1){zs.push($e=n?null:[])}function jp(){zs.pop(),$e=zs[zs.length-1]||null}let Ys=1;function Uc(n,t=!1){Ys+=n,n<0&&$e&&t&&($e.hasOnce=!0)}function mf(n){return n.dynamicChildren=Ys>0?$e||ss:null,jp(),Ys>0&&$e&&$e.push(n),n}function ge(n,t,e,i,s,r){return mf(gt(n,t,e,i,s,r,!0))}function gf(n,t,e,i,s){return mf(Ge(n,t,e,i,s,!0))}function _f(n){return n?n.__v_isVNode===!0:!1}function ys(n,t){return n.type===t.type&&n.key===t.key}const vf=({key:n})=>n??null,Hr=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?fe(n)||Pe(n)||Ht(n)?{i:An,r:n,k:t,f:!!e}:n:null);function gt(n,t=null,e=null,i=0,s=null,r=n===Ne?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&vf(t),ref:t&&Hr(t),scopeId:Wh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:An};return a?(Xl(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=fe(e)?8:16),Ys>0&&!o&&$e&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&$e.push(l),l}const Ge=Kp;function Kp(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Sp)&&(n=ui),_f(n)){const a=ds(n,t,!0);return e&&Xl(a,e),Ys>0&&!r&&$e&&(a.shapeFlag&6?$e[$e.indexOf(n)]=a:$e.push(a)),a.patchFlag=-2,a}if(om(n)&&(n=n.__vccOpts),t){t=$p(t);let{class:a,style:l}=t;a&&!fe(a)&&(t.class=$s(a)),ie(l)&&(Ol(l)&&!Bt(l)&&(l=Ae({},l)),t.style=Cl(l))}const o=fe(n)?1:pf(n)?128:cp(n)?64:ie(n)?4:Ht(n)?2:0;return gt(n,t,e,i,s,o,r,!0)}function $p(n){return n?Ol(n)||rf(n)?Ae({},n):n:null}function ds(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Zp(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&vf(c),ref:t&&t.ref?e&&r?Bt(r)?r.concat(Hr(t)):[r,Hr(t)]:Hr(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ne?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ds(n.ssContent),ssFallback:n.ssFallback&&ds(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Hl(u,l.clone(u)),u}function Ee(n=" ",t=0){return Ge(vo,null,n,t)}function Hs(n="",t=!1){return t?(ue(),gf(ui,null,n)):Ge(ui,null,n)}function yn(n){return n==null||typeof n=="boolean"?Ge(ui):Bt(n)?Ge(Ne,null,n.slice()):_f(n)?Hn(n):Ge(vo,null,String(n))}function Hn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ds(n)}function Xl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Xl(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!rf(t)?t._ctx=An:s===3&&An&&(An.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ht(t)?(t={default:t,_ctx:An},e=32):(t=String(t),i&64?(e=16,t=[Ee(t)]):e=8);n.children=t,n.shapeFlag|=e}function Zp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=$s([t.class,i.class]));else if(s==="style")t.style=Cl([t.style,i.style]);else if(lo(s)){const r=t[s],o=i[s];o&&r!==o&&!(Bt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!co(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function vn(n,t,e,i=null){Pn(n,t,7,[e,i])}const Jp=Qh();let Qp=0;function tm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Jp,r={uid:Qp++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:af(i,s),emitsOptions:tf(i,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:i.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Lp.bind(null,r),n.ce&&n.ce(r),r}let Fe=null;const em=()=>Fe||An;let to,Ua;{const n=ho(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};to=t("__VUE_INSTANCE_SETTERS__",e=>Fe=e),Ua=t("__VUE_SSR_SETTERS__",e=>qs=e)}const Js=n=>{const t=Fe;return to(n),n.scope.on(),()=>{n.scope.off(),to(t)}},Nc=()=>{Fe&&Fe.scope.off(),to(null)};function xf(n){return n.vnode.shapeFlag&4}let qs=!1;function nm(n,t=!1,e=!1){t&&Ua(t);const{props:i,children:s}=n.vnode,r=xf(n);Op(n,i,r,t),Vp(n,s,e||t);const o=r?im(n,t):void 0;return t&&Ua(!1),o}function im(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,yp);const{setup:i}=e;if(i){Wn();const s=n.setupContext=i.length>1?rm(n):null,r=Js(n),o=Zs(i,n,0,[n.props,s]),a=gh(o);if(Xn(),r(),(a||n.sp)&&!Os(n)&&qh(n),a){if(o.then(Nc,Nc),t)return o.then(l=>{Fc(n,l)}).catch(l=>{mo(l,n,0)});n.asyncDep=o}else Fc(n,o)}else Mf(n)}function Fc(n,t,e){Ht(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ie(t)&&(n.setupState=zh(t)),Mf(n)}function Mf(n,t,e){const i=n.type;n.render||(n.render=i.render||wn);{const s=Js(n);Wn();try{Ep(n)}finally{Xn(),s()}}}const sm={get(n,t){return Ce(n,"get",""),n[t]}};function rm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,sm),slots:n.slots,emit:n.emit,expose:t}}function Yl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(zh(Yd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Bs)return Bs[e](n)},has(t,e){return e in t||e in Bs}})):n.proxy}function om(n){return Ht(n)&&"__vccOpts"in n}const oi=(n,t)=>$d(n,t,qs),am="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Na;const Oc=typeof window<"u"&&window.trustedTypes;if(Oc)try{Na=Oc.createPolicy("vue",{createHTML:n=>n})}catch{}const Sf=Na?n=>Na.createHTML(n):n=>n,lm="http://www.w3.org/2000/svg",cm="http://www.w3.org/1998/Math/MathML",zn=typeof document<"u"?document:null,Bc=zn&&zn.createElement("template"),um={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?zn.createElementNS(lm,n):t==="mathml"?zn.createElementNS(cm,n):e?zn.createElement(n,{is:e}):zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>zn.createTextNode(n),createComment:n=>zn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Bc.innerHTML=Sf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Bc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},hm=Symbol("_vtc");function fm(n,t,e){const i=n[hm];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const zc=Symbol("_vod"),dm=Symbol("_vsh"),pm=Symbol(""),mm=/(?:^|;)\s*display\s*:/;function gm(n,t,e){const i=n.style,s=fe(e);let r=!1;if(e&&!s){if(t)if(fe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Ls(i,a,"")}else for(const o in t)e[o]==null&&Ls(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?vm(n,o,!fe(t)&&t?t[o]:void 0,a)||Ls(i,o,a):Ls(i,o,"")}}else if(s){if(t!==e){const o=i[pm];o&&(e+=";"+o),i.cssText=e,r=mm.test(e)}}else t&&n.removeAttribute("style");zc in n&&(n[zc]=r?i.display:"",n[dm]&&(i.display="none"))}const Hc=/\s*!important$/;function Ls(n,t,e){if(Bt(e))e.forEach(i=>Ls(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=_m(n,t);Hc.test(e)?n.setProperty(Ni(i),e.replace(Hc,""),"important"):n[i]=e}}const Vc=["Webkit","Moz","ms"],Oo={};function _m(n,t){const e=Oo[t];if(e)return e;let i=pn(t);if(i!=="filter"&&i in n)return Oo[t]=i;i=xh(i);for(let s=0;s<Vc.length;s++){const r=Vc[s]+i;if(r in n)return Oo[t]=r}return t}function vm(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&fe(i)&&e===i}const Gc="http://www.w3.org/1999/xlink";function kc(n,t,e,i,s,r=Ed(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Gc,t.slice(6,t.length)):n.setAttributeNS(Gc,t,e):e==null||r&&!Sh(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Cn(e)?String(e):e)}function Wc(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Sf(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Sh(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function xm(n,t,e,i){n.addEventListener(t,e,i)}function Mm(n,t,e,i){n.removeEventListener(t,e,i)}const Xc=Symbol("_vei");function Sm(n,t,e,i,s=null){const r=n[Xc]||(n[Xc]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=ym(t);if(i){const c=r[t]=bm(i,s);xm(n,a,c,l)}else o&&(Mm(n,a,o,l),r[t]=void 0)}}const Yc=/(?:Once|Passive|Capture)$/;function ym(n){let t;if(Yc.test(n)){t={};let i;for(;i=n.match(Yc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ni(n.slice(2)),t]}let Bo=0;const Em=Promise.resolve(),Tm=()=>Bo||(Em.then(()=>Bo=0),Bo=Date.now());function bm(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Pn(Am(i,e.value),t,5,[i])};return e.value=n,e.attached=Tm(),e}function Am(n,t){if(Bt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const qc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,wm=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?fm(n,i,o):t==="style"?gm(n,e,i):lo(t)?co(t)||Sm(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rm(n,t,i,o))?(Wc(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&kc(n,t,i,o,r,t!=="value")):n._isVueCE&&(Cm(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!fe(i)))?Wc(n,pn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),kc(n,t,i,o))};function Rm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&qc(t)&&Ht(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qc(t)&&fe(e)?!1:t in n}function Cm(n,t){const e=n._def.props;if(!e)return!1;const i=pn(t);return Array.isArray(e)?e.some(s=>pn(s)===i):Object.keys(e).some(s=>pn(s)===i)}const Pm=Ae({patchProp:wm},um);let jc;function Lm(){return jc||(jc=kp(Pm))}const Dm=(...n)=>{const t=Lm().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Um(i);if(!s)return;const r=t._component;!Ht(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Im(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Im(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Um(n){return fe(n)?document.querySelector(n):n}const yf=[{family:"Arial, sans-serif",label:"Arial",google:null},{family:"Helvetica, Arial, sans-serif",label:"Helvetica",google:null},{family:'"Inter", sans-serif',label:"Inter (Google)",google:"Inter:wght@400"},{family:"Arial, sans-serif",label:"Arial Bold",google:null,weight:700},{family:"Helvetica, Arial, sans-serif",label:"Helvetica Bold",google:null,weight:700},{family:'"Inter", sans-serif',label:"Inter Bold (Google)",google:"Inter:wght@700",weight:700},{family:"Georgia, serif",label:"Georgia",google:null},{family:'"Times New Roman", serif',label:"Times New Roman",google:null},{family:'"Merriweather", serif',label:"Merriweather (Google)",google:"Merriweather:wght@400"},{family:"Georgia, serif",label:"Georgia Bold",google:null,weight:700},{family:'"Times New Roman", serif',label:"Times New Roman Bold",google:null,weight:700},{family:'"Merriweather", serif',label:"Merriweather Bold (Google)",google:"Merriweather:wght@700",weight:700}],Nm={class:"controls"},Fm=["value","disabled"],Om=["value","disabled"],Bm=["value"],zm=["value"],Hm={class:"shape-row"},Vm=["value","checked","onChange"],Gm=["value"],km={key:0},Wm=["value"],Xm=["value"],Ym=["value"],qm={key:0,class:"tile-grid"},jm=["title","onClick"],Km=["src","alt"],$m={key:1,class:"hint"},Zm={class:"info"},Jm=["value"],Qm=["value"],tg=["value"],eg=["value"],ng={class:"file"},ig={class:"checkbox"},sg=["checked"],rg={class:"checkbox"},og=["checked"],ag=Fi({__name:"ControlsPanel",props:{modelValue:{},tiles:{},framePlan:{}},emits:["update:modelValue","clearImage"],setup(n,{emit:t}){const e=n,i=t;function s(d,g){i("update:modelValue",{...e.modelValue,[d]:g})}function r(d,g){i("update:modelValue",{...e.modelValue,frame:{...e.modelValue.frame,[d]:g}})}function o(d){const _=d.target.files?.[0];if(!_)return;const m=new Image;m.onload=()=>s("customImage",m),m.src=URL.createObjectURL(_)}const a=oi(()=>!!e.modelValue.customImage),l=oi(()=>e.modelValue.frame),c=oi(()=>l.value.shape!=="none"),u=oi(()=>`${e.modelValue.widthMm.toFixed(1)} × ${e.modelValue.heightMm.toFixed(1)} mm`),h=oi(()=>{const d=[{k:"Plate",v:u.value}],g=e.framePlan;return g&&(d.push({k:"Ring thickness",v:`${g.ringThicknessMm.toFixed(2)} mm`}),d.push({k:"Tile scale",v:`${g.tileScaleMm.toFixed(2)} mm`}),d.push({k:"Perimeter",v:`${g.perimeterMm.toFixed(2)} mm (${g.tileRepetitions}×)`}),g.shape==="ring"&&g.ringOuterDiameterMm!=null&&d.push({k:"Ring outer Ø",v:`${g.ringOuterDiameterMm.toFixed(2)} mm`}),g.shape==="roundedRect"&&g.rectCornerRadiusMm!=null&&d.push({k:"Corner radius",v:`${g.rectCornerRadiusMm.toFixed(2)} mm`})),d}),f=[{value:"none",label:"None"},{value:"ring",label:"Ring"},{value:"roundedRect",label:"Rounded rectangle"}];return(d,g)=>(ue(),ge("aside",Nm,[gt("section",null,[g[16]||(g[16]=gt("h3",null,"Text",-1)),gt("label",null,[g[14]||(g[14]=Ee(" Text ",-1)),gt("textarea",{rows:"2",value:n.modelValue.text,onInput:g[0]||(g[0]=_=>s("text",_.target.value)),disabled:a.value},null,40,Fm)]),gt("label",null,[g[15]||(g[15]=Ee(" Font family ",-1)),gt("select",{value:n.modelValue.fontFamily,onChange:g[1]||(g[1]=_=>s("fontFamily",_.target.value)),disabled:a.value},[(ue(!0),ge(Ne,null,cr(Bl(yf),_=>(ue(),ge("option",{key:_.family,value:_.family},Ie(_.label),9,Bm))),128))],40,Om)]),gt("label",null,[Ee(" Text size (mm): "+Ie(n.modelValue.fontSizeMm)+" ",1),gt("input",{type:"range",min:"1",max:"100",step:"0.5",value:n.modelValue.fontSizeMm,onInput:g[2]||(g[2]=_=>s("fontSizeMm",Number(_.target.value)))},null,40,zm)])]),gt("section",null,[g[18]||(g[18]=gt("h3",null,"Frame",-1)),gt("div",Hm,[(ue(),ge(Ne,null,cr(f,_=>gt("label",{key:_.value,class:"radio"},[gt("input",{type:"radio",name:"frame-shape",value:_.value,checked:l.value.shape===_.value,onChange:m=>r("shape",_.value)},null,40,Vm),Ee(" "+Ie(_.label),1)])),64))]),gt("label",null,[Ee(" Text padding (mm): "+Ie(n.modelValue.textPaddingMm.toFixed(1))+" ",1),gt("input",{type:"range",min:"-10",max:"15",step:"0.1",value:n.modelValue.textPaddingMm,onInput:g[3]||(g[3]=_=>s("textPaddingMm",Number(_.target.value)))},null,40,Gm)]),c.value?(ue(),ge("label",km,[Ee(" Outer padding (mm): "+Ie(n.modelValue.outerPaddingMm.toFixed(1))+" ",1),gt("input",{type:"range",min:"0",max:"15",step:"0.1",value:n.modelValue.outerPaddingMm,onInput:g[4]||(g[4]=_=>s("outerPaddingMm",Number(_.target.value)))},null,40,Wm)])):Hs("",!0),c.value?(ue(),ge(Ne,{key:1},[gt("label",null,[Ee(" Decoration size: "+Ie(l.value.decorationSizeFactor.toFixed(2))+"× ",1),gt("input",{type:"range",min:"0.3",max:"3",step:"0.05",value:l.value.decorationSizeFactor,onInput:g[5]||(g[5]=_=>r("decorationSizeFactor",Number(_.target.value)))},null,40,Xm)]),gt("label",null,[Ee(" Tile width: "+Ie(l.value.tileScaleFactor.toFixed(2))+"× ",1),gt("input",{type:"range",min:"0.3",max:"3",step:"0.05",value:l.value.tileScaleFactor,onInput:g[6]||(g[6]=_=>r("tileScaleFactor",Number(_.target.value)))},null,40,Ym)]),n.tiles.length>0?(ue(),ge("div",qm,[(ue(!0),ge(Ne,null,cr(n.tiles,_=>(ue(),ge("button",{key:_.id,type:"button",class:$s(["tile",{selected:_.id===l.value.tileId}]),title:_.id,onClick:m=>r("tileId",_.id)},[gt("img",{src:`/tiles/${_.thumb}`,alt:_.id,loading:"lazy"},null,8,Km)],10,jm))),128))])):(ue(),ge("div",$m,[...g[17]||(g[17]=[Ee("No tiles found — run ",-1),gt("code",null,"deno task build-tiles",-1)])]))],64)):Hs("",!0)]),gt("section",null,[g[19]||(g[19]=gt("h3",null,"Layout (auto)",-1)),gt("dl",Zm,[(ue(!0),ge(Ne,null,cr(h.value,_=>(ue(),ge(Ne,{key:_.k},[gt("dt",null,Ie(_.k),1),gt("dd",null,Ie(_.v),1)],64))),128))])]),gt("section",null,[g[22]||(g[22]=gt("h3",null,"Print",-1)),gt("label",null,[g[20]||(g[20]=Ee(" Base thickness (mm) ",-1)),gt("input",{type:"number",min:"0.4",step:"0.1",value:n.modelValue.baseThicknessMm,onInput:g[7]||(g[7]=_=>s("baseThicknessMm",Number(_.target.value)))},null,40,Jm)]),gt("label",null,[g[21]||(g[21]=Ee(" Emboss height (mm) ",-1)),gt("input",{type:"number",min:"0",step:"0.1",value:n.modelValue.embossHeightMm,onInput:g[8]||(g[8]=_=>s("embossHeightMm",Number(_.target.value)))},null,40,Qm)]),gt("label",null,[Ee(" Corner radius (mm): "+Ie(n.modelValue.cornerRadiusMm.toFixed(1))+" ",1),gt("input",{type:"range",min:"0",max:"20",step:"0.5",value:n.modelValue.cornerRadiusMm,onInput:g[9]||(g[9]=_=>s("cornerRadiusMm",Number(_.target.value)))},null,40,tg)])]),gt("section",null,[g[24]||(g[24]=gt("h3",null,"Mesh",-1)),gt("label",null,[Ee(" Vertex density (verts/mm): "+Ie(n.modelValue.vertexDensity)+" ",1),gt("input",{type:"range",min:"1",max:"20",step:"1",value:n.modelValue.vertexDensity,onInput:g[10]||(g[10]=_=>s("vertexDensity",Number(_.target.value)))},null,40,eg)]),gt("label",ng,[g[23]||(g[23]=Ee(" Custom depth map (PNG/JPG) ",-1)),gt("input",{type:"file",accept:"image/png,image/jpeg",onChange:o},null,32)]),a.value?(ue(),ge("button",{key:0,type:"button",class:"ghost",onClick:g[11]||(g[11]=_=>i("clearImage"))}," Remove uploaded image ")):Hs("",!0)]),gt("section",null,[g[27]||(g[27]=gt("h3",null,"Debug",-1)),gt("label",ig,[gt("input",{type:"checkbox",checked:n.modelValue.showVertices,onChange:g[12]||(g[12]=_=>s("showVertices",_.target.checked))},null,40,sg),g[25]||(g[25]=Ee(" Show mesh vertices ",-1))]),gt("label",rg,[gt("input",{type:"checkbox",checked:n.modelValue.showReferenceObject,onChange:g[13]||(g[13]=_=>s("showReferenceObject",_.target.checked))},null,40,og),g[26]||(g[26]=Ee(" Show reference object (180 mm banana) ",-1))])])]))}}),Oi=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},lg=Oi(ag,[["__scopeId","data-v-f4061b95"]]),cg={class:"depth-canvas"},ug=Fi({__name:"DepthCanvas",props:{source:{}},setup(n){const t=n,e=Rn(null);return fn(()=>t.source,i=>{const s=e.value;s&&(s.replaceChildren(),i&&(i.style.width="100%",i.style.height="100%",i.style.objectFit="contain",i.style.imageRendering="pixelated",i.style.display="block",i.style.background="#000",s.appendChild(i)))},{immediate:!0}),(i,s)=>(ue(),ge("div",cg,[s[0]||(s[0]=gt("div",{class:"label"},"Depth Map (white = raised)",-1)),gt("div",{ref_key:"container",ref:e,class:"surface"},null,512)]))}}),hg=Oi(ug,[["__scopeId","data-v-3b966b17"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ql="169",ls={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fg=0,Kc=1,dg=2,Ef=1,pg=2,Bn=3,hi=0,ke=1,bn=2,li=0,cs=1,$c=2,Zc=3,Jc=4,mg=5,Ai=100,gg=101,_g=102,vg=103,xg=104,Mg=200,Sg=201,yg=202,Eg=203,Fa=204,Oa=205,Tg=206,bg=207,Ag=208,wg=209,Rg=210,Cg=211,Pg=212,Lg=213,Dg=214,Ba=0,za=1,Ha=2,ps=3,Va=4,Ga=5,ka=6,Wa=7,jl=0,Ig=1,Ug=2,ci=0,Ng=1,Fg=2,Og=3,Bg=4,zg=5,Hg=6,Vg=7,Tf=300,ms=301,gs=302,Xa=303,Ya=304,xo=306,qa=1e3,Ri=1001,ja=1002,tn=1003,Gg=1004,ur=1005,un=1006,zo=1007,Ci=1008,qn=1009,bf=1010,Af=1011,js=1012,Kl=1013,Di=1014,Gn=1015,Qs=1016,$l=1017,Zl=1018,_s=1020,wf=35902,Rf=1021,Cf=1022,dn=1023,Pf=1024,Lf=1025,us=1026,vs=1027,Df=1028,Jl=1029,If=1030,Ql=1031,tc=1033,Vr=33776,Gr=33777,kr=33778,Wr=33779,Ka=35840,$a=35841,Za=35842,Ja=35843,Qa=36196,tl=37492,el=37496,nl=37808,il=37809,sl=37810,rl=37811,ol=37812,al=37813,ll=37814,cl=37815,ul=37816,hl=37817,fl=37818,dl=37819,pl=37820,ml=37821,Xr=36492,gl=36494,_l=36495,Uf=36283,vl=36284,xl=36285,Ml=36286,kg=3200,Wg=3201,ec=0,Xg=1,ai="",Mn="srgb",di="srgb-linear",nc="display-p3",Mo="display-p3-linear",eo="linear",ae="srgb",no="rec709",io="p3",Vi=7680,Qc=519,Yg=512,qg=513,jg=514,Nf=515,Kg=516,$g=517,Zg=518,Jg=519,tu=35044,eu="300 es",kn=2e3,so=2001;class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yr=Math.PI/180,Sl=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]).toLowerCase()}function be(n,t,e){return Math.max(t,Math.min(e,n))}function Qg(n,t){return(n%t+t)%t}function Ho(n,t,e){return(1-e)*n+e*t}function Es(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const t_={DEG2RAD:Yr};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,i,s,r,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],A=s[1],y=s[4],b=s[7],U=s[2],P=s[5],w=s[8];return r[0]=o*_+a*A+l*U,r[3]=o*m+a*y+l*P,r[6]=o*p+a*b+l*w,r[1]=c*_+u*A+h*U,r[4]=c*m+u*y+h*P,r[7]=c*p+u*b+h*w,r[2]=f*_+d*A+g*U,r[5]=f*m+d*y+g*P,r[8]=f*p+d*b+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new Gt;function Ff(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function e_(){const n=ro("canvas");return n.style.display="block",n}const nu={};function qr(n){n in nu||(nu[n]=!0,console.warn(n))}function n_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function i_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function s_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const iu=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),su=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[di]:{transfer:eo,primaries:no,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Mn]:{transfer:ae,primaries:no,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Mo]:{transfer:eo,primaries:io,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(su),fromReference:n=>n.applyMatrix3(iu)},[nc]:{transfer:ae,primaries:io,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(su),fromReference:n=>n.applyMatrix3(iu).convertLinearToSRGB()}},r_=new Set([di,Mo]),Jt={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!r_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Ts[t].toReference,s=Ts[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Ts[n].primaries},getTransfer:function(n){return n===ai?eo:Ts[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Ts[t].luminanceCoefficients)}};function hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gi;class o_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=ro("canvas")),Gi.width=t.width,Gi.height=t.height;const i=Gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ro("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hs(e[i]/255)*255):e[i]=hs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let a_=0;class Of{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ko(s[o].image)):r.push(ko(s[o]))}else r=ko(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ko(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?o_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let l_=0;class We extends Bi{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=Ri,s=Ri,r=un,o=Ci,a=dn,l=qn,c=We.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=tr(),this.name="",this.source=new Of(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qa:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qa:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Tf;We.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(d+1)/2,U=(p+1)/2,P=(u+f)/4,w=(h+_)/4,C=(g+m)/4;return y>b&&y>U?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=P/i,r=w/i):b>U?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=P/s,r=C/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=w/r,s=C/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-_)/A,this.z=(f-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c_ extends Bi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new We(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Of(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends c_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bf extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class u_ extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,A=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const U=Math.sqrt(y),P=Math.atan2(U,p*A);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}const b=a*A;if(l=l*m+f*b,c=c*m+d*b,u=u*m+g*b,h=h*m+_*b,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ru.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new D,ru=new Ui;class er{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hr.copy(i.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),fr.subVectors(this.max,bs),ki.subVectors(t.a,bs),Wi.subVectors(t.b,bs),Xi.subVectors(t.c,bs),Zn.subVectors(Wi,ki),Jn.subVectors(Xi,Wi),vi.subVectors(ki,Xi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-vi.z,vi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,vi.z,0,-vi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-vi.y,vi.x,0];return!Xo(e,ki,Wi,Xi,fr)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,ki,Wi,Xi,fr))?!1:(dr.crossVectors(Zn,Jn),e=[dr.x,dr.y,dr.z],Xo(e,ki,Wi,Xi,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new D,new D,new D,new D,new D,new D,new D,new D],an=new D,hr=new er,ki=new D,Wi=new D,Xi=new D,Zn=new D,Jn=new D,vi=new D,bs=new D,fr=new D,dr=new D,xi=new D;function Xo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xi.fromArray(n,r);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const h_=new er,As=new D,Yo=new D;class nr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):h_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Yo)),this.expandByPoint(As.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new D,qo=new D,pr=new D,Qn=new D,jo=new D,mr=new D,Ko=new D;class So{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){qo.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(qo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=Qn.dot(this.direction),l=-Qn.dot(pr),c=Qn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qo).addScaledVector(pr,f),d}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const i=Un.dot(this.direction),s=Un.dot(Un)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,i,s,r){jo.subVectors(e,t),mr.subVectors(i,t),Ko.crossVectors(jo,mr);let o=this.direction.dot(Ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);const l=a*this.direction.dot(mr.crossVectors(Qn,mr));if(l<0)return null;const c=a*this.direction.dot(jo.cross(Qn));if(c<0||l+c>o)return null;const u=-a*Qn.dot(Ko);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(f_,t,d_)}lookAt(t,e,i){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ti.crossVectors(i,je),ti.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ti.crossVectors(i,je)),ti.normalize(),gr.crossVectors(je,ti),s[0]=ti.x,s[4]=gr.x,s[8]=je.x,s[1]=ti.y,s[5]=gr.y,s[9]=je.y,s[2]=ti.z,s[6]=gr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],A=i[3],y=i[7],b=i[11],U=i[15],P=s[0],w=s[4],C=s[8],X=s[12],x=s[1],T=s[5],Z=s[9],O=s[13],j=s[2],Q=s[6],V=s[10],K=s[14],N=s[3],ht=s[7],dt=s[11],mt=s[15];return r[0]=o*P+a*x+l*j+c*N,r[4]=o*w+a*T+l*Q+c*ht,r[8]=o*C+a*Z+l*V+c*dt,r[12]=o*X+a*O+l*K+c*mt,r[1]=u*P+h*x+f*j+d*N,r[5]=u*w+h*T+f*Q+d*ht,r[9]=u*C+h*Z+f*V+d*dt,r[13]=u*X+h*O+f*K+d*mt,r[2]=g*P+_*x+m*j+p*N,r[6]=g*w+_*T+m*Q+p*ht,r[10]=g*C+_*Z+m*V+p*dt,r[14]=g*X+_*O+m*K+p*mt,r[3]=A*P+y*x+b*j+U*N,r[7]=A*w+y*T+b*Q+U*ht,r[11]=A*C+y*Z+b*V+U*dt,r[15]=A*X+y*O+b*K+U*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],A=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,y=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,b=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,U=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,P=e*A+i*y+s*b+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return t[0]=A*w,t[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*w,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*w,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*w,t[4]=y*w,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*w,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*w,t[8]=b*w,t[9]=(g*h*r-u*_*r-g*i*d+e*_*d+u*i*p-e*h*p)*w,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*w,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*w,t[12]=U*w,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*w,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*w,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,A=l*c,y=l*u,b=l*h,U=i.x,P=i.y,w=i.z;return s[0]=(1-(_+p))*U,s[1]=(d+b)*U,s[2]=(g-y)*U,s[3]=0,s[4]=(d-b)*P,s[5]=(1-(f+p))*P,s[6]=(m+A)*P,s[7]=0,s[8]=(g+y)*w,s[9]=(m-A)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Yi.set(s[0],s[1],s[2]).length();const o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const c=1/r,u=1/o,h=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,e.setFromRotationMatrix(ln),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=kn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===kn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===so)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=kn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let g,_;if(a===kn)g=(o+r)*h,_=-2*h;else if(a===so)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Yi=new D,ln=new le,f_=new D(0,0,0),d_=new D(1,1,1),ti=new D,gr=new D,je=new D,ou=new le,au=new Ui;class _n{constructor(t=0,e=0,i=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ou,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class zf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let p_=0;const lu=new D,qi=new Ui,Nn=new le,_r=new D,ws=new D,m_=new D,g_=new Ui,cu=new D(1,0,0),uu=new D(0,1,0),hu=new D(0,0,1),fu={type:"added"},__={type:"removed"},ji={type:"childadded",child:null},$o={type:"childremoved",child:null};class Se extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new D,e=new _n,i=new Ui,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Gt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_r.copy(t):_r.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ws,_r,this.up):Nn.lookAt(_r,ws,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Nn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fu),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(__),$o.child=t,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fu),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,m_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,g_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Se.DEFAULT_UP=new D(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new D,Fn=new D,Zo=new D,On=new D,Ki=new D,$i=new D,du=new D,Jo=new D,Qo=new D,ta=new D,ea=new he,na=new he,ia=new he;class hn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){cn.subVectors(s,e),Fn.subVectors(i,e),Zo.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(Fn),l=cn.dot(Zo),c=Fn.dot(Fn),u=Fn.dot(Zo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,i),ia.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ea,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(t,e,i,s){return cn.subVectors(i,e),Fn.subVectors(t,e),cn.cross(Fn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),cn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ki.subVectors(s,i),$i.subVectors(r,i),Jo.subVectors(t,i);const l=Ki.dot(Jo),c=$i.dot(Jo);if(l<=0&&c<=0)return e.copy(i);Qo.subVectors(t,s);const u=Ki.dot(Qo),h=$i.dot(Qo);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ki,o);ta.subVectors(t,r);const d=Ki.dot(ta),g=$i.dot(ta);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector($i,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return du.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(du,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(Ki,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},vr={h:0,s:0,l:0};function sa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=Qg(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=sa(o,r,t+1/3),this.g=sa(o,r,t),this.b=sa(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const i=Hf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return Jt.fromWorkingColorSpace(Re.copy(this),t),Math.round(be(Re.r*255,0,255))*65536+Math.round(be(Re.g*255,0,255))*256+Math.round(be(Re.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,s=Re.g,r=Re.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Mn){Jt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,s=Re.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(vr);const i=Ho(ei.h,vr.h,e),s=Ho(ei.s,vr.s,e),r=Ho(ei.l,vr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Wt;Wt.NAMES=Hf;let v_=0;class pi extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=cs,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fa&&(i.blendSrc=this.blendSrc),this.blendDst!==Oa&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vf extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new D,xr=new bt;class sn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tu,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Es(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tu&&(t.usage=this.usage),t}}class Gf extends sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class kf extends sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Xe extends sn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let x_=0;const Je=new le,ra=new Se,Zi=new D,Ke=new er,Rs=new er,Me=new D;class rn extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ff(t)?kf:Gf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ke.min,Rs.min),Ke.expandByPoint(Me),Me.addVectors(Ke.max,Rs.max),Ke.expandByPoint(Me)):(Ke.expandByPoint(Rs.min),Ke.expandByPoint(Rs.max))}Ke.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Me.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(t,c),Me.add(Zi)),s=Math.max(s,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new D,l[C]=new D;const c=new D,u=new D,h=new D,f=new bt,d=new bt,g=new bt,_=new D,m=new D;function p(C,X,x){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,X),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,X),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(T),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[C].add(_),a[X].add(_),a[x].add(_),l[C].add(m),l[X].add(m),l[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let C=0,X=A.length;C<X;++C){const x=A[C],T=x.start,Z=x.count;for(let O=T,j=T+Z;O<j;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new D,b=new D,U=new D,P=new D;function w(C){U.fromBufferAttribute(s,C),P.copy(U);const X=a[C];y.copy(X),y.sub(U.multiplyScalar(U.dot(X))).normalize(),b.crossVectors(P,X);const T=b.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,T)}for(let C=0,X=A.length;C<X;++C){const x=A[C],T=x.start,Z=x.count;for(let O=T,j=T+Z;O<j;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new sn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pu=new le,Mi=new So,Mr=new nr,mu=new D,Sr=new D,yr=new D,Er=new D,oa=new D,Tr=new D,gu=new D,br=new D;class en extends Se{constructor(t=new rn,e=new Vf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(oa.fromBufferAttribute(h,t),o?Tr.addScaledVector(oa,u):Tr.addScaledVector(oa.sub(e),u))}e.add(Tr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Mr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Mr,mu)===null||Mi.origin.distanceToSquared(mu)>(t.far-t.near)**2))&&(pu.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(pu),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=A,U=y;b<U;b+=3){const P=a.getX(b),w=a.getX(b+1),C=a.getX(b+2);s=Ar(this,p,t,i,c,u,h,P,w,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);s=Ar(this,o,t,i,c,u,h,A,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=A,U=y;b<U;b+=3){const P=b,w=b+1,C=b+2;s=Ar(this,p,t,i,c,u,h,P,w,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=m,y=m+1,b=m+2;s=Ar(this,o,t,i,c,u,h,A,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function M_(n,t,e,i,s,r,o,a){let l;if(t.side===ke?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===hi,a),l===null)return null;br.copy(a),br.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:n}}function Ar(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Sr),n.getVertexPosition(l,yr),n.getVertexPosition(c,Er);const u=M_(n,t,e,i,Sr,yr,Er,gu);if(u){const h=new D;hn.getBarycoord(gu,Sr,yr,Er,h),s&&(u.uv=hn.getInterpolatedAttribute(s,a,l,c,h,new bt)),r&&(u.uv1=hn.getInterpolatedAttribute(r,a,l,c,h,new bt)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};hn.getNormal(Sr,yr,Er,f.normal),u.face=f,u.barycoord=h}return u}class ir extends rn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(h,2));function g(_,m,p,A,y,b,U,P,w,C,X){const x=b/w,T=U/C,Z=b/2,O=U/2,j=P/2,Q=w+1,V=C+1;let K=0,N=0;const ht=new D;for(let dt=0;dt<V;dt++){const mt=dt*T-O;for(let zt=0;zt<Q;zt++){const Yt=zt*x-Z;ht[_]=Yt*A,ht[m]=mt*y,ht[p]=j,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=P>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(zt/w),h.push(1-dt/C),K+=1}}for(let dt=0;dt<C;dt++)for(let mt=0;mt<w;mt++){const zt=f+mt+Q*dt,Yt=f+mt+Q*(dt+1),nt=f+(mt+1)+Q*(dt+1),lt=f+(mt+1)+Q*dt;l.push(zt,Yt,lt),l.push(Yt,nt,lt),N+=6}a.addGroup(d,N,X),d+=N,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=xs(n[e]);for(const s in i)t[s]=i[s]}return t}function S_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Wf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const y_={clone:xs,merge:De};var E_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=S_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Xf extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new D,_u=new bt,vu=new bt;class Qe extends Xf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sl*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,_u,vu),e.subVectors(vu,_u)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class b_ extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const o=new Qe(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Yf extends We{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class A_ extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Yf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ir(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:li});r.uniforms.tEquirect.value=e;const o=new en(s,r),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=un),new b_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const aa=new D,w_=new D,R_=new Gt;class si{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=aa.subVectors(i,e).cross(w_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(aa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||R_.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new nr,wr=new D;class ic{constructor(t=new si,e=new si,i=new si,s=new si,r=new si,o=new si){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=kn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],A=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,m-d,b-p).normalize(),i[1].setComponents(l+r,f+c,m+d,b+p).normalize(),i[2].setComponents(l+o,f+u,m+g,b+A).normalize(),i[3].setComponents(l-o,f-u,m-g,b-A).normalize(),i[4].setComponents(l-a,f-h,m-_,b-y).normalize(),e===kn)i[5].setComponents(l+a,f+h,m+_,b+y).normalize();else if(e===so)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function C_(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class yo extends rn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let y=0;y<c;y++){const b=y*h-r;g.push(b,-A,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const y=A+c*p,b=A+c*(p+1),U=A+1+c*(p+1),P=A+1+c*p;d.push(y,b,P),d.push(b,U,P)}this.setIndex(d),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.width,t.height,t.widthSegments,t.heightSegments)}}var P_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Q_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ev=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",av=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_v=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,E0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ax=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:P_,alphahash_pars_fragment:L_,alphamap_fragment:D_,alphamap_pars_fragment:I_,alphatest_fragment:U_,alphatest_pars_fragment:N_,aomap_fragment:F_,aomap_pars_fragment:O_,batching_pars_vertex:B_,batching_vertex:z_,begin_vertex:H_,beginnormal_vertex:V_,bsdfs:G_,iridescence_fragment:k_,bumpmap_pars_fragment:W_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:Y_,clipping_planes_pars_vertex:q_,clipping_planes_vertex:j_,color_fragment:K_,color_pars_fragment:$_,color_pars_vertex:Z_,color_vertex:J_,common:Q_,cube_uv_reflection_fragment:tv,defaultnormal_vertex:ev,displacementmap_pars_vertex:nv,displacementmap_vertex:iv,emissivemap_fragment:sv,emissivemap_pars_fragment:rv,colorspace_fragment:ov,colorspace_pars_fragment:av,envmap_fragment:lv,envmap_common_pars_fragment:cv,envmap_pars_fragment:uv,envmap_pars_vertex:hv,envmap_physical_pars_fragment:yv,envmap_vertex:fv,fog_vertex:dv,fog_pars_vertex:pv,fog_fragment:mv,fog_pars_fragment:gv,gradientmap_pars_fragment:_v,lightmap_pars_fragment:vv,lights_lambert_fragment:xv,lights_lambert_pars_fragment:Mv,lights_pars_begin:Sv,lights_toon_fragment:Ev,lights_toon_pars_fragment:Tv,lights_phong_fragment:bv,lights_phong_pars_fragment:Av,lights_physical_fragment:wv,lights_physical_pars_fragment:Rv,lights_fragment_begin:Cv,lights_fragment_maps:Pv,lights_fragment_end:Lv,logdepthbuf_fragment:Dv,logdepthbuf_pars_fragment:Iv,logdepthbuf_pars_vertex:Uv,logdepthbuf_vertex:Nv,map_fragment:Fv,map_pars_fragment:Ov,map_particle_fragment:Bv,map_particle_pars_fragment:zv,metalnessmap_fragment:Hv,metalnessmap_pars_fragment:Vv,morphinstance_vertex:Gv,morphcolor_vertex:kv,morphnormal_vertex:Wv,morphtarget_pars_vertex:Xv,morphtarget_vertex:Yv,normal_fragment_begin:qv,normal_fragment_maps:jv,normal_pars_fragment:Kv,normal_pars_vertex:$v,normal_vertex:Zv,normalmap_pars_fragment:Jv,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:e0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:s0,premultiplied_alpha_fragment:r0,project_vertex:o0,dithering_fragment:a0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:f0,shadowmap_vertex:d0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:_0,skinnormal_vertex:v0,specularmap_fragment:x0,specularmap_pars_fragment:M0,tonemapping_fragment:S0,tonemapping_pars_fragment:y0,transmission_fragment:E0,transmission_pars_fragment:T0,uv_pars_fragment:b0,uv_pars_vertex:A0,uv_vertex:w0,worldpos_vertex:R0,background_vert:C0,background_frag:P0,backgroundCube_vert:L0,backgroundCube_frag:D0,cube_vert:I0,cube_frag:U0,depth_vert:N0,depth_frag:F0,distanceRGBA_vert:O0,distanceRGBA_frag:B0,equirect_vert:z0,equirect_frag:H0,linedashed_vert:V0,linedashed_frag:G0,meshbasic_vert:k0,meshbasic_frag:W0,meshlambert_vert:X0,meshlambert_frag:Y0,meshmatcap_vert:q0,meshmatcap_frag:j0,meshnormal_vert:K0,meshnormal_frag:$0,meshphong_vert:Z0,meshphong_frag:J0,meshphysical_vert:Q0,meshphysical_frag:tx,meshtoon_vert:ex,meshtoon_frag:nx,points_vert:ix,points_frag:sx,shadow_vert:rx,shadow_frag:ox,sprite_vert:ax,sprite_frag:lx},ft={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},En={basic:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:De([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:De([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:De([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:De([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:De([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:De([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:De([ft.common,ft.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:De([ft.lights,ft.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};En.physical={uniforms:De([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Rr={r:0,b:0,g:0},yi=new _n,cx=new le;function ux(n,t,e,i,s,r,o){const a=new Wt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?e:t).get(y)),y}function _(A){let y=!1;const b=g(A);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===xo)?(u===void 0&&(u=new en(new ir(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:xs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),yi.copy(y.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(yi)),u.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ae,(h!==b||f!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new en(new yo(2,2),new fi({name:"BackgroundMaterial",uniforms:xs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ae,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,y){A.getRGB(Rr,Wf(n)),i.buffers.color.setClear(Rr.r,Rr.g,Rr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(A,y=1){a.set(A),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:_,addToRenderList:m}}function hx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,T,Z,O,j){let Q=!1;const V=h(O,Z,T);r!==V&&(r=V,c(r.object)),Q=d(x,O,Z,j),Q&&g(x,O,Z,j),j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,b(x,T,Z,O),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,T,Z){const O=Z.wireframe===!0;let j=i[x.id];j===void 0&&(j={},i[x.id]=j);let Q=j[T.id];Q===void 0&&(Q={},j[T.id]=Q);let V=Q[O];return V===void 0&&(V=f(l()),Q[O]=V),V}function f(x){const T=[],Z=[],O=[];for(let j=0;j<e;j++)T[j]=0,Z[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:Z,attributeDivisors:O,object:x,attributes:{},index:null}}function d(x,T,Z,O){const j=r.attributes,Q=T.attributes;let V=0;const K=Z.getAttributes();for(const N in K)if(K[N].location>=0){const dt=j[N];let mt=Q[N];if(mt===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor)),dt===void 0||dt.attribute!==mt||mt&&dt.data!==mt.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(x,T,Z,O){const j={},Q=T.attributes;let V=0;const K=Z.getAttributes();for(const N in K)if(K[N].location>=0){let dt=Q[N];dt===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor));const mt={};mt.attribute=dt,dt&&dt.data&&(mt.data=dt.data),j[N]=mt,V++}r.attributes=j,r.attributesNum=V,r.index=O}function _(){const x=r.newAttributes;for(let T=0,Z=x.length;T<Z;T++)x[T]=0}function m(x){p(x,0)}function p(x,T){const Z=r.newAttributes,O=r.enabledAttributes,j=r.attributeDivisors;Z[x]=1,O[x]===0&&(n.enableVertexAttribArray(x),O[x]=1),j[x]!==T&&(n.vertexAttribDivisor(x,T),j[x]=T)}function A(){const x=r.newAttributes,T=r.enabledAttributes;for(let Z=0,O=T.length;Z<O;Z++)T[Z]!==x[Z]&&(n.disableVertexAttribArray(Z),T[Z]=0)}function y(x,T,Z,O,j,Q,V){V===!0?n.vertexAttribIPointer(x,T,Z,j,Q):n.vertexAttribPointer(x,T,Z,O,j,Q)}function b(x,T,Z,O){_();const j=O.attributes,Q=Z.getAttributes(),V=T.defaultAttributeValues;for(const K in Q){const N=Q[K];if(N.location>=0){let ht=j[K];if(ht===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),ht!==void 0){const dt=ht.normalized,mt=ht.itemSize,zt=t.get(ht);if(zt===void 0)continue;const Yt=zt.buffer,nt=zt.type,lt=zt.bytesPerElement,yt=nt===n.INT||nt===n.UNSIGNED_INT||ht.gpuType===Kl;if(ht.isInterleavedBufferAttribute){const _t=ht.data,Ft=_t.stride,It=ht.offset;if(_t.isInstancedInterleavedBuffer){for(let kt=0;kt<N.locationSize;kt++)p(N.location+kt,_t.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let kt=0;kt<N.locationSize;kt++)m(N.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let kt=0;kt<N.locationSize;kt++)y(N.location+kt,mt/N.locationSize,nt,dt,Ft*lt,(It+mt/N.locationSize*kt)*lt,yt)}else{if(ht.isInstancedBufferAttribute){for(let _t=0;_t<N.locationSize;_t++)p(N.location+_t,ht.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let _t=0;_t<N.locationSize;_t++)m(N.location+_t);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let _t=0;_t<N.locationSize;_t++)y(N.location+_t,mt/N.locationSize,nt,dt,mt*lt,mt/N.locationSize*_t*lt,yt)}}else if(V!==void 0){const dt=V[K];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv(N.location,dt);break;case 3:n.vertexAttrib3fv(N.location,dt);break;case 4:n.vertexAttrib4fv(N.location,dt);break;default:n.vertexAttrib1fv(N.location,dt)}}}}A()}function U(){C();for(const x in i){const T=i[x];for(const Z in T){const O=T[Z];for(const j in O)u(O[j].object),delete O[j];delete T[Z]}delete i[x]}}function P(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const Z in T){const O=T[Z];for(const j in O)u(O[j].object),delete O[j];delete T[Z]}delete i[x.id]}function w(x){for(const T in i){const Z=i[T];if(Z[x.id]===void 0)continue;const O=Z[x.id];for(const j in O)u(O[j].object),delete O[j];delete Z[x.id]}}function C(){X(),o=!0,r!==s&&(r=s,c(r.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:X,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function fx(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)e.update(g,i,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==dn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==qn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Gn&&!C)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:U,maxSamples:P}}function px(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new si,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,y=A*4;let b=p.clippingState||null;l.value=b,b=u(g,f,y,d);for(let U=0;U!==y;++U)b[U]=e[U];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=d;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function mx(n){let t=new WeakMap;function e(o,a){return a===Xa?o.mapping=ms:a===Ya&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xa||a===Ya)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new A_(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class jf extends Xf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const is=4,xu=[.125,.215,.35,.446,.526,.582],wi=20,la=new jf,Mu=new Wt;let ca=null,ua=0,ha=0,fa=!1;const bi=(1+Math.sqrt(5))/2,ts=1/bi,Su=[new D(-bi,ts,0),new D(bi,ts,0),new D(-ts,0,bi),new D(ts,0,bi),new D(0,bi,-ts),new D(0,bi,ts),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class yu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ua,ha),this._renderer.xr.enabled=fa,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Qs,format:dn,colorSpace:di,depthBuffer:!1},s=Eu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gx(r)),this._blurMaterial=_x(r,t,e)}return s}_compileMaterial(t){const e=new en(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,i,s){const a=new Qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Mu),u.toneMapping=ci,u.autoClear=!1;const d=new Vf({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new en(new ir,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Mu),_=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Cr(s,A*y,p>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Cr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,la)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Su[(s-r-1)%Su.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*wi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let A=0;for(let w=0;w<wi;++w){const C=w/_,X=Math.exp(-C*C/2);p.push(X),w===0?A+=X:w<m&&(A+=2*X)}for(let w=0;w<p.length;w++)p[w]=p[w]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const b=this._sizeLods[s],U=3*b*(s>y-is?s-y+is:0),P=4*(this._cubeSize-b);Cr(e,U,P,3*b,2*b),l.setRenderTarget(e),l.render(h,la)}}function gx(n){const t=[],e=[],i=[];let s=n;const r=n-is+1+xu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-is?l=xu[o-n+is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*d),y=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let P=0;P<d;P++){const w=P%3*2/3-1,C=P>2?0:-1,X=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];A.set(X,_*g*P),y.set(f,m*g*P);const x=[P,P,P,P,P,P];b.set(x,p*g*P)}const U=new rn;U.setAttribute("position",new sn(A,_)),U.setAttribute("uv",new sn(y,m)),U.setAttribute("faceIndex",new sn(b,p)),t.push(U),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Eu(n,t,e){const i=new Ii(n,t,e);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function _x(n,t,e){const i=new Float32Array(wi),s=new D(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Tu(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function bu(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xa||l===Ya,u=l===ms||l===gs;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new yu(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new yu(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function xx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&qr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Mx(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const A=d.array;_=d.version;for(let y=0,b=A.length;y<b;y+=3){const U=A[y+0],P=A[y+1],w=A[y+2];f.push(U,P,P,w,w,U)}}else if(g!==void 0){const A=g.array;_=g.version;for(let y=0,b=A.length/3-1;y<b;y+=3){const U=y+0,P=y+1,w=y+2;f.push(U,P,P,w,w,U)}}else return;const m=new(Ff(f)?kf:Gf)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Sx(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A];for(let A=0;A<_.length;A++)e.update(p,i,_[A])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function yx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ex(n,t,e){const i=new WeakMap,s=new he;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let U=a.attributes.position.count*b,P=1;U>t.maxTextureSize&&(P=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const w=new Float32Array(U*P*4*h),C=new Bf(w,U,P,h);C.type=Gn,C.needsUpdate=!0;const X=b*4;for(let T=0;T<h;T++){const Z=p[T],O=A[T],j=y[T],Q=U*P*4*T;for(let V=0;V<Z.count;V++){const K=V*X;g===!0&&(s.fromBufferAttribute(Z,V),w[Q+K+0]=s.x,w[Q+K+1]=s.y,w[Q+K+2]=s.z,w[Q+K+3]=0),_===!0&&(s.fromBufferAttribute(O,V),w[Q+K+4]=s.x,w[Q+K+5]=s.y,w[Q+K+6]=s.z,w[Q+K+7]=0),m===!0&&(s.fromBufferAttribute(j,V),w[Q+K+8]=s.x,w[Q+K+9]=s.y,w[Q+K+10]=s.z,w[Q+K+11]=j.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new bt(U,P)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Tx(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Kf extends We{constructor(t,e,i,s,r,o,a,l,c,u=us){if(u!==us&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===us&&(i=Di),i===void 0&&u===vs&&(i=_s),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $f=new We,Au=new Kf(1,1),Zf=new Bf,Jf=new u_,Qf=new Yf,wu=[],Ru=[],Cu=new Float32Array(16),Pu=new Float32Array(9),Lu=new Float32Array(4);function Ms(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=wu[s];if(r===void 0&&(r=new Float32Array(s),wu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Eo(n,t){let e=Ru[t];e===void 0&&(e=new Int32Array(t),Ru[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function bx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),xe(e,t)}}function wx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),xe(e,t)}}function Rx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),xe(e,t)}}function Cx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;Lu.set(i),n.uniformMatrix2fv(this.addr,!1,Lu),xe(e,i)}}function Px(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;Pu.set(i),n.uniformMatrix3fv(this.addr,!1,Pu),xe(e,i)}}function Lx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),xe(e,i)}}function Dx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ix(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),xe(e,t)}}function Ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),xe(e,t)}}function Nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),xe(e,t)}}function Fx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),xe(e,t)}}function Bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),xe(e,t)}}function zx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),xe(e,t)}}function Hx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Au.compareFunction=Nf,r=Au):r=$f,e.setTexture2D(t||r,s)}function Vx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Jf,s)}function Gx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qf,s)}function kx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Zf,s)}function Wx(n){switch(n){case 5126:return bx;case 35664:return Ax;case 35665:return wx;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Ix;case 35668:case 35672:return Ux;case 35669:case 35673:return Nx;case 5125:return Fx;case 36294:return Ox;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return kx}}function Xx(n,t){n.uniform1fv(this.addr,t)}function Yx(n,t){const e=Ms(t,this.size,2);n.uniform2fv(this.addr,e)}function qx(n,t){const e=Ms(t,this.size,3);n.uniform3fv(this.addr,e)}function jx(n,t){const e=Ms(t,this.size,4);n.uniform4fv(this.addr,e)}function Kx(n,t){const e=Ms(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function $x(n,t){const e=Ms(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Zx(n,t){const e=Ms(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Jx(n,t){n.uniform1iv(this.addr,t)}function Qx(n,t){n.uniform2iv(this.addr,t)}function tM(n,t){n.uniform3iv(this.addr,t)}function eM(n,t){n.uniform4iv(this.addr,t)}function nM(n,t){n.uniform1uiv(this.addr,t)}function iM(n,t){n.uniform2uiv(this.addr,t)}function sM(n,t){n.uniform3uiv(this.addr,t)}function rM(n,t){n.uniform4uiv(this.addr,t)}function oM(n,t,e){const i=this.cache,s=t.length,r=Eo(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||$f,r[o])}function aM(n,t,e){const i=this.cache,s=t.length,r=Eo(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jf,r[o])}function lM(n,t,e){const i=this.cache,s=t.length,r=Eo(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qf,r[o])}function cM(n,t,e){const i=this.cache,s=t.length,r=Eo(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zf,r[o])}function uM(n){switch(n){case 5126:return Xx;case 35664:return Yx;case 35665:return qx;case 35666:return jx;case 35674:return Kx;case 35675:return $x;case 35676:return Zx;case 5124:case 35670:return Jx;case 35667:case 35671:return Qx;case 35668:case 35672:return tM;case 35669:case 35673:return eM;case 5125:return nM;case 36294:return iM;case 36295:return sM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}class hM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Wx(e.type)}}class fM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=uM(e.type)}}class dM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Du(n,t){n.seq.push(t),n.map[t.id]=t}function pM(n,t,e){const i=n.name,s=i.length;for(da.lastIndex=0;;){const r=da.exec(i),o=da.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Du(e,c===void 0?new hM(a,n,t):new fM(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new dM(a),Du(e,h)),e=h}}}class jr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);pM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Iu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const mM=37297;let gM=0;function _M(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function vM(n){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(n);let i;switch(t===e?i="":t===io&&e===no?i="LinearDisplayP3ToLinearSRGB":t===no&&e===io&&(i="LinearSRGBToLinearDisplayP3"),n){case di:case Mo:return[i,"LinearTransferOETF"];case Mn:case nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_M(n.getShaderSource(t),o)}else return s}function xM(n,t){const e=vM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function MM(n,t){let e;switch(t){case Ng:e="Linear";break;case Fg:e="Reinhard";break;case Og:e="Cineon";break;case Bg:e="ACESFilmic";break;case Hg:e="AgX";break;case Vg:e="Neutral";break;case zg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pr=new D;function SM(){Jt.getLuminanceCoefficients(Pr);const n=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function EM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function TM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ds(n){return n!==""}function Nu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(bM,wM)}const AM=new Map;function wM(n,t){let e=Vt[t];if(e===void 0){const i=AM.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(n){return n.replace(RM,CM)}function CM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function PM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ef?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===pg?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function LM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function DM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function IM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jl:t="ENVMAP_BLENDING_MULTIPLY";break;case Ig:t="ENVMAP_BLENDING_MIX";break;case Ug:t="ENVMAP_BLENDING_ADD";break}return t}function UM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function NM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=PM(e),c=LM(e),u=DM(e),h=IM(e),f=UM(e),d=yM(e),g=EM(r),_=s.createProgram();let m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ds).join(`
`),p.length>0&&(p+=`
`)):(m=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),p=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ci?MM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,xM("linearToOutputTexel",e.outputColorSpace),SM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),o=yl(o),o=Nu(o,e),o=Fu(o,e),a=yl(a),a=Nu(a,e),a=Fu(a,e),o=Ou(o),a=Ou(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=A+m+o,b=A+p+a,U=Iu(s,s.VERTEX_SHADER,y),P=Iu(s,s.FRAGMENT_SHADER,b);s.attachShader(_,U),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(T){if(n.debug.checkShaderErrors){const Z=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(U).trim(),j=s.getShaderInfoLog(P).trim();let Q=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,U,P);else{const K=Uu(s,U,"vertex"),N=Uu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+Z+`
`+K+`
`+N)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(O===""||j==="")&&(V=!1);V&&(T.diagnostics={runnable:Q,programLog:Z,vertexShader:{log:O,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(U),s.deleteShader(P),C=new jr(s,_),X=TM(s,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let X;this.getAttributes=function(){return X===void 0&&w(this),X};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,mM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=P,this}let FM=0;class OM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new BM(t),e.set(t,i)),i}}class BM{constructor(t){this.id=FM++,this.code=t,this.usedTimes=0}}function zM(n,t,e,i,s,r,o){const a=new zf,l=new OM,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,T,Z,O,j){const Q=O.fog,V=j.geometry,K=x.isMeshStandardMaterial?O.environment:null,N=(x.isMeshStandardMaterial?e:t).get(x.envMap||K),ht=N&&N.mapping===xo?N.image.height:null,dt=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const mt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,zt=mt!==void 0?mt.length:0;let Yt=0;V.morphAttributes.position!==void 0&&(Yt=1),V.morphAttributes.normal!==void 0&&(Yt=2),V.morphAttributes.color!==void 0&&(Yt=3);let nt,lt,yt,_t;if(dt){const Be=En[dt];nt=Be.vertexShader,lt=Be.fragmentShader}else nt=x.vertexShader,lt=x.fragmentShader,l.update(x),yt=l.getVertexShaderID(x),_t=l.getFragmentShaderID(x);const Ft=n.getRenderTarget(),It=j.isInstancedMesh===!0,kt=j.isBatchedMesh===!0,Qt=!!x.map,R=!!x.matcap,M=!!N,q=!!x.aoMap,J=!!x.lightMap,$=!!x.bumpMap,W=!!x.normalMap,ot=!!x.displacementMap,et=!!x.emissiveMap,S=!!x.metalnessMap,v=!!x.roughnessMap,L=x.anisotropy>0,F=x.clearcoat>0,G=x.dispersion>0,H=x.iridescence>0,ct=x.sheen>0,rt=x.transmission>0,at=L&&!!x.anisotropyMap,Pt=F&&!!x.clearcoatMap,st=F&&!!x.clearcoatNormalMap,pt=F&&!!x.clearcoatRoughnessMap,wt=H&&!!x.iridescenceMap,Dt=H&&!!x.iridescenceThicknessMap,Et=ct&&!!x.sheenColorMap,Ut=ct&&!!x.sheenRoughnessMap,Lt=!!x.specularMap,te=!!x.specularColorMap,I=!!x.specularIntensityMap,Mt=rt&&!!x.transmissionMap,tt=rt&&!!x.thicknessMap,it=!!x.gradientMap,vt=!!x.alphaMap,St=x.alphaTest>0,Xt=!!x.alphaHash,pe=!!x.extensions;let Oe=ci;x.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const qt={shaderID:dt,shaderType:x.type,shaderName:x.name,vertexShader:nt,fragmentShader:lt,defines:x.defines,customVertexShaderID:yt,customFragmentShaderID:_t,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:kt,batchingColor:kt&&j._colorsTexture!==null,instancing:It,instancingColor:It&&j.instanceColor!==null,instancingMorph:It&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ft===null?n.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:di,alphaToCoverage:!!x.alphaToCoverage,map:Qt,matcap:R,envMap:M,envMapMode:M&&N.mapping,envMapCubeUVHeight:ht,aoMap:q,lightMap:J,bumpMap:$,normalMap:W,displacementMap:d&&ot,emissiveMap:et,normalMapObjectSpace:W&&x.normalMapType===Xg,normalMapTangentSpace:W&&x.normalMapType===ec,metalnessMap:S,roughnessMap:v,anisotropy:L,anisotropyMap:at,clearcoat:F,clearcoatMap:Pt,clearcoatNormalMap:st,clearcoatRoughnessMap:pt,dispersion:G,iridescence:H,iridescenceMap:wt,iridescenceThicknessMap:Dt,sheen:ct,sheenColorMap:Et,sheenRoughnessMap:Ut,specularMap:Lt,specularColorMap:te,specularIntensityMap:I,transmission:rt,transmissionMap:Mt,thicknessMap:tt,gradientMap:it,opaque:x.transparent===!1&&x.blending===cs&&x.alphaToCoverage===!1,alphaMap:vt,alphaTest:St,alphaHash:Xt,combine:x.combine,mapUv:Qt&&m(x.map.channel),aoMapUv:q&&m(x.aoMap.channel),lightMapUv:J&&m(x.lightMap.channel),bumpMapUv:$&&m(x.bumpMap.channel),normalMapUv:W&&m(x.normalMap.channel),displacementMapUv:ot&&m(x.displacementMap.channel),emissiveMapUv:et&&m(x.emissiveMap.channel),metalnessMapUv:S&&m(x.metalnessMap.channel),roughnessMapUv:v&&m(x.roughnessMap.channel),anisotropyMapUv:at&&m(x.anisotropyMap.channel),clearcoatMapUv:Pt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&m(x.sheenRoughnessMap.channel),specularMapUv:Lt&&m(x.specularMap.channel),specularColorMapUv:te&&m(x.specularColorMap.channel),specularIntensityMapUv:I&&m(x.specularIntensityMap.channel),transmissionMapUv:Mt&&m(x.transmissionMap.channel),thicknessMapUv:tt&&m(x.thicknessMap.channel),alphaMapUv:vt&&m(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(W||L),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(Qt||vt),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Yt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Qt&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function A(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Z in x.defines)T.push(Z),T.push(x.defines[Z]);return x.isRawShaderMaterial===!1&&(y(T,x),b(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function U(x){const T=_[x.type];let Z;if(T){const O=En[T];Z=y_.clone(O.uniforms)}else Z=x.uniforms;return Z}function P(x,T){let Z;for(let O=0,j=u.length;O<j;O++){const Q=u[O];if(Q.cacheKey===T){Z=Q,++Z.usedTimes;break}}return Z===void 0&&(Z=new NM(n,T,x,r),u.push(Z)),Z}function w(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),x.destroy()}}function C(x){l.remove(x)}function X(){l.dispose()}return{getParameters:p,getProgramCacheKey:A,getUniforms:U,acquireProgram:P,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:X}}function HM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function VM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Hu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||VM),i.length>1&&i.sort(f||zu),s.length>1&&s.sort(f||zu)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function GM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Hu,n.set(i,[o])):s>=r.length?(o=new Hu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function kM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Wt};break;case"SpotLight":e={position:new D,direction:new D,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function WM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let XM=0;function YM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function qM(n){const t=new kM,e=WM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new le,o=new le;function a(c){let u=0,h=0,f=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,A=0,y=0,b=0,U=0,P=0,w=0;c.sort(YM);for(let X=0,x=c.length;X<x;X++){const T=c[X],Z=T.color,O=T.intensity,j=T.distance,Q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=Z.r*O,h+=Z.g*O,f+=Z.b*O;else if(T.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(T.sh.coefficients[V],O);w++}else if(T.isDirectionalLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const K=T.shadow,N=e.get(T);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.directionalShadow[d]=N,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=T.shadow.matrix,A++}i.directional[d]=V,d++}else if(T.isSpotLight){const V=t.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(Z).multiplyScalar(O),V.distance=j,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,i.spot[_]=V;const K=T.shadow;if(T.map&&(i.spotLightMap[U]=T.map,U++,K.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[_]=K.matrix,T.castShadow){const N=e.get(T);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=Q,b++}_++}else if(T.isRectAreaLight){const V=t.get(T);V.color.copy(Z).multiplyScalar(O),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=V,m++}else if(T.isPointLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const K=T.shadow,N=e.get(T);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=T.shadow.matrix,y++}i.point[g]=V,g++}else if(T.isHemisphereLight){const V=t.get(T);V.skyColor.copy(T.color).multiplyScalar(O),V.groundColor.copy(T.groundColor).multiplyScalar(O),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==A||C.numPointShadows!==y||C.numSpotShadows!==b||C.numSpotMaps!==U||C.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=w,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=A,C.numPointShadows=y,C.numSpotShadows=b,C.numSpotMaps=U,C.numLightProbes=w,i.version=XM++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const y=c[p];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(y.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Vu(n){const t=new qM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function jM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Vu(n),t.set(s,[a])):r>=o.length?(a=new Vu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class KM extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $M extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ZM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QM(n,t,e){let i=new ic;const s=new bt,r=new bt,o=new he,a=new KM({depthPacking:Wg}),l=new $M,c={},u=e.maxTextureSize,h={[hi]:ke,[ke]:hi,[bn]:bn},f=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:ZM,fragmentShader:JM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ef;let p=this.type;this.render=function(P,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const X=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(li),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const O=p!==Bn&&this.type===Bn,j=p===Bn&&this.type!==Bn;for(let Q=0,V=P.length;Q<V;Q++){const K=P[Q],N=K.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const ht=N.getFrameExtents();if(s.multiply(ht),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,N.mapSize.y=r.y)),N.map===null||O===!0||j===!0){const mt=this.type!==Bn?{minFilter:tn,magFilter:tn}:{};N.map!==null&&N.map.dispose(),N.map=new Ii(s.x,s.y,mt),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const dt=N.getViewportCount();for(let mt=0;mt<dt;mt++){const zt=N.getViewport(mt);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),Z.viewport(o),N.updateMatrices(K,mt),i=N.getFrustum(),b(w,C,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===Bn&&A(N,C),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(X,x,T)};function A(P,w){const C=t.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ii(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(w,null,C,f,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(w,null,C,d,_,null)}function y(P,w,C,X){let x=null;const T=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)x=T;else if(x=C.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=x.uuid,O=w.uuid;let j=c[Z];j===void 0&&(j={},c[Z]=j);let Q=j[O];Q===void 0&&(Q=x.clone(),j[O]=Q,w.addEventListener("dispose",U)),x=Q}if(x.visible=w.visible,x.wireframe=w.wireframe,X===Bn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Z=n.properties.get(x);Z.light=C}return x}function b(P,w,C,X,x){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===Bn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);const O=t.update(P),j=P.material;if(Array.isArray(j)){const Q=O.groups;for(let V=0,K=Q.length;V<K;V++){const N=Q[V],ht=j[N.materialIndex];if(ht&&ht.visible){const dt=y(P,ht,X,x);P.onBeforeShadow(n,P,w,C,O,dt,N),n.renderBufferDirect(C,null,O,dt,P,N),P.onAfterShadow(n,P,w,C,O,dt,N)}}}else if(j.visible){const Q=y(P,j,X,x);P.onBeforeShadow(n,P,w,C,O,Q,null),n.renderBufferDirect(C,null,O,Q,P,null),P.onAfterShadow(n,P,w,C,O,Q,null)}}const Z=P.children;for(let O=0,j=Z.length;O<j;O++)b(Z[O],w,C,X,x)}function U(P){P.target.removeEventListener("dispose",U);for(const C in c){const X=c[C],x=P.target.uuid;x in X&&(X[x].dispose(),delete X[x])}}}const tS={[Ba]:za,[Ha]:ka,[Va]:Wa,[ps]:Ga,[za]:Ba,[ka]:Ha,[Wa]:Va,[Ga]:ps};function eS(n){function t(){let I=!1;const Mt=new he;let tt=null;const it=new he(0,0,0,0);return{setMask:function(vt){tt!==vt&&!I&&(n.colorMask(vt,vt,vt,vt),tt=vt)},setLocked:function(vt){I=vt},setClear:function(vt,St,Xt,pe,Oe){Oe===!0&&(vt*=pe,St*=pe,Xt*=pe),Mt.set(vt,St,Xt,pe),it.equals(Mt)===!1&&(n.clearColor(vt,St,Xt,pe),it.copy(Mt))},reset:function(){I=!1,tt=null,it.set(-1,0,0,0)}}}function e(){let I=!1,Mt=!1,tt=null,it=null,vt=null;return{setReversed:function(St){Mt=St},setTest:function(St){St?yt(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(St){tt!==St&&!I&&(n.depthMask(St),tt=St)},setFunc:function(St){if(Mt&&(St=tS[St]),it!==St){switch(St){case Ba:n.depthFunc(n.NEVER);break;case za:n.depthFunc(n.ALWAYS);break;case Ha:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case Va:n.depthFunc(n.EQUAL);break;case Ga:n.depthFunc(n.GEQUAL);break;case ka:n.depthFunc(n.GREATER);break;case Wa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=St}},setLocked:function(St){I=St},setClear:function(St){vt!==St&&(n.clearDepth(St),vt=St)},reset:function(){I=!1,tt=null,it=null,vt=null}}}function i(){let I=!1,Mt=null,tt=null,it=null,vt=null,St=null,Xt=null,pe=null,Oe=null;return{setTest:function(qt){I||(qt?yt(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(qt){Mt!==qt&&!I&&(n.stencilMask(qt),Mt=qt)},setFunc:function(qt,Be,Ln){(tt!==qt||it!==Be||vt!==Ln)&&(n.stencilFunc(qt,Be,Ln),tt=qt,it=Be,vt=Ln)},setOp:function(qt,Be,Ln){(St!==qt||Xt!==Be||pe!==Ln)&&(n.stencilOp(qt,Be,Ln),St=qt,Xt=Be,pe=Ln)},setLocked:function(qt){I=qt},setClear:function(qt){Oe!==qt&&(n.clearStencil(qt),Oe=qt)},reset:function(){I=!1,Mt=null,tt=null,it=null,vt=null,St=null,Xt=null,pe=null,Oe=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,A=null,y=null,b=null,U=null,P=new Wt(0,0,0),w=0,C=!1,X=null,x=null,T=null,Z=null,O=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,V=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),Q=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Q=V>=2);let N=null,ht={};const dt=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),zt=new he().fromArray(dt),Yt=new he().fromArray(mt);function nt(I,Mt,tt,it){const vt=new Uint8Array(4),St=n.createTexture();n.bindTexture(I,St),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<tt;Xt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,it,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(Mt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return St}const lt={};lt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),yt(n.DEPTH_TEST),r.setFunc(ps),J(!1),$(Kc),yt(n.CULL_FACE),M(li);function yt(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function _t(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Ft(I,Mt){return u[I]!==Mt?(n.bindFramebuffer(I,Mt),u[I]=Mt,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Mt),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function It(I,Mt){let tt=f,it=!1;if(I){tt=h.get(Mt),tt===void 0&&(tt=[],h.set(Mt,tt));const vt=I.textures;if(tt.length!==vt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Xt=vt.length;St<Xt;St++)tt[St]=n.COLOR_ATTACHMENT0+St;tt.length=vt.length,it=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,it=!0);it&&n.drawBuffers(tt)}function kt(I){return d!==I?(n.useProgram(I),d=I,!0):!1}const Qt={[Ai]:n.FUNC_ADD,[gg]:n.FUNC_SUBTRACT,[_g]:n.FUNC_REVERSE_SUBTRACT};Qt[vg]=n.MIN,Qt[xg]=n.MAX;const R={[Mg]:n.ZERO,[Sg]:n.ONE,[yg]:n.SRC_COLOR,[Fa]:n.SRC_ALPHA,[Rg]:n.SRC_ALPHA_SATURATE,[Ag]:n.DST_COLOR,[Tg]:n.DST_ALPHA,[Eg]:n.ONE_MINUS_SRC_COLOR,[Oa]:n.ONE_MINUS_SRC_ALPHA,[wg]:n.ONE_MINUS_DST_COLOR,[bg]:n.ONE_MINUS_DST_ALPHA,[Cg]:n.CONSTANT_COLOR,[Pg]:n.ONE_MINUS_CONSTANT_COLOR,[Lg]:n.CONSTANT_ALPHA,[Dg]:n.ONE_MINUS_CONSTANT_ALPHA};function M(I,Mt,tt,it,vt,St,Xt,pe,Oe,qt){if(I===li){g===!0&&(_t(n.BLEND),g=!1);return}if(g===!1&&(yt(n.BLEND),g=!0),I!==mg){if(I!==_||qt!==C){if((m!==Ai||y!==Ai)&&(n.blendEquation(n.FUNC_ADD),m=Ai,y=Ai),qt)switch(I){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.ONE,n.ONE);break;case Zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,A=null,b=null,U=null,P.set(0,0,0),w=0,_=I,C=qt}return}vt=vt||Mt,St=St||tt,Xt=Xt||it,(Mt!==m||vt!==y)&&(n.blendEquationSeparate(Qt[Mt],Qt[vt]),m=Mt,y=vt),(tt!==p||it!==A||St!==b||Xt!==U)&&(n.blendFuncSeparate(R[tt],R[it],R[St],R[Xt]),p=tt,A=it,b=St,U=Xt),(pe.equals(P)===!1||Oe!==w)&&(n.blendColor(pe.r,pe.g,pe.b,Oe),P.copy(pe),w=Oe),_=I,C=!1}function q(I,Mt){I.side===bn?_t(n.CULL_FACE):yt(n.CULL_FACE);let tt=I.side===ke;Mt&&(tt=!tt),J(tt),I.blending===cs&&I.transparent===!1?M(li):M(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const it=I.stencilWrite;o.setTest(it),it&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(I){X!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),X=I)}function $(I){I!==fg?(yt(n.CULL_FACE),I!==x&&(I===Kc?n.cullFace(n.BACK):I===dg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),x=I}function W(I){I!==T&&(Q&&n.lineWidth(I),T=I)}function ot(I,Mt,tt){I?(yt(n.POLYGON_OFFSET_FILL),(Z!==Mt||O!==tt)&&(n.polygonOffset(Mt,tt),Z=Mt,O=tt)):_t(n.POLYGON_OFFSET_FILL)}function et(I){I?yt(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function S(I){I===void 0&&(I=n.TEXTURE0+j-1),N!==I&&(n.activeTexture(I),N=I)}function v(I,Mt,tt){tt===void 0&&(N===null?tt=n.TEXTURE0+j-1:tt=N);let it=ht[tt];it===void 0&&(it={type:void 0,texture:void 0},ht[tt]=it),(it.type!==I||it.texture!==Mt)&&(N!==tt&&(n.activeTexture(tt),N=tt),n.bindTexture(I,Mt||lt[I]),it.type=I,it.texture=Mt)}function L(){const I=ht[N];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function F(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(I){zt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),zt.copy(I))}function Et(I){Yt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Yt.copy(I))}function Ut(I,Mt){let tt=l.get(Mt);tt===void 0&&(tt=new WeakMap,l.set(Mt,tt));let it=tt.get(I);it===void 0&&(it=n.getUniformBlockIndex(Mt,I.name),tt.set(I,it))}function Lt(I,Mt){const it=l.get(Mt).get(I);a.get(Mt)!==it&&(n.uniformBlockBinding(Mt,it,I.__bindingPointIndex),a.set(Mt,it))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},N=null,ht={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,A=null,y=null,b=null,U=null,P=new Wt(0,0,0),w=0,C=!1,X=null,x=null,T=null,Z=null,O=null,zt.set(0,0,n.canvas.width,n.canvas.height),Yt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:yt,disable:_t,bindFramebuffer:Ft,drawBuffers:It,useProgram:kt,setBlending:M,setMaterial:q,setFlipSided:J,setCullFace:$,setLineWidth:W,setPolygonOffset:ot,setScissorTest:et,activeTexture:S,bindTexture:v,unbindTexture:L,compressedTexImage2D:F,compressedTexImage3D:G,texImage2D:pt,texImage3D:wt,updateUBOMapping:Ut,uniformBlockBinding:Lt,texStorage2D:Pt,texStorage3D:st,texSubImage2D:H,texSubImage3D:ct,compressedTexSubImage2D:rt,compressedTexSubImage3D:at,scissor:Dt,viewport:Et,reset:te}}function Gu(n,t,e,i){const s=nS(i);switch(e){case Rf:return n*t;case Pf:return n*t;case Lf:return n*t*2;case Df:return n*t/s.components*s.byteLength;case Jl:return n*t/s.components*s.byteLength;case If:return n*t*2/s.components*s.byteLength;case Ql:return n*t*2/s.components*s.byteLength;case Cf:return n*t*3/s.components*s.byteLength;case dn:return n*t*4/s.components*s.byteLength;case tc:return n*t*4/s.components*s.byteLength;case Vr:case Gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kr:case Wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $a:case Ja:return Math.max(n,16)*Math.max(t,8)/4;case Ka:case Za:return Math.max(n,8)*Math.max(t,8)/2;case Qa:case tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case el:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xr:case gl:case _l:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Uf:case vl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xl:case Ml:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nS(n){switch(n){case qn:case bf:return{byteLength:1,components:1};case js:case Af:case Qs:return{byteLength:2,components:1};case $l:case Zl:return{byteLength:2,components:4};case Di:case Kl:case Gn:return{byteLength:4,components:1};case wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function iS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return d?new OffscreenCanvas(S,v):ro("canvas")}function _(S,v,L){let F=1;const G=et(S);if((G.width>L||G.height>L)&&(F=L/Math.max(G.width,G.height)),F<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const H=Math.floor(F*G.width),ct=Math.floor(F*G.height);h===void 0&&(h=g(H,ct));const rt=v?g(H,ct):h;return rt.width=H,rt.height=ct,rt.getContext("2d").drawImage(S,0,0,H,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+H+"x"+ct+")."),rt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),S;return S}function m(S){return S.generateMipmaps&&S.minFilter!==tn&&S.minFilter!==un}function p(S){n.generateMipmap(S)}function A(S,v,L,F,G=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=v;if(v===n.RED&&(L===n.FLOAT&&(H=n.R32F),L===n.HALF_FLOAT&&(H=n.R16F),L===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.R8UI),L===n.UNSIGNED_SHORT&&(H=n.R16UI),L===n.UNSIGNED_INT&&(H=n.R32UI),L===n.BYTE&&(H=n.R8I),L===n.SHORT&&(H=n.R16I),L===n.INT&&(H=n.R32I)),v===n.RG&&(L===n.FLOAT&&(H=n.RG32F),L===n.HALF_FLOAT&&(H=n.RG16F),L===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RG8UI),L===n.UNSIGNED_SHORT&&(H=n.RG16UI),L===n.UNSIGNED_INT&&(H=n.RG32UI),L===n.BYTE&&(H=n.RG8I),L===n.SHORT&&(H=n.RG16I),L===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGB8UI),L===n.UNSIGNED_SHORT&&(H=n.RGB16UI),L===n.UNSIGNED_INT&&(H=n.RGB32UI),L===n.BYTE&&(H=n.RGB8I),L===n.SHORT&&(H=n.RGB16I),L===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),L===n.UNSIGNED_INT&&(H=n.RGBA32UI),L===n.BYTE&&(H=n.RGBA8I),L===n.SHORT&&(H=n.RGBA16I),L===n.INT&&(H=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),v===n.RGBA){const ct=G?eo:Jt.getTransfer(F);L===n.FLOAT&&(H=n.RGBA32F),L===n.HALF_FLOAT&&(H=n.RGBA16F),L===n.UNSIGNED_BYTE&&(H=ct===ae?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function y(S,v){let L;return S?v===null||v===Di||v===_s?L=n.DEPTH24_STENCIL8:v===Gn?L=n.DEPTH32F_STENCIL8:v===js&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Di||v===_s?L=n.DEPTH_COMPONENT24:v===Gn?L=n.DEPTH_COMPONENT32F:v===js&&(L=n.DEPTH_COMPONENT16),L}function b(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==tn&&S.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function U(S){const v=S.target;v.removeEventListener("dispose",U),w(v),v.isVideoTexture&&u.delete(v)}function P(S){const v=S.target;v.removeEventListener("dispose",P),X(v)}function w(S){const v=i.get(S);if(v.__webglInit===void 0)return;const L=S.source,F=f.get(L);if(F){const G=F[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&C(S),Object.keys(F).length===0&&f.delete(L)}i.remove(S)}function C(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const L=S.source,F=f.get(L);delete F[v.__cacheKey],o.memory.textures--}function X(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(v.__webglFramebuffer[F]))for(let G=0;G<v.__webglFramebuffer[F].length;G++)n.deleteFramebuffer(v.__webglFramebuffer[F][G]);else n.deleteFramebuffer(v.__webglFramebuffer[F]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[F])}else{if(Array.isArray(v.__webglFramebuffer))for(let F=0;F<v.__webglFramebuffer.length;F++)n.deleteFramebuffer(v.__webglFramebuffer[F]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let F=0;F<v.__webglColorRenderbuffer.length;F++)v.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[F]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=S.textures;for(let F=0,G=L.length;F<G;F++){const H=i.get(L[F]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(L[F])}i.remove(S)}let x=0;function T(){x=0}function Z(){const S=x;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),x+=1,S}function O(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function j(S,v){const L=i.get(S);if(S.isVideoTexture&&W(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const F=S.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(L,S,v);return}}e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function Q(S,v){const L=i.get(S);if(S.version>0&&L.__version!==S.version){Yt(L,S,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function V(S,v){const L=i.get(S);if(S.version>0&&L.__version!==S.version){Yt(L,S,v);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function K(S,v){const L=i.get(S);if(S.version>0&&L.__version!==S.version){nt(L,S,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const N={[qa]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},ht={[tn]:n.NEAREST,[Gg]:n.NEAREST_MIPMAP_NEAREST,[ur]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[zo]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},dt={[Yg]:n.NEVER,[Jg]:n.ALWAYS,[qg]:n.LESS,[Nf]:n.LEQUAL,[jg]:n.EQUAL,[Zg]:n.GEQUAL,[Kg]:n.GREATER,[$g]:n.NOTEQUAL};function mt(S,v){if(v.type===Gn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===zo||v.magFilter===ur||v.magFilter===Ci||v.minFilter===un||v.minFilter===zo||v.minFilter===ur||v.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,N[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,N[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,N[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ht[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,dt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===tn||v.minFilter!==ur&&v.minFilter!==Ci||v.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function zt(S,v){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",U));const F=v.source;let G=f.get(F);G===void 0&&(G={},f.set(F,G));const H=O(v);if(H!==S.__cacheKey){G[H]===void 0&&(G[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),G[H].usedTimes++;const ct=G[S.__cacheKey];ct!==void 0&&(G[S.__cacheKey].usedTimes--,ct.usedTimes===0&&C(v)),S.__cacheKey=H,S.__webglTexture=G[H].texture}return L}function Yt(S,v,L){let F=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(F=n.TEXTURE_3D);const G=zt(S,v),H=v.source;e.bindTexture(F,S.__webglTexture,n.TEXTURE0+L);const ct=i.get(H);if(H.version!==ct.__version||G===!0){e.activeTexture(n.TEXTURE0+L);const rt=Jt.getPrimaries(Jt.workingColorSpace),at=v.colorSpace===ai?null:Jt.getPrimaries(v.colorSpace),Pt=v.colorSpace===ai||rt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let st=_(v.image,!1,s.maxTextureSize);st=ot(v,st);const pt=r.convert(v.format,v.colorSpace),wt=r.convert(v.type);let Dt=A(v.internalFormat,pt,wt,v.colorSpace,v.isVideoTexture);mt(F,v);let Et;const Ut=v.mipmaps,Lt=v.isVideoTexture!==!0,te=ct.__version===void 0||G===!0,I=H.dataReady,Mt=b(v,st);if(v.isDepthTexture)Dt=y(v.format===vs,v.type),te&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,Dt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Dt,st.width,st.height,0,pt,wt,null));else if(v.isDataTexture)if(Ut.length>0){Lt&&te&&e.texStorage2D(n.TEXTURE_2D,Mt,Dt,Ut[0].width,Ut[0].height);for(let tt=0,it=Ut.length;tt<it;tt++)Et=Ut[tt],Lt?I&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Et.width,Et.height,pt,wt,Et.data):e.texImage2D(n.TEXTURE_2D,tt,Dt,Et.width,Et.height,0,pt,wt,Et.data);v.generateMipmaps=!1}else Lt?(te&&e.texStorage2D(n.TEXTURE_2D,Mt,Dt,st.width,st.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,pt,wt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,st.width,st.height,0,pt,wt,st.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Dt,Ut[0].width,Ut[0].height,st.depth);for(let tt=0,it=Ut.length;tt<it;tt++)if(Et=Ut[tt],v.format!==dn)if(pt!==null)if(Lt){if(I)if(v.layerUpdates.size>0){const vt=Gu(Et.width,Et.height,v.format,v.type);for(const St of v.layerUpdates){const Xt=Et.data.subarray(St*vt/Et.data.BYTES_PER_ELEMENT,(St+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,St,Et.width,Et.height,1,pt,Xt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Et.width,Et.height,st.depth,pt,Et.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Dt,Et.width,Et.height,st.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Et.width,Et.height,st.depth,pt,wt,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Dt,Et.width,Et.height,st.depth,0,pt,wt,Et.data)}else{Lt&&te&&e.texStorage2D(n.TEXTURE_2D,Mt,Dt,Ut[0].width,Ut[0].height);for(let tt=0,it=Ut.length;tt<it;tt++)Et=Ut[tt],v.format!==dn?pt!==null?Lt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,Et.width,Et.height,pt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Dt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?I&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Et.width,Et.height,pt,wt,Et.data):e.texImage2D(n.TEXTURE_2D,tt,Dt,Et.width,Et.height,0,pt,wt,Et.data)}else if(v.isDataArrayTexture)if(Lt){if(te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Dt,st.width,st.height,st.depth),I)if(v.layerUpdates.size>0){const tt=Gu(st.width,st.height,v.format,v.type);for(const it of v.layerUpdates){const vt=st.data.subarray(it*tt/st.data.BYTES_PER_ELEMENT,(it+1)*tt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,st.width,st.height,1,pt,wt,vt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,pt,wt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,st.width,st.height,st.depth,0,pt,wt,st.data);else if(v.isData3DTexture)Lt?(te&&e.texStorage3D(n.TEXTURE_3D,Mt,Dt,st.width,st.height,st.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,pt,wt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,st.width,st.height,st.depth,0,pt,wt,st.data);else if(v.isFramebufferTexture){if(te)if(Lt)e.texStorage2D(n.TEXTURE_2D,Mt,Dt,st.width,st.height);else{let tt=st.width,it=st.height;for(let vt=0;vt<Mt;vt++)e.texImage2D(n.TEXTURE_2D,vt,Dt,tt,it,0,pt,wt,null),tt>>=1,it>>=1}}else if(Ut.length>0){if(Lt&&te){const tt=et(Ut[0]);e.texStorage2D(n.TEXTURE_2D,Mt,Dt,tt.width,tt.height)}for(let tt=0,it=Ut.length;tt<it;tt++)Et=Ut[tt],Lt?I&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,pt,wt,Et):e.texImage2D(n.TEXTURE_2D,tt,Dt,pt,wt,Et);v.generateMipmaps=!1}else if(Lt){if(te){const tt=et(st);e.texStorage2D(n.TEXTURE_2D,Mt,Dt,tt.width,tt.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,wt,st)}else e.texImage2D(n.TEXTURE_2D,0,Dt,pt,wt,st);m(v)&&p(F),ct.__version=H.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function nt(S,v,L){if(v.image.length!==6)return;const F=zt(S,v),G=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const H=i.get(G);if(G.version!==H.__version||F===!0){e.activeTexture(n.TEXTURE0+L);const ct=Jt.getPrimaries(Jt.workingColorSpace),rt=v.colorSpace===ai?null:Jt.getPrimaries(v.colorSpace),at=v.colorSpace===ai||ct===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Pt=v.isCompressedTexture||v.image[0].isCompressedTexture,st=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let it=0;it<6;it++)!Pt&&!st?pt[it]=_(v.image[it],!0,s.maxCubemapSize):pt[it]=st?v.image[it].image:v.image[it],pt[it]=ot(v,pt[it]);const wt=pt[0],Dt=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),Ut=A(v.internalFormat,Dt,Et,v.colorSpace),Lt=v.isVideoTexture!==!0,te=H.__version===void 0||F===!0,I=G.dataReady;let Mt=b(v,wt);mt(n.TEXTURE_CUBE_MAP,v);let tt;if(Pt){Lt&&te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Ut,wt.width,wt.height);for(let it=0;it<6;it++){tt=pt[it].mipmaps;for(let vt=0;vt<tt.length;vt++){const St=tt[vt];v.format!==dn?Dt!==null?Lt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,St.width,St.height,Dt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,Ut,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,St.width,St.height,Dt,Et,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,Ut,St.width,St.height,0,Dt,Et,St.data)}}}else{if(tt=v.mipmaps,Lt&&te){tt.length>0&&Mt++;const it=et(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Ut,it.width,it.height)}for(let it=0;it<6;it++)if(st){Lt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,pt[it].width,pt[it].height,Dt,Et,pt[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ut,pt[it].width,pt[it].height,0,Dt,Et,pt[it].data);for(let vt=0;vt<tt.length;vt++){const Xt=tt[vt].image[it].image;Lt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Xt.width,Xt.height,Dt,Et,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,Ut,Xt.width,Xt.height,0,Dt,Et,Xt.data)}}else{Lt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,Et,pt[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ut,Dt,Et,pt[it]);for(let vt=0;vt<tt.length;vt++){const St=tt[vt];Lt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Dt,Et,St.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,Ut,Dt,Et,St.image[it])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),H.__version=G.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function lt(S,v,L,F,G,H){const ct=r.convert(L.format,L.colorSpace),rt=r.convert(L.type),at=A(L.internalFormat,ct,rt,L.colorSpace);if(!i.get(v).__hasExternalTextures){const st=Math.max(1,v.width>>H),pt=Math.max(1,v.height>>H);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?e.texImage3D(G,H,at,st,pt,v.depth,0,ct,rt,null):e.texImage2D(G,H,at,st,pt,0,ct,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),$(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,G,i.get(L).__webglTexture,0,J(v)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,G,i.get(L).__webglTexture,H),e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(S,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){const F=v.depthTexture,G=F&&F.isDepthTexture?F.type:null,H=y(v.stencilBuffer,G),ct=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=J(v);$(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,H,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ct,n.RENDERBUFFER,S)}else{const F=v.textures;for(let G=0;G<F.length;G++){const H=F[G],ct=r.convert(H.format,H.colorSpace),rt=r.convert(H.type),at=A(H.internalFormat,ct,rt,H.colorSpace),Pt=J(v);L&&$(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,at,v.width,v.height):$(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,at,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,at,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const F=i.get(v.depthTexture).__webglTexture,G=J(v);if(v.depthTexture.format===us)$(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(v.depthTexture.format===vs)$(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Ft(S){const v=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const F=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),F){const G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,F.removeEventListener("dispose",G)};F.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=F}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");_t(v.__webglFramebuffer,S)}else if(L){v.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[F]),v.__webglDepthbuffer[F]===void 0)v.__webglDepthbuffer[F]=n.createRenderbuffer(),yt(v.__webglDepthbuffer[F],S,!1);else{const G=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,H)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),yt(v.__webglDepthbuffer,S,!1);else{const F=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,G)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(S,v,L){const F=i.get(S);v!==void 0&&lt(F.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Ft(S)}function kt(S){const v=S.texture,L=i.get(S),F=i.get(v);S.addEventListener("dispose",P);const G=S.textures,H=S.isWebGLCubeRenderTarget===!0,ct=G.length>1;if(ct||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=v.version,o.memory.textures++),H){L.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[rt]=[];for(let at=0;at<v.mipmaps.length;at++)L.__webglFramebuffer[rt][at]=n.createFramebuffer()}else L.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)L.__webglFramebuffer[rt]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ct)for(let rt=0,at=G.length;rt<at;rt++){const Pt=i.get(G[rt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&$(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let rt=0;rt<G.length;rt++){const at=G[rt];L.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[rt]);const Pt=r.convert(at.format,at.colorSpace),st=r.convert(at.type),pt=A(at.internalFormat,Pt,st,at.colorSpace,S.isXRRenderTarget===!0),wt=J(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,pt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,L.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(L.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),mt(n.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let at=0;at<v.mipmaps.length;at++)lt(L.__webglFramebuffer[rt][at],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else lt(L.__webglFramebuffer[rt],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let rt=0,at=G.length;rt<at;rt++){const Pt=G[rt],st=i.get(Pt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),mt(n.TEXTURE_2D,Pt),lt(L.__webglFramebuffer,S,Pt,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,0),m(Pt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(rt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,F.__webglTexture),mt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let at=0;at<v.mipmaps.length;at++)lt(L.__webglFramebuffer[at],S,v,n.COLOR_ATTACHMENT0,rt,at);else lt(L.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,rt,0);m(v)&&p(rt),e.unbindTexture()}S.depthBuffer&&Ft(S)}function Qt(S){const v=S.textures;for(let L=0,F=v.length;L<F;L++){const G=v[L];if(m(G)){const H=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ct=i.get(G).__webglTexture;e.bindTexture(H,ct),p(H),e.unbindTexture()}}}const R=[],M=[];function q(S){if(S.samples>0){if($(S)===!1){const v=S.textures,L=S.width,F=S.height;let G=n.COLOR_BUFFER_BIT;const H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(S),rt=v.length>1;if(rt)for(let at=0;at<v.length;at++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let at=0;at<v.length;at++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[at]);const Pt=i.get(v[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,L,F,0,0,L,F,G,n.NEAREST),l===!0&&(R.length=0,M.length=0,R.push(n.COLOR_ATTACHMENT0+at),S.depthBuffer&&S.resolveDepthBuffer===!1&&(R.push(H),M.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let at=0;at<v.length;at++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,ct.__webglColorRenderbuffer[at]);const Pt=i.get(v[at]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function J(S){return Math.min(s.maxSamples,S.samples)}function $(S){const v=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function W(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function ot(S,v){const L=S.colorSpace,F=S.format,G=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==di&&L!==ai&&(Jt.getTransfer(L)===ae?(F!==dn||G!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function et(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=T,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=It,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=$}function sS(n,t){function e(i,s=ai){let r;const o=Jt.getTransfer(s);if(i===qn)return n.UNSIGNED_BYTE;if(i===$l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bf)return n.BYTE;if(i===Af)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===Kl)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===Qs)return n.HALF_FLOAT;if(i===Rf)return n.ALPHA;if(i===Cf)return n.RGB;if(i===dn)return n.RGBA;if(i===Pf)return n.LUMINANCE;if(i===Lf)return n.LUMINANCE_ALPHA;if(i===us)return n.DEPTH_COMPONENT;if(i===vs)return n.DEPTH_STENCIL;if(i===Df)return n.RED;if(i===Jl)return n.RED_INTEGER;if(i===If)return n.RG;if(i===Ql)return n.RG_INTEGER;if(i===tc)return n.RGBA_INTEGER;if(i===Vr||i===Gr||i===kr||i===Wr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ka||i===$a||i===Za||i===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qa||i===tl||i===el)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qa||i===tl)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===el)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===ul||i===hl||i===fl||i===dl||i===pl||i===ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===il)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ol)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===al)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ll)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ul)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ml)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xr||i===gl||i===_l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Xr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uf||i===vl||i===xl||i===Ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class rS extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lr extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oS={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const aS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new fi({vertexShader:aS,fragmentShader:lS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new en(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uS extends Bi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new cS,m=e.getContextAttributes();let p=null,A=null;const y=[],b=[],U=new bt;let P=null;const w=new Qe;w.layers.enable(1),w.viewport=new he;const C=new Qe;C.layers.enable(2),C.viewport=new he;const X=[w,C],x=new rS;x.layers.enable(1),x.layers.enable(2);let T=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let lt=y[nt];return lt===void 0&&(lt=new pa,y[nt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(nt){let lt=y[nt];return lt===void 0&&(lt=new pa,y[nt]=lt),lt.getGripSpace()},this.getHand=function(nt){let lt=y[nt];return lt===void 0&&(lt=new pa,y[nt]=lt),lt.getHandSpace()};function O(nt){const lt=b.indexOf(nt.inputSource);if(lt===-1)return;const yt=y[lt];yt!==void 0&&(yt.update(nt.inputSource,nt.frame,c||o),yt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function j(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",Q);for(let nt=0;nt<y.length;nt++){const lt=b[nt];lt!==null&&(b[nt]=null,y[nt].disconnect(lt))}T=null,Z=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,A=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",j),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Ii(d.framebufferWidth,d.framebufferHeight,{format:dn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,yt=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?vs:us,yt=m.stencil?_s:Di);const Ft={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Ii(f.textureWidth,f.textureHeight,{format:dn,type:qn,depthTexture:new Kf(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(nt){for(let lt=0;lt<nt.removed.length;lt++){const yt=nt.removed[lt],_t=b.indexOf(yt);_t>=0&&(b[_t]=null,y[_t].disconnect(yt))}for(let lt=0;lt<nt.added.length;lt++){const yt=nt.added[lt];let _t=b.indexOf(yt);if(_t===-1){for(let It=0;It<y.length;It++)if(It>=b.length){b.push(yt),_t=It;break}else if(b[It]===null){b[It]=yt,_t=It;break}if(_t===-1)break}const Ft=y[_t];Ft&&Ft.connect(yt)}}const V=new D,K=new D;function N(nt,lt,yt){V.setFromMatrixPosition(lt.matrixWorld),K.setFromMatrixPosition(yt.matrixWorld);const _t=V.distanceTo(K),Ft=lt.projectionMatrix.elements,It=yt.projectionMatrix.elements,kt=Ft[14]/(Ft[10]-1),Qt=Ft[14]/(Ft[10]+1),R=(Ft[9]+1)/Ft[5],M=(Ft[9]-1)/Ft[5],q=(Ft[8]-1)/Ft[0],J=(It[8]+1)/It[0],$=kt*q,W=kt*J,ot=_t/(-q+J),et=ot*-q;if(lt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(et),nt.translateZ(ot),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ft[10]===-1)nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const S=kt+ot,v=Qt+ot,L=$-et,F=W+(_t-et),G=R*Qt/v*S,H=M*Qt/v*S;nt.projectionMatrix.makePerspective(L,F,G,H,S,v),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ht(nt,lt){lt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(lt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let lt=nt.near,yt=nt.far;_.texture!==null&&(_.depthNear>0&&(lt=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),x.near=C.near=w.near=lt,x.far=C.far=w.far=yt,(T!==x.near||Z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,Z=x.far);const _t=nt.parent,Ft=x.cameras;ht(x,_t);for(let It=0;It<Ft.length;It++)ht(Ft[It],_t);Ft.length===2?N(x,w,C):x.projectionMatrix.copy(w.projectionMatrix),dt(nt,x,_t)};function dt(nt,lt,yt){yt===null?nt.matrix.copy(lt.matrixWorld):(nt.matrix.copy(yt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(lt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Sl*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let mt=null;function zt(nt,lt){if(u=lt.getViewerPose(c||o),g=lt,u!==null){const yt=u.views;d!==null&&(t.setRenderTargetFramebuffer(A,d.framebuffer),t.setRenderTarget(A));let _t=!1;yt.length!==x.cameras.length&&(x.cameras.length=0,_t=!0);for(let It=0;It<yt.length;It++){const kt=yt[It];let Qt=null;if(d!==null)Qt=d.getViewport(kt);else{const M=h.getViewSubImage(f,kt);Qt=M.viewport,It===0&&(t.setRenderTargetTextures(A,M.colorTexture,f.ignoreDepthValues?void 0:M.depthStencilTexture),t.setRenderTarget(A))}let R=X[It];R===void 0&&(R=new Qe,R.layers.enable(It),R.viewport=new he,X[It]=R),R.matrix.fromArray(kt.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(kt.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),It===0&&(x.matrix.copy(R.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_t===!0&&x.cameras.push(R)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const It=h.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let yt=0;yt<y.length;yt++){const _t=b[yt],Ft=y[yt];_t!==null&&Ft!==void 0&&Ft.update(_t,lt,c||o)}mt&&mt(nt,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),g=null}const Yt=new qf;Yt.setAnimationLoop(zt),this.setAnimationLoop=function(nt){mt=nt},this.dispose=function(){}}}const Ei=new _n,hS=new le;function fS(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Wf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=t.get(p),y=A.envMap,b=A.envMapRotation;y&&(m.envMap.value=y,Ei.copy(b),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(hS.makeRotationFromEuler(Ei)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){const b=y.program;i.uniformBlockBinding(A,b)}function c(A,y){let b=s[A.id];b===void 0&&(g(A),b=u(A),s[A.id]=b,A.addEventListener("dispose",m));const U=y.program;i.updateUBOMapping(A,U);const P=t.render.frame;r[A.id]!==P&&(f(A),r[A.id]=P)}function u(A){const y=h();A.__bindingPointIndex=y;const b=n.createBuffer(),U=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,U,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const y=s[A.id],b=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,w=b.length;P<w;P++){const C=Array.isArray(b[P])?b[P]:[b[P]];for(let X=0,x=C.length;X<x;X++){const T=C[X];if(d(T,P,X,U)===!0){const Z=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let j=0;for(let Q=0;Q<O.length;Q++){const V=O[Q],K=_(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,Z+j,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,j),j+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,y,b,U){const P=A.value,w=y+"_"+b;if(U[w]===void 0)return typeof P=="number"||typeof P=="boolean"?U[w]=P:U[w]=P.clone(),!0;{const C=U[w];if(typeof P=="number"||typeof P=="boolean"){if(C!==P)return U[w]=P,!0}else if(C.equals(P)===!1)return C.copy(P),!0}return!1}function g(A){const y=A.uniforms;let b=0;const U=16;for(let w=0,C=y.length;w<C;w++){const X=Array.isArray(y[w])?y[w]:[y[w]];for(let x=0,T=X.length;x<T;x++){const Z=X[x],O=Array.isArray(Z.value)?Z.value:[Z.value];for(let j=0,Q=O.length;j<Q;j++){const V=O[j],K=_(V),N=b%U,ht=N%K.boundary,dt=N+ht;b+=ht,dt!==0&&U-dt<K.storage&&(b+=U-dt),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=b,b+=K.storage}}}const P=b%U;return P>0&&(b+=U-P),A.__size=b,A.__cache={},this}function _(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function m(A){const y=A.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class pS{constructor(t={}){const{canvas:e=e_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=ci,this.toneMappingExposure=1;const y=this;let b=!1,U=0,P=0,w=null,C=-1,X=null;const x=new he,T=new he;let Z=null;const O=new Wt(0);let j=0,Q=e.width,V=e.height,K=1,N=null,ht=null;const dt=new he(0,0,Q,V),mt=new he(0,0,Q,V);let zt=!1;const Yt=new ic;let nt=!1,lt=!1;const yt=new le,_t=new le,Ft=new D,It=new he,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function R(){return w===null?K:1}let M=i;function q(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ql}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",St,!1),M===null){const B="webgl2";if(M=q(B,E),M===null)throw q(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,$,W,ot,et,S,v,L,F,G,H,ct,rt,at,Pt,st,pt,wt,Dt,Et,Ut,Lt,te,I;function Mt(){J=new xx(M),J.init(),Lt=new sS(M,J),$=new dx(M,J,t,Lt),W=new eS(M),$.reverseDepthBuffer&&W.buffers.depth.setReversed(!0),ot=new yx(M),et=new HM,S=new iS(M,J,W,et,$,Lt,ot),v=new mx(y),L=new vx(y),F=new C_(M),te=new hx(M,F),G=new Mx(M,F,ot,te),H=new Tx(M,G,F,ot),Dt=new Ex(M,$,S),st=new px(et),ct=new zM(y,v,L,J,$,te,st),rt=new fS(y,et),at=new GM,Pt=new jM(J),wt=new ux(y,v,L,W,H,f,l),pt=new QM(y,H,$),I=new dS(M,ot,$,W),Et=new fx(M,J,ot),Ut=new Sx(M,J,ot),ot.programs=ct.programs,y.capabilities=$,y.extensions=J,y.properties=et,y.renderLists=at,y.shadowMap=pt,y.state=W,y.info=ot}Mt();const tt=new uS(y,M);this.xr=tt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(Q,V,!1))},this.getSize=function(E){return E.set(Q,V)},this.setSize=function(E,B,k=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,V=B,e.width=Math.floor(E*K),e.height=Math.floor(B*K),k===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Q*K,V*K).floor()},this.setDrawingBufferSize=function(E,B,k){Q=E,V=B,K=k,e.width=Math.floor(E*k),e.height=Math.floor(B*k),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(dt)},this.setViewport=function(E,B,k,Y){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,B,k,Y),W.viewport(x.copy(dt).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(mt)},this.setScissor=function(E,B,k,Y){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,B,k,Y),W.scissor(T.copy(mt).multiplyScalar(K).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(E){W.setScissorTest(zt=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(E=!0,B=!0,k=!0){let Y=0;if(E){let z=!1;if(w!==null){const ut=w.texture.format;z=ut===tc||ut===Ql||ut===Jl}if(z){const ut=w.texture.type,xt=ut===qn||ut===Di||ut===js||ut===_s||ut===$l||ut===Zl,Tt=wt.getClearColor(),At=wt.getClearAlpha(),Nt=Tt.r,Ot=Tt.g,Rt=Tt.b;xt?(d[0]=Nt,d[1]=Ot,d[2]=Rt,d[3]=At,M.clearBufferuiv(M.COLOR,0,d)):(g[0]=Nt,g[1]=Ot,g[2]=Rt,g[3]=At,M.clearBufferiv(M.COLOR,0,g))}else Y|=M.COLOR_BUFFER_BIT}B&&(Y|=M.DEPTH_BUFFER_BIT,M.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(Y|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),at.dispose(),Pt.dispose(),et.dispose(),v.dispose(),L.dispose(),H.dispose(),te.dispose(),I.dispose(),ct.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",hc),tt.removeEventListener("sessionend",fc),mi.stop()};function it(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=ot.autoReset,B=pt.enabled,k=pt.autoUpdate,Y=pt.needsUpdate,z=pt.type;Mt(),ot.autoReset=E,pt.enabled=B,pt.autoUpdate=k,pt.needsUpdate=Y,pt.type=z}function St(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xt(E){const B=E.target;B.removeEventListener("dispose",Xt),pe(B)}function pe(E){Oe(E),et.remove(E)}function Oe(E){const B=et.get(E).programs;B!==void 0&&(B.forEach(function(k){ct.releaseProgram(k)}),E.isShaderMaterial&&ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,k,Y,z,ut){B===null&&(B=kt);const xt=z.isMesh&&z.matrixWorld.determinant()<0,Tt=cd(E,B,k,Y,z);W.setMaterial(Y,xt);let At=k.index,Nt=1;if(Y.wireframe===!0){if(At=G.getWireframeAttribute(k),At===void 0)return;Nt=2}const Ot=k.drawRange,Rt=k.attributes.position;let ee=Ot.start*Nt,oe=(Ot.start+Ot.count)*Nt;ut!==null&&(ee=Math.max(ee,ut.start*Nt),oe=Math.min(oe,(ut.start+ut.count)*Nt)),At!==null?(ee=Math.max(ee,0),oe=Math.min(oe,At.count)):Rt!=null&&(ee=Math.max(ee,0),oe=Math.min(oe,Rt.count));const ce=oe-ee;if(ce<0||ce===1/0)return;te.setup(z,Y,Tt,k,At);let Ye,jt=Et;if(At!==null&&(Ye=F.get(At),jt=Ut,jt.setIndex(Ye)),z.isMesh)Y.wireframe===!0?(W.setLineWidth(Y.wireframeLinewidth*R()),jt.setMode(M.LINES)):jt.setMode(M.TRIANGLES);else if(z.isLine){let Ct=Y.linewidth;Ct===void 0&&(Ct=1),W.setLineWidth(Ct*R()),z.isLineSegments?jt.setMode(M.LINES):z.isLineLoop?jt.setMode(M.LINE_LOOP):jt.setMode(M.LINE_STRIP)}else z.isPoints?jt.setMode(M.POINTS):z.isSprite&&jt.setMode(M.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)jt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))jt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ct=z._multiDrawStarts,ye=z._multiDrawCounts,Kt=z._multiDrawCount,on=At?F.get(At).bytesPerElement:1,zi=et.get(Y).currentProgram.getUniforms();for(let qe=0;qe<Kt;qe++)zi.setValue(M,"_gl_DrawID",qe),jt.render(Ct[qe]/on,ye[qe])}else if(z.isInstancedMesh)jt.renderInstances(ee,ce,z.count);else if(k.isInstancedBufferGeometry){const Ct=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ye=Math.min(k.instanceCount,Ct);jt.renderInstances(ee,ce,ye)}else jt.render(ee,ce)};function qt(E,B,k){E.transparent===!0&&E.side===bn&&E.forceSinglePass===!1?(E.side=ke,E.needsUpdate=!0,rr(E,B,k),E.side=hi,E.needsUpdate=!0,rr(E,B,k),E.side=bn):rr(E,B,k)}this.compile=function(E,B,k=null){k===null&&(k=E),m=Pt.get(k),m.init(B),A.push(m),k.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==k&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const Y=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ut=z.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Tt=ut[xt];qt(Tt,k,z),Y.add(Tt)}else qt(ut,k,z),Y.add(ut)}),A.pop(),m=null,Y},this.compileAsync=function(E,B,k=null){const Y=this.compile(E,B,k);return new Promise(z=>{function ut(){if(Y.forEach(function(xt){et.get(xt).currentProgram.isReady()&&Y.delete(xt)}),Y.size===0){z(E);return}setTimeout(ut,10)}J.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Be=null;function Ln(E){Be&&Be(E)}function hc(){mi.stop()}function fc(){mi.start()}const mi=new qf;mi.setAnimationLoop(Ln),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(E){Be=E,tt.setAnimationLoop(E),E===null?mi.stop():mi.start()},tt.addEventListener("sessionstart",hc),tt.addEventListener("sessionend",fc),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(B),B=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,B,w),m=Pt.get(E,A.length),m.init(B),A.push(m),_t.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Yt.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,nt=st.init(this.clippingPlanes,lt),_=at.get(E,p.length),_.init(),p.push(_),tt.enabled===!0&&tt.isPresenting===!0){const ut=y.xr.getDepthSensingMesh();ut!==null&&To(ut,B,-1/0,y.sortObjects)}To(E,B,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(N,ht),Qt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Qt&&wt.addToRenderList(_,E),this.info.render.frame++,nt===!0&&st.beginShadows();const k=m.state.shadowsArray;pt.render(k,E,B),nt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,z=_.transmissive;if(m.setupLights(),B.isArrayCamera){const ut=B.cameras;if(z.length>0)for(let xt=0,Tt=ut.length;xt<Tt;xt++){const At=ut[xt];pc(Y,z,E,At)}Qt&&wt.render(E);for(let xt=0,Tt=ut.length;xt<Tt;xt++){const At=ut[xt];dc(_,E,At,At.viewport)}}else z.length>0&&pc(Y,z,E,B),Qt&&wt.render(E),dc(_,E,B);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(y,E,B),te.resetDefaultState(),C=-1,X=null,A.pop(),A.length>0?(m=A[A.length-1],nt===!0&&st.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function To(E,B,k,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Yt.intersectsSprite(E)){Y&&It.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const xt=H.update(E),Tt=E.material;Tt.visible&&_.push(E,xt,Tt,k,It.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Yt.intersectsObject(E))){const xt=H.update(E),Tt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),It.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),It.copy(xt.boundingSphere.center)),It.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(Tt)){const At=xt.groups;for(let Nt=0,Ot=At.length;Nt<Ot;Nt++){const Rt=At[Nt],ee=Tt[Rt.materialIndex];ee&&ee.visible&&_.push(E,xt,ee,k,It.z,Rt)}}else Tt.visible&&_.push(E,xt,Tt,k,It.z,null)}}const ut=E.children;for(let xt=0,Tt=ut.length;xt<Tt;xt++)To(ut[xt],B,k,Y)}function dc(E,B,k,Y){const z=E.opaque,ut=E.transmissive,xt=E.transparent;m.setupLightsView(k),nt===!0&&st.setGlobalState(y.clippingPlanes,k),Y&&W.viewport(x.copy(Y)),z.length>0&&sr(z,B,k),ut.length>0&&sr(ut,B,k),xt.length>0&&sr(xt,B,k),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function pc(E,B,k,Y){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Ii(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Qs:qn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ut=m.state.transmissionRenderTarget[Y.id],xt=Y.viewport||x;ut.setSize(xt.z,xt.w);const Tt=y.getRenderTarget();y.setRenderTarget(ut),y.getClearColor(O),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Qt&&wt.render(k);const At=y.toneMapping;y.toneMapping=ci;const Nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),nt===!0&&st.setGlobalState(y.clippingPlanes,Y),sr(E,k,Y),S.updateMultisampleRenderTarget(ut),S.updateRenderTargetMipmap(ut),J.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Rt=0,ee=B.length;Rt<ee;Rt++){const oe=B[Rt],ce=oe.object,Ye=oe.geometry,jt=oe.material,Ct=oe.group;if(jt.side===bn&&ce.layers.test(Y.layers)){const ye=jt.side;jt.side=ke,jt.needsUpdate=!0,mc(ce,k,Y,Ye,jt,Ct),jt.side=ye,jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(S.updateMultisampleRenderTarget(ut),S.updateRenderTargetMipmap(ut))}y.setRenderTarget(Tt),y.setClearColor(O,j),Nt!==void 0&&(Y.viewport=Nt),y.toneMapping=At}function sr(E,B,k){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ut=E.length;z<ut;z++){const xt=E[z],Tt=xt.object,At=xt.geometry,Nt=Y===null?xt.material:Y,Ot=xt.group;Tt.layers.test(k.layers)&&mc(Tt,B,k,At,Nt,Ot)}}function mc(E,B,k,Y,z,ut){E.onBeforeRender(y,B,k,Y,z,ut),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(y,B,k,Y,E,ut),z.transparent===!0&&z.side===bn&&z.forceSinglePass===!1?(z.side=ke,z.needsUpdate=!0,y.renderBufferDirect(k,B,Y,z,E,ut),z.side=hi,z.needsUpdate=!0,y.renderBufferDirect(k,B,Y,z,E,ut),z.side=bn):y.renderBufferDirect(k,B,Y,z,E,ut),E.onAfterRender(y,B,k,Y,z,ut)}function rr(E,B,k){B.isScene!==!0&&(B=kt);const Y=et.get(E),z=m.state.lights,ut=m.state.shadowsArray,xt=z.state.version,Tt=ct.getParameters(E,z.state,ut,B,k),At=ct.getProgramCacheKey(Tt);let Nt=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?L:v).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Xt),Nt=new Map,Y.programs=Nt);let Ot=Nt.get(At);if(Ot!==void 0){if(Y.currentProgram===Ot&&Y.lightsStateVersion===xt)return _c(E,Tt),Ot}else Tt.uniforms=ct.getUniforms(E),E.onBeforeCompile(Tt,y),Ot=ct.acquireProgram(Tt,At),Nt.set(At,Ot),Y.uniforms=Tt.uniforms;const Rt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=st.uniform),_c(E,Tt),Y.needsLights=hd(E),Y.lightsStateVersion=xt,Y.needsLights&&(Rt.ambientLightColor.value=z.state.ambient,Rt.lightProbe.value=z.state.probe,Rt.directionalLights.value=z.state.directional,Rt.directionalLightShadows.value=z.state.directionalShadow,Rt.spotLights.value=z.state.spot,Rt.spotLightShadows.value=z.state.spotShadow,Rt.rectAreaLights.value=z.state.rectArea,Rt.ltc_1.value=z.state.rectAreaLTC1,Rt.ltc_2.value=z.state.rectAreaLTC2,Rt.pointLights.value=z.state.point,Rt.pointLightShadows.value=z.state.pointShadow,Rt.hemisphereLights.value=z.state.hemi,Rt.directionalShadowMap.value=z.state.directionalShadowMap,Rt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Rt.spotShadowMap.value=z.state.spotShadowMap,Rt.spotLightMatrix.value=z.state.spotLightMatrix,Rt.spotLightMap.value=z.state.spotLightMap,Rt.pointShadowMap.value=z.state.pointShadowMap,Rt.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Ot,Y.uniformsList=null,Ot}function gc(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=jr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function _c(E,B){const k=et.get(E);k.outputColorSpace=B.outputColorSpace,k.batching=B.batching,k.batchingColor=B.batchingColor,k.instancing=B.instancing,k.instancingColor=B.instancingColor,k.instancingMorph=B.instancingMorph,k.skinning=B.skinning,k.morphTargets=B.morphTargets,k.morphNormals=B.morphNormals,k.morphColors=B.morphColors,k.morphTargetsCount=B.morphTargetsCount,k.numClippingPlanes=B.numClippingPlanes,k.numIntersection=B.numClipIntersection,k.vertexAlphas=B.vertexAlphas,k.vertexTangents=B.vertexTangents,k.toneMapping=B.toneMapping}function cd(E,B,k,Y,z){B.isScene!==!0&&(B=kt),S.resetTextureUnits();const ut=B.fog,xt=Y.isMeshStandardMaterial?B.environment:null,Tt=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:di,At=(Y.isMeshStandardMaterial?L:v).get(Y.envMap||xt),Nt=Y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ot=!!k.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Rt=!!k.morphAttributes.position,ee=!!k.morphAttributes.normal,oe=!!k.morphAttributes.color;let ce=ci;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ce=y.toneMapping);const Ye=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,jt=Ye!==void 0?Ye.length:0,Ct=et.get(Y),ye=m.state.lights;if(nt===!0&&(lt===!0||E!==X)){const Ze=E===X&&Y.id===C;st.setState(Y,E,Ze)}let Kt=!1;Y.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ye.state.version||Ct.outputColorSpace!==Tt||z.isBatchedMesh&&Ct.batching===!1||!z.isBatchedMesh&&Ct.batching===!0||z.isBatchedMesh&&Ct.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ct.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ct.instancing===!1||!z.isInstancedMesh&&Ct.instancing===!0||z.isSkinnedMesh&&Ct.skinning===!1||!z.isSkinnedMesh&&Ct.skinning===!0||z.isInstancedMesh&&Ct.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ct.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ct.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ct.instancingMorph===!1&&z.morphTexture!==null||Ct.envMap!==At||Y.fog===!0&&Ct.fog!==ut||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==st.numPlanes||Ct.numIntersection!==st.numIntersection)||Ct.vertexAlphas!==Nt||Ct.vertexTangents!==Ot||Ct.morphTargets!==Rt||Ct.morphNormals!==ee||Ct.morphColors!==oe||Ct.toneMapping!==ce||Ct.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,Ct.__version=Y.version);let on=Ct.currentProgram;Kt===!0&&(on=rr(Y,B,z));let zi=!1,qe=!1,bo=!1;const de=on.getUniforms(),$n=Ct.uniforms;if(W.useProgram(on.program)&&(zi=!0,qe=!0,bo=!0),Y.id!==C&&(C=Y.id,qe=!0),zi||X!==E){$.reverseDepthBuffer?(yt.copy(E.projectionMatrix),i_(yt),s_(yt),de.setValue(M,"projectionMatrix",yt)):de.setValue(M,"projectionMatrix",E.projectionMatrix),de.setValue(M,"viewMatrix",E.matrixWorldInverse);const Ze=de.map.cameraPosition;Ze!==void 0&&Ze.setValue(M,Ft.setFromMatrixPosition(E.matrixWorld)),$.logarithmicDepthBuffer&&de.setValue(M,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&de.setValue(M,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,qe=!0,bo=!0)}if(z.isSkinnedMesh){de.setOptional(M,z,"bindMatrix"),de.setOptional(M,z,"bindMatrixInverse");const Ze=z.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),de.setValue(M,"boneTexture",Ze.boneTexture,S))}z.isBatchedMesh&&(de.setOptional(M,z,"batchingTexture"),de.setValue(M,"batchingTexture",z._matricesTexture,S),de.setOptional(M,z,"batchingIdTexture"),de.setValue(M,"batchingIdTexture",z._indirectTexture,S),de.setOptional(M,z,"batchingColorTexture"),z._colorsTexture!==null&&de.setValue(M,"batchingColorTexture",z._colorsTexture,S));const Ao=k.morphAttributes;if((Ao.position!==void 0||Ao.normal!==void 0||Ao.color!==void 0)&&Dt.update(z,k,on),(qe||Ct.receiveShadow!==z.receiveShadow)&&(Ct.receiveShadow=z.receiveShadow,de.setValue(M,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&($n.envMap.value=At,$n.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&($n.envMapIntensity.value=B.environmentIntensity),qe&&(de.setValue(M,"toneMappingExposure",y.toneMappingExposure),Ct.needsLights&&ud($n,bo),ut&&Y.fog===!0&&rt.refreshFogUniforms($n,ut),rt.refreshMaterialUniforms($n,Y,K,V,m.state.transmissionRenderTarget[E.id]),jr.upload(M,gc(Ct),$n,S)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(jr.upload(M,gc(Ct),$n,S),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&de.setValue(M,"center",z.center),de.setValue(M,"modelViewMatrix",z.modelViewMatrix),de.setValue(M,"normalMatrix",z.normalMatrix),de.setValue(M,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ze=Y.uniformsGroups;for(let wo=0,fd=Ze.length;wo<fd;wo++){const vc=Ze[wo];I.update(vc,on),I.bind(vc,on)}}return on}function ud(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function hd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,B,k){et.get(E.texture).__webglTexture=B,et.get(E.depthTexture).__webglTexture=k;const Y=et.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=k===void 0,Y.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const k=et.get(E);k.__webglFramebuffer=B,k.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,k=0){w=E,U=B,P=k;let Y=!0,z=null,ut=!1,xt=!1;if(E){const At=et.get(E);if(At.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(M.FRAMEBUFFER,null),Y=!1;else if(At.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(At.__hasExternalTextures)S.rebindTextures(E,et.get(E.texture).__webglTexture,et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Rt=E.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&et.has(Rt)&&(E.width!==Rt.image.width||E.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(xt=!0);const Ot=et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[B])?z=Ot[B][k]:z=Ot[B],ut=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?z=et.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[k]:z=Ot,x.copy(E.viewport),T.copy(E.scissor),Z=E.scissorTest}else x.copy(dt).multiplyScalar(K).floor(),T.copy(mt).multiplyScalar(K).floor(),Z=zt;if(W.bindFramebuffer(M.FRAMEBUFFER,z)&&Y&&W.drawBuffers(E,z),W.viewport(x),W.scissor(T),W.setScissorTest(Z),ut){const At=et.get(E.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,k)}else if(xt){const At=et.get(E.texture),Nt=B||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,At.__webglTexture,k||0,Nt)}C=-1},this.readRenderTargetPixels=function(E,B,k,Y,z,ut,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){W.bindFramebuffer(M.FRAMEBUFFER,Tt);try{const At=E.texture,Nt=At.format,Ot=At.type;if(!$.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&k>=0&&k<=E.height-z&&M.readPixels(B,k,Y,z,Lt.convert(Nt),Lt.convert(Ot),ut)}finally{const At=w!==null?et.get(w).__webglFramebuffer:null;W.bindFramebuffer(M.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(E,B,k,Y,z,ut,xt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){const At=E.texture,Nt=At.format,Ot=At.type;if(!$.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-Y&&k>=0&&k<=E.height-z){W.bindFramebuffer(M.FRAMEBUFFER,Tt);const Rt=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Rt),M.bufferData(M.PIXEL_PACK_BUFFER,ut.byteLength,M.STREAM_READ),M.readPixels(B,k,Y,z,Lt.convert(Nt),Lt.convert(Ot),0);const ee=w!==null?et.get(w).__webglFramebuffer:null;W.bindFramebuffer(M.FRAMEBUFFER,ee);const oe=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await n_(M,oe,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Rt),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,ut),M.deleteBuffer(Rt),M.deleteSync(oe),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,k=0){E.isTexture!==!0&&(qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-k),z=Math.floor(E.image.width*Y),ut=Math.floor(E.image.height*Y),xt=B!==null?B.x:0,Tt=B!==null?B.y:0;S.setTexture2D(E,0),M.copyTexSubImage2D(M.TEXTURE_2D,k,0,0,xt,Tt,z,ut),W.unbindTexture()},this.copyTextureToTexture=function(E,B,k=null,Y=null,z=0){E.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],B=arguments[2],z=arguments[3]||0,k=null);let ut,xt,Tt,At,Nt,Ot;k!==null?(ut=k.max.x-k.min.x,xt=k.max.y-k.min.y,Tt=k.min.x,At=k.min.y):(ut=E.image.width,xt=E.image.height,Tt=0,At=0),Y!==null?(Nt=Y.x,Ot=Y.y):(Nt=0,Ot=0);const Rt=Lt.convert(B.format),ee=Lt.convert(B.type);S.setTexture2D(B,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,B.unpackAlignment);const oe=M.getParameter(M.UNPACK_ROW_LENGTH),ce=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Ye=M.getParameter(M.UNPACK_SKIP_PIXELS),jt=M.getParameter(M.UNPACK_SKIP_ROWS),Ct=M.getParameter(M.UNPACK_SKIP_IMAGES),ye=E.isCompressedTexture?E.mipmaps[z]:E.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,ye.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ye.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Tt),M.pixelStorei(M.UNPACK_SKIP_ROWS,At),E.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,z,Nt,Ot,ut,xt,Rt,ee,ye.data):E.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,z,Nt,Ot,ye.width,ye.height,Rt,ye.data):M.texSubImage2D(M.TEXTURE_2D,z,Nt,Ot,ut,xt,Rt,ee,ye),M.pixelStorei(M.UNPACK_ROW_LENGTH,oe),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ce),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ye),M.pixelStorei(M.UNPACK_SKIP_ROWS,jt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ct),z===0&&B.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(E,B,k=null,Y=null,z=0){E.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],B=arguments[3],z=arguments[4]||0);let ut,xt,Tt,At,Nt,Ot,Rt,ee,oe;const ce=E.isCompressedTexture?E.mipmaps[z]:E.image;k!==null?(ut=k.max.x-k.min.x,xt=k.max.y-k.min.y,Tt=k.max.z-k.min.z,At=k.min.x,Nt=k.min.y,Ot=k.min.z):(ut=ce.width,xt=ce.height,Tt=ce.depth,At=0,Nt=0,Ot=0),Y!==null?(Rt=Y.x,ee=Y.y,oe=Y.z):(Rt=0,ee=0,oe=0);const Ye=Lt.convert(B.format),jt=Lt.convert(B.type);let Ct;if(B.isData3DTexture)S.setTexture3D(B,0),Ct=M.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S.setTexture2DArray(B,0),Ct=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,B.unpackAlignment);const ye=M.getParameter(M.UNPACK_ROW_LENGTH),Kt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),on=M.getParameter(M.UNPACK_SKIP_PIXELS),zi=M.getParameter(M.UNPACK_SKIP_ROWS),qe=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,ce.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ce.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,At),M.pixelStorei(M.UNPACK_SKIP_ROWS,Nt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ot),E.isDataTexture||E.isData3DTexture?M.texSubImage3D(Ct,z,Rt,ee,oe,ut,xt,Tt,Ye,jt,ce.data):B.isCompressedArrayTexture?M.compressedTexSubImage3D(Ct,z,Rt,ee,oe,ut,xt,Tt,Ye,ce.data):M.texSubImage3D(Ct,z,Rt,ee,oe,ut,xt,Tt,Ye,jt,ce),M.pixelStorei(M.UNPACK_ROW_LENGTH,ye),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Kt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,on),M.pixelStorei(M.UNPACK_SKIP_ROWS,zi),M.pixelStorei(M.UNPACK_SKIP_IMAGES,qe),z===0&&B.generateMipmaps&&M.generateMipmap(Ct),W.unbindTexture()},this.initRenderTarget=function(E){et.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),W.unbindTexture()},this.resetState=function(){U=0,P=0,w=null,W.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===nc?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Mo?"display-p3":"srgb"}}class mS extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class td extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oo=new D,ao=new D,ku=new le,Cs=new So,Dr=new nr,ma=new D,Wu=new D;class gS extends Se{constructor(t=new rn,e=new td){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)oo.fromBufferAttribute(e,s-1),ao.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=oo.distanceTo(ao);t.setAttribute("lineDistance",new Xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;ku.copy(s).invert(),Cs.copy(t.ray).applyMatrix4(ku);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),A=u.getX(_+1),y=Ir(this,t,Cs,l,p,A);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Ir(this,t,Cs,l,_,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Ir(this,t,Cs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Ir(this,t,Cs,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ir(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(oo.fromBufferAttribute(o,s),ao.fromBufferAttribute(o,r),e.distanceSqToSegment(oo,ao,ma,Wu)>i)return;ma.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ma);if(!(l<t.near||l>t.far))return{distance:l,point:Wu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Xu=new D,Yu=new D;class _S extends gS{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Xu.fromBufferAttribute(e,s),Yu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xu.distanceTo(Yu);t.setAttribute("lineDistance",new Xe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ed extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qu=new le,El=new So,Ur=new nr,Nr=new D;class ju extends Se{constructor(t=new rn,e=new ed){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;qu.copy(s).invert(),El.copy(t.ray).applyMatrix4(qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Nr.fromBufferAttribute(h,m),Ku(Nr,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Nr.fromBufferAttribute(h,g),Ku(Nr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ku(n,t,e,i,s,r,o){const a=El.distanceSqToPoint(n);if(a<e){const l=new D;El.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new bt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,s=[],r=[],o=[],a=new D,l=new le;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nd extends Kn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new bt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vS extends nd{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Fr=new D,ga=new rc,_a=new rc,va=new rc;class xS extends Kn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Fr.subVectors(s[0],s[1]).add(s[0]),c=Fr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ga.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),_a.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),va.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),_a.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),va.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ga.calc(l),_a.calc(l),va.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $u(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function MS(n,t){const e=1-n;return e*e*t}function SS(n,t){return 2*(1-n)*n*t}function yS(n,t){return n*n*t}function Vs(n,t,e,i){return MS(n,t)+SS(n,e)+yS(n,i)}function ES(n,t){const e=1-n;return e*e*e*t}function TS(n,t){const e=1-n;return 3*e*e*n*t}function bS(n,t){return 3*(1-n)*n*n*t}function AS(n,t){return n*n*n*t}function Gs(n,t,e,i,s){return ES(n,t)+TS(n,e)+bS(n,i)+AS(n,s)}class wS extends Kn{constructor(t=new bt,e=new bt,i=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new bt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class RS extends Kn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y),Gs(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class CS extends Kn{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class PS extends Kn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class LS extends Kn{constructor(t=new bt,e=new bt,i=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new bt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oc extends Kn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y),Vs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class DS extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set($u(a,l.x,c.x,u.x,h.x),$u(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new bt().fromArray(s))}return this}}var IS=Object.freeze({__proto__:null,ArcCurve:vS,CatmullRomCurve3:xS,CubicBezierCurve:wS,CubicBezierCurve3:RS,EllipseCurve:nd,LineCurve:CS,LineCurve3:PS,QuadraticBezierCurve:LS,QuadraticBezierCurve3:oc,SplineCurve:DS});class ac extends rn{constructor(t=new oc(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new bt;let u=new D;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(d,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),A(),p()}function m(y){u=t.getPointAt(y/e,u);const b=o.normals[y],U=o.binormals[y];for(let P=0;P<=s;P++){const w=P/s*Math.PI*2,C=Math.sin(w),X=-Math.cos(w);l.x=X*b.x+C*U.x,l.y=X*b.y+C*U.y,l.z=X*b.z+C*U.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let b=1;b<=s;b++){const U=(s+1)*(y-1)+(b-1),P=(s+1)*y+(b-1),w=(s+1)*y+b,C=(s+1)*(y-1)+b;g.push(U,P,C),g.push(P,w,C)}}function A(){for(let y=0;y<=e;y++)for(let b=0;b<=s;b++)c.x=y/e,c.y=b/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ac(new IS[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class US extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class NS extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class id extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const xa=new le,Zu=new D,Ju=new D;class FS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ic,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zu),Ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ju),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class OS extends FS{constructor(){super(new jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qu extends id{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new OS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class BS extends id{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class th{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zS extends _S{constructor(t=10,e=10,i=4473924,s=8947848){i=new Wt(i),s=new Wt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=e;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?i:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new rn;u.setAttribute("position",new Xe(l,3)),u.setAttribute("color",new Xe(c,3));const h=new td({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class HS extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);const eh={type:"change"},lc={type:"start"},sd={type:"end"},Or=new So,nh=new si,VS=Math.cos(70*t_.DEG2RAD),_e=new D,He=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ma=1e-6;class GS extends HS{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ui,this._lastTargetPosition=new D,this._quat=new Ui().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new th,this._sphericalDelta=new th,this._scale=1,this._panOffset=new D,this._rotateStart=new bt,this._rotateEnd=new bt,this._rotateDelta=new bt,this._panStart=new bt,this._panEnd=new bt,this._panDelta=new bt,this._dollyStart=new bt,this._dollyEnd=new bt,this._dollyDelta=new bt,this._dollyDirection=new D,this._mouse=new bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WS.bind(this),this._onPointerDown=kS.bind(this),this._onPointerUp=XS.bind(this),this._onContextMenu=JS.bind(this),this._onMouseWheel=jS.bind(this),this._onKeyDown=KS.bind(this),this._onTouchStart=$S.bind(this),this._onTouchMove=ZS.bind(this),this._onMouseDown=YS.bind(this),this._onMouseMove=qS.bind(this),this._interceptControlDown=QS.bind(this),this._interceptControlUp=ty.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eh),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=He:i>Math.PI&&(i-=He),s<-Math.PI?s+=He:s>Math.PI&&(s-=He),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Or.origin.copy(this.object.position),Or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Or.direction))<VS?this.object.lookAt(this.target):(nh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Or.intersectPlane(nh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ma||this._lastTargetPosition.distanceToSquared(this.target)>Ma?(this.dispatchEvent(eh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function kS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function WS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function XS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sd),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function YS(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ne.DOLLY;break;case ls.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}break;case ls.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(lc)}function qS(n){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function jS(n){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(n.preventDefault(),this.dispatchEvent(lc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(sd))}function KS(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function $S(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ne.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ne.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(lc)}function ZS(n){switch(this._trackPointer(n),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ne.NONE}}function JS(n){this.enabled!==!1&&n.preventDefault()}function QS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ty(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ey={banana:iy};function ny(n){const t=ey[n];return t?t():null}function iy(){const t=new oc(new D(0,0,0),new D(90,0,32.4),new D(180,0,0)),e=40,i=14,s=180*.075,r=new ac(t,e,s,i,!1),o=r.attributes.position,a=e+1,l=i+1,c=.18,u=new D;for(let _=0;_<a;_++){const m=_/e,p=Math.pow(Math.sin(Math.PI*m),.7),A=c+(1-c)*p;t.getPointAt(m,u);for(let y=0;y<l;y++){const b=_*l+y,U=o.getX(b)-u.x,P=o.getY(b)-u.y,w=o.getZ(b)-u.z;o.setXYZ(b,u.x+U*A,u.y+P*A,u.z+w*A)}}o.needsUpdate=!0,r.computeVertexNormals(),r.computeBoundingBox();const h=r.boundingBox;r.translate(-h.min.x,0,-h.min.z),r.computeBoundingBox();const f=r.boundingBox,d=new NS({color:15258188});return{object:new en(r,d),lengthMm:f.max.x-f.min.x,dispose(){r.dispose(),d.dispose()}}}const ih=5;function sy(n,t){const e=Br(null);let i=null,s=null,r=null,o=null,a=null,l=null,c=null,u=null,h=null,f=!1,d=0,g=null;const _=new US({color:13620964,metalness:.1,roughness:.55,side:bn,flatShading:!0}),m=new ed({color:16733559,size:1.2,sizeAttenuation:!1});function p(){if(!s)return;c&&(s.remove(c),c.geometry.dispose(),c.material.dispose());const C=Math.max(t.value.w,t.value.h)*2;c=new zS(C,Math.max(4,Math.round(C/10)),6710886,3355443),c.rotation.x=Math.PI/2,c.position.set(t.value.w/2,t.value.h/2,0),s.add(c)}function A(){if(!r||!o)return;const{w:C,h:X,t:x}=t.value,T=Math.sqrt(C*C+X*X)*.9+x;r.position.set(C/2+T*.6,-X*.8-T*.4,T*.9),r.up.set(0,0,1),o.target.set(C/2,X/2,x/2),o.update()}function y(C){s&&(a&&(s.remove(a),a.geometry.dispose(),a=null),l&&(s.remove(l),l.geometry.dispose(),l=null),C&&(a=new en(C,_),a.castShadow=!1,s.add(a),f&&(l=new ju(C,m),s.add(l))))}function b(){if(!u)return;const{w:C,h:X}=t.value;C>=X?(u.object.rotation.set(0,0,0),u.object.position.set(C+ih,X/2,0)):(u.object.rotation.set(0,0,Math.PI/2),u.object.position.set(C/2,X+ih,0))}function U(C){if(C!==h&&(u&&(s?.remove(u.object),u.dispose(),u=null),h=C,C&&s)){const X=ny(C);X?(u=X,s.add(u.object),b()):h=null}}function P(C){f=C,!(!s||!a)&&(l&&(s.remove(l),l.geometry.dispose(),l=null),C&&(l=new ju(a.geometry,m),s.add(l)))}function w(){const C=n.value;if(!C||!i||!r)return;const X=C.clientWidth,x=C.clientHeight;X===0||x===0||(i.setSize(X,x,!1),r.aspect=X/x,r.updateProjectionMatrix())}return Vl(()=>{const C=n.value;if(!C)return;s=new mS,s.background=new Wt(2040624),r=new Qe(45,1,.1,5e3),r.up.set(0,0,1),i=new pS({antialias:!0}),i.setPixelRatio(window.devicePixelRatio),i.domElement.style.display="block",i.domElement.style.width="100%",i.domElement.style.height="100%",C.appendChild(i.domElement),o=new GS(r,i.domElement),o.enableDamping=!0;const X=new BS(16777215,.55);s.add(X);const x=new Qu(16777215,.85);x.position.set(40,-80,120),s.add(x);const T=new Qu(16777215,.35);T.position.set(-60,40,30),s.add(T),p(),A(),w(),requestAnimationFrame(w);const Z=()=>{d=requestAnimationFrame(Z),o?.update(),i&&s&&r&&i.render(s,r)};Z(),g=new ResizeObserver(w),g.observe(C),e.value={setGeometry:y,setShowVertices:P,setReferenceObject:U,fitToObject:A}}),fn(t,()=>{p(),b()}),Gl(()=>{cancelAnimationFrame(d),g?.disconnect(),o?.dispose(),a&&a.geometry.dispose(),l&&l.geometry.dispose(),c&&(c.geometry.dispose(),c.material.dispose()),u&&(u.dispose(),u=null),_.dispose(),m.dispose(),i?.dispose(),i&&n.value&&i.domElement.parentElement===n.value&&n.value.removeChild(i.domElement)}),{handle:e}}const ry={class:"mesh-preview"},oy=Fi({__name:"MeshPreview",props:{geometry:{},config:{}},setup(n){const t=n,e=Rn(null),i=oi(()=>({w:t.config.widthMm,h:t.config.heightMm,t:t.config.baseThicknessMm+t.config.embossHeightMm})),{handle:s}=sy(e,i);fn(()=>t.geometry,o=>{s.value?.setGeometry(o)}),fn(()=>t.config.showVertices,o=>{s.value?.setShowVertices(o)}),fn(()=>t.config.showReferenceObject,o=>{s.value?.setReferenceObject(o?"banana":null)}),fn(s,o=>{o&&(o.setGeometry(t.geometry),o.setShowVertices(t.config.showVertices),o.setReferenceObject(t.config.showReferenceObject?"banana":null))});function r(){s.value?.fitToObject()}return(o,a)=>(ue(),ge("div",ry,[gt("div",{class:"header"},[a[0]||(a[0]=gt("span",{class:"label"},"3D Mesh Preview",-1)),gt("button",{type:"button",class:"ghost",onClick:r},"Reset view")]),gt("div",{ref_key:"container",ref:e,class:"viewport"},null,512)]))}}),ay=Oi(oy,[["__scopeId","data-v-c6859d2c"]]),ly={class:"stats"},cy={class:"v"},uy={class:"v"},hy={class:"v"},fy={key:0,class:"building"},dy=Fi({__name:"StatsBar",props:{stats:{},building:{type:Boolean}},setup(n){function t(e){return e.toLocaleString()}return(e,i)=>(ue(),ge("div",ly,[gt("div",null,[i[0]||(i[0]=gt("span",{class:"k"},"Depth map",-1)),gt("span",cy,Ie(n.stats?`${n.stats.depthMapWidthPx} × ${n.stats.depthMapHeightPx} px`:"—"),1)]),gt("div",null,[i[1]||(i[1]=gt("span",{class:"k"},"Vertices",-1)),gt("span",uy,Ie(n.stats?t(n.stats.vertexCount):"—"),1)]),gt("div",null,[i[2]||(i[2]=gt("span",{class:"k"},"Triangles",-1)),gt("span",hy,Ie(n.stats?t(n.stats.triangleCount):"—"),1)]),n.building?(ue(),ge("div",fy,"Re-meshing…")):Hs("",!0)]))}}),py=Oi(dy,[["__scopeId","data-v-d654b087"]]),my={class:"strip-preview"},gy=Fi({__name:"StripPreview",props:{source:{}},setup(n){const t=n,e=Rn(null);return fn(()=>t.source,i=>{const s=e.value;s&&(s.replaceChildren(),i&&(i.style.width="100%",i.style.height="100%",i.style.objectFit="contain",i.style.imageRendering="auto",i.style.display="block",i.style.background="#000",s.appendChild(i)))},{immediate:!0}),(i,s)=>(ue(),ge("div",my,[s[0]||(s[0]=gt("div",{class:"label"},"Tiled strip (pre-warp)",-1)),gt("div",{ref_key:"container",ref:e,class:"surface"},null,512)]))}}),_y=Oi(gy,[["__scopeId","data-v-0f545175"]]),vy=["disabled"],xy=Fi({__name:"DownloadButton",props:{disabled:{type:Boolean}},emits:["download"],setup(n){return(t,e)=>(ue(),ge("button",{class:"download",disabled:n.disabled,onClick:e[0]||(e[0]=i=>t.$emit("download")),type:"button"}," Download STL ",8,vy))}}),My=Oi(xy,[["__scopeId","data-v-4f7039b7"]]),cc=Math.PI*2,Sy=3;function sh(n,t,e,i){const s=n/2-e,r=t/2-e,o=e-i/2;return 4*s+4*r+cc*o}function rh(n,t,e,i){const s=Math.max(.1,i),r=s/2,o=Math.min(n,t)/2,a=Math.min(Math.max(e,r),Math.max(r,o));return{W:Math.max(2*a,n),H:Math.max(2*a,t),r:a,T:s}}function yy(n){if(n.tileScaleMm<=0||n.ringOuterDiameterMm<=0)return null;const t=Math.max(.1,n.ringThicknessMm),e=Math.PI*(n.ringOuterDiameterMm-t),i=Math.max(1,Math.round(e/n.tileScaleMm)),s=i*n.tileScaleMm,r=s/cc,o=2*r+t;return{shape:"ring",centerlineRadiusMm:r,ringThicknessMm:t,tileScaleMm:n.tileScaleMm,perimeterMm:s,N:i,outerDiameterMm:o}}function Ey(n){if(n.tileScaleMm<=0)return null;const{W:t,H:e,r:i,T:s}=rh(n.rectOuterWidthMm,n.rectOuterHeightMm,n.rectCornerRadiusMm,n.ringThicknessMm);if(t<=0||e<=0)return null;const r=sh(t,e,i,s),a=Math.max(1,Math.round(r/n.tileScaleMm))*n.tileScaleMm;let l=t,c=e,u=i;const h=s;switch(n.rectSnapDimension){case"tileScale":break;case"cornerRadius":{const _=2*Math.PI-8,m=(a-2*(l+c)+Math.PI*h)/_,p=rh(l,c,m,h);l=p.W,c=p.H,u=p.r;break}case"width":{const _=(a-2*c-(2*Math.PI-8)*u+Math.PI*h)/2;l=Math.max(2*u,_);break}case"height":{const _=(a-2*l-(2*Math.PI-8)*u+Math.PI*h)/2;c=Math.max(2*u,_);break}}const f=sh(l,c,u,h),d=Math.max(1,Math.round(f/n.tileScaleMm)),g=f/d;return Ty(l,c,u,h,g,d)}function Ty(n,t,e,i,s,r){const o=n/2-e,a=t/2-e,l=e-i/2,c=4*o+4*a+cc*l;return{shape:"roundedRect",outerWidthMm:n,outerHeightMm:t,cornerRadiusMm:e,ringThicknessMm:i,tileScaleMm:s,perimeterMm:c,N:r,a:o,b:a,rc:l}}function by(n){return n.shape==="none"?null:n.shape==="ring"?yy(n):n.shape==="roundedRect"?Ey(n):null}function Ay(n){return n.shape==="ring"?{shape:"ring",perimeterMm:n.perimeterMm,tileRepetitions:n.N,ringOuterDiameterMm:n.outerDiameterMm,ringThicknessMm:n.ringThicknessMm,tileScaleMm:n.tileScaleMm}:{shape:"roundedRect",perimeterMm:n.perimeterMm,tileRepetitions:n.N,rectOuterWidthMm:n.outerWidthMm,rectOuterHeightMm:n.outerHeightMm,rectCornerRadiusMm:n.cornerRadiusMm,ringThicknessMm:n.ringThicknessMm,tileScaleMm:n.tileScaleMm}}function wy(n,t,e,i=0,s=0){const r=e*Sy,o=Math.max(1,Math.round(n.perimeterMm*r)),a=Math.max(1,Math.round(n.ringThicknessMm*r)),l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!1});if(!c)throw new Error("strip 2d context unavailable");c.fillStyle="#000",c.fillRect(0,0,o,a);const u=s>0?i:0,h=s>0?s:t.height;for(let f=0;f<n.N;f++){const d=Math.round(f*(o/n.N)),g=Math.round((f+1)*(o/n.N));c.drawImage(t,0,u,t.width,h,d,0,g-d,a)}return{canvas:l,width:o,height:a}}const Sa=8,Ry=.4,Cy=1.6,Py=2,rd=1,od=1,Tl=1.2;let ya=null;function Ly(n,t,e){ya||(ya=document.createElement("canvas"));const i=ya.getContext("2d");if(!i)throw new Error("measure canvas 2d context unavailable");const s=Math.max(8,e*Sa);i.font=`${s}px ${t}`;const r=(n||" ").split(`
`);let o=0;for(const u of r){const h=u.length===0?" ":u;o=Math.max(o,i.measureText(h).width)}const a=s*Tl*r.length,l=Math.max(od,o/Sa),c=Math.max(rd,a/Sa);return{widthMm:l,heightMm:c}}function Dy(n,t){return{plateWidthMm:n,plateHeightMm:t,ringOuterDiameterMm:0,rectOuterWidthMm:0,rectOuterHeightMm:0,rectCornerRadiusMm:0,ringThicknessMm:0,tileScaleMm:1}}function ad(n,t,e,i=1,s=1,r=1.5,o=1){const a=r,l=e==="none"?0:Math.max(0,o),c=t*Ry*Math.max(.05,s),u=c*Cy*Math.max(.05,i);if(e==="none"){const A=Math.max(od,n+2*a),y=Math.max(rd,t+2*a);return Dy(A,y)}if(e==="ring"){const A=Math.max(.5,n*.5+a),y=Math.max(.5,t*.5+a),U=2*(Math.hypot(A,y)+c),P=U+2*l;return{plateWidthMm:P,plateHeightMm:P,ringOuterDiameterMm:U,rectOuterWidthMm:0,rectOuterHeightMm:0,rectCornerRadiusMm:0,ringThicknessMm:c,tileScaleMm:u}}const h=Math.max(2*c+1,n+2*(a+c)),f=Math.max(2*c+1,t+2*(a+c)),d=h+2*l,g=f+2*l,_=c*.5,m=Math.min(h,f)*.5,p=Math.min(m,Math.max(_,t*.5));return{plateWidthMm:d,plateHeightMm:g,ringOuterDiameterMm:0,rectOuterWidthMm:h,rectOuterHeightMm:f,rectCornerRadiusMm:p,ringThicknessMm:c,tileScaleMm:u}}function Iy(n,t,e,i=1,s=1,r=1.5,o=1){const a=n.width/Math.max(1,n.height),l=t*Py,c=l*a;return ad(c,l,e,i,s,r,o)}function Uy(n,t){n.widthMm=t.plateWidthMm,n.heightMm=t.plateHeightMm,n.frame.ringOuterDiameterMm=t.ringOuterDiameterMm,n.frame.rectOuterWidthMm=t.rectOuterWidthMm,n.frame.rectOuterHeightMm=t.rectOuterHeightMm,n.frame.rectCornerRadiusMm=t.rectCornerRadiusMm,n.frame.ringThicknessMm=t.ringThicknessMm,n.frame.tileScaleMm=t.tileScaleMm}const uc=Rn([]),bl=Rn(!1),ld=Rn(null),oh=new Map,ah=new Map,Ea={vMin:0,vMax:1,srcY:0,srcH:0,full:!0};function Ny(n){const t=n.width,e=n.height;if(t===0||e===0)return Ea;const i=document.createElement("canvas");i.width=t,i.height=e;const s=i.getContext("2d",{willReadFrequently:!0});if(!s)return{...Ea,srcH:e};s.drawImage(n,0,0);const r=s.getImageData(0,0,t,e).data,o=16;let a=-1,l=-1;for(let h=0;h<e;h++){let f=0;const d=h*t*4;for(let g=0;g<t;g++){const _=d+g*4,m=Math.max(r[_],r[_+1],r[_+2]);if(m>f&&(f=m),f>=o)break}f>=o&&(a===-1&&(a=h),l=h)}if(a===-1)return{...Ea,srcH:e};if(a===0&&l===e-1)return{vMin:0,vMax:1,srcY:0,srcH:e,full:!0};const c=(e-1-l-.5)/e,u=(e-1-a+.5)/e;return{vMin:c,vMax:u,srcY:a,srcH:l-a+1,full:!1}}function Fy(n,t){const e=ah.get(t);if(e)return e;const i=Ny(n);return ah.set(t,i),i}async function Oy(){if(!bl.value)try{const n=await fetch("/tiles/manifest.json",{cache:"no-cache"});if(!n.ok)throw new Error(`manifest fetch ${n.status}`);const t=await n.json();uc.value=t.tiles,bl.value=!0}catch(n){ld.value=n.message}}function By(n){const t=uc.value.find(s=>s.id===n);if(!t)return Promise.reject(new Error(`unknown tile: ${n}`));const e=oh.get(n);if(e)return e;const i=new Promise((s,r)=>{const o=new Image;o.crossOrigin="anonymous",o.onload=()=>s(o),o.onerror=()=>r(new Error(`failed to load tile ${n}`)),o.src=`/tiles/${t.file}`});return oh.set(n,i),i}function zy(){return{manifest:uc,loaded:bl,error:ld,loadManifest:Oy,loadTileImage:By}}const Hy=2;function Vy(n){const t=Math.max(1,Math.round(n.widthMm*n.vertexDensity))+1,e=Math.max(1,Math.round(n.heightMm*n.vertexDensity))+1;return{nx:t,ny:e}}function Gy(n,t,e,i){if(!n)return{maxWidthPx:t*i*.95,maxHeightPx:e*i*.95};if(n.shape==="ring"){const o=t*.5,a=e*.5,l=Math.max(0,n.centerlineRadiusMm-n.ringThicknessMm*.5),c=Math.min(l,o,a),u=Math.SQRT2*c*.9;return{maxWidthPx:u*i,maxHeightPx:u*i}}const s=Math.max(0,Math.min(n.outerWidthMm,t)-2*n.ringThicknessMm),r=Math.max(0,Math.min(n.outerHeightMm,e)-2*n.ringThicknessMm);return{maxWidthPx:s*i*.9,maxHeightPx:r*i*.9}}function ky(n,t,e,i,s,r){if(!t.text)return;const o=t.text.split(`
`);let a=t.fontSizeMm*s;n.font=`${a}px ${t.fontFamily}`;let l=0;for(const m of o)m.length!==0&&(l=Math.max(l,n.measureText(m).width));const c=a*Tl*o.length,u=l/Math.max(1,r.maxWidthPx),h=c/Math.max(1,r.maxHeightPx),f=Math.max(u,h);f>1&&(a=a/f),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`${a}px ${t.fontFamily}`;const d=a*Tl,g=d*o.length,_=i/2-g/2;for(let m=0;m<o.length;m++){if(o[m].length===0)continue;const p=_+(m+.5)*d;n.fillText(o[m],e/2,p)}}function Wy(n,t,e,i){const s=t.width/t.height,r=e/i;let o,a;s>r?(o=e,a=e/s):(a=i,o=i*s);const l=(e-o)/2,c=(i-a)/2;n.drawImage(t,l,c,o,a)}let Ta=null,lh=0;function Xy(n,t,e,i,s){const r=Math.max(0,Math.min(t.cornerRadiusMm,Math.min(t.widthMm,t.heightMm)*.5));if(r<=0)return;const o=r*s;n.save(),n.fillStyle="#000",n.beginPath(),n.rect(0,0,e,i),n.moveTo(o,0),n.lineTo(e-o,0),n.arcTo(e,0,e,o,o),n.lineTo(e,i-o),n.arcTo(e,i,e-o,i,o),n.lineTo(o,i),n.arcTo(0,i,0,i-o,o),n.lineTo(0,o),n.arcTo(0,0,o,0,o),n.closePath(),n.fill("evenodd"),n.restore()}function Yy(n,t,e,i,s){Ta||(Ta=document.createElement("canvas"));const r=Ta;r.width!==e&&(r.width=e),r.height!==i&&(r.height=i);const o=r.getContext("2d",{willReadFrequently:!1});if(!o)throw new Error("text canvas 2d context unavailable");if(o.setTransform(1,0,0,1,0,0),o.fillStyle="#000",o.fillRect(0,0,e,i),n.customImage)Wy(o,n.customImage,e,i);else{const a=Gy(t,n.widthMm,n.heightMm,s);ky(o,n,e,i,s,a)}return Xy(o,n,e,i,s),lh+=1,{canvas:r,version:lh}}function qy(n,t,e,i){const{nx:s,ny:r}=Vy(n),o=by(n.frame),a=o&&t?o:null,l=n.vertexDensity*Hy,c=Math.max(1,Math.round(n.widthMm*l)),u=Math.max(1,Math.round(n.heightMm*l)),h=Yy(n,a,c,u,l),f=a&&t&&e?Fy(t,e):null,d=i.render({textCanvas:h.canvas,textVersion:h.version,tileImage:a?t:null,tileKey:a?e:null,tileVRange:f?[f.vMin,f.vMax]:[0,1],plateWidthMm:n.widthMm,plateHeightMm:n.heightMm,framePlan:a,nx:s,ny:r});let g=null;return a&&t&&(g=wy(a,t,n.vertexDensity,f?.srcY??0,f?.srcH??0).canvas),{canvas:d.canvas,width:d.width,height:d.height,data:d.data,stripCanvas:g,framePlan:a}}function jy(n,t,e){const i=(e*n.width+t)*4,s=n.data[i],r=n.data[i+1],o=n.data[i+2];return(s*.299+r*.587+o*.114)/255}function Ky(n,t,e,i,s){if(s<=0)return{inside:n>=0&&n<=e&&t>=0&&t<=i,x:n,y:t};const r=Math.max(s,Math.min(e-s,n)),o=Math.max(s,Math.min(i-s,t)),a=n-r,l=t-o,c=Math.hypot(a,l);return c<=s?{inside:!0,x:n,y:t}:{inside:!1,x:r+s*a/c,y:o+s*l/c}}function $y(n,t){const e=t.width,i=t.height,s=n.widthMm,r=n.heightMm,o=n.baseThicknessMm,a=n.embossHeightMm,l=Math.max(0,Math.min(n.cornerRadiusMm,Math.min(s,r)*.5)),c=l>0,u=s/(e-1),h=r/(i-1),f=e*i,d=[];if(c){for(let O=0;O<e;O++)d.push(O);for(let O=1;O<i;O++)d.push(O*e+(e-1));for(let O=e-2;O>=0;O--)d.push((i-1)*e+O);for(let O=i-2;O>=1;O--)d.push(O*e)}const g=c?f+d.length:f+4,_=new Float32Array(g*3);for(let O=0;O<i;O++)for(let j=0;j<e;j++){const Q=(O*e+j)*3,V=j*u,K=O*h,N=Ky(V,K,s,r,l);if(N.inside){const ht=jy(t,j,O);_[Q]=V,_[Q+1]=K,_[Q+2]=o+ht*a}else _[Q]=N.x,_[Q+1]=N.y,_[Q+2]=o}let m=0,p=0,A=0,y=0;if(!c)m=f+0,p=f+1,A=f+2,y=f+3,_[m*3+0]=0,_[m*3+1]=0,_[m*3+2]=0,_[p*3+0]=s,_[p*3+1]=0,_[p*3+2]=0,_[A*3+0]=s,_[A*3+1]=r,_[A*3+2]=0,_[y*3+0]=0,_[y*3+1]=r,_[y*3+2]=0;else for(let O=0;O<d.length;O++){const j=d[O]*3,Q=(f+O)*3;_[Q+0]=_[j+0],_[Q+1]=_[j+1],_[Q+2]=0}const b=2*(e-1)*(i-1);let U,P;if(c)U=2*d.length,P=d.length-2;else{const O=e,j=i;U=2*(O-1+(j-1))+4,P=2}const w=b+U+P,C=new Uint32Array(w*3);let X=0;const x=(O,j)=>j*e+O;for(let O=0;O<i-1;O++)for(let j=0;j<e-1;j++){const Q=x(j,O),V=x(j+1,O),K=x(j,O+1),N=x(j+1,O+1);C[X++]=Q,C[X++]=V,C[X++]=N,C[X++]=Q,C[X++]=N,C[X++]=K}if(c){const O=d.length;for(let Q=0;Q<O;Q++){const V=(Q+1)%O,K=d[Q],N=d[V],ht=f+Q,dt=f+V;C[X++]=K,C[X++]=ht,C[X++]=dt,C[X++]=K,C[X++]=dt,C[X++]=N}const j=f;for(let Q=1;Q<O-1;Q++){const V=f+Q,K=f+Q+1;C[X++]=j,C[X++]=K,C[X++]=V}}else{const O=(N,ht,dt)=>{for(let mt=0;mt<N.length-1;mt++)C[X++]=ht,C[X++]=N[mt+1],C[X++]=N[mt];C[X++]=ht,C[X++]=dt,C[X++]=N[N.length-1]},j=[];for(let N=0;N<e;N++)j.push(x(N,0));O(j,m,p);const Q=[];for(let N=0;N<i;N++)Q.push(x(e-1,N));O(Q,p,A);const V=[];for(let N=e-1;N>=0;N--)V.push(x(N,i-1));O(V,A,y);const K=[];for(let N=i-1;N>=0;N--)K.push(x(0,N));O(K,y,m),C[X++]=m,C[X++]=y,C[X++]=A,C[X++]=m,C[X++]=A,C[X++]=p}const T=new rn;return T.setAttribute("position",new sn(_,3)),T.setIndex(new sn(C,1)),T.computeVertexNormals(),{geometry:T,stats:{depthMapWidthPx:e,depthMapHeightPx:i,vertexCount:g,triangleCount:w}}}class Zy{parse(t,e={}){e=Object.assign({binary:!1},e);const i=e.binary,s=[];let r=0;t.traverse(function(p){if(p.isMesh){const A=p.geometry,y=A.index,b=A.getAttribute("position");r+=y!==null?y.count/3:b.count/3,s.push({object3d:p,geometry:A})}});let o,a=80;if(i===!0){const p=r*2+r*3*4*4+80+4,A=new ArrayBuffer(p);o=new DataView(A),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;const l=new D,c=new D,u=new D,h=new D,f=new D,d=new D;for(let p=0,A=s.length;p<A;p++){const y=s[p].object3d,b=s[p].geometry,U=b.index,P=b.getAttribute("position");if(U!==null)for(let w=0;w<U.count;w+=3){const C=U.getX(w+0),X=U.getX(w+1),x=U.getX(w+2);g(C,X,x,P,y)}else for(let w=0;w<P.count;w+=3){const C=w+0,X=w+1,x=w+2;g(C,X,x,P,y)}}return i===!1&&(o+=`endsolid exported
`),o;function g(p,A,y,b,U){l.fromBufferAttribute(b,p),c.fromBufferAttribute(b,A),u.fromBufferAttribute(b,y),U.isSkinnedMesh===!0&&(U.applyBoneTransform(p,l),U.applyBoneTransform(A,c),U.applyBoneTransform(y,u)),l.applyMatrix4(U.matrixWorld),c.applyMatrix4(U.matrixWorld),u.applyMatrix4(U.matrixWorld),_(l,c,u),m(l),m(c),m(u),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function _(p,A,y){h.subVectors(y,A),f.subVectors(p,A),h.cross(f).normalize(),d.copy(h).normalize(),i===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function m(p){i===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):o+="			vertex "+p.x+" "+p.y+" "+p.z+`
`}}}function Jy(n){return n.replace(/[^a-zA-Z0-9_\- ]+/g,"").trim().replace(/\s+/g,"_")||"nameplate"}function Qy(n,t){const e=new Zy,i=new en(n),s=e.parse(i,{binary:!0}),r=s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength),o=new Blob([r],{type:"model/stl"}),a=URL.createObjectURL(o),l=document.createElement("a");l.href=a,l.download=`${Jy(t)}.stl`,document.body.appendChild(l),l.click(),document.body.removeChild(l),setTimeout(()=>URL.revokeObjectURL(a),1e3)}const ch=new Set;function tE(n){if(ch.has(n))return;ch.add(n);const t=`https://fonts.googleapis.com/css2?family=${n}&display=swap`,e=document.createElement("link");e.rel="stylesheet",e.href=t,document.head.appendChild(e)}function eE(){const n=Rn(!1);async function t(){for(const i of yf)i.google&&tE(i.google);try{await document.fonts.ready}finally{n.value=!0}}async function e(i,s){const r=i.split(",")[0].trim().replace(/^"|"$/g,"");try{await document.fonts.load(`${s}px "${r}"`)}catch{}}return{ready:n,preloadAll:t,ensureLoaded:e}}const uh=`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`,nE=`#version 300 es
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
}`,iE=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;
uniform sampler2D u_src;
void main() {
  outColor = texture(u_src, v_uv);
}`;function hh(n,t,e){const i=n.createShader(t);if(!i)throw new Error("createShader failed");if(n.shaderSource(i,e),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS)){const s=n.getShaderInfoLog(i);throw n.deleteShader(i),new Error("shader compile failed: "+s)}return i}function fh(n,t,e){const i=hh(n,n.VERTEX_SHADER,t),s=hh(n,n.FRAGMENT_SHADER,e),r=n.createProgram();if(!r)throw new Error("createProgram failed");if(n.attachShader(r,i),n.attachShader(r,s),n.bindAttribLocation(r,0,"a_pos"),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS)){const o=n.getProgramInfoLog(r);throw new Error("program link failed: "+o)}return r}const dh=2;class sE{canvas;gl;compProg;dsProg;compUniforms;dsSrcLoc;vao;hiResTex;hiResFB;hiResW=0;hiResH=0;textTex;textVersion=-1;tileTex;tileKey=null;readBuf=null;constructor(){this.canvas=document.createElement("canvas");const t=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!0});if(!t)throw new Error("WebGL2 unavailable");this.gl=t,this.compProg=fh(t,uh,nE),this.dsProg=fh(t,uh,iE),this.compUniforms={text:t.getUniformLocation(this.compProg,"u_text"),tile:t.getUniformLocation(this.compProg,"u_tile"),frameShape:t.getUniformLocation(this.compProg,"u_frameShape"),plateSize:t.getUniformLocation(this.compProg,"u_plateSize"),ringThickness:t.getUniformLocation(this.compProg,"u_ringThickness"),tileScaleMm:t.getUniformLocation(this.compProg,"u_tileScaleMm"),tileVRange:t.getUniformLocation(this.compProg,"u_tileVRange"),ringCenter:t.getUniformLocation(this.compProg,"u_ringCenter"),ringCenterlineRadius:t.getUniformLocation(this.compProg,"u_ringCenterlineRadius"),rectCenter:t.getUniformLocation(this.compProg,"u_rectCenter"),rectAB:t.getUniformLocation(this.compProg,"u_rectAB"),rectRC:t.getUniformLocation(this.compProg,"u_rectRC")},this.dsSrcLoc=t.getUniformLocation(this.dsProg,"u_src");const e=t.createVertexArray();if(!e)throw new Error("createVertexArray failed");this.vao=e,t.bindVertexArray(e);const i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.bindVertexArray(null),this.hiResTex=t.createTexture(),this.hiResFB=t.createFramebuffer(),this.textTex=t.createTexture(),this.tileTex=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.textTex),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,this.tileTex),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}render(t){const e=this.gl,{nx:i,ny:s}=t,r=i*dh,o=s*dh;if((this.canvas.width!==i||this.canvas.height!==s)&&(this.canvas.width=i,this.canvas.height=s),r!==this.hiResW||o!==this.hiResH){e.bindTexture(e.TEXTURE_2D,this.hiResTex),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,r,o,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,this.hiResFB),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.hiResTex,0);const g=e.checkFramebufferStatus(e.FRAMEBUFFER);if(g!==e.FRAMEBUFFER_COMPLETE)throw new Error("hiRes FBO incomplete: 0x"+g.toString(16));this.hiResW=r,this.hiResH=o}t.textVersion!==this.textVersion&&(e.bindTexture(e.TEXTURE_2D,this.textTex),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,t.textCanvas),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),this.textVersion=t.textVersion),t.tileImage&&t.tileKey&&t.tileKey!==this.tileKey&&(e.bindTexture(e.TEXTURE_2D,this.tileTex),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,t.tileImage),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),this.tileKey=t.tileKey),e.bindFramebuffer(e.FRAMEBUFFER,this.hiResFB),e.viewport(0,0,r,o),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(this.compProg),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.textTex),e.uniform1i(this.compUniforms.text,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.uniform1i(this.compUniforms.tile,1),e.uniform2f(this.compUniforms.plateSize,t.plateWidthMm,t.plateHeightMm),e.uniform2f(this.compUniforms.tileVRange,t.tileVRange[0],t.tileVRange[1]);const a=t.framePlan,l=t.plateWidthMm*.5,c=t.plateHeightMm*.5;!a||!t.tileImage?(e.uniform1i(this.compUniforms.frameShape,0),e.uniform1f(this.compUniforms.ringThickness,1),e.uniform1f(this.compUniforms.tileScaleMm,1),e.uniform2f(this.compUniforms.ringCenter,l,c),e.uniform1f(this.compUniforms.ringCenterlineRadius,1),e.uniform2f(this.compUniforms.rectCenter,l,c),e.uniform2f(this.compUniforms.rectAB,1,1),e.uniform1f(this.compUniforms.rectRC,1)):a.shape==="ring"?(e.uniform1i(this.compUniforms.frameShape,1),e.uniform1f(this.compUniforms.ringThickness,a.ringThicknessMm),e.uniform1f(this.compUniforms.tileScaleMm,a.tileScaleMm),e.uniform2f(this.compUniforms.ringCenter,l,c),e.uniform1f(this.compUniforms.ringCenterlineRadius,a.centerlineRadiusMm),e.uniform2f(this.compUniforms.rectCenter,l,c),e.uniform2f(this.compUniforms.rectAB,1,1),e.uniform1f(this.compUniforms.rectRC,1)):(e.uniform1i(this.compUniforms.frameShape,2),e.uniform1f(this.compUniforms.ringThickness,a.ringThicknessMm),e.uniform1f(this.compUniforms.tileScaleMm,a.tileScaleMm),e.uniform2f(this.compUniforms.ringCenter,l,c),e.uniform1f(this.compUniforms.ringCenterlineRadius,1),e.uniform2f(this.compUniforms.rectCenter,l,c),e.uniform2f(this.compUniforms.rectAB,a.a,a.b),e.uniform1f(this.compUniforms.rectRC,a.rc)),e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLE_STRIP,0,4),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,i,s),e.useProgram(this.dsProg),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.hiResTex),e.uniform1i(this.dsSrcLoc,0),e.drawArrays(e.TRIANGLE_STRIP,0,4);const h=i*s*4;(!this.readBuf||this.readBuf.byteLength<h)&&(this.readBuf=new Uint8Array(h));const f=this.readBuf.subarray(0,h);e.readPixels(0,0,i,s,e.RGBA,e.UNSIGNED_BYTE,f);const d=new Uint8ClampedArray(h);return d.set(f),{canvas:this.canvas,width:i,height:s,data:d}}dispose(){const t=this.gl;t.deleteProgram(this.compProg),t.deleteProgram(this.dsProg),t.deleteVertexArray(this.vao),t.deleteTexture(this.hiResTex),t.deleteFramebuffer(this.hiResFB),t.deleteTexture(this.textTex),t.deleteTexture(this.tileTex)}}const rE={class:"app"},oE={class:"workspace"},aE={class:"top-bar"},lE=Fi({__name:"App",setup(n){const t=po({text:"Name",fontFamily:"Arial, sans-serif",fontSizeMm:20,widthMm:80,heightMm:30,baseThicknessMm:2,embossHeightMm:1.2,cornerRadiusMm:3,textPaddingMm:-2,outerPaddingMm:1,vertexDensity:5,customImage:null,showVertices:!1,showReferenceObject:!1,frame:{shape:"none",tileId:null,ringOuterDiameterMm:70,rectOuterWidthMm:80,rectOuterHeightMm:30,rectCornerRadiusMm:6,rectSnapDimension:"tileScale",ringThicknessMm:6,tileScaleMm:25,tileScaleFactor:1,decorationSizeFactor:1}}),e=Br(null),i=Br(null),s=Br(null),r=Rn(null),o=Rn(null),a=Rn(!1),{preloadAll:l,ensureLoaded:c}=eE(),{manifest:u,loadManifest:h,loadTileImage:f}=zy();let d=null,g=null;async function _(){if(t.frame.shape==="none")return null;let w=t.frame.tileId;if(!w&&u.value.length>0&&(w=u.value[0].id,t.frame.tileId=w),!w)return null;try{return{image:await f(w),id:w}}catch(C){return console.warn("tile load failed",C),null}}async function m(){if(!d)return null;if(!t.customImage){const Z=t.fontSizeMm*t.vertexDensity*2;await c(t.fontFamily,Z)}const w=t.frame.tileScaleFactor,C=t.frame.decorationSizeFactor,X=t.customImage?Iy(t.customImage,t.fontSizeMm,t.frame.shape,w,C,t.textPaddingMm,t.outerPaddingMm):(()=>{const Z=Ly(t.text,t.fontFamily,t.fontSizeMm);return ad(Z.widthMm,Z.heightMm,t.frame.shape,w,C,t.textPaddingMm,t.outerPaddingMm)})();Uy(t,X);const x=await _(),T=qy(t,x?.image??null,x?.id??null,d);return e.value=T.canvas,i.value=T.stripCanvas,o.value=T.framePlan?Ay(T.framePlan):null,T}async function p(){a.value=!0;try{const w=await m();if(!w)return;const{geometry:C,stats:X}=$y(t,w),x=s.value;s.value=C,r.value=X,x&&x.dispose()}finally{a.value=!1}}function A(){g!=null&&window.clearTimeout(g),g=window.setTimeout(()=>{g=null,p()},150)}fn(()=>({text:t.text,fontFamily:t.fontFamily,fontSizeMm:t.fontSizeMm,baseThicknessMm:t.baseThicknessMm,embossHeightMm:t.embossHeightMm,cornerRadiusMm:t.cornerRadiusMm,textPaddingMm:t.textPaddingMm,outerPaddingMm:t.outerPaddingMm,vertexDensity:t.vertexDensity,customImage:t.customImage,frameShape:t.frame.shape,frameTile:t.frame.tileId,tileScaleFactor:t.frame.tileScaleFactor,decorationSizeFactor:t.frame.decorationSizeFactor}),()=>{A()});function y(w){Object.assign(t,w),Object.assign(t.frame,w.frame)}function b(){t.customImage=null}function U(){if(!s.value)return;const w=t.customImage?"nameplate":t.text;Qy(s.value,w)}const P=oi(()=>t.frame.shape!=="none"&&!!i.value);return Vl(async()=>{d=new sE,await Promise.all([l(),h()]),await p()}),Gl(()=>{g!=null&&window.clearTimeout(g),d?.dispose(),d=null}),(w,C)=>(ue(),ge("div",rE,[Ge(lg,{"model-value":t,tiles:Bl(u),"frame-plan":o.value,"onUpdate:modelValue":y,onClearImage:b},null,8,["model-value","tiles","frame-plan"]),gt("main",oE,[gt("header",aE,[C[0]||(C[0]=gt("h1",null,"Lovely Labels",-1)),C[1]||(C[1]=gt("span",{class:"sub"},"3D Name Plate → STL",-1)),Ge(My,{disabled:!s.value||a.value,onDownload:U},null,8,["disabled"])]),gt("div",{class:$s(["previews",{"with-strip":P.value}])},[Ge(hg,{source:e.value},null,8,["source"]),P.value?(ue(),gf(_y,{key:0,source:i.value},null,8,["source"])):Hs("",!0),Ge(ay,{geometry:s.value,config:t},null,8,["geometry","config"])],2),Ge(py,{stats:r.value,building:a.value},null,8,["stats","building"])])]))}}),cE=Oi(lE,[["__scopeId","data-v-a3e0cae8"]]);Dm(cE).mount("#app");
