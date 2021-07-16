<template>
  <v-card :class="[$style.wrapper]">
    <div class="overlay"></div>
    <PaymentForm v-if="name === 'PaymentForm'" :ids="settings && settings.id" />
    <v-btn class="ml-3 mb-3 mt-2" @click="onClose" color="blue-grey" dark small>
      Close<v-icon dark color="white" small> mdi-close </v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import PaymentForm from "./PaymentForm";
export default {
  components: {
    PaymentForm,
  },
  data() {
    return {};
  },
  props: {
    name: String,
    settings: Object,
  },
  methods: {
    onClose() {
      this.$modal.close();
    },
  },
};
</script>

<style module>
.wrapper {
  width: 80%;
  position: absolute;
  top: 215px;
  left: 25px;
  background-color: rgba(250, 250, 250, 1);
  z-index: 10;
}
</style>
