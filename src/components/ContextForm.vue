<template>
  <div v-if="shown" :class="[$style.context]" :style="styles">
    <v-btn
      :ripple="false"
      plain
      v-for="item in items"
      :key="item.text"
      :class="[$style.contex__list]"
      @click="contextClick(item)"
    >
      {{ item.text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      shown: false,
      xPos: 0,
      yPos: 0,
    };
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos}px`,
        left: `${this.xPos + 30}px`,
      };
    },
  },
  methods: {
    onShow({ items, caller }) {
      this.shown = true;
      this.items = items;

      this.setPosition(caller);
    },
    onClose() {
      this.shown = false;
      this.items = [];
    },
    contextClick(item) {
      item.action();
      this.onClose();
    },

    setPosition(caller) {
      const computed = caller.getBoundingClientRect();
      this.xPos = computed.left;
      this.yPos = computed.top;
    },
  },

  mounted() {
    this.$context.EventBus.$on("show", this.onShow);
    this.$context.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("show", this.onShow);
    this.$context.EventBus.$off("close", this.onClose);
  },
};
</script>

<style module>
.context {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  position: absolute;
  box-shadow: 0px 0px 5px rgb(153, 151, 151);
}
</style>
