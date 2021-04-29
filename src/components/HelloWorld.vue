<template>
  <div class="hello">
    <input class="window__calc" v-model.number="operand1" placeholder="0" />
    {{ oper }}
    <input class="window__calc" v-model.number="operand2" placeholder="0" />
    = {{ result }}
    <div>
      <button class="calc__btn" @click="calculate('sum')">+</button>
      <button class="calc__btn" @click="calculate('sub')">-</button>
      <button class="calc__btn" @click="calculate('div')">/</button>
      <button class="calc__btn" @click="calculate('mul')">*</button>
      <button class="calc__btn" @click="calculate('int')">%</button>
      <button class="calc__btn calc__btn-pow" @click="calculate('pow')">
        x<i>y</i>
      </button>
      <button class="calc__btn" @click="calculate('res')">C</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: "",
    operand2: "",
    result: 0,
    oper: " ",
  }),
  props: {},
  methods: {
    calculate(op) {
      switch (op) {
        case "sum":
          this.oper = "+";
          return (this.result = this.operand1 + this.operand2);
        case "sub":
          this.oper = "-";
          return (this.result = this.operand1 - this.operand2);
        case "div":
          this.oper = "/";
          return (this.result = this.operand1 / this.operand2);
        case "mul":
          this.oper = "*";
          return (this.result = this.operand1 * this.operand2);
        case "int":
          this.oper = "%";
          return (this.result = this.operand1 % this.operand2);
        case "pow":
          this.oper = "**";
          return (this.result = this.operand1 ** this.operand2);
        case "res":
          this.oper = " ";
          this.result = 0;
          this.operand1 = 0;
          this.operand2 = 0;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.window__calc {
  min-width: 50px;
  height: 30px;
  padding: 0 5px;
  text-align: center;
  outline: none;
  overflow: hidden;
  border: none;
  border-radius: 10px;
  background-color: rgb(211, 209, 209);
}

.window__calc:hover,
.window__calc:focus {
  background-color: rgb(221, 214, 214);
  box-shadow: 1px 1px 5px rgb(204, 199, 199);
}

.calc__btn {
  margin-top: 10px;
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
.calc__btn-pow {
  position: relative;
}
i {
  font-size: 10px;
  position: absolute;
  top: 0;
  left: 18px;
}
</style>
