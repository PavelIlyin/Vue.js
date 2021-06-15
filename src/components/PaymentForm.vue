<template>
  <div :class="[$style.list]" >
    <input :class="[$style.list__input]" placeholder="Data" v-model="date"/>

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
    <br /><button  :class="[$style.list__btn]" @click="save">
      ADD +
    </button>
    <button  :class="[$style.list__btn]" @click="update">
      UPDATE
    </button>
    <router-link to="/dashboard/Food?value=200" :class="[$style.list__link]"
      >Food +200</router-link
    >
    <router-link to="/dashboard/Sport?value=100" :class="[$style.list__link]"
      >Sport +100</router-link
    >
    <router-link to="/dashboard/Transport?value=50" :class="[$style.list__link]"
      >Transport +50</router-link
    >
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
    //date: function () {
    //  this.date = new Date().toLocaleDateString();
    //},
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
      const item = this.getPaymentsList.find(p => p.id === this.ids)
      if (item) {
        this.id = item.id
        this.date = item.date
        this.category = item.category
        this.price = item.price
      }
    };
  },
};
</script>

<style lang="scss" module>
/*.list {
  //position: absolute;
 // top: 170px;
  //left: 40px;
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

.list__link {
  display: inline-block;
  text-decoration: none;
  color: black;
  padding-right: 10px;
  margin-right: 10px;
  margin-top: 20px;
  border-right: 1px solid black;
  font-weight: 700;
}
.list__link:hover {
  color: rgb(54, 54, 54);
  border-right: 1px solid rgb(54, 54, 54);
}*/
</style>
