import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/Chat'
import AuthUser from '@/components/AuthUser'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/chats/:uri?',
      name: 'Chat',
      component: Chat
    },

    {
      path: '/auth',
      name: 'AuthUser',
      component: AuthUser
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('authToken') !== null || to.path === '/auth') {
    next()
  } else {
    next('/auth')
  }
})

export default router
