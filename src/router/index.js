import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/components/as2'
    }, {
      path: '/components',
      component: resolve => require(['../views/components.vue'], resolve),
      children: [{
          path: 'as2',
          name: 'as2',
          component: resolve => require(['../components/as2.vue'], resolve),
      },{
          path: 'ftp',
          name: 'ftp',
          component: resolve => require(['../components/ftp.vue'], resolve),
      },{
          path: 'oftp',
          name: 'oftp',
          component: resolve => require(['../components/oftp.vue'], resolve),
      },{
          path: 'webservice',
          name: 'webservice',
          component: resolve => require(['../components/webservice.vue'], resolve),
      },{
          path: 'cert-list',
          name: 'cert-list',
          component: resolve => require(['../components/certlist.vue'], resolve),
      },{
          path: 'process-list',
          name: 'process-list',
          component: HelloWorld,
      },{
          path: 'process-rule',
          name: 'process-rule',
          component: HelloWorld,
      }]
    }
  ]
})
