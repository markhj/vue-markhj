<script setup>

</script>

<template>
  <div class="card-grid">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card-grid {
  display: grid;
  gap: var(--theme-base-margin);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>