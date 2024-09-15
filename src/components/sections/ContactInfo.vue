<script setup>
import BasicSection from "@/components/sections/BasicSection.vue";

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiEmailOutline, mdiWeb, mdiLinkedin, mdiGithub } from '@mdi/js';

// To protect the email address against scraping, you can use various tools,
// such as those provided by CloudFlare.
const email = import.meta.env.VITE_CONTACT_EMAIL;

const firstName = import.meta.env.VITE_FIRST_NAME;
const lastName = import.meta.env.VITE_LAST_NAME;

const urlShortened = location.hostname;
</script>

<template>
  <BasicSection>
    <h2>Contact</h2>

    <div class="business-card-wrapper">
      <div class="business-card">
        <div class="name">
          <strong>{{ firstName }} {{ lastName }}</strong>
          <div>Software & Web Developer</div>
        </div>

        <div class="contact">
          <div>
            <a alt="Send an email" class="white" :href="'mailto:' + email"><svg-icon type="mdi" :path="mdiEmailOutline" /> {{ email }}</a>
          </div>
          <div>
            <svg-icon type="mdi" :path="mdiWeb" /> {{ urlShortened }}
          </div>
        </div>

        <div class="social-media">
          <a class="white"
             target="_blank"
             alt="Explore various projects on my Github profile."
             href="https://github.com/markhj"><svg-icon size="40" type="mdi" :path="mdiGithub" /></a>
          <a class="white"
             target="_blank"
             alt="Visit my LinkedIn profile."
             href="https://www.linkedin.com/in/markhj/"><svg-icon size="40" type="mdi" :path="mdiLinkedin" /></a>
        </div>
      </div>
    </div>
  </BasicSection>
</template>

<style scoped lang="scss">
$business-card-width: 300px;
$business-card-height: 280px;

.business-card-wrapper {
  perspective: 800px;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  .business-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--theme-border-radius-normal);
    padding: var(--theme-base-margin);
    background: linear-gradient(45deg, var(--theme-color-primary), var(--theme-color-secondary));
    transform: rotateX(60deg) rotateY(20deg) rotateZ(-35deg);
    transition: calc(var(--theme-default-transform-speed) * 3);

    width: $business-card-width;
    height: $business-card-height;

    max-width: 50vw;
    max-height: 20vh;

    .name, .contact, .social-media {
      position: absolute;
      z-index: 10;
    }

    .name {
      top: var(--theme-base-margin);
      left: var(--theme-base-margin);
      strong {
        font-size: 2.0em;
        font-family: var(--theme-font-headline);
      }
    }

    .contact {
      bottom: var(--theme-base-margin);
      left: var(--theme-base-margin);
      > div a {
        margin-top: 10px;
        display: flex;
        align-items: center;
        svg {
          margin-right: 10px;
        }
      }
    }

    .social-media {
      bottom: var(--theme-base-margin);
      right: var(--theme-base-margin);
      display: flex;
      flex-direction: column;
      a {
        margin-top: 10px;
      }
    }

    &::after, &::before {
      transition: calc(var(--theme-default-transform-speed) * 3);
      position: absolute;
      content: "";
      width: 100px;
      height: $business-card-height * 2;
      background: rgba(255, 255, 255, 0.1);
      transform: rotate(20deg);
      top: -30%;
    }

    &::after {
      left: 20%;
    }

    &::before {
      left: 10%;
    }

    &:hover {
      transform: rotateY(-15deg) rotateX(20deg) translateZ(100px) translateX(50px) scale(1.1);
      &::after {
        left: 40%;
      }
      &::before {
        left: 60%;
      }
    }
  }
}
</style>