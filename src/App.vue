<template>
  <div :id="[$style.app]">
    <header :class="[$style.header]">My personal costs</header>
    <main :class="[$style.payment]">
      <button :class="[$style.payment__btn]" @click="visible = !visible">
        {{ visible ? "HIDE -" : "ADD NEW COST +" }}
      </button>
      <PaymentForm @add="onDataAdded" v-show="visible" />
      <PaymentsList :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import PaymentForm from "./components/PaymentForm";

export default {
  name: "App",
  components: {
    PaymentsList,
    PaymentForm,
  },
  data() {
    return {
      paymentsList: [
        {
          date: "11.05.2021",
          category: "Education",
          price: 456,
        },
        {
          date: "12.05.2021",
          category: "Education",
          price: 134,
        },
        {
          date: "13.05.2021",
          category: "Education",
          price: 423,
        },
        {
          date: "14.05.2021",
          category: "Education",
          price: 4123,
        },
      ],
      visible: false,
    };
  },
  methods: {
    onDataAdded(data) {
      this.paymentsList.push(data);
    },
  },
};
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 25px 0 0 40px;
}
.header {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
}

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
