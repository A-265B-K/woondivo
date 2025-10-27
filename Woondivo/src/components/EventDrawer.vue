<template>
    <transition name="slide">
        <div v-if="visible" class="drawer">
            <button class="close-btn" @click="$emit('close')">x</button>
            <img v-if="event.image" :src="event.image" alt="" class="drawer-img" />
            <h2>{{ event.title }}</h2>
            <p>{{ event.date }}</p>
            <p>{{ event.location }}</p>
        </div>
    </transition>
</template>

<script setup>

defineProps({
    visible: Boolean,
    event: {
        type: Object,
        default: () => ([])
    }
})

defineEmits(['close'])
</script>