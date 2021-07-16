<template>
  <div>
    <div class="text-h6">Costs by categories</div>
    <vc-donut
      background="white"
      foreground="grey"
      :size="250"
      unit="px"
      :thickness="30"
      has-legend
      legend-placement="right"
      :sections="arr2"
      :total="100"
      :start-angle="0"
      :auto-adjust-text-size="true"
      legend
    >
    </vc-donut>
    <v-btn @click="tottal" v-show="visible" class="ma-2" outlined color="teal"
      >analyze</v-btn
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      sections: [],
      total: 0,
      arr: [],
      arr2: [],
      visible: true,
    };
  },
  props: {},
  methods: {
    tottal() {
      for (let i of this.getPaymentsList) {
        this.total += +i.price;
        this.sections.push({ label: i.category, value: i.price });
      }
      this.arr = this.sections.reduce(
        (a, c) => ((a[c.label] = (a[c.label] || 0) + c.value), a),
        {}
      );
      for (let i in this.arr) {
        this.arr2.push({ label: i, value: (this.arr[i] / this.total) * 100 });
      }
      this.visible = false;
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList", "getCategoryList"]),
  },

  mounted() {},
};
</script>
<style module></style>
