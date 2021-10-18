<template>
  <div id="app">
    <div class="header-text"><h1>Calculator</h1></div>
    <div class="display">
      <input v-model.number="operant1" type="number" />
      <input v-model.number="operant2" type="number" />
      = {{ result }}
    </div>
    <div class="kayboard">
      <button @click="result = operant1 + operant2">+</button>
      <button @click="result = operant1 - operant2">-</button>
      <button @click="divide(operant1, operant2)" :disabled="operant2 == '0'">
        /
      </button>
      <button @click="result = operant1 * operant2">*</button>
      <button @click="result = Math.pow(operant1, operant2)">степень</button>
      <button
        @click="result = parseInt(operant1 / operant2)"
        :disabled="operant2 == '0'"
      >
        целое /
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operant1: 0,
      operant2: 0,
      result: 0,
    };
  },

  methods: {
    divide(operant1, operant2) {
      this.result = operant1 / operant2;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
