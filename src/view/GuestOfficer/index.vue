<template>
  <!-- <swiper :modules="[Virtual]" :slides-per-view="1" :space-between="50" virtual>
    <swiper-slide
      v-for="(path, index) in slides"
      :key="index"
      :virtualIndex="index"
    >
      <img style="width:100%;" :src="path"
    /></swiper-slide>
  </swiper> -->
  <div>
    <img src="https://tesseract.projectnaptha.com/img/eng_bw.png" alt="">
  </div>
</template>
<script setup lang="ts">
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import Tesseract from 'tesseract.js';

Tesseract.recognize(
  'https://tesseract.projectnaptha.com/img/eng_bw.png',
  'eng',
).then(({ data: { text } }) => {
  console.log(text);
})
// const slides = ref([
// ]);
</script>