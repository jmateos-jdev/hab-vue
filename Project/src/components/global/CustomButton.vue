<script setup>
defineProps({
    text: {
        type: String,
        default: "Click Here",
        required: true
    }
})

</script>

<template>
    <button @click="action">
        {{ text }}
    </button>
</template>

<style scoped>
</style>