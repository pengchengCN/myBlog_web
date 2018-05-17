<template>
  <div class="menu">
    <ul>
      <li 
        v-for="(menu, index) in menuData" 
        :key = "menu.href" 
        :index="index"
        class="menuLi"
        @click="firstMenuClick(menu)"
        >
        {{menu.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    menuData: Array
  },
  watch: {},
  computed: {},
  methods: {
    firstMenuClick (menu) {
      this.$router.push(menu.href)
    }
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
