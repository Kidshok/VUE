<template>
  <div class="form">
    <input placeholder="Value" v-model="value" />
    <input placeholder="Date" v-model="date" />
    <select-category v-model="category" />
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
import SelectCategory from "./SelectCategory.vue";
export default {
  components: { SelectCategory },
  name: "AddPaymentForm",
  data() {
    return {
      value: "",
      category: "",
      date: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSave() {
      const data = {
        value: Number(this.value),
        category: this.category,
        date: this.date || this.getCurrentDate,
      };

      this.$emit("addNewPayment", data);
    },
  },
  mounted() {
    this.category = "Sport";
  },
};
</script>