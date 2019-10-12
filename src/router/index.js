import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import Test3 from '@/components/Test3'
import Test4 from '@/components/Test4'
import Test5 from '@/components/Test5'
import Test6 from '@/components/Test6'
import Test7 from '@/components/Test7'
import Test8 from '@/components/Test8'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    },
    {
      path: '/test3',
      name: 'Test3',
      component: Test3
    },
    {
      path: '/test4',
      name: 'Test4',
      component: Test4
    },
    {
      path: '/test5',
      name: 'Test5',
      component: Test5
    },
    {
      path: '/test6',
      name: 'Test6',
      component: Test6
    },
    {
      path: '/test7',
      name: 'Test7',
      component: Test7
    },
    {
      path: '/test8',
      name: 'Test8',
      component: Test8
    }
  ]
})
