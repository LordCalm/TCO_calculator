import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/TCO',
      component: () => import('./components/TCO.vue'),
    },
    {
      path: '/Gen',
      component: () => import('./components/Generalization.vue'),
    },




    {
      path: '/404',
      name: 'NotFound',
      component: () => import('./components/NotFound.vue'),
  },
  {
      path: '/:catchAll(.*)',
      redirect:'404'
  }    
  ],
})
