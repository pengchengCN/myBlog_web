<template>
  <div class="menu">
    <ul>
      <li 
        v-for="(item, index) in menuData" 
        :key = "item.href" 
        :index="index"
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
      this.$router.push(item.href)
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
