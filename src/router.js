import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Categories = () => import('./views/Categories.vue')
const About = () => import('./views/About.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
