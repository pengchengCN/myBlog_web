<template>
  <div class="category">
    <h1 style="margin-bottom: 20px">分类：{{title}}</h1>
    <div v-for="(item, index) in listData" :key="index">
      <ArticleComp :data="item"></ArticleComp>
    </div>
  </div>
</template>

<script>
import dao from "../common/dao.js";
import util from "../common/util.js";
import { mapGetters, mapActions } from "vuex"
import ArticleComp from "../components/ArticleComp";
export default {
  name: "category",
  components: {
    ArticleComp
  },
  props: {},
  data() {
    return {
      title: '',
      listData: []
    };
  },
  watch: {
    "$route": "initCategory",
    '$store.state.categoryList': {
      handler: function (n) {
        let val = this.$route.params.id
        if (n.length > 0 ) this.title = util.categoryName(val, this.getCategoryList)
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(["getCategoryList", "getLabelList"])
  },
  methods: {
    ...mapActions(["setCategoryList"]),
    async initCategory() {
      let val = this.$route.params.id
      this.title = util.categoryName(val, this.getCategoryList)
      let { data: { articleList } } = await dao.getCategoryAll({id: val});
      this.listData = util.articleList(articleList, this.getCategoryList, this.getLabelList)
    }
  },
  mounted() {
    this.initCategory()
  }
};
</script>

<style lang="scss">
</style>
