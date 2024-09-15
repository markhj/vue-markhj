<script setup>
import {reactive} from "vue";

const emit = defineEmits(['open', 'close']);

const state = reactive({
  opened: false
});

const toggleOpenState = () => {
  state.opened = !state.opened;
  emit(state.opened ? 'open' : 'close');
};

const setAsClosed = () => state.opened = false;

defineExpose({ toggleOpenState, setAsClosed })
</script>

<template>
  <div @click="toggleOpenState" class="burger-menu" :class="{
    opened: state.opened
  }">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
  $burger-menu-size: 40px;
  $burger-menu-line-thickness: 4px;
  $burger-menu-spacing: 6px;

  .burger-menu {
    width: $burger-menu-size;
    height: $burger-menu-size;
    cursor: pointer;

    display: flex;
    justify-content: center;
    flex-direction: column;

    &, div {
      transition: var(--theme-default-transform-speed);
    }

    div {
      width: 100%;
      height: $burger-menu-line-thickness;
      background: var(--theme-color-ui-primary);
      &:nth-child(2) {
        margin-top: $burger-menu-spacing;
        margin-bottom: $burger-menu-spacing;
      }
    }

    &:hover:not(.opened) {
      div {
        &:nth-child(1) {
          transform: rotate(45deg);
          width: 75%;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          width: 75%;
        }
      }
    }

    &.opened, &:hover {
      div {
        &:nth-child(2) {
          opacity: 0;
        }
      }
    }

    &.opened {
      transform: rotate(90deg);
      div {
        &:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }
      }

      &:hover {
        transform: rotate(180deg);
        div {
          &:nth-child(1) {
            transform: rotate(45deg);
            width: 75%;
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
            width: 75%;
          }
        }
      }
    }
  }
</style>