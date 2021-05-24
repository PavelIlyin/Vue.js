<template>
  <div :id="[$style.app]">
    <header :class="[$style.header]">My personal costs</header>
    <main :class="[$style.payment]">
      <button :class="[$style.payment__btn]" @click="visible = !visible">
        {{ visible ? "HIDE -" : "ADD NEW COST +" }}
      </button>
      <PaymentForm v-show="visible" />
      <PaymentsList />
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import PaymentForm from "./components/PaymentForm";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsList,
    PaymentForm,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  mounted() {
    this.fetchData();
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
