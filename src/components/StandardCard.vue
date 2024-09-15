<script setup>

</script>

<template>
  <div class="standard-card observe-viewport">
    <slot />
  </div>
</template>

<style lang="scss">
.standard-card {
  padding: var(--theme-base-margin);
  position: relative;
  box-shadow: var(--theme-shadow);
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15));
  border-bottom-right-radius: var(--theme-border-radius-normal);
  transition: var(--theme-appear-transform-speed);
  transform: translateY(150px);
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom-right-radius: var(--theme-border-radius-normal);
  }
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    text-align: left;
    text-transform: uppercase;
  }
  &.in-view {
    transform: none;
  }
}
</style>