<template>
  <header class="header__background header container-fluid text-white">
    <div
      class="container h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <h1 class="header__title text-center">{{ title }}</h1>
      <p class="header__subtitle">
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped>
.header__background {
  height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://via.placeholder.com/600x600");
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: color;
  text-align: center;
}

.header__title {
  font-size: 70px;
  font-weight: bold;
}

.header__subtitle {
  font-size: 35px;
}

@media (min-width: 576px) {
  .header__background {
    background-image: url("https://via.placeholder.com/1920x650");
  }
}
</style>
