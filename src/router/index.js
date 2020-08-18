import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent.vue'
import Home from '@/components/Home'
import Create from '@/pages/Event/Create'
import List from '@/pages/Event/List'
import Login from '@/pages/Login'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        name: '登录'
      },
      component: Login
    },
    {
      path: '/index',
      component: Index,
      redirect: '/main',
      children: [
        {
          path: '/main',
          /* meta的name主要用来做面包屑 */
          meta: {
            name: '首页'
          },
          component: MainContent,
          children: [
            {
              path: '',
              component: Home
            }
          ]
        },
        {
          path: '/event',
          meta: {
            name: '活动'
          },
          component: MainContent,
          children: [
            {
              path: 'create',
              meta: {
                name: '创建'
              },
              component: Create
            },
            {
              path: 'list',
              meta: {
                name: '管理'
              },
              component: List
            }
          ]
        }
      ]
    }
  ]
})
