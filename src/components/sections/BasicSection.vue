<script setup>

</script>

<template>
  <section class="standard-width-behavior">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>