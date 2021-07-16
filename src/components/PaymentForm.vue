<template>
  <div>
    <v-text-field
      class="px-3 pt-4"
      color="teal"
      label="Data"
      v-model="date"
    ></v-text-field>
    <v-select
      class="px-3 pt-0"
      :items="getCategoryList"
      label="Category"
      color="teal"
      v-model="category"
      >{{ getCategoryList }}</v-select
    >
    <v-text-field
      class="px-3 py-0"
      color="teal"
      label="Price"
      v-model.number="price"
    ></v-text-field>
    <v-btn class="ml-3" @click="save" color="teal" dark
      >ADD<v-icon>mdi-plus</v-icon></v-btn
    >
    <v-btn class="ml-3" @click="update" color="teal" dark
      >UPDATE<v-icon>mdi-cached</v-icon></v-btn
    >
    <v-btn-toggle borderless class="ml-3">
      <v-btn :ripple="false" plain to="/dashboard/Food?value=200"
        >Food +200</v-btn
      >
      <v-btn :ripple="false" plain to="/dashboard/Sport?value=100"
        >Sport +100</v-btn
      >
      <v-btn :ripple="false" plain to="/dashboard/Transport?value=50"
        >Transport +50</v-btn
      >
    </v-btn-toggle>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      id: "",
      date: "",
      category: "",
      price: 0,
      catrgory: [],
    };
  },
  props: {
    ids: Number,
  },

  computed: {
    ...mapMutations(["onDataAddedMutation", "onDataUpdatedMutation"]),
    ...mapGetters(["getCategoryList", "getPaymentsList"]),
  },

  watch: {
    "$route.params.category": function () {
      this.category = this.$route.params.category;
    },
    "$route.query.value": function () {
      this.price = this.$route.query.value;
    },
  },
  methods: {
    save() {
      this.onDataAddedMutation;
    },
    update() {
      this.onDataUpdatedMutation;
    },

    linkSave() {
      this.category = this.$route.params.category;
      this.price = this.$route.query.value;
      this.date = new Date().toLocaleDateString();
    },
  },
  beforeMount() {
    this.linkSave();
  },

  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
    this.linkSave();
    if (this.ids) {
      const item = this.getPaymentsList.find((p) => p.id === this.ids);
      if (item) {
        this.id = item.id;
        this.date = item.date;
        this.category = item.category;
        this.price = item.price;
      }
    }
  },
};
</script>

<style module></style>
