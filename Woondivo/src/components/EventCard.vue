<template>
    <div class="event-card">
        <h3>{{ title }}</h3>
        <button class="see-more" @click="openDetails">See More</button>
    </div>
</template>

<script setup>

const props = defineProps({
    imageUrl: { //poster or smth
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    eventId: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    }

})

const emit = defineEmits(['open'])

function openDetails() {
    emit('open', {
        title: props.title,
        date: props.date,
        location: props.location,
        image: props.imageUrl
    })
}
</script>

<style scoped>

body, h3 {
    color: white;
}
.event-card {
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