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
    <div>
      <input type="checkbox" id="checkbox" v-model="cheked" />
      <label for="checkbox"> {{ chekedText }}</label>
    </div>
    <div class="screen-keyboards" v-show="cheked === true">
      <button
        class="screen-keyboards__btn"
        v-for="(keyboards, index) of screenКeyboard"
        v-bind:key="index"
        @click="pushNumber(keyboards)"
      >
        {{ keyboards }}
      </button>
      <button class="screen-keyboards__btn" @click="numberDel">del</button>
    </div>
    <div>
      <input
        type="radio"
        id="one"
        name="operand"
        value="Операнд 1"
        v-model="picked"
      />
      <label for="one">Операнд 1</label>
      <input
        type="radio"
        id="two"
        name="operand"
        value="Операнд 2"
        v-model="picked"
      />
      <label for="two">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: "",
    operand2: "",
    result: 0,
    oper: "",
    screenКeyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    cheked: false,
    chekedText: "Отобразить экранную клавиатуру",
    picked: "",
  }),
  props: {},
  methods: {
    calculate(op) {
      switch (op) {
        case "sum":
          this.oper = "+";
          return (this.result = +this.operand1 + +this.operand2);
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
          this.operand1 = "";
          this.operand2 = "";
      }
    },
    pushNumber(a) {
      if (this.picked === "Операнд 1") return (this.operand1 += a);
      else if (this.picked === "Операнд 2") return (this.operand2 += a);
    },
    numberDel() {
      if (this.picked === "Операнд 1")
        return (this.operand1 = this.operand1.substring(
          0,
          this.operand1.length - 1
        ));
      else if (this.picked === "Операнд 2")
        return (this.operand2 = this.operand2.substring(
          0,
          this.operand2.length - 1
        ));
    },
  },
  computed: {},
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

.calc__btn,
.screen-keyboards__btn {
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

#checkbox {
  margin: 20px 0 10px;
}

#one,
#two {
  margin-top: 20px;
}
</style>
