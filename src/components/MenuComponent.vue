<template>
  <div class="menu">
    <ul>
      <li 
        v-for="(item, index) in menuData" 
        :key = "index" 
        class="menuLi"
        @click="firstMenuClick(item)"
        >
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "menuComponent",
  props: {
    menuData: Array
  },
  watch: {},
  computed: {},
  methods: {
    firstMenuClick (item) {
      if (item.name === '首页') return this.$router.push(`/`)
      if (item.name === '生活') return this.$router.push(`/life`)
      if (item.name === '关于') return this.$router.push(`/about`)
      this.$router.push(`/category/${item.menu_id}`)
    }
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu {
  margin: 0 auto;
  width: 1200px;
}
.menuLi {
  display: inline-block;
  padding: 0 30px;
  line-height: 60px;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: red
  }
}
</style>
