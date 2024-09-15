<script setup>
import WelcomeSplash from '../components/sections/WelcomeSplash.vue';
import ProjectList from "@/components/sections/ProjectList.vue";
import ContactInfo from "@/components/sections/ContactInfo.vue";
import LanguageSkills from "@/components/sections/LanguageSkills.vue";
</script>

<template>
  <main>
    <WelcomeSplash id="welcome" />
    <ProjectList id="projects" />
    <LanguageSkills id="languages" />
    <ContactInfo id="contact" />
  </main>
</template>
