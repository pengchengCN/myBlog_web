<template>
  <div id="app">
    <div class="header">
      <MenuComponent :menuData="menuList"></MenuComponent>
    </div>
    <router-view />
  </div>
</template>

<script>
import dao from './common/dao.js'
import MenuComponent from '@/components/MenuComponent.vue'

export default {
  name: 'app',
  components: {
    MenuComponent
  },
  data () {
    return {
      menuList: []
    }
  },
  watch: {
  },
  methods: {
    async initMenu () {
      let {data: { menuList } } = await dao.menuList()
      this.menuList = menuList
      console.log(menuList)
    }
  },
  mounted () {
    this.initMenu()
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
  color: #2c3e50;
  background-color: #f2f2f2;
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
.home {
  padding-top: 160px;
  margin: 0 auto;
  width: 1200px;
  &::after {
    content:""; 
    display:block; 
    height:0; 
    clear: both;
  }
}
</style>
