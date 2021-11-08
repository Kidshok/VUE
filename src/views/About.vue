<template>
  <div class="about">
    <h1>This is an about page</h1>
    <counter-button />
  </div>
</template>
<script>
import CounterButton from "../components/CounterButton.vue";
export default {
  name: "About",
  components: {
    CounterButton,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>