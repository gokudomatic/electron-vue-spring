import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'initialization-page',
      component: require('@/components/InitializationPage').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/home',
      name: 'home-page',
      component: require('@/components/HomePage').default
    }
  ]
})
