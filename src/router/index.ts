import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: import('@/components/Home.vue')
    }
  ]
})

export default router