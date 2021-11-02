<template>
  <div id="app">
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>/
      <router-link to="/dashboard/3/">3</router-link>/
      <router-link to="/about">about</router-link> /
      <router-link to="/notfound">notfound</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      page: 1,
      count: 10,
    };
  },
  created() {
    this.$store.dispatch("fetchData");
  },
};
</script>

<style lang="scss" module></style>