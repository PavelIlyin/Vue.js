<template>
  <div :class="[$style.list]">
    <input :class="[$style.list__input]" placeholder="Data" v-model="date" />

    <select v-model="category" :class="[$style.list__option]">
      <option
        v-for="(option, index) in getCategoryList"
        :key="index"
        :value="option"
      >
        {{ option }}
      </option>
    </select>

    <input
      :class="[$style.list__input]"
      v-model.number="price"
      placeholder="Price"
    />
    <br /><button type="reset" :class="[$style.list__btn]" @click="save">
      Save
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters /*, mapActions*/ } from "vuex";
export default {
  data() {
    return {
      id: "",
      date: "",
      category: "",
      price: 0,
    };
  },

  computed: {
    ...mapMutations(["onDataAddedMutation"]),
    ...mapGetters(["getCategoryList"]),
  },
  methods: {
    save() {
      this.onDataAddedMutation;
    },
    //...mapActions(["loadCategories"]),
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
  },
};
</script>

<style lang="scss" module>
.list {
  position: absolute;
  top: 140px;
  left: 40px;
  padding: 10px;
  background-color: rgba(16, 148, 60, 0.863);
  border-radius: 5px;
}

.list__input,
.list__option {
  width: 156px;
  height: 30px;
  border: none;
  border-radius: 2px;
  margin-right: 5px;
  outline: none;
  background-color: rgb(209, 209, 209);
}

.list__option {
  padding-bottom: 1px;
}
.list__input:focus,
.list__option:focus {
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
