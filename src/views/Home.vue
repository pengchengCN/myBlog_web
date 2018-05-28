<template>
  <div class="home">
    <!-- 左边 -->
    <div class="homeLayout" style="width: 75%">
      <div style="padding: 0 30px">
        <router-view></router-view>
      </div>
    </div>
    <!-- 右边 -->
    <div class="homeLayout" style="width: 25%">
    <RightComponent></RightComponent>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RightComponent from '@/components/RightComponent.vue'

export default {
  name: 'home',
  components: {
    RightComponent
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.homeLayout {
  float: left;
}
</style>

