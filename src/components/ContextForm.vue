<template>
  <div v-if="shown" :class="[$style.context]" :style="styles">
    <div
      v-for="item in items"
      :key="item.text"
      :class="[$style.contex__list]"
      @click="contextClick(item)"
    >
      {{ item.text }}
    </div>
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
        top: `${this.yPos }px`,
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
      this.onClose()
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

<style module lang="scss">
.context {
  background: #fff;
  position: absolute;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 1px 1px 5px black;
}
.contex__list {
}
</style>
