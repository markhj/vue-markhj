<script setup>
import MainMenuItem from "@/components/ui/MainMenuItem.vue";

var emit = defineEmits(['change']);

defineProps({
  opened: Boolean
});

const items = [
  {
    text: 'Welcome',
    id: 'welcome'
  },
  {
    text: 'Projects',
    id: 'projects'
  },
  {
    text: 'Languages',
    id: 'languages'
  },
  {
    text: 'Contact',
    id: 'contact'
  }
];

const setMenuItem = (to) => {
  emit('change', to);
};
</script>

<template>
  <nav :class="{
    opened: opened
  }">
    <div class="standard-width-behavior">
      <MainMenuItem
        v-for="(item, key) in items"
        v-bind:key="key"
        :id="item.id"
        :text="item.text"
        @change="setMenuItem" />

    </div>
  </nav>
</template>

<style lang="scss" scoped>
$nav-width: 100vw;

nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: -$nav-width;
  width: $nav-width;

  padding-top: 20vh;

  display: flex;
  justify-content: center;

  z-index: 50;

  transition: var(--theme-default-transform-speed);
  background: linear-gradient(20deg, var(--theme-nav-dark), var(--theme-nav-light));

  &.opened {
    left: 0;
  }

  .menu-group-title {
    font-family: var(--theme-font-headline);
    font-weight: 700;
    font-size: 34px;
    margin-bottom: var(--theme-base-margin);
    &:not(:nth-child(1)) {
      margin-top: 50px;
    }
  }
}
</style>