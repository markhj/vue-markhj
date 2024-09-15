<script setup>
import {onMounted, onUnmounted, reactive} from "vue";

const emit = defineEmits(['finished']);

const props = defineProps({
  text: String,
  startDelay: Number // Time before the typing starts (given in milliseconds)
});

let timer;

const state = reactive({
  parsedText: '',
  glowAnimation: false
});

const timerInterval = () => {
  if (state.parsedText.length >= props.text.length) {
    clearInterval(timer);
    emit('finished');
    state.glowAnimation = true;
    return;
  }
  state.parsedText += props.text[state.parsedText.length];
};

onMounted(() => setTimeout(() => timer = setInterval(timerInterval, 100), props.startDelay));

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <div class="content" v-bind:class="{
    glow: state.glowAnimation
  }">
    <span v-for="(letter, i) in state.parsedText" v-bind:key="i">{{ letter }}</span>
    <span class="caret" v-bind:class="{
      hidden: state.glowAnimation
    }"></span>
  </div>
</template>

<style scoped lang="scss">
$typewriter-start-color: #054AC7;
$typewriter-end-color: #9A006F;
$typewriter-font-size: 6vw;

// Time between the text has been typed out, and until the glow animation starts
$typewriter-glow-base-delay: 400ms;

$letters: 15;

div {
  font-family: var(--theme-font-mono);
  font-weight: 700;
}

@keyframes flashing-caret {
  50% {
    opacity: 0.9;
  }
}

div.content {
  text-align: center;
  font-size: $typewriter-font-size;

  span.caret {
    background: #fff;
    border-radius: var(--theme-border-radius-normal);
    margin-left: 1vw;
    opacity: 0;
    animation-name: flashing-caret;
    animation-iteration-count: infinite;
    animation-duration: 800ms;
    transition: var(--theme-default-transform-speed);
    width: 40px;
    height: $typewriter-font-size;
    display: inline-block;
    &.hidden {
      opacity: 0;
      width: 0;
    }
  }

  &.glow {
    > span:not(.caret) {
      animation-name: glow;
      animation-duration: 1800ms;
    }
  }
}

@keyframes glow {
  50% {
    color: #fff;
    text-shadow: 0 0 10px #fff,
      0 0 25px #fff,
      0 0 40px #fff,
      0 0 70px #fff;
  }
}

@for $i from 1 through $letters {
  $percentage: ($i - 1) * 6.66%;
  $color: mix($typewriter-start-color, $typewriter-end-color, $percentage);

  span:nth-child(#{$i}):not(.caret) {
    color: #fff;
    animation-delay: $typewriter-glow-base-delay + $i * 40ms;
    text-shadow: 0 0 10px darken($color, 10%),
      0 0 25px $color,
      0 0 45px $color,
      0 0 75px $color,
      0 0 100px $color;
  }
}

</style>