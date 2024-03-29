import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/fare-guide',
      name: 'fareGuide',
      component: () => import('../views/FareGuideView.vue')
    },
    {
      path: '/centers',
      name: 'centers',
      component: () => import('../views/CentersView.vue')
    },
    {
      path: '/majoo',
      name: 'majoo',
      component: () => import('../views/NamooView.vue')
    },
    {
      path: '/app-link',
      name: 'AppLink',
      component: () => import('../views/AppLinkView.vue')
    },
    {
      path: '/apk-file-download',
      name: 'FileDownload',
      component: () => import('../views/ApkFileDownloadView.vue')
    }
  ]
})

export default router
