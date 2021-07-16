<template>
  <div class="payment-list">
    <v-btn @click="showPaymentsForm" color="teal" dark>ADD NEW COST +</v-btn>
    <v-row>
      <v-col :cols="1">#</v-col>
      <v-col :cols="3">Date</v-col>
      <v-col :cols="4">Category</v-col>
      <v-col :cols="3">Price</v-col>
      <v-col :cols="1"></v-col>
    </v-row>
    <v-row v-for="(item, index) in currentEl" :key="index">
      <v-col :cols="1">{{ item.id }}.</v-col>
      <v-col :cols="3">{{ item.date }}</v-col>
      <v-col :cols="4">{{ item.category }}</v-col>
      <v-col :cols="3">{{ item.price }}</v-col>
      <v-col :cols="1" @click="showContextForm($event, item.id)">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-col>
    </v-row>

    <Pagination
      :length="getPaymentsList.length"
      :perPage="perPage"
      @paginate="onPaginate"
    />
  </div>
</template>

<script>
import Pagination from "./Pagination";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Pagination,
  },

  data() {
    return {
      perPage: 4,
      currentPage: 1,
    };
  },
  methods: {
    ...mapMutations(["ondateDeleteMutation"]),
    onPaginate(p) {
      this.currentPage = p;
    },

    showContextForm(event, id) {
      const items = [
        {
          text: "Delete",
          action: () => {
            this.ondateDeleteMutation(id);
          },
        },
        {
          text: "Edit",
          action: () => {
            this.$modal.show("PaymentForm", { id });
          },
        },
      ];

      this.$context.show({ event, items });
    },

    showPaymentsForm() {
      this.$modal.show("PaymentForm");
    },
  },

  computed: {
    ...mapGetters(["getPaymentsList"]),

    currentEl() {
      const { perPage, currentPage } = this;
      return this.getPaymentsList.slice(
        perPage * (currentPage - 1),
        perPage * (currentPage - 1) + perPage
      );
    },
  },
  mounted() {},
};
</script>

<style module></style>
