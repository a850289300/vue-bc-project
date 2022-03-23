import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: import('@/view/home/Home.vue')
    },
    {
      path: '/login',
      component: import('@/view/login/Login.vue')
    }
  ]
})

export default router