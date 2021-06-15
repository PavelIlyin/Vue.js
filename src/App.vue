<template>
  <div :id="[$style.app]">
    <header :class="[$style.header]">My personal costs</header>
    <nav :class="[$style.nav]">
      <router-link :class="[$style.nav__link]" to="/dashboard"
        >Dashboard</router-link>
      <router-link :class="[$style.nav__link]" to="/about">About</router-link>
      <router-link :class="[$style.nav__link]" to="/404">404</router-link>
    </nav>
    <transition name="fade"><ModalWindow v-if="modalShown" :name="modalShown" :settings="modalSettings"/></transition>
    <main>
      <router-view />
    </main>
    <transition name="fade"><ContextForm /> </transition>
  </div>
</template>

<script>

import ContextForm from "./components/ContextForm";
export default {
  name: "App",
  components: {
    ContextForm,
    ModalWindow: () => import ("./components/ModalWindow"),
  },
  data() {
    return {
      modalShown: false,
      modalSettings: {}
    };
  },
  methods: {
    onShow ({ name, settings}) {
      this.modalShown = name
      this.modalSettings = settings
    },
    onClose () {
      this.modalShown = ''
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShow)
    this.$modal.EventBus.$off('close', this.onClose)
  }
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
  margin-bottom: 10px;
}
.nav {
  margin-bottom: 10px;
}
.nav__link {
  display: inline-block;
  font-size: 18px;
  text-align: center;
  padding-top: 4px;
  text-decoration: none;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #0d6efd;
  width: 100px;
  height: 35px;
  color: #ffffff;
}
.nav__link:hover {
  box-shadow: 1px 1px 5px #2c3e50;
  color: #ffffff;
}
.nav__link:active {
  box-shadow: inset 1px 1px 5px #2c3e50;
  color: #ffffff;
}

:global(.fade-enter-active), :global(.fade-leave-active) {
transition: opacity 0.5s;
}
:global(.fade-enter), :global(.fade-leave-to) {
opacity: 0;
}
</style>
