<template>
  <div class="wrapper" v-if="settings.content">
    <div class="header">{{ settings.header }}</div>
    <div class="content">
      <component :is="settings.content" />
    </div>
    <div class="content">
      <button @click="onClose">Close</button>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
import AuthForm from "./AuthForm.vue";
export default {
  components: { AddPaymentForm, AuthForm },
  name: "FormModalWindow",
  props: {
    settings: Object,
  },
  methods: {
    onClose() {
      this.$modal.hide();
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  border: 1px solid red;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffffd9;
  & .overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(68, 61, 61, 0.5);
  }
  & .content {
    position: relative;
    z-index: 100;
  }
}
</style>