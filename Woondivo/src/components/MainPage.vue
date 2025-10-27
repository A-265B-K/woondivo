<template>
   <div class="main-page">
      <div class="left-page">
         <div class="card-list">
            <PageCard
            v-for="(page, index) in pages"
            :key="index"
            :title="page.title"
            :pageId="page.PageId"
            :route="page.route"
            />
         </div>
      </div>
      <div class="right-page">
         <div class="AboutWoondivo">
            <h2>About The Woondiversiteit</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementu</p>
            <img>
            <h3>Our Goal</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementu</p>
         </div>
      </div>
   </div>
</template>

<script setup>
import PageCard from './PageCard.vue'

const pages = [
   {
      title: "Events",
      PageId: 1,
      route: "/events"
   },
   {
      title: "Meet The Units",
      PageId: 2,
      route: "/meetTheUnits"
   },
   {
      title: "Articles",
      PageId: 3,
      route: "/articles"
   },
   {
      title: "Newsletter",
      PageId: 4,
      route: "/newsletter"
   },
]

</script>

<style scoped>
.main-page {
   border: 0px;
   padding: 0px;
   overflow: hidden;
}

.left-page {
   max-width: 50%;
   float: left;
   padding: 70px;
   border: 0px;
}

.card-list {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   column-gap: 0px;
   row-gap: 0px;
}

.right-page {
   max-width: 50%;
   overflow: hidden;
   padding: 20px;
}
.AboutWoondivo {
   background: #f2f2f2d3;
   border-radius: 20px;
   padding: 30px;
   line-height: 1.8;
   letter-spacing: 5%;
   margin: 0%;
}

p {
   padding: 20px;
   margin: 0px;
}
</style>