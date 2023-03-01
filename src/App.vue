<script>
import CalculationParameter from './components/CalculationParameter.vue';
export default {
  components: {
    CalculationParameter
  },
  data() {
    return {
      parameterList: [
        {
          parameterName: 'Оклад программиста',
          number: 0
        }
      ],
      // parameter: {
      //     parameterName: '',
      //     number: 0
      // }
    }
  }
  // computed: {
  //   sum() {
  //     return Number(this.number1) + Number(this.number2);
  //   }
  // }
}
</script>

<template>
  <div class="container-fluid">
    <div class="container">
      Hello!
      <CalculationParameter
      v-model="parameterList[0].number" /> 
      <!-- title = "Hello!" -->
      <!-- <div id="sum">
        <p>Сумма: {{ sum }}</p>
      </div> -->
    </div>
  </div>
</template>


