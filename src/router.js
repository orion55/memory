import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/game',
      name: 'Game',
      component: () => import('./pages/Game.vue')
    }
  ]
})
