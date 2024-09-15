<script setup>
import BasicSection from "@/components/sections/BasicSection.vue";
import TypeWriter from "@/components/gimmicks/TypeWriter.vue";
import {reactive} from "vue";

const state = reactive({
  finished: false
})
</script>

<template>
  <BasicSection>
    <TypeWriter text="Hello, world!"
      start-delay="1000"
      @finished="state.finished = true" />

    <p v-bind:class="{
      appear: state.finished
    }">
      Grüezi! I'm a Danish <strong>software and web developer</strong> based in Switzerland.
    </p>
  </BasicSection>
</template>

<style scoped>
p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12vh;
  font-size: 34px;
  width: 70%;
  font-family: var(--theme-font-headline);
  transition: 500ms;
  transition-delay: 1700ms;
  transform: translateY(100px);
  opacity: 0;
  &.appear {
    opacity: 1;
    transform: none;
  }
}
</style>