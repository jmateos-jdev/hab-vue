<script setup>
import { ref } from 'vue';
import FormConsulta from './components/FormConsulta.vue';
import ListadoConsulta from './components/ListadoConsulta.vue';

const charactersResults = ref([]) 

</script>

<template>
    <FormConsulta @getCharacters="(x)=> charactersResults = x" />
    <hr />
    <ListadoConsulta :characters="charactersResults" />
    
</template>

<style scoped>
</style>