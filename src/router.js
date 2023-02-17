import { createRouter , createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Project from "./pages/Project.vue";
import Contatti from "./pages/Contatti.vue";


const router = createRouter({

  history: createWebHistory(),
  routes: [
    {
      path: "/", // uri da scrivere nel browser
      name: "home", // nome della rotta da usare per creare un link
      component: Home // componente che ritorna l'html della pagina
    },
    {
      path: "/project", // uri da scrivere nel browser
      name: "project", // nome della rotta da usare per creare un link
      component: Project // componente che ritorna l'html della pagina
    },
    {
      path: "/contatti", // uri da scrivere nel browser
      name: "contatti", // nome della rotta da usare per creare un link
      component: Contatti // componente che ritorna l'html della pagina
    },
 
  ]
});

export { router };