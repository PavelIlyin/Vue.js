<template>
  <div>
    <main :class="[$style.payment]">
      <!--<button :class="[$style.payment__btn]" @click="showPaymentForm">
        {{ visible ?  "HIDE -" : "ADD NEW COST +" }}
      </button>
      <ModalWindow modal='paymentform'/>
      <PaymentForm v-show="visible" />-->
      <PaymentsList  />
    </main>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

import PaymentsList from "../components/PaymentsList";

export default {
  components: {
    PaymentsList,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["showForm"]),
  },
  mounted() {
    this.fetchData();
    console.log(this.id)
  },
};
</script>

<style lang="scss" module>
.payment__btn {
  padding: 8px;
  background-color: rgba(16, 148, 60, 0.863);
  color: rgb(255, 255, 255);
  width: 180px;
  overflow: hidden;
  border: none;
  border-radius: 5px;
}
.payment__btn:hover {
  background-color: rgba(16, 134, 55, 0.863);
  box-shadow: 1px 1px 3px rgb(1, 77, 14);
}

.payment__btn:active {
  background-color: rgba(48, 109, 69, 0.863);
  box-shadow: inset 1px 1px 5px rgb(1, 56, 10);
}
</style>
