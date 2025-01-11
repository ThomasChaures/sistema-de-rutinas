import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddClientView from '@/views/AddClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cliente-nuevo',
      name: 'cliente-nuevo',
      component: AddClientView
    },
    {
      path: '/cliente/:dni',
      name: 'cliente',
    },
    {
      path: '/cliente/:dni/eliminar',
      name: 'cliente-eliminar',
    },
    {
      path: '/cliente/:dni/editar',
      name: 'cliente-editar',
    },
  ],
})

export default router
