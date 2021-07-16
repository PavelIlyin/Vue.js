<template>
  <div>
    <div class="text-md-h3 text-sm-h4 ma-6">My personal costs</div>
    <v-row class="px-6">
      <v-col>
        <PaymentsList />
      </v-col>
      <v-col>
        <Graph class="mr-12" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import PaymentsList from "../components/PaymentsList";
import Graph from "../components/Graph";
export default {
  components: {
    PaymentsList,
    Graph,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["showForm"]),
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style module></style>
