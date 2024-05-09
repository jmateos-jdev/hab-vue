import { createWebHistory , createRouter } from "vue-router";
import Home from "./Home.vue";
import Buscador from "./Buscador.vue";

const rutas = [
    { path: '/', component: Home },
    { path: '/buscador', component: Buscador },
]

const router = createRouter({
    history: createWebHistory(),
    routes: rutas,
})

export default router