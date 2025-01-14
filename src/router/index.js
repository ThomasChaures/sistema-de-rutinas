import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddClientView from "@/views/AddClientView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        admin: true,
      },
    },
    {
      path: "/cliente-nuevo",
      name: "cliente-nuevo",
      component: AddClientView,
      meta: {
        admin: true,
      },
    },
    {
      path: "/cliente/:dni",
      name: "cliente",
      meta: {
        admin: true,
      },
    },
    {
      path: "/cliente/:dni/eliminar",
      name: "cliente-eliminar",
      meta: {
        admin: true,
      },
    },
    {
      path: "/cliente/:dni/editar",
      name: "cliente-editar",
      meta: {
        admin: true,
    }
    },
  ],
});

export default router;
