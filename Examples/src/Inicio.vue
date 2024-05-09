<script setup>
import ListadoAlumnos from './components/ListadoAlumnos.vue';
import ListadoTareas from './components/ListadoTareas.vue';
import BotonEmit from './components/BotonEmit.vue'

import { ref, computed, onMounted, onBeforeMount } from 'vue'

let id = 1

const initialValue = ref(1)
const cantidad = ref(0)
const claseInput = ref('inputCustom')
const tituloInput = ref('titulo de prueba')
const newAlumno = ref('')
const listado = ref([
    {id: id++, name: 'Alumno 1'},
    {id: id++, name: 'Alumno 2'},
    {id: id++, name: 'Alumno 3'},
    {id: id++, name: 'Alumno 4'}
])

const evaluacionDoble = computed(()=>{
    return listado.value.length + cantidad.value
})

const claseParImpar = computed(()=>{
    return cantidad.value%2 == 0 ? `clasePar` : `claseImpar`
})


function aumentar() {
    cantidad.value++
    claseInput.value = "inputCustom"
    tituloInput.value = `El valor es: ${cantidad.value}`
}
function aumentar10() {
    claseInput.value = "inputCustomBeta"
    cantidad.value = cantidad.value + 10
}

const h1Element = ref(null)

onBeforeMount(()=>{
    console.log("app antes de ser montada", cantidad.value)
    cantidad.value = 10
})

onMounted(()=>{
    setTimeout(()=>{
        h1Element.value.textContent = "Bienvenidos a HaB"
    },5000)
   
    console.log("app montada",h1Element.value.textContent)
})

const respuesta = ref('Sin respuesta')
const mensaje = ref('Hola Mundo HaB')

function cambiarMensaje(msg){
    mensaje.value = msg    
}

</script>

<template>
    <BotonEmit text="Boton de Prueba"
     @response="(msg) => respuesta = msg"
     :fn="(msg) => cambiarMensaje(msg)"
     />
    {{ respuesta }}
    <hr />
    <h1 ref="h1Element">Cargando Información</h1>
    <hr />
    <h1>{{ mensaje }}</h1>
    <h1>{{evaluacionDoble}}</h1>
    <h2 :class="claseParImpar">Edad: {{ cantidad }}</h2>

    <button @click="aumentar">Sumar 1 año</button>
    <button @click="aumentar10">Sumar 10 año</button>

    <h3 v-if="cantidad>=65">Es jubilado</h3>
    <h3 v-else-if="cantidad>=18">Es mayor de edad</h3>
    <h3 v-else>Es menor de edad</h3>

    <br />
    <input v-model="mensaje" :class="claseInput" type="text" :title="tituloInput" >
    <hr />
    <ListadoAlumnos />
    <hr />
    <button @click="initialValue = 4">Cambiar initialValue</button>
    <ListadoTareas :tareaInicial="initialValue" textBtn="Texto Botón Nieto"/>
</template>

<style scoped>
.inputCustom {
    padding: 20px;
}

.inputCustomBeta {
    padding: 10px;
}
.clasePar{
    color: red
}
.claseImpar{
    color: blue;
}
</style>