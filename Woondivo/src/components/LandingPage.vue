<template>
    <div class="LandingPage">
        <h1 class="title">De Woondiversiteit</h1>
    </div>
</template>

<script>
export default {
    name: "LandingPage"
};
</script>

<style scoped>
.LandingPage {
  height: 100vh;
  background-image: url('@/assets/building_front.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  text-align: left;
}

.title {
  font-size: 3rem;
  color: white;
}
</style>
