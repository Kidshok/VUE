<template>
  <div class="wrapper">
    <div v-for="(item, idx) in items" :key="idx">
      {{ item }} <span>...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    msg: String,
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #fff;
}
</style>