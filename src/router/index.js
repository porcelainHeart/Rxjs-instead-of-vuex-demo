import Vue from 'vue'
import Router from 'vue-router'
import markdown from '@/components/markdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'markdown',
      component: markdown
    }
  ]
})
