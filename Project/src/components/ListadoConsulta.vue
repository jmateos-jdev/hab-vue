<script setup>
defineProps({
    characters: {
        type: Array,
        default: [],
        required: true
    }
})
</script>

<template>
    <ul>
        <li v-for="char in characters" :key="char.id">
            {{ char.name }}
        </li>
    </ul>
</template>

<style scoped>
li{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem
}
</style>