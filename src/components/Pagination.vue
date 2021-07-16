<template>
  <div class="overflow-auto mt-2 pl-0" @click="onClick(curPage)">
    <b-pagination
      class="mt-4 text-success"
      v-model="curPage"
      :total-rows="length"
      :per-page="perPage"
      align="left"
      hide-goto-end-buttons
      pills
      text-white
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curPage: 1,
    };
  },
  props: {
    length: Number,
    perPage: Number,
  },
  methods: {
    onClick(p) {
      this.$emit("paginate", p);
    },
  },
};
</script>
<style scoped>
.v-application ol,
.v-application ul {
  padding-left: 0px;
}
</style>
