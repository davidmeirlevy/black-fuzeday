import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/components',
        name: 'components',
        component: () => import(/* webpackChunkName: "components" */ './views/Components.vue')
    },
    {
      path: '/help',
      name: 'help',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "help" */ './views/Help.vue')
    }
  ]
})