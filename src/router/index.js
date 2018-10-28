import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from '@/components/Cadastro'
import Menu from '@/components/Menu'
import Listar from '@/components/Listar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu,
      children: [
        {
          path: '/Listar',
          name: 'Listar',
          component: Listar
        },
        {
          path: '/Cadastro',
          name: 'Cadastro',
          component: Cadastro,
        }
      ]
    }
  ]
})
