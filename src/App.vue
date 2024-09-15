<script setup>
import {onMounted, onUnmounted, reactive, ref} from "vue";
import { RouterView } from 'vue-router'
import BurgerMenu from "@/components/ui/BurgerMenu.vue";
import LogoText from "@/components/ui/LogoText.vue";
import MainMenu from "@/components/ui/MainMenu.vue";

const state = reactive({
  navOpen: false,
  hasLeftTop: false,
});

const burgerMenu = ref(null);

const goTo = (to) => {
  const target = document.querySelector('#' + to);
  if (!target) {
    console.warn('Section not found with ID: ' + to);
    return;
  }

  target.scrollIntoView({
    behavior: 'smooth'
  });
  state.navOpen = false;
  burgerMenu.value.setAsClosed();
}

const handleScroll = () => {
  state.hasLeftTop = window.scrollY > 0
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

    // The following is used to mark select objects that need animation when
    // they appear in the view. They can be equipped with the "observe-viewport"
    // class, and then implement the effect using .in-view.
    // @todo: Find a better way to attaching the observer than using a timeout.
    //    Problem is that not all elements are loaded.
    setTimeout(() => {
      const boxes = document.querySelectorAll('.observe-viewport');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      });

      boxes.forEach(box => observer.observe(box));
    }, 1000)

});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    :class="{detached: state.hasLeftTop && !state.navOpen}">
    <div class="background"></div>
    <div class="border"></div>
    <div class="standard-width-behavior header-content">
      <BurgerMenu
          ref="burgerMenu"
          @open="state.navOpen = true"
          @close="state.navOpen = false" />
      <LogoText />
    </div>
  </header>

  <MainMenu
      :opened="state.navOpen"
      @change="goTo"
      />

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 100;

  top: 0;
  left: 0;
  right: 0;

  padding-top: var(--theme-base-margin);
  padding-bottom: var(--theme-base-margin);

  // Due to the fact that CSS can't natively animate gradient
  // background properties, we create a stand-alone div containing the gradient,
  // which can then have a number of transitions applied to it.
  .background {
    transition: var(--theme-default-transform-speed);
    background: linear-gradient(25deg, var(--theme-bg-dark), var(--theme-bg-light));
    position: absolute;
    inset: 0;

    opacity: 0;
  }

  .border {
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 2px;
    width: 0;
    background: #fff;
    z-index: 10;
    transition: var(--theme-default-transform-speed);
  }

  .header-content {
    align-items: center;
    display: flex;
    position: relative;
    z-index: 10;
  }

  &.detached {
    .background {
      opacity: 1;
      box-shadow: var(--theme-shadow);
    }
    .border {
      width: 100vw;
      left: 0;
    }
  }
}

main {
  margin: auto;
}
</style>
