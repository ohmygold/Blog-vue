import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import About from '@/components/About'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/header',
      name: 'Header',
      component: Header,
      children:[
        {
          path: 'about',
          name: 'About',
          component:About
        },{
          path: 'blog',
          name: 'Blog',
          component: Blog
        }
      ]
    }
  ]
})
