<template>
    <div class="page-card">
        <h3>{{ title }}</h3>
        <button class="see-more" @click="navigateToPage">See More</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    imageUrl: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    pageId: {
        type: Number,
        required: true
    }

})

const router = useRouter()

const navigateToPage = () => {
    router.push({
        name: "Page",
        params: { id: props.pageId }
    })
}
</script>

<style scoped>

body, h3 {
    color: white;
}
.page-card {
    padding: 10px;
    position: relative;
    width: 230px;
    height: 280px;
    border-radius: 20px;
    overflow: hidden;
    background: #8f8f8f; /*might make this a background image later idk*/
    margin: 20px;
    font-family: 'Courier New', monospace;
    text-indent: 5%;

}

.see-more {
    background: #C8C3C3;
    width: 124px;
    height: 46px;
    border-radius: 20px;
    position: relative;
    left: 15px;
    top: 170px;
    color: white;
    font-family: 'Courier New', monospace;
}
</style>