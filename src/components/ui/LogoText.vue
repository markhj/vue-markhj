<script setup>

const firstName = import.meta.env.VITE_FIRST_NAME;
const lastName = import.meta.env.VITE_LAST_NAME;
</script>

<template>
  <span><strong>{{ firstName }}</strong> {{ lastName }}</span>
</template>

<style scoped>
span {
  margin-top: -2px;
  font-family: var(--theme-font-headline);
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 2px;
  padding-left: var(--theme-base-margin);
}
</style>