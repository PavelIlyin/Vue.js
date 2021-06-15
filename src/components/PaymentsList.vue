<template>
  <div class="payment-list" >
  <button @click="showPaymentsForm">ADD NEW COST +</button>
    <table :class="[$style.table]">
      <tr :class="[$style.table__list_th]">
        <th :class="[$style.table__list_id]">#</th>
        <th :class="[$style.table__list_date]">Date</th>
        <th :class="[$style.table__list_category]">Category</th>
        <th :class="[$style.table__list_price]">Price</th>
        <th :class="[$style.table__list_context]"></th>
      </tr>
      <tr
        :class="[$style.table__list]"
        v-for="(item, index) in currentEl"
        :key="index"
      >
        <td :class="[$style.table__list_id]">{{ item.id }}.</td>
        <td :class="[$style.table__list_date]">{{ item.date }}</td>
        <td :class="[$style.table__list_category]">{{ item.category }}</td>
        <td :class="[$style.table__list_price]">{{ item.price }}</td>
        <td
          :class="[$style.table__list_context]"
          @click="showContextForm($event, item.id)"
        >
          ...
        </td>
      </tr>
    </table>
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
            this.$modal.show('PaymentForm', {id});
          },
        },
      ];

      this.$context.show({ event, items });
    },
    
    showPaymentsForm() {
      this.$modal.show('PaymentForm')
    }
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

<style lang="scss" module>
.table {
  display: flex;
  flex-direction: column;
  width: 75%;
}

.table__list_th {
  display: block;
  margin: 10px 0;
  text-align: left;
}

.table__list {
  display: block;
  padding: 10px 0;
  border-top: 1px solid rgb(201, 200, 200);
}

.table__list_id {
  padding-left: 10px;
  width: 50px;
}
.table__list_date {
  width: 200px;
}
.table__list_category {
  width: 200px;
}
.table__list_price {
  width: 100px;
}

.table__list_id,
.table__list_date,
.table__list_category,
.table__list_price,
.table__list_context {
  text-align: left;
}

.table__list_context {
  transform: rotate(90deg);
  font-weight: 700;
  letter-spacing: 3px;
  cursor: pointer;
}
</style>
