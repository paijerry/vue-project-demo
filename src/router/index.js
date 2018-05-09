import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import page1 from '@/components/page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    }
  ]
})
