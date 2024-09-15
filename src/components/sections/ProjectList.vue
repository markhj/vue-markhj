<script setup>
import projects from '@/assets/projects.json';
import BasicSection from "@/components/sections/BasicSection.vue";
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>
  <BasicSection>
    <h2>Projects</h2>

    <div class="project-list">
      <div class="project observe-viewport"
           v-for="(project, i) in projects"
           :key="i">
        <ProjectCard
          :project="project"
          :class="i % 2 === 0 ? 'even' : 'odd'"
          />
        <div class="text">
          <h3>{{ project.title }}</h3>
          <p v-bind:key="j" v-for="(line, j) in project.description">{{ line }}</p>
          <a target="_blank"
             class="button"
             v-if="project.url"
             :href="project.url">Visit &#10132;</a>
        </div>
      </div>
    </div>
  </BasicSection>
</template>

<style scoped lang="scss">
.project-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: calc(var(--theme-base-margin) * 8);
  .project {
    display: flex;
    align-items: center;
    transition: var(--theme-appear-transform-speed);
    transform: translateY(150px);
    .text {
      order: 1;
      padding-left: 50px;
      transition: var(--theme-appear-transform-speed);
      transform: translateY(100px);
      //font-family: var(--font-family-headline);
      font-size: 18px;
      line-height: 26px;
    }
    p {
      margin-bottom: 50px;
    }
    h3 {
      text-align: left;
      font-size: 35px;
      font-weight: 700;
    }
    &:nth-child(even) {
      .text {
        order: -1;
        padding-left: 0;
        padding-right: 50px;
      }
    }
    &.in-view {
      transform: none;
      .text {
        transform: none;
      }
    }
  }
}
</style>