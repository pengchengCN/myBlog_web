<template>
  <div id="app">
    <div class="header">
      <vue-lazy-component>
        <Menu :menuData="menuData"></Menu>
      </vue-lazy-component>
    </div>
    <router-view style="padding-top: 60px" />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'app',
  components: {
    Menu
  },
  data () {
    return {
      menuData: [
        {
          name: '首页',
          href: '/'
        },
        {
          name: '分类',
          href: '/categories',
          children: [
            {
              name: '文章',
              href: '/article'
            },
            {
              name: '照片',
              href: '/photo'
            }
          ]
        },
        {
          name: '关于',
          href: '/about'
        }
      ]
    }
  }
}
</script>


<style lang="scss">
* {
  margin:0;
  padding:0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  position: fixed;
  z-index: 9999;
  height: 60px;
  width: 100%;
  color: #333;
  text-align: center;
  background-color: #B3C0D1;
}
</style>
