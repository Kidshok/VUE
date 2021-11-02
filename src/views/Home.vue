<template>
  <div class="home">
    <!-- <h1 class="h1">{{counter}}</h1> -->
    <!-- <button v-on:click="counter++">Click</button>
    <button v-on:click="counterMulti">*</button>
    <button @mouseover="mouseOverMethod">Click</button> -->
    <!-- <input :value="inputProp" name="text" type="text" @input="changeInput($event)"/> -->
    <input v-model.number="operand1" type="number" />
    <input v-model.number.lazy="operand2" type="number" />
    = {{ result }}
    <br />
    = {{ fibResult }} - FIB
    <br />

    <button
      v-for="(operand, idx) in operands"
      :key="idx"
      :title="operand"
      :id="idx"
      @click="calculate(operand)"
    >
      {{ operand }}
    </button>

    <div class="error" v-if="error">
      {{ error }}
    </div>

    <div class="error" v-show="error">
      {{ error }}
    </div>

    <div class="strange-message">
      <template v-if="result < 0">Отрицательное число</template>
      <template v-else-if="result < 100">Число в первой сотне</template>
      <template v-else>Результат больше 100</template>
    </div>

    <div class="logs">
      <div v-for="logItem in logs" :key="logItem">{{ logItem }}</div>
    </div>

    {{ fio }}
    {{ date }}

    <!--/*
    1- v-on: ~ @input 
    2- v-bind ~ :
    */-->

    <!-- <input @keyup="keyUpMethod"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Home",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      operands: ["+", "-", "*", "/"],
      result: 0,
      fibResult: 0,
      name: "Vasya",
      secondName: "Petrov",
      error: "",
      logs: {},
      logsInput: {},
    };
  },
  watch: {
    operand1(newValue) {
      this.$set(this.logsInput, "operand1", newValue);
    },
    operand2(newOperand2, oldOperand) {
      this.$set(this.logsInput, "operand2", oldOperand);
    },
  },
  methods: {
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
    calculate(operation = "+") {
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
      }
      const { operand1, operand2 } = this;
      const key = Date.now();
      const value = `${operand1} ${operation} ${operand2} = ${this.result}`;
      this.$set(this.logs, key, value);
    },
    add() {
      this.result = this.operand1 + this.operand2;
      this.fibResult = this.fib1 + this.fib2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
      this.fibResult = this.fib1 + this.fib2;
    },
    divide() {
      const { operand2 } = this;
      if (operand2 === 0) {
        this.error = "На 0 делить нельзя!";
        return;
      }
      this.result = this.operand1 / this.operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    fiom() {
      return `${this.name}-${this.secondName}`;
    },
  },
  computed: {
    fib1() {
      // return this.fib(this.operand1)
      return 0;
    },
    fib2() {
      // return this.fib(this.operand2)
      return 0;
    },
    fio() {
      return `${this.name}-${this.secondName}`;
    },
    date() {
      const date = new Date();
      return date.toISOString();
    },
  },
};
</script>

<style lang="scss" scoped>
.h1 {
  font-size: 20px;
}
</style>