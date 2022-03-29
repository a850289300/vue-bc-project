import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: import('@/view/login/Login.vue')
    },
    {
      path: '/',
      component: import('@/layout/Index.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: import('@/view/home/Home.vue'),
        }
      ]
    },
  ]
})

export default router
