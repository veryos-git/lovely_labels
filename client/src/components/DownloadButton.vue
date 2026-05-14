<script setup lang="ts">
defineProps<{ disabled: boolean }>();
const emit = defineEmits<{ (e: "download"): void }>();
</script>

<template>
  <button
    type="button"
    class="dl"
    :disabled="disabled"
    @click="emit('download')"
  >
    Download STL
  </button>
</template>

<style scoped>
.dl {
  background: #6f8cff;
  color: #0d1018;
  border: none;
  padding: 0.5rem 0.9rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  letter-spacing: 0.02em;
}
.dl:hover:not(:disabled) { background: #8aa1ff; }
.dl:disabled {
  background: #2c3142;
  color: #5b6280;
  cursor: not-allowed;
}
</style>
