<template>
  <div class="overflow-auto" @click="onClick(curPage)">
    <b-pagination
      v-model="curPage"
      :total-rows="length"
      :per-page="perPage"
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
<style lang="scss" module></style>
