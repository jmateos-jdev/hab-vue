<script setup>
import { ref, computed } from 'vue'

let id = 1

const newAlumno = ref('')
const listadoAlumnos = ref([
    {id: id++, name: 'Alumno 1'},
    {id: id++, name: 'Alumno 2'},
    {id: id++, name: 'Alumno 3'},
    {id: id++, name: 'Alumno 4'}
])

function agregarAlumno() {
    if(newAlumno.value == ''){
        return
    }
    listadoAlumnos.value.push({id: id++, name: newAlumno.value})
    newAlumno.value = ''
}

function quitarAlumno(alumno) {
    listadoAlumnos.value = listadoAlumnos.value.filter((a) => a !== alumno)
}

</script>

<template>
    <input type="text" v-model="newAlumno" placeholder="Nuevo Alumno" />
    <button @click="agregarAlumno">Agregar Alumno</button>
    <ul>
        <li v-for="alumno in listadoAlumnos" :key="alumno.id">
        {{ alumno.id }}: {{ alumno.name }} <button @click="quitarAlumno(alumno)">X</button>
        </li>
    </ul>
</template>

<style scoped>
</style>