<template>
    <div class="LandingPage">
        <div class="otitle">
            <h1 class="title">De Woondiversiteit</h1>
            <h2 class="subtitle">Hoogte Kadijk 401 | 1018 BK | Amsterdam</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "LandingPage"
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@100..900&display=swap');
</style>

<style scoped>
.LandingPage {
  height: 100vh;
/*  background-image: url('@/assets/building_front_zoom.jpeg'); 
  background-size: cover;
  background-position: center; */
  display: flex;
  justify-content: left;
  align-items: flex-start;
  text-align: left;
}

.otitle {
  color: white;
  position: absolute;
  top: 43%;
  right: 50px;
  font-family: "Hahmlet", serif;
  font-weight: 200;
  font-style: normal;
}

.title {
    font-size: 3rem;
    margin-bottom: -25px;
    word-spacing: -10px;
    letter-spacing: -0.7px;
}

.subtitle {
    font-size: 1.28rem;
}


</style>
