import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game',
      component: () => import('./pages/Game.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./pages/About.vue')
    }
  ]
})
