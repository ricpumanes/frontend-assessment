<template>
  <MainHeader
    title="Hello Developer!"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
  />
  <div class="container my-5">
    <div class="row">
      <ContentCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import ContentCard from "../components/ContentCard.vue";
import MainHeader from "../components/MainHeader.vue";
import { findData } from "../../lib/request.js";

export default {
  name: "HomeView",
  components: {
    ContentCard,
    MainHeader,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  methods: {
    fetchData() {
      this.posts = findData();
    },
  },
};
</script>
