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
import { mapGetters, mapActions } from "vuex"
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
  computed: {
    ...mapGetters(["getCategoryList", "getLabelList"])
  },
  methods: {
    ...mapActions(["setCategoryList", "setLabelList"]),
    async initApp () {
      // 获取菜单
      let {data: { menuList } } = await dao.menuList()
      this.menuList = menuList || []
      console.log('menuList=', menuList)
      // 获取全部分类
      let {data: { categoryList } } = await dao.categoryList()
      this.setCategoryList(categoryList)
      // 获取全部标签
      let {data: { labelList } } = await dao.labelList()
      this.setLabelList(labelList)
    }
  },
  mounted () {
    this.initApp()
  }
}
</script>


<style lang="scss">
* {
  margin:0;
  padding:0
}
ul, li {
  list-style-type: none
}
a {
  color: #000;
  text-decoration: none;
  transition: all 0.5s ease;
  letter-spacing: 0.02em;
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
