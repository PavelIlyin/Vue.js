<template>
  <div>
    <table :class="[$style.table]">
      <tr :class="[$style.table__list_th]">
        <th :class="[$style.table__list_id]">#</th>
        <th :class="[$style.table__list_date]">Date</th>
        <th :class="[$style.table__list_category]">Category</th>
        <th :class="[$style.table__list_price]">Price</th>
      </tr>
      <tr
        :class="[$style.table__list]"
        v-for="(item, index) in items"
        :key="index"
      >
        <td :class="[$style.table__list_id]">{{ index + 1 }}.</td>
        <td :class="[$style.table__list_date]">{{ item.date }}</td>
        <td :class="[$style.table__list_category]">{{ item.category }}</td>
        <td :class="[$style.table__list_price]">{{ item.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  methods: {
    doSomething() {
      console.log(this.items);
    },
  },
};
</script>

<style lang="scss" module>
.table {
  display: flex;
  flex-direction: column;
  width: 75%;
}

.table__list_th {
  display: block;
  margin: 10px 0;
  text-align: left;
}

.table__list {
  display: block;
  padding: 10px 0;
  border-top: 1px solid rgb(201, 200, 200);
}

.table__list_id {
  padding-left: 10px;
  width: 50px;
}
.table__list_date {
  width: 200px;
}
.table__list_category {
  width: 200px;
}
.table__list_price {
  width: 100px;
}

.table__list_id,
.table__list_date,
.table__list_category,
.table__list_price {
  text-align: left;
}
</style>
