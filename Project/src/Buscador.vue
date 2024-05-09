<script setup>
import { ref } from 'vue';
import FormConsulta from './components/FormConsulta.vue';
import ListadoConsulta from './components/ListadoConsulta.vue';

const charactersResults = ref([]) 

</script>

<template>
    <FormConsulta @getCharacters="(chars)=> charactersResults = chars" />
    <ListadoConsulta :characters="charactersResults" />
    <hr />
</template>

<style scoped>
</style>