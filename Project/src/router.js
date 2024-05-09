import { createWebHistory , createRouter } from "vue-router";
import Home from "./Home.vue";
import Buscador from "./Buscador.vue";
import Character from "./Character.vue";

const rutas = [
    { path: '/', component: Home },
    { path: '/buscador', component: Buscador },
    { path: '/personaje/:id', component: Character}
]

const router = createRouter({
    history: createWebHistory(),
    routes: rutas,
})

export default router