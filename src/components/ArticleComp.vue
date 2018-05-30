<template>
  <div class="article">

    <div class="article_cat">
      <router-link v-for="(item, index) in data.category_id" :key="index" tag="a" :to="`/category/${item.category_id}`" class="categoryA">{{item.name}}</router-link>
    </div>

    <h2 class="article_title">
      <router-link tag="a" :to="`/detail/${data.article_id}`">{{data.title}}</router-link>
    </h2>

    <div class="article_meta">
      <span>By {{data.author}}</span>
      <span> | </span>
      <i class="fa fa-comment" aria-hidden="true"></i>
      <span>{{data.commentsNumber}}
      </span>
    </div>

    <div class="article_content">
      <router-link tag="a" :to="`/detail/${data.article_id}`">
        <img :src="data.introduce_img" width="100%" />
      </router-link>
      <p>{{data.introduce_text}}</p>
    </div>

    <div class="article_date">
      <router-link tag="a" :to="`/category/${data.release_date}`">{{data.release_date}}</router-link>
      <router-link class="article_more" tag="a" :to="`/detail/${data.article_id}`">Read More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuComponent",
  props: {
    data: Object
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article {
  margin-bottom: 30px;
  padding: 30px;
  background-color: #fff;
  .article_cat {
    line-height: 26px;
    .categoryA {
      padding-right: 10px;
      font-size: 14px;
      color: #26b89a;
      font-weight: bold;
      &:hover {
        color: #000
      }
    }
  }
  .article_title {
    margin-bottom: 10px;
    font-weight: 500;
    border-bottom: 1px solid #ccc;
    a:hover {
      color: #999
    }
  }
  .article_meta {
    margin-bottom: 10px;
    span, i {
      font-size: 14px;
      font-weight: bold;
      color: #999
    }
  }
  .article_content {
    margin-top: 20px;
    p {
      margin-top: 20px;
    }
    img {
      max-height: 300px
    }
  }
  .article_date {
    margin-top: 20px;
    &::after {
      content: "";
      display: block;
      height: 0;
      clear: both;
    }
    a {
      float: left;
      font-weight: bold;
      font-style: italic;
      color: #999;
      &:hover {
        color: #000
      }
    }
    .article_more {
      float: right;
      font-weight: 500;
      font-style: initial;
      color: #26b89a;
    }
  }
}
</style>
