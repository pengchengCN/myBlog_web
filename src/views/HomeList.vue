<template>
  <div class="homeList">
    <div v-for="(item, index) in listData" :key="index">
      <ArticleComp :data="item"></ArticleComp>
    </div>
  </div>
</template>

<script>
import dao from '../common/dao.js'
import util from '../common/util.js'
import { mapGetters, mapActions } from "vuex"
import ArticleComp from '../components/ArticleComp'
  export default {
    name: 'homeList',
    components: {
      ArticleComp
    },
    props: {
    },
    data () {
      return {
        listData: []
      }
    },
    watch: {
    },
    computed: {
    ...mapGetters(["getCategoryList", "getLabelList"])
  },
    methods: {
      ...mapActions(["setCategoryList"]),
      async articleList () {
        let {data: { articleList } } = await dao.articleAll()
        this.listData = util.articleList(articleList, this.getCategoryList, this.getLabelList)
        console.log('listData=', this.listData)
      }
    },
    mounted () {
      this.articleList()
    }
  }
</script>

<style lang="scss">
</style>


