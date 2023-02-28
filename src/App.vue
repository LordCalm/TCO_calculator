<template>
  <div class="container">
      <div class="container">
        <input type="number" v-bind:value="number1" @input="inputNumber1" id="number1">
      </div>
      <div class="container">
        <input type="number" v-bind:value="number2" @input="inputNumber2" id="number2">
      </div>
      <div class="container">
        <div id="sum">
          <p>Сумма: {{ sum }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0,
    }
  },
  methods: {
    inputNumber1(event) {
      this.number1 = event.target.value;
    },
    inputNumber2(event) {
      this.number2 = event.target.value;
    }
  },
  computed: {
    // геттер вычисляемого свойства
    sum() {
      return Number(this.number1) + Number(this.number2);
    }
  }
}
</script>
