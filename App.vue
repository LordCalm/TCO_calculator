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
          parameterName: 'Оклад программиста', // #0
          number: 0
        },
        {
          parameterName: 'Надбавка за стаж программиста',
          number: 0
        },
        {
          parameterName: 'Районный коэффициент программиста',
          number: 0.3
        },
        {
          parameterName: 'Все доходы программиста',
          number: 0
        },
        {
          parameterName: 'НДФЛ программиста',
          number: 0
        },
        {
          parameterName: 'Отчисления во внебюджетные фонды программиста',
          number: 0
        },
        {
          parameterName: 'Итог программиста', // #6
          number: 0
        }
      ]
    }
  },
  computed: {
    District_coefficient() {
      return Number(this.parameterList[0].number) * Number(this.parameterList[2].number);
    },
    All_income() {
      this.parameterList[3].number = 
        Number(this.parameterList[0].number * (1 + this.parameterList[2].number)) + 
        Number(this.parameterList[1].number);
      return this.parameterList[3].number;
    },
    Income_tax() {
      this.parameterList[4].number = Number(this.parameterList[3].number) * 0.13;
      return this.parameterList[4].number;
    },
    Fund_allocations() {
      this.parameterList[5].number = Number(this.parameterList[3].number) * 0.3;
      return this.parameterList[5].number;
    },
    Programmer_salary() {
      this.parameterList[6].number = 
        Number(this.parameterList[3].number) + 
        Number(this.parameterList[4].number) + 
        Number(this.parameterList[5].number);
      return this.parameterList[6].number;
    }
  },
  methods: {
    Download_csv() {
      exportToCsv("TCO", 
    [
      ["TCO", "Не меняйте порядок ячеек, если хотите продолжать редактирование данных в веб-приложении"], 
      ["Доходы", "", "Расходы"],
      ["Название", "Сумма, руб.", "Название", "Сумма, руб."],
      ["Оклад", this.parameterList[0].number],
      ["Надбавка за стаж работы в указанной местности", this.parameterList[1].number],
      ["Районный коэффициент", this.parameterList[0].number * this.parameterList[2].number],
      ["Все доходы", this.parameterList[3].number],
      ["", "", "НДФЛ", this.parameterList[4].number],
      ["", "", "Отчисления во внебюджетные фонды", this.parameterList[5].number],
      ["Итог", this.parameterList[6].number]
    ]);
    }
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <button class="btn btn-primary" type="button" v-on:click="Download_csv">
        Скачать CSV
      </button>
    </div>
    <div class="container">
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExplanations" aria-expanded="false" aria-controls="collapseExplanations">
        Показать пояснения
      </button>
      <div class="introduction fs-5 text-wrap collapse" id="collapseExplanations">
        Методика ТСО (Total cost of ownership — совокупная стоимость владения) разработана в конце 80-х компанией Gartner Group 
        для определения финансовых затрат на владение компьютерами. 
        Методика была усовершенствована в 1994 г. фирмой Intepose и переработана в полноценную модель анализа 
        финансовой стороны использования информационных технологий. 
        Впервые термин «совокупная стоимость» владения (Total Cost of Ownership – ТСО) был введен Полем Страссманом. 
        Под ТСО он понимал денежные затраты на обслуживание, модернизацию, ремонт, приобретение новых программных продуктов для 
        технического средства (например, компьютера), или поддержание в рабочем состоянии программного продукта (например, базы данных) 
        за все предполагаемое или фактическое время его существования.
        Цель применения методики ТСО – получить картину, которая отражала бы реальные затраты, связанные с приобретением определенных 
        средств и технологий, и учитывала все аспекты их последующего использования.
      </div>
      <div class="row">
        <div class="container collapse col-5" id="collapseExplanations">
          <img src="src/Images/TCO-Microsoft.png" class="img-fluid" alt="Модель ТСО, разработанная компанией Microsoft совместно с Interpose">
          <p class="introduction fs-5 text-wrap">Модель ТСО, разработанная компанией Microsoft совместно с Interpose</p>
        </div>
        <div class="container collapse col-5" id="collapseExplanations">
          <img src="src/Images/TCO-GartnerGroup.png" class="img-fluid" alt="Модель TCO, предложенная Gartner Group">
          <p class="introduction fs-5 text-wrap">Модель TCO, предложенная Gartner Group</p>
        </div>
      </div>
      <div class="container table-responsive">
        <table class="table table-bordered">
          <thead class="table-light">
            <tr>
              <th scope="col" colspan="2">Доходы</th>
              <th scope="col" colspan="2">Расходы</th>
            </tr>
            <tr>
              <th scope="col">Название</th>
              <th scope="col">Сумма, руб.</th>
              <th scope="col">Название</th>
              <th scope="col">Сумма, руб.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Оклад</td>
              <td>
                <CalculationParameter
                v-model="parameterList[0].number" /> 
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Надбавка за стаж работы в указанной местности</td>
              <td>
                <CalculationParameter
                v-model="parameterList[1].number" /> 
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Районный коэффициент</td>
              <td class="p-0">
                <table class="table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <CalculationParameter
                        v-model="parameterList[2].number" />
                      </td>
                      <td>
                        {{ District_coefficient }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>Все доходы</th>
              <td>
                {{ All_income }}
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
              <td>НДФЛ</td>
              <td>
                {{ Income_tax }}
              </td>
            </tr>
            <tr>
              <th></th>
              <td></td>
              <td>Отчисления во внебюджетные фонды</td>
              <td>
                {{ Fund_allocations }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Итог</th>
              <td colspan="3">
                {{ Programmer_salary }}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>


