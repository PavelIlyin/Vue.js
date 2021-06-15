<template>
  <div :class="[$style.wrapper]">
    <div class="overlay"></div>
    <header>Name</header>
    <PaymentForm  v-if="name === 'PaymentForm'" :ids="settings && settings.id"/>
    <button @click="onClose">Close</button>
  </div>
</template>

<script>
import PaymentForm from './PaymentForm';
export default {
  components: {
    PaymentForm,
  },
  data() {
    return {
    };
  },
  props: {
    name: String,
    settings: Object,
  },
  methods: {

    onClose () {
      this.$modal.close()      
    }
  },
};
</script>

<style lang="scss" module>
.wrapper {
  border: 1px solid black;
  width: 80%;
  position: absolute;
  top: 170px;
  background-color: rgba(250, 250, 250, 1);
  z-index: 100;
 
}
</style>
