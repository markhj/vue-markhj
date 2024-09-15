<script setup>
defineProps({
  project: Object
});

</script>

<template>
  <section class="observe-viewport">
    <div class="background" :style="'background-image: url(\'' + project.image + '\')'"></div>
  </section>
</template>

<style scoped lang="scss">
$project-card-rotation-angle: 35deg;

section {
  perspective: 800px;
  min-height: 400px;
  width: 350px;
  position: relative;
  transition: var(--theme-appear-transform-speed);

  .background {
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: var(--theme-appear-transform-speed);

    position: absolute;
    inset: 0;

    &::before {
      content: "";
      transition: var(--theme-appear-transform-speed);
      position: absolute;
      inset: -5px;
      border: 3px solid #fff;
    }
    &::after {
      content: "";
      position: absolute;
      transition: var(--theme-appear-transform-speed);
      inset: 3px;
      border: 3px solid #fff;
    }
  }

  &.in-view.even {
    .background {
      transform: rotateY($project-card-rotation-angle);
    }
  }

  &.in-view.odd {
    .background {
      transform: rotateY(-$project-card-rotation-angle);
    }
  }

  &.in-view.even:hover .background {
    transform: rotateY($project-card-rotation-angle * 0.5);
  }

  &.in-view.odd:hover .background {
    transform: rotateY(-$project-card-rotation-angle * 0.5);
  }

  &.in-view:hover {
    .background {
      animation-name: bg-flash;
      animation-duration: 700ms;
      &::after {
        transition: 200ms;
        inset: -15px;
      }
      &::before {
        transition: 200ms;
        inset: -8px;
      }
    }
  }

  @keyframes bg-flash {
    50% {
      filter: grayscale(80%) blur(3px);
    }
  }
}
</style>