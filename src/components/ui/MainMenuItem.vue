<script setup>
defineProps({
  text: String,
  id: String
});

const emit = defineEmits(['change']);
</script>

<template>
  <div class="main-menu-item" @click="emit('change', id)">
    <div v-for="i in [0,1,2]" v-bind:key="i"></div>
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
$main-menu-item-height: 6vh;
$arrow-part-size: 1.5vh;
$arrow-part-spacing: 0.5vh;
$arrow-transition-speed: 100ms;
$arrow-offset-y: 0.1vh;
$main-menu-std-color: rgba(255, 255, 255, 0.7);
$main-menu-hover-color: rgba(255, 255, 255, 1.0);

.main-menu-item {
  position: relative;
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  font-family: var(--theme-font-headline);
  font-size: $main-menu-item-height;
  line-height: $main-menu-item-height;

  margin-bottom: 5vh;
  padding-left: 0;
  color: $main-menu-std-color;
  &, &::before, &::after {
    transition: calc(var(--theme-default-transform-speed) * 2);
  }

  > div {
    height: $arrow-part-size;
    width: $arrow-part-size;
    background: $main-menu-std-color;
    transition: calc(var(--theme-default-transform-speed) * 2);
    opacity: 0;
    position: absolute;
    border-radius: 20%;

    // Top-left
    &:nth-child(1) {
      top: calc(50% - $arrow-part-size - $arrow-part-spacing / 2 + $arrow-offset-y - 2px);
      left: 0;
      margin-left: -30px;
    }

    // "Spear" of arrow
    &:nth-child(2) {
      top: calc(50% - $arrow-part-size / 2 + $arrow-offset-y);
      left: calc($arrow-part-size - 1px);
      transition-delay: $arrow-transition-speed;
      margin-left: -30px;
    }

    // Bottom-left
    &:nth-child(3) {
      bottom: calc(50% - $arrow-part-size - $arrow-part-spacing / 2 - $arrow-offset-y - 2px);
      left: 0;
      transition-delay: $arrow-transition-speed * 2;
      margin-left: -30px;
    }
  }

  &:hover {
    padding-left: 40px;
    color: $main-menu-hover-color;
    > div {
      background: $main-menu-hover-color;
      opacity: 1;
      margin-left: 0;
      transform: rotate(45deg);
    }
  }
}
</style>