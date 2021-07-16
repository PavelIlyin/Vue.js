<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn :ripple="false" plain to="/dashboard">Dashboard</v-btn>
      <v-btn :ripple="false" plain to="/about">About</v-btn>
      <v-btn :ripple="false" plain to="/404">404</v-btn>
    </v-app-bar>

    <transition name="fade"
      ><ModalWindow
        v-if="modalShown"
        :name="modalShown"
        :settings="modalSettings"
    /></transition>
    <v-main>
      <router-view />
    </v-main>
    <transition name="fade"><ContextForm /> </transition>
  </v-app>
</template>

<script>
import ContextForm from "./components/ContextForm";
export default {
  name: "App",
  components: {
    ContextForm,
    ModalWindow: () => import("./components/ModalWindow"),
  },
  data() {
    return {
      modalShown: false,
      modalSettings: {},
    };
  },
  methods: {
    onShow({ name, settings }) {
      this.modalShown = name;
      this.modalSettings = settings;
    },
    onClose() {
      this.modalShown = "";
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("close", this.onClose);
  },
};
</script>

<style module></style>
