<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div
      class="content_card bg-white shadow-sm rounded border p-3 mb-5 d-flex flex-column align-items-center"
    >
      <img
        src="https://via.placeholder.com/400x300"
        alt=""
        class="w-100 rounded"
      />

      <div class="content__card__body">
        <p class="text-center py-4 m-0">
          {{ truncatedContent }}
        </p>
      </div>

      <button
        class="border-2 rounded-pill text-uppercase px-3 py-2 mb-2 bg-white"
      >
        <RouterLink
          :to="{ name: 'post', params: { id: post.id } }"
          class="text-body font-weight-bold"
        >
          read more
        </RouterLink>
      </button>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import truncate from "lodash/truncate";

export default {
  name: "ContentCard",
  components: { RouterLink },
  props: {
    post: Object,
  },
  computed: {
    truncatedContent() {
      return truncate(this.post.content, {
        length: 200,
      });
    },
  },
};
</script>

<style scoped>
.content__card__body {
  height: 250px;
}
</style>
