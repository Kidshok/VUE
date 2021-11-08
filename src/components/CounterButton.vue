<template>
  <div>
    <button @click="onClick">Clicked {{ counter }} times!</button>
  </div>
</template>

<script>
export default {
  name: "CounterButton",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
    onMouseOver() {
      console.log("Hover");
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMounted");
  },
  mounted() {
    const btn = this.$el.querySelector("button");
    if (btn) {
      btn.addEventListener("mouseover", this.onMouseOver);
    }
    console.log("mounted", this);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    const btn = this.$el.querySelector("button");
    if (btn) {
      btn.removeEventListener("mouseover", this.onMouseOver);
    }
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>