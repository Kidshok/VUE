<template>
  <div :class="[$style.wrapper]">
    <header>
      <div :class="[$style.header]">My personal costs</div>
      <h3>Total value = {{ getFPV }}</h3>
    </header>
    <main>
      <add-payment-form @addNewPayment="addDataToPaymentList" />
      <payments-display :items="currentElements" msg="test" />
      <pagination
        @paginate="changePage"
        :length="paymentList.length"
        :cur="page"
        :n="count"
      />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import { mapMutations, mapGetters } from "vuex";
import Pagination from "../components/Pagination.vue";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      page: 1,
      count: 10,
    };
  },
  computed: {
    ...mapGetters({
      paymentList: "getPaymentsList",
      category: "getCategoryList",
    }),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    currentElements() {
      const { count, page } = this;
      return this.paymentList.slice(
        count * (page - 1),
        count * (page - 1) + count
      );
    },
  },
  methods: {
    ...mapMutations({
      myMutationName: "setPaymentListData",
      addData: "addPaymentListData",
    }),
    changePage(p) {
      this.page = p;
    },
    addDataToPaymentList(item) {
      const date = new Date();
      const data = { ...item, ...{ id: date.getMilliseconds() } };
      this.addData(data);
    },
  },
  mounted() {
    const page = this.$route.params.page;
    if (page) {
      this.page = Number(page);
    }
  },
};
</script>
<style lang="scss" module>
.wrapper {
  background: #cac7c7;
}
.header {
  color: red;
}
</style>