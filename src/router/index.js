import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path:'/personaje/:id',
    name:'personaje',
    component: () => import(/* webpackChunkName: "personaje" */ '../views/PersonajeView.vue')
  },
  {
    path:'/characterforname',
    name:'characterforname',
    component: () => import(/* webpackChunkName: "characterforname" */ '../views/CharacterForName.vue')
  },
  {
    path:'/:catchAll(.*)',
    name:'Error404',
    component: () => import(/* webpackChunkName: "error404" */ '../views/Error404.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
