<script>
import CalculationParameter from './components/CalculationParameter.vue';
export default {
  components: {
    CalculationParameter,
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
        },
        {
          parameterName: 'Стоимость ПК для разработки', // #7
          number: 0
        },
        {
          parameterName: 'Количество дней эксплуатации ПК', // #8
          number: 1
        },
        {
          parameterName: 'Норма амортизации', // #9
          number: 0
        },
        {
          parameterName: 'Амортизация за год использования', // #10
          number: 0
        },
        {
          parameterName: 'Проектная амортизация', // #11
          number: 0
        },
        {
          parameterName: 'Срок службы ПК', // #12
          number: 1
        },
        {
          parameterName: 'Затраты на инструментальные программные средства', // #13
          number: 0
        },
        {
          parameterName: 'Прочие затраты на проектирование (процент)', // #14
          number: 3
        },
        {
          parameterName: 'Прочие затраты на проектирование (значение)', // #15
          number: 0
        },
        {
          parameterName: 'Затраты на проектирование ИС', // #16
          number: 0
        },
        {
          parameterName: 'Длительность тестирования и введения в эксплуатацию', // #17
          number: 1
        },
        {
          parameterName: 'Амортизация серверного ПК', // #18
          number: 0
        },
        {
          parameterName: 'Амортизация ПК за период тестирования', // #19
          number: 0
        },
        {
          parameterName: 'Затраты на технические средства управления', // #20
          number: 0
        },
        {
          parameterName: 'Затраты на создание линий связи локальных сетей', // #21
          number: 0
        },
        {
          parameterName: 'Затраты на программные средства', // #22
          number: 0
        },
        {
          parameterName: 'Затраты на формирование информационной базы', // #23
          number: 0
        },
        {
          parameterName: 'Затраты на обучение персонала', // #24
          number: 0
        },
        {
          parameterName: 'Оклад тренера', // #25
          number: 0
        },
        {
          parameterName: 'Надбавка за стаж тренера', // #26
          number: 0.3
        },
        {
          parameterName: 'Районный коэффициент тренера', // #27
          number: 0.3
        },
        {
          parameterName: 'Длительность обучения тренера', // #28
          number: 1
        },
        {
          parameterName: 'Оклад персонала, работающего с информационной системой', // #29
          number: 0
        },
        {
          parameterName: 'Надбавка за стаж персонала', // #30
          number: 0.3
        },
        {
          parameterName: 'Районный коэффициент персонала', // #31
          number: 0.3
        },
        {
          parameterName: 'Длительность опытной эксплуатации', // #32
          number: 1
        },
        {
          parameterName: 'Затраты на опытную эксплуатацию', // #33
          number: 0
        },
        {
          parameterName: 'Капитальные затраты', // #34
          number: 0
        },
        {
          parameterName: 'Оклад эксплуатационный', // #35
          number: 0
        },
        {
          parameterName: 'Надбавка эксплуатационная', // #36
          number: 0.3
        },
        {
          parameterName: 'Районный коэффициент эксплуатационный', // #37
          number: 0.3
        },
        {
          parameterName: 'Зарплата эксплуатационная', // #38
          number: 0
        },
        {
          parameterName: 'Часы эксплуатационные', // #39
          number: 1
        },
        {
          parameterName: 'Стоимость оборудования', // #40
          number: 0
        },
        {
          parameterName: 'Количество часов эксплуатации оборудования', // #41
          number: 1
        },
        {
          parameterName: 'Срок службы оборудования', // #42
          number: 1
        },
        {
          parameterName: 'Амортизационные отчисления', // #43
          number: 0
        },
        {
          parameterName: 'Затраты на техническое обслуживание', // #44
          number: 0
        },
        {
          parameterName: 'Затраты на использование глобальных сетей', // #45
          number: 0
        },
        {
          parameterName: 'Затраты на носители информации', // #46
          number: 0
        },
        {
          parameterName: 'Прочие затраты (процент)', // #47
          number: 3
        },
        {
          parameterName: 'Прочие затраты (значение)', // #48
          number: 3
        },
      ],

      dropzoneFile: '', // Store our uploaded files
      active: false,
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
    },
    Depreciation_rate() {
      this.parameterList[9].number = 100 / 
        Number(this.parameterList[12].number);
      return this.parameterList[9].number;
    },
    Depreciation_per_year() {
      this.parameterList[10].number = 
        Number(this.parameterList[7].number) * 
        Number(this.parameterList[9].number) / 100;
      return this.parameterList[10].number;
    },
    Depreciation_per_project() {
      this.parameterList[11].number = 
        Number(this.parameterList[10].number) / 247 * 
        Number(this.parameterList[8].number);
      return this.parameterList[11].number;
    },
    Other_design_costs() {
      this.parameterList[15].number = 
        Number(this.parameterList[14].number) / 100 *
        (Number(this.parameterList[6].number) + 
        Number(this.parameterList[11].number) + 
        Number(this.parameterList[13].number));
      return this.parameterList[15].number;
    },
    Design_costs() {
      this.parameterList[16].number = 
        Number(this.parameterList[6].number) +
        Number(this.parameterList[13].number) + 
        Number(this.parameterList[11].number) + 
        Number(this.parameterList[15].number);
      return this.parameterList[16].number;
    },
    Costs_for_technical_controls_1() {
      this.parameterList[19].number = 
        Number(this.parameterList[10].number) / 247 * 
        Number(this.parameterList[17].number);
      return this.parameterList[19].number;
    },
    Costs_for_technical_controls_2() {
      this.parameterList[20].number = 
        Number(this.parameterList[19].number) + 
        Number(this.parameterList[18].number);
      return this.parameterList[20].number;
    },
    Staff_training_costs() {
      this.parameterList[24].number = 
        (Number(this.parameterList[25].number) * ( 1 +
        Number(this.parameterList[26].number) + 
        Number(this.parameterList[27].number))) * 1.43 * 
        Number(this.parameterList[28].number);
      return this.parameterList[24].number;
    },
    Trial_operation_costs() {
      this.parameterList[33].number = 
        (Number(this.parameterList[29].number) * ( 1 +
        Number(this.parameterList[30].number) + 
        Number(this.parameterList[31].number))) * 1.43 * 
        Number(this.parameterList[32].number);
      return this.parameterList[33].number;
    },
    Capital_expenditures() {
      this.parameterList[34].number =
        Number(this.parameterList[16].number) + 
        Number(this.parameterList[20].number) + 
        Number(this.parameterList[21].number) + 
        Number(this.parameterList[22].number) + 
        Number(this.parameterList[23].number) + 
        Number(this.parameterList[24].number) + 
        Number(this.parameterList[33].number);
      return this.parameterList[34].number;
    },
    Surcharge_OC() {
      return Number(this.parameterList[35].number) * (
        Number(this.parameterList[36].number));
    },
    District_coefficient_OC() {
      return Number(this.parameterList[35].number) * (
        Number(this.parameterList[37].number));
    },
    All_income_OC() {
      return Number(this.parameterList[35].number) + 
        Number(this.parameterList[35].number) * (
        Number(this.parameterList[36].number)) + 
        Number(this.parameterList[35].number) * (
        Number(this.parameterList[37].number));
    },
    Income_tax_OC() {
      return (Number(this.parameterList[35].number) + 
        Number(this.parameterList[35].number) * 
        Number(this.parameterList[36].number) + 
        Number(this.parameterList[35].number) * 
        Number(this.parameterList[37].number)) * 0.13;
    },
    Fund_allocations_OC() {
      return (Number(this.parameterList[35].number) + 
        Number(this.parameterList[35].number) * 
        Number(this.parameterList[36].number) + 
        Number(this.parameterList[35].number) * 
        Number(this.parameterList[37].number)) * 0.3;
    },
    Salary_OC() {
      this.parameterList[38].number = 
        (Number(this.parameterList[35].number) + 
        Number(this.parameterList[35].number) * 
        Number(this.parameterList[36].number) + 
        Number(this.parameterList[35].number) * 
        Number(this.parameterList[37].number)) * 1.43;
      return this.parameterList[38].number;
    },
    Depreciation_deductions() {
      this.parameterList[43].number = 
        Number(this.parameterList[40].number) * 
        (100 / Number(this.parameterList[42].number)) / 100 / 247 / 24 * 
        Number(this.parameterList[41].number);
      return this.parameterList[43].number;
    },
    Other_costs() {
      this.parameterList[48].number = 
        (Number(this.parameterList[38].number) + 
        Number(this.parameterList[43].number) +
        Number(this.parameterList[44].number) + 
        Number(this.parameterList[45].number) +
        Number(this.parameterList[46].number)) * ( 1 + 
        Number(this.parameterList[47].number) / 100);
      return this.parameterList[48].number;
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
    },

    onChange() {
      this.dropzoneFile = this.$refs.file.files[0];
      let ext = '?';
      let self = this;
      let parts = this.dropzoneFile.name.split('.');
      if (parts.length > 1) ext = parts.pop();
      if (ext == "csv") {
          this.$papa.parse(this.dropzoneFile, {
              header: false,
              dynamicTyping: true,
              complete: function(results) {
                self.parameterList[0].number = results.data[3][1];
                self.parameterList[1].number = results.data[4][1];
                self.parameterList[2].number = results.data[5][1] / results.data[3][1];
                self.parameterList[3].number = results.data[6][1];
                self.parameterList[4].number = results.data[7][3];
                self.parameterList[5].number = results.data[8][3];
                self.parameterList[6].number = results.data[9][1];
              }
          });
      }
    },
    drop() {
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      this.toggleActive();
      return false;
    },
    toggleActive() {
      this.active = !this.active;
      return false;
    }
  }
}
</script>

