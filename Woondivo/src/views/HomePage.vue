<template>
  <div class="PageContainer">
    <div class="background" :style="{ filter: `blur(${blur}px)` }"></div>
    <div class="pageContent">
      <LandingPage />
      <MainPage />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LandingPage from '@/components/LandingPage.vue';
import MainPage from '@/components/MainPage.vue'

const blur = ref(0)

function handleScroll() {
  const scrollY = window.scrollY
  const maxBlur = 10
  const blurStart = 0
  const blurEnd = 300
  const calculatedBlur = Math.min((scrollY - blurStart) / (blurEnd - blurStart) * maxBlur, maxBlur)
  blur.value = Math.max(0, calculatedBlur)
}

onMounted (() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted (() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.PageContainer {
  position: relative;
  height: 100%;
  overflow-x: hidden;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/building_front_zoom.jpeg');
  background-size: cover;
  background-position: center;
  transition: filter 0.1s ease-out;
}

.content {
  position: relative;
  z-index: 1;
}
</style>

<style scoped>
</style>