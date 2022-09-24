<template>
  <MainHeader :title="post.title" />
  <div class="container my-5">
    {{ post.content }}
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import { getData } from "../../lib/request.js";

export default {
  name: "SinglePostView",
  components: {
    MainHeader,
  },
  data() {
    return {
      post: null,
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
      this.post = getData(this.$route.params.id);
    },
  },
};
</script>