<template>
  <div class="container-fluid d-flex flex-column align-items-center">
    <div class="container m-4">
      <button class="btn btn-primary" type="button" v-on:click="Download_csv">
        Скачать CSV
      </button>
    </div>
    <div class="container m-4">
      <div 
        class="dropzone container w-50 border rounded-3 shadow bg-light d-flex flex-column align-items-center"
        @dragenter.prevent="toggleActive" 
        @dragleave.prevent="toggleActive"
        @dragover.prevent
        @drop.prevent="drop"
        v-bind:class="{'active-dropzone': active}" >
        <div class="text-wrap w-auto">Для загрузки файлов перетащите их сюда</div>
        <div>ИЛИ</div>
        <label class="btn btn-primary p-2" for="dropzoneFile">Выберите файл</label>
        <input 
            class="dropzoneFile d-none" 
            type="file" 
            id="dropzoneFile"
            @change="onChange" 
            ref="file"
            accept=".csv" />
        <div class="fileInfo">Файл: {{ dropzoneFile.name }}</div>
      </div>
    </div>
    <div class="container m-4">
      <div class="container">
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExplanations" aria-expanded="false" aria-controls="collapseExplanations">
          Показать пояснения
        </button>
      </div>
      <div class="introduction fs-5 text-wrap collapse m-3" id="collapseExplanations">
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
      <div class="row collapse" id="collapseExplanations">
        <div class="container border rounded-3 shadow col-5">
          <img src="src/Images/TCO-Microsoft.png" class="img-fluid p-4" alt="Модель ТСО, разработанная компанией Microsoft совместно с Interpose">
          <p class="introduction fs-5 text-wrap text-center p-2">Модель ТСО, разработанная компанией Microsoft совместно с Interpose</p>
        </div>
        <div class="container align-self-center h-auto border rounded-3 shadow col-6">
          <img src="src/Images/TCO-GartnerGroup.png" class="img-fluid p-4" alt="Модель TCO, предложенная Gartner Group">
          <p class="introduction fs-5 text-wrap text-center p-2">Модель TCO, предложенная Gartner Group</p>
        </div>
      </div>
      <div class="container">
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCapitalExpenditures" aria-expanded="false" aria-controls="collapseCapitalExpenditures">
          Показать пояснения
        </button>
      </div>
      <div class="container m-4 collapse fs-5 text-wrap" id="collapseCapitalExpenditures">
        Капитальные затраты на разработку информационной системы вычисляются по формуле<br>
        <br>
        К = К<sub>пр</sub> + К<sub>тс</sub> + К<sub>лс</sub> + К<sub>по</sub> + К<sub>ио</sub> + К<sub>об</sub> + К<sub>оэ</sub>,<br>
        <br>
        где К<sub>пр</sub> – затраты на проектирование ИС;<br>
        К<sub>тс</sub> – затраты на технические средства управления;<br>
        К<sub>лс</sub> – затраты на создание линий связи локальных сетей; <br>
        К<sub>по</sub> – затраты на программные средства;<br>
        К<sub>ио</sub> – затраты на формирование информационной базы; <br>
        К<sub>об</sub> – затраты на обучение персонала;<br>
        К<sub>оэ</sub> – затраты на опытную эксплуатацию.<br>
        Одной из ключевых частей капитальных затрат являются затраты на проектирование информационной системы, также называемые затратами на разработку.<br>
        Затраты на разработку рассчитываются по формуле<br>
        <br>
        К<sub>пр</sub> = К<sub>зп</sub> + К<sub>ипс</sub> + К<sub>свт</sub> + К<sub>проч</sub>,<br>
        <br>
        где К<sub>зп</sub> – затраты на заработную плату проектировщиков;<br>
        К<sub>ипс</sub> – затраты на инструментальные программные средства; <br>
        К<sub>свт</sub> – затраты на средства вычислительной техники;<br>
        К<sub>проч</sub> – прочие затраты на проектирование.<br>
      </div>
      <div class="container m-4">
        <p class="h4">К<sub>зп</sub></p>
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
      <div class="container m-4">
        <p class="h4">К<sub>ипс</sub></p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDepreciation" aria-expanded="false" aria-controls="collapseDepreciation">
          Показать пояснения
        </button>
        <div class="container m-4 collapse fs-5 text-wrap" id="collapseDepreciation">
          Амортизация рассчитывается по формуле<br>
          <br>
          А<sub>год</sub> = С<sub>б</sub> ∙ Н<sub>ам</sub>,<br>
          <br>
          где А<sub>год</sub> – амортизация за год использования; <br>
          С<sub>б</sub> – балансовая стоимость;<br>
          Н<sub>ам</sub> – норма амортизации.<br>
          Проектная амортизация рассчитывается по формуле<br>
          <br>
          А<sub>пр</sub> = А<sub>год</sub>К<sub>рдг</sub> ∙ К<sub>дэ</sub>,<br>
          <br>
          где А<sub>год</sub> – амортизация за год использования;<br> 
          А<sub>пр</sub> – проектная амортизация;<br>
          К<sub>рдг</sub> – количество рабочих дней в году;<br>
          К<sub>дэ</sub> – количество дней эксплуатации.<br>
          Норма амортизации рассчитывается по формуле<br>
          <br>
          Н<sub>ам</sub> = 100% / Тэк,<br>
          <br>
          где Т<sub>эк</sub> – срок эксплуатации компьютера.<br>
        </div>
        <div class="row">
          <div class="container col-4"><p>Стоимость ПК для разработки</p></div>
          <div class="container col-2">
            <CalculationParameter
              v-model="parameterList[7].number" />
          </div>
        </div>
        <div class="row">
          <div class="container col-4"><p>Количество дней эксплуатации ПК (длительность периода разработки ИС)</p></div>
          <div class="container col-2">
            <CalculationParameter
              v-model="parameterList[8].number" />
          </div>
        </div>
        <div class="row">
          <div class="container col-4"><p>Срок службы ПК</p></div>
          <div class="container col-2">
            <CalculationParameter
              v-model="parameterList[12].number" />
          </div>
        </div>
        <div class="container">
          Н<sub>ам</sub> = {{ Depreciation_rate }}%.
        </div>
        <div class="container">
          А<sub>год</sub> = {{ Depreciation_per_year }} руб.
        </div>
        <div class="container">
          А<sub>пр</sub> = {{ Depreciation_per_project }} руб.
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">К<sub>ипс</sub></p>
        <div class="row">
          <div class="container col-4"><p>Затраты на инструментальные программные средства</p></div>
          <div class="container col-2">
            <CalculationParameter
              v-model="parameterList[13].number" />
          </div>
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">К<sub>проч</sub></p>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Прочие расходы связаны с неучтенными затратами, 
            включающими электроэнергию, администрирование, 
            обслуживание сервера и другие статьи затрат не подлежащие точному учету.<br>
            Рекомендуется 3-5%.
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[14].number" />
          </div>
        </div>
        <div class="row">
          <div class="container fs-5 col-4">
            Прочие затраты на проектирование
          </div>
          <div class="container fs-5 col-2">
            К<sub>проч</sub> = {{ Other_design_costs }} руб.
          </div>
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">
          К<sub>пр</sub> = 
          {{ parameterList[6].number }} + 
          {{ parameterList[13].number }} + 
          {{ parameterList[11].number }} + 
          {{ parameterList[15].number }} = 
          {{ Design_costs }}
        </p>
      </div>
      <div class="container m-4">
        <p class="h4">
          К<sub>тс</sub>
        </p>
        <div class="container fs-5 text-wrap">
          Затраты на технические средства управления. Затраты 
          на технические средства управления включают в себя стоимость компьютера и серверного ПК. 
        </div>
        <div class="row">
          <div class="container col-4"><p>
            Длительность тестирования и введения в эксплуатацию.
          </p></div>
          <div class="container col-2">
            <CalculationParameter
              v-model="parameterList[17].number" />
          </div>
        </div>
        <div class="row">
          <div class="container col-4"><p>
            Амортизация серверного ПК (если есть)
          </p></div>
          <div class="container col-2">
            <CalculationParameter
              v-model="parameterList[18].number" />
          </div>
        </div>
        <div class="container fs-5 text-wrap">
          К<sub>тс</sub> = 
          {{ Costs_for_technical_controls_1 }} + 
          {{ parameterList[18].number }} = 
          {{ Costs_for_technical_controls_2 }}
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">
          К<sub>лс</sub>
        </p>
        <div class="row">
          <div class="container col-4"><p>
            Затраты на создание линий связи локальных сетей
          </p></div>
          <div class="container col-2">
            <CalculationParameter
              v-model="parameterList[21].number" />
          </div>
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">
          К<sub>по</sub>
        </p>
        <div class="row">
          <div class="container col-4"><p>
            Затраты на программные средства
          </p></div>
          <div class="container col-2">
            <CalculationParameter
              v-model="parameterList[22].number" />
          </div>
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">
          К<sub>ио</sub>
        </p>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Затраты на формирование информационной базы
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[23].number" />
          </div>
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">
          К<sub>об</sub>
        </p>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Оклад тренера
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[25].number" />
          </div>
        </div>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Надбавка за стаж тренера
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[26].number" />
          </div>
        </div>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Районный коэффициент тренера
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[26].number" />
          </div>
        </div>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Длительность обучения
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[28].number" />
          </div>
        </div>
        <div class="container fs-5 text-wrap">
          К<sub>об</sub> = 
          ({{ this.parameterList[25].number }} * ( 1 +
          {{ this.parameterList[26].number }} + 
          {{ this.parameterList[27].number }})) * 1.43 * 
          {{ parameterList[28].number }} = 
          {{ Staff_training_costs }} руб.
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">
          К<sub>оэ</sub>
        </p>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Оклад персонала, работающего с информационной системой
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[29].number" />
          </div>
        </div>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Надбавка за стаж персонала
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[30].number" />
          </div>
        </div>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Районный коэффициент персонала
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[31].number" />
          </div>
        </div>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Длительность опытной эксплуатации
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[32].number" />
          </div>
        </div>
        <div class="container fs-5 text-wrap">
          К<sub>оэ</sub> = 
          ({{ this.parameterList[29].number }} * ( 1 +
          {{ this.parameterList[30].number }} + 
          {{ this.parameterList[31].number }})) * 1.43 * 
          {{ parameterList[32].number }} = 
          {{ Trial_operation_costs }} руб.
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">
          К = 
          {{ parameterList[16].number }} + 
          {{ parameterList[20].number }} + 
          {{ parameterList[21].number }} + 
          {{ parameterList[22].number }} + 
          {{ parameterList[23].number }} + 
          {{ parameterList[24].number }} + 
          {{ parameterList[33].number }} = 
          {{ Capital_expenditures }}
        </p>
      </div>
      <div class="container">
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOperatingCosts" aria-expanded="false" aria-controls="collapseOperatingCosts">
          Показать пояснения
        </button>
      </div>
      <div class="container fs-5 m-4 cpllapse text-wrap" id="collapseOperatingCosts">
        Расчет эксплуатационных затрат проводится по следующей формуле<br>
        <br>
        С = С<sub>зп</sub> + С<sub>ао</sub> + С<sub>то</sub> + С<sub>лс</sub> + С<sub>ни</sub> + С<sub>проч</sub>,<br>
        <br>
        где С<sub>зп</sub> – зарплата персонала, работающего с информационной системой;<br>
        С<sub>ао</sub> – амортизационные отчисления;<br>
        С<sub>то</sub> – затраты на техническое обслуживание;<br>
        С<sub>лс</sub> – затраты на использование глобальных сетей;<br>
        С<sub>ни</sub> – затраты на носители информации;<br>
        С<sub>проч</sub> – прочие затраты.<br>
      </div>
      <div class="container m-4">
        <p class="h4">С<sub>зп</sub></p>
        <div class="container table-responsive fs-5">
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
                  v-model="parameterList[35].number" /> 
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Надбавка за стаж работы в указанной местности</td>
                <td class="p-0">
                  <table class="table table-borderless mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <CalculationParameter
                          v-model="parameterList[36].number" />
                        </td>
                        <td>
                          {{ Surcharge_OC }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                          v-model="parameterList[37].number" />
                        </td>
                        <td>
                          {{ District_coefficient_OC }}
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
                  {{ All_income_OC }}
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th></th>
                <td></td>
                <td>НДФЛ</td>
                <td>
                  {{ Income_tax_OC }}
                </td>
              </tr>
              <tr>
                <th></th>
                <td></td>
                <td>Отчисления во внебюджетные фонды</td>
                <td>
                  {{ Fund_allocations_OC }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Итог</th>
                <td colspan="3">
                  {{ Salary_OC }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Количество часов
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[39].number" />
          </div>
        </div>
        <div class="container fs-5">
          С<sub>зп</sub> = {{ parameterList[38].number * parameterList[39].number }} руб.
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">С<sub>ао</sub></p>
        <div class="row">
          <div class="container fs-5 col-4"><p>Стоимость оборудования</p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[40].number" />
          </div>
        </div>
        <div class="row">
          <div class="container fs-5 col-4"><p>Количество часов эксплуатации оборудования</p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[41].number" />
          </div>
        </div>
        <div class="row">
          <div class="container fs-5 col-4"><p>Срок службы оборудования</p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[42].number" />
          </div>
        </div>
        <div class="container fs-5">
          Н<sub>ам</sub> = {{ 100 / Number(parameterList[42].number) }}%.
        </div>
        <div class="container fs-5">
          А<sub>год</sub> = {{ Number(parameterList[40].number) * (100 / Number(parameterList[42].number)) / 100 }} руб.
        </div>
        <div class="container fs-5">
          А<sub>эксп</sub> = {{ Depreciation_deductions }} руб.
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">
          С<sub>то</sub>
        </p>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Затраты на техническое обслуживание
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[44].number" />
          </div>
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">
          С<sub>лс</sub>
        </p>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Затраты на использование глобальных сетей
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[45].number" />
          </div>
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">
          С<sub>ни</sub>
        </p>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Затраты на носители информации
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[46].number" />
          </div>
        </div>
      </div>
      <div class="container m-4">
        <p class="h4">С<sub>проч</sub></p>
        <div class="row">
          <div class="container fs-5 col-4"><p>
            Прочие расходы связаны с неучтенными затратами, 
            включающими электроэнергию, администрирование, 
            обслуживание сервера и другие статьи затрат не подлежащие точному учету.<br>
            Рекомендуется 3-5%.
          </p></div>
          <div class="container fs-5 col-2">
            <CalculationParameter
              v-model="parameterList[47].number" />
          </div>
        </div>
        <div class="row">
          <div class="container fs-5 col-4">
            Прочие затраты
          </div>
          <div class="container fs-5 col-2">
            С<sub>проч</sub> = {{ Other_costs }} руб.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.active-dropzone {
    background-color: var(--bs-gray-200) !important;
}
.active-dropzone label {
    border-color:  #D13C16 !important;
    background-color: #FF6000 !important;
}
</style>

