<template>
  <div class="rightComponent">
    <h4>搜索</h4>
    <input type="text" placeholder="搜索...">
    <h4>关于博主</h4>
    <h4>博主分类</h4>
    <h4>最新日志</h4>
    <h4>标签</h4>
    <h4>按月存档</h4>
  </div>
</template>

<script>
export default {
  name: 'RightComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rightComponent {
  padding: 30px;
  background-color: #ccc
}
</style>
