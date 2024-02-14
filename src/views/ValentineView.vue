<script setup>

import {computed, ref} from "vue";
import {GIFS, ACCEPTED_GIF} from "@/util/valentineConstants.js";
import Confetti from 'vue-confetti/src/confetti';
import {useRoute} from "vue-router";

const confetti = new Confetti({});

const paramNames = useRoute().params.names;
const title = ref(`${paramNames}, ¿Quieres ser mi San Valentín?`)
const actualGif = ref(GIFS[0]);

const isYesButtonClicked = ref(false);
const yesButtonClickCount = ref(0);

const fontSize = computed(() => {
  return yesButtonClickCount.value===0 ? 22 : Math.max(16, 20 + yesButtonClickCount.value * 4);
});

const onNoButtonClick = () => {
  const randomIndex = Math.floor(Math.random() * GIFS.length);
  actualGif.value = GIFS[randomIndex];
  yesButtonClickCount.value++;
};

const onYesButtonClick = () => {
  isYesButtonClicked.value = true;
  actualGif.value = ACCEPTED_GIF;
  title.value = `Sabía que dirías que sí ${paramNames} 😍`;

  confetti.start({
    particles: [
      {
        type: 'heart',
      }
    ],
    defaultSize: 20,
    defaultColors: [
      'red',
      'pink',
      '#ba0000',
    ],
  });

  setTimeout(() => {
    confetti.stop();
  }, 5000);
}
</script>

<template>
  <section class="p-8 w-full h-full min-h-dvh items-center justify-center flex flex-col gap-0 md:p-16 md:gap-8">
    <h1 class="text-center font-bold text-[clamp(26px,5vw,42px)] max-w-2xl">
      {{title}}
    </h1>
    <div class="h-[400px] flex justify-center items-center">
      <img
          :src="actualGif.img"
          alt="gif"
          class="w-full h-full object-contain"
      />
    </div>
    <div class="flex justify-center items-center flex-wrap w-full h-full gap-8 pt-0 md:pt-8" v-if="!isYesButtonClicked">
      <Button
        type="button"
        label="Sí"
        class="min-w-fit sm:min-w-96 min-h-16 w-full sm:w-fit"
        :style="{ fontSize: fontSize + 'px' }"
        severity="success"
        @click="onYesButtonClick"
      />
      <Button
        type="button"
        :label="actualGif.description"
        severity="danger"
        class="min-w-fit text-xl md:text-2xl sm:min-w-96 min-h-16 w-full sm:w-fit"
        @click="onNoButtonClick"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: url('../assets/images/bgimage.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>