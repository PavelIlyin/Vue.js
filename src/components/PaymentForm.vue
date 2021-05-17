<template>
  <div :class="[$style.list]">
    <input :class="[$style.list__input]" placeholder="Data" v-model="date" />
    <input
      :class="[$style.list__input]"
      placeholder="Category"
      v-model="category"
    />
    <input
      :class="[$style.list__input]"
      placeholder="Price"
      v-model.number="price"
    />
    <br /><button :class="[$style.list__btn]" @click="save">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      category: "",
      price: 0,
    };
  },
  props: {
    items: Array,
  },
  methods: {
    save() {
      const { date, category, price } = this;
      this.$emit("add", { date, category, price });
    },
  },
};
</script>

<style lang="scss" module>
.list {
  position: absolute;
  top: 120px;
  left: 48px;
  padding: 10px;
  background-color: rgba(16, 148, 60, 0.863);
  border-radius: 5px;
}

.list__input {
  width: 156px;
  height: 30px;
  border: none;
  border-radius: 2px;
  margin-right: 5px;
  outline: none;
  background-color: rgb(209, 209, 209);
}
.list__input:focus {
  background-color: #fff;
}

.list__btn {
  margin: 10px auto 0;
  display: block;
  padding: 6px 20px;
  overflow: hidden;
  border: none;
  border-radius: 5px;
  background-color: rgb(150, 150, 150);
  color: rgb(255, 255, 255);
}
.list__btn:hover {
  background-color: rgb(143, 143, 143);
  box-shadow: 0px 0px 2px rgb(109, 109, 109);
}
.list__btn:active {
  background-color: rgb(109, 109, 109);
  box-shadow: inset 0px 0px 2px rgb(99, 98, 98);
}
</style>
