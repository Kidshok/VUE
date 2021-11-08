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
    <transition name="fade">
      <form-modal-window v-if="modalName" :settings="modalSettings" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    FormModalWindow: () => import("./components/FormModalWindow.vue"),
  },
  data() {
    return {
      page: 1,
      count: 10,
      modalName: "",
      modalSettings: {},
    };
  },
  methods: {
    onShown(settings) {
      this.modalName = settings.name;
      this.modalSettings = settings.settings;
    },
    onHide() {
      this.modalSettings = {};
      this.modalName = "";
    },
  },
  created() {
    this.$store.dispatch("fetchData");
  },
  mounted() {
    this.$modal.EventBus.$on("shown", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>