import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const HomeList = () => import('./views/HomeList.vue')
const Category = () => import('./views/Category.vue')
const Tag = () => import('./views/Tag.vue')
const Life = () => import('./views/Life.vue')
const About = () => import('./views/About.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'homeList',   // 重定向
      children: [
        {
          path: '/',
          name: 'homeList',
          component: HomeList,
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category,
        },
        {
          path: 'tag/:id',
          name: 'tag',
          component: Tag,
        },
        
      ]
    },
    {
      path: '/life',
      name: 'life',
      component: Life
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
