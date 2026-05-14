<script setup lang="ts">
import { computed } from "vue";
import type { MeshStats } from "../types";

const props = defineProps<{
  stats: MeshStats | null;
  building: boolean;
}>();

function fmt(n: number): string {
  return n.toLocaleString();
}

const items = computed(() => {
  const s = props.stats;
  if (!s) return [] as Array<{ k: string; v: string }>;
  return [
    { k: "Depth map", v: `${fmt(s.depthMapWidthPx)} × ${fmt(s.depthMapHeightPx)} px` },
    { k: "Vertices", v: fmt(s.vertexCount) },
    { k: "Triangles", v: fmt(s.triangleCount) },
  ];
});
</script>

<template>
  <footer class="stats">
    <span v-if="building" class="badge">Rebuilding…</span>
    <span v-for="item in items" :key="item.k" class="item">
      <span class="k">{{ item.k }}</span>
      <span class="v">{{ item.v }}</span>
    </span>
  </footer>
</template>

<style scoped>
.stats {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.4rem 1rem;
  background: #14171f;
  border-top: 1px solid #2a2f3d;
  font-size: 0.78rem;
  color: #8b94aa;
  flex-wrap: wrap;
}
.item {
  display: flex;
  gap: 0.4rem;
}
.k::after { content: ":"; }
.v {
  color: #cbd2e0;
  font-variant-numeric: tabular-nums;
}
.badge {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  border-radius: 3px;
  background: #2a3055;
  color: #b9c4ff;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
}
</style>
