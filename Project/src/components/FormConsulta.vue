<script setup>
import { ref } from 'vue';
import CustomButton from './global/CustomButton.vue';
import CustomInput  from './global/CustomInput.vue';

const textToSearch = ref('')

const searchCharacter = async () => {
    const resCharacter =
     await fetch(`https://rickandmortyapi.com/api/character/?name=${textToSearch.value}`) 
    console.log(await resCharacter.json())
}

</script>

<template>
    <div>
        <CustomInput 
            :initial-value="textToSearch"
            @new-value="(val) => textToSearch = val"
            placeholder="Bucador de Personajes" />

        <CustomButton text="Buscar" :action="()=>searchCharacter()" />
    </div>
</template>

<style scoped>
</style>