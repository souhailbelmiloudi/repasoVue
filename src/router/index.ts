import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../componentes/Formulario.vue')
    },
    {
      path: '/lista',
      name: 'lista',
      component: () => import('../componentes/ListaTareas.vue')
    },
    {
      path: '/localidades',
      name: 'localidades',
      component: () => import('../componentes/Localidades.vue')
    }
  ]
})

export default router
