<script setup>
import BasicSection from "@/components/sections/BasicSection.vue";
import languages from '@/assets/languages.json';
import CardGrid from "@/components/CardGrid.vue";
import StandardCard from "@/components/StandardCard.vue";
</script>

<template>
  <BasicSection>
    <h2>Languages</h2>
    <CardGrid>
      <StandardCard v-for="(language, i) in languages"
                    :key="i"
                    :style="'transition-delay: ' + (i * 100) + 'ms'"
            >
        <h3>{{ language.language }}</h3>
        {{ language.level }}
      </StandardCard>
    </CardGrid>
  </BasicSection>
</template>

<style scoped lang="scss">

</style>