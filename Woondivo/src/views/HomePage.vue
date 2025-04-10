<template>
  <div class="AppContainer">
    <div class="pageContainer">
      <div class="pageHeader">
        <div class="pageContent">
          <LandingPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue';

export default {
  name: 'HomePage',
  components: {
    LandingPage, 
  },
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
</style>