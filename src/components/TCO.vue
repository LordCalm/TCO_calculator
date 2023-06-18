<script>
import CalculationParameter from './CalculationParameter.vue';
import { exportToCsv } from '../download-csv.js';
export default {
  mounted() {
    // Инициализация Scrollspy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar-tco'
    });
  },
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
          parameterName: 'Надбавка за стаж программиста (процент)',
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
          parameterName: 'НДФЛ программиста', // #4
          number: 0
        },
        {
          parameterName: 'Страховые взносы программиста',
          number: 0
        },
        {
          parameterName: 'Зарплата проектировщика', // #6
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
          parameterName: 'Прочие затраты на проектирование', // #15
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
          number: 0
        },
        {
          parameterName: 'Эксплуатационные затраты', // #49
          number: 0
        },
        {
          parameterName: 'Расходы на разработку прикладного ПО внутренними силами', // #50
          number: 0
        },
        {
          parameterName: 'Расходы на аутсорсинг', // #51
          number: 0
        },
        {
          parameterName: 'Командировочные расходы', // #52
          number: 0
        },
        {
          parameterName: 'Расходы на услуги связи', // #53
          number: 0
        },
        {
          parameterName: 'Другие группы расходов (процент)', // #54
          number: 3
        },
        {
          parameterName: 'Другие группы расходов (значение)', // #55
          number: 0
        },
        {
          parameterName: 'Косвенные расходы первой группы IC1', // #56
          number: 0
        },
        {
          parameterName: 'Косвенные расходы второй группы IC2', // #57
          number: 0
        },
        {
          parameterName: 'TCO', // #58
          number: 0
        },
      ],
      optionalParameterList: [
        {
          parameterName: "Дополнительные проектные затраты", // #0
          number: 0
        },
        {
          parameterName: "Дополнительные капитальные затраты", // #1
          number: 0
        },
        {
          parameterName: "Дополнительные эксплуатационные затраты", // #2
          number: 0
        },
      ],

      dropzoneFile: '', // Store our uploaded files
      active: false,

      chart1: null,
      chart2: null,
      chart3: null,
      options1: {
        animationEnabled: true,
        title: {
          text: "Проектные затраты"
        },
        legend: {
          horizontalAlign: "center", // left, center ,right 
          verticalAlign: "top",  // top, center, bottom
        },
        data: [{
          theme: "light2",
          type: "pie",
          showInLegend: true, // Set showInLegend to true
          dataPoints: [] // Empty array to be populated dynamically
        }]
      },
      options2: {
        animationEnabled: true,
        title: {
          text: "Капитальные затраты"
        },
        legend: {
          horizontalAlign: "center", // left, center ,right 
          verticalAlign: "top",  // top, center, bottom
        },
        data: [{
          theme: "light2",
          type: "pie",
          showInLegend: true, // Set showInLegend to true
          dataPoints: [] // Empty array to be populated dynamically
        }]
      },
      options3: {
        animationEnabled: true,
        title: {
          text: "Эксплуатационные затраты"
        },
        legend: {
          horizontalAlign: "center", // left, center ,right 
          verticalAlign: "top",  // top, center, bottom
        },
        data: [{
          theme: "light2",
          type: "pie",
          showInLegend: true, // Set showInLegend to true
          dataPoints: [] // Empty array to be populated dynamically
        }]
      }
    }
  },
  watch: {
    parameterList: {
      deep: true,
      handler() {
        this.generateDataPoints1();
        this.generateDataPoints2();
        this.generateDataPoints3();
      }
    }
  },
  computed: {
    District_coefficient() {
      return Math.round(Number(this.parameterList[0].number) *
        Number(this.parameterList[2].number));
    },
    All_income() {
      this.parameterList[3].number =
        Math.round(Number(this.parameterList[0].number * (1 + Number(this.parameterList[2].number))) +
          Number(Number(this.parameterList[0].number) * Number(this.parameterList[1].number)));
      return this.parameterList[3].number;
    },
    Income_tax() {
      this.parameterList[4].number = Math.round(Number(this.parameterList[3].number) * 0.13);
      return this.parameterList[4].number;
    },
    Fund_allocations() {
      this.parameterList[5].number = Math.round(Number(this.parameterList[3].number) * 0.302);
      return this.parameterList[5].number;
    },
    Programmer_salary() {
      this.parameterList[6].number =
        Math.round(Number(this.parameterList[3].number) +
          //Number(this.parameterList[4].number) +
          Number(this.parameterList[5].number));
      return this.parameterList[6].number;
    },
    Depreciation_rate() {
      this.parameterList[9].number = Math.round(100 /
        Number(this.parameterList[12].number));
      return this.parameterList[9].number;
    },
    Depreciation_per_year() {
      this.parameterList[10].number =
        Math.round(Number(this.parameterList[7].number) *
          Number(this.parameterList[9].number) / 100);
      return this.parameterList[10].number;
    },
    Depreciation_per_project() {
      this.parameterList[11].number =
        Math.round(Number(this.parameterList[10].number) / 247 *
          Number(this.parameterList[8].number));
      return this.parameterList[11].number;
    },
    Other_design_costs() {
      this.parameterList[15].number =
        Math.round(Number(this.parameterList[14].number) / 100 *
          (Number(this.parameterList[6].number) +
            Number(this.parameterList[11].number) +
            Number(this.parameterList[13].number)));
      if (Number(this.optionalParameterList[0].number) > 0) {
        this.parameterList[15].number += Math.round(Number(this.parameterList[14].number) / 100 *
          Number(this.optionalParameterList[0].number));
      }
      return this.parameterList[15].number;
    },
    Design_costs() {
      this.parameterList[16].number =
        Math.round(Number(this.parameterList[6].number) +
          Number(this.parameterList[13].number) +
          Number(this.parameterList[11].number) +
          Number(this.parameterList[15].number));
      if (Number(this.optionalParameterList[0].number) > 0) {
        this.parameterList[16].number += Math.round(Number(this.optionalParameterList[0].number));
      }
      return this.parameterList[16].number;
    },
    Costs_for_technical_controls_1() {
      this.parameterList[19].number =
        Math.round(Number(this.parameterList[10].number) / 247 *
          Number(this.parameterList[17].number));
      return this.parameterList[19].number;
    },
    Costs_for_technical_controls_2() {
      this.parameterList[20].number =
        Math.round(Number(this.parameterList[19].number) +
          Number(this.parameterList[18].number));
      return this.parameterList[20].number;
    },
    Staff_training_costs() {
      this.parameterList[24].number =
        Math.round((Number(this.parameterList[25].number) * (1 +
          Number(this.parameterList[26].number) +
          Number(this.parameterList[27].number))) * 1.302 *
          Number(this.parameterList[28].number) / 168);
      return this.parameterList[24].number;
    },
    Trial_operation_costs() {
      this.parameterList[33].number =
        Math.round((Number(this.parameterList[29].number) * (1 +
          Number(this.parameterList[30].number) +
          Number(this.parameterList[31].number))) * 1.302 *
          Number(this.parameterList[32].number) / 168);
      return this.parameterList[33].number;
    },
    Capital_expenditures() {
      this.parameterList[34].number =
        Math.round(Number(this.parameterList[16].number) +
          Number(this.parameterList[20].number) +
          Number(this.parameterList[21].number) +
          Number(this.parameterList[22].number) +
          Number(this.parameterList[23].number) +
          Number(this.parameterList[24].number) +
          Number(this.parameterList[33].number));
      if (Number(this.optionalParameterList[1].number) > 0) {
        this.parameterList[34].number += Math.round(Number(this.optionalParameterList[1].number));
      }
      return this.parameterList[34].number;
    },
    Surcharge_OC() {
      return Math.round(Number(this.parameterList[35].number) * (
        Number(this.parameterList[36].number)));
    },
    District_coefficient_OC() {
      return Math.round(Number(this.parameterList[35].number) * (
        Number(this.parameterList[37].number)));
    },
    All_income_OC() {
      return Math.round(Number(this.parameterList[35].number) +
        Number(this.parameterList[35].number) * (
          Number(this.parameterList[36].number)) +
        Number(this.parameterList[35].number) * (
          Number(this.parameterList[37].number)));
    },
    Income_tax_OC() {
      return Math.round((Number(this.parameterList[35].number) +
        Number(this.parameterList[35].number) *
        Number(this.parameterList[36].number) +
        Number(this.parameterList[35].number) *
        Number(this.parameterList[37].number)) * 0.13);
    },
    Fund_allocations_OC() {
      return Math.round((Number(this.parameterList[35].number) +
        Number(this.parameterList[35].number) *
        Number(this.parameterList[36].number) +
        Number(this.parameterList[35].number) *
        Number(this.parameterList[37].number)) * 0.302);
    },
    Salary_OC() {
      this.parameterList[38].number =
        Math.round((Number(this.parameterList[35].number) +
          Number(this.parameterList[35].number) *
          Number(this.parameterList[36].number) +
          Number(this.parameterList[35].number) *
          Number(this.parameterList[37].number)) * 1.302);
      return this.parameterList[38].number;
    },
    Depreciation_deductions() {
      this.parameterList[43].number =
        Math.round(Number(this.parameterList[40].number) *
          (100 / Number(this.parameterList[42].number)) / 100 / 247 / 24 *
          Number(this.parameterList[41].number));
      return this.parameterList[43].number;
    },
    Other_costs() {
      this.parameterList[48].number =
        Math.round((Number(this.parameterList[38].number * this.parameterList[39].number / 168) +
          Number(this.parameterList[43].number) +
          Number(this.parameterList[44].number) +
          Number(this.parameterList[45].number) +
          Number(this.parameterList[46].number)) *
          Number(this.parameterList[47].number) / 100);
      if (Number(this.optionalParameterList[2].number) > 0) {
        this.parameterList[48].number += Math.round(Number(this.optionalParameterList[2].number) *
          Number(this.parameterList[47].number) / 100);
      }
      return this.parameterList[48].number;
    },
    Operating_costs() {
      this.parameterList[49].number =
        Math.round(Number(this.parameterList[38].number * this.parameterList[39].number / 168) +
          Number(this.parameterList[43].number) +
          Number(this.parameterList[44].number) +
          Number(this.parameterList[45].number) +
          Number(this.parameterList[46].number) +
          Number(this.parameterList[48].number));
      if (Number(this.optionalParameterList[2].number) > 0) {
        this.parameterList[49].number += Math.round(Number(this.optionalParameterList[2].number));
      }
      return this.parameterList[49].number;
    },
    Other_expense_groups() {
      this.parameterList[55].number =
        Math.round((//Number(this.parameterList[34].number) +
          Number(this.parameterList[38].number * this.parameterList[39].number / 168) +
          Number(this.parameterList[43].number) +
          Number(this.parameterList[44].number) +
          Number(this.parameterList[50].number) +
          Number(this.parameterList[51].number) +
          Number(this.parameterList[52].number) +
          Number(this.parameterList[53].number)) *
          Number(this.parameterList[54].number) / 100);
      return this.parameterList[55].number;
    },
    TCO() {
      this.parameterList[58].number =
        Math.round(Number(this.parameterList[34].number) +
          Number(this.parameterList[38].number * this.parameterList[39].number / 168) +
          Number(this.parameterList[43].number) +
          Number(this.parameterList[44].number) +
          Number(this.parameterList[50].number) +
          Number(this.parameterList[51].number) +
          Number(this.parameterList[52].number) +
          Number(this.parameterList[53].number) +
          Number(this.parameterList[55].number) +
          Number(this.parameterList[56].number) +
          Number(this.parameterList[57].number));
      return this.parameterList[58].number;
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
          ["Северная надбавка, коэффициент", this.parameterList[1].number],
          ["Районный коэффициент", this.parameterList[0].number * this.parameterList[2].number],
          ["Все доходы", this.parameterList[3].number],
          ["", "", "НДФЛ", this.parameterList[4].number],
          ["", "", "Страховые взносы", this.parameterList[5].number],
          ["Итог", this.parameterList[6].number],
          ["Стоимость ПК для разработки", this.parameterList[7].number],
          ["Количество дней эксплуатации ПК (длительность периода разработки ИС)", this.parameterList[8].number],
          ["Срок службы ПК", this.parameterList[12].number],
          ["Нам", this.Depreciation_rate],
          ["Агод", this.Depreciation_per_year],
          ["Апр", this.Depreciation_per_project],
          ["Затраты на инструментальные программные средства", this.parameterList[13].number],
          ["Прочие затраты на проектирование (процент)", this.parameterList[14].number],
          ["Прочие затраты на проектирование", this.Other_design_costs],
          ["Кпр", this.Design_costs],
          ["Длительность тестирования и введения в эксплуатацию.", this.parameterList[17].number],
          ["Амортизация серверного ПК (если есть)", this.parameterList[18].number],
          ["Ктс", this.Costs_for_technical_controls_2],
          ["Затраты на создание линий связи локальных сетей", this.parameterList[21].number],
          ["Затраты на программные средства", this.parameterList[22].number],
          ["Затраты на формирование информационной базы", this.parameterList[23].number],
          ["Оклад тренера", this.parameterList[25].number],
          ["Надбавка за стаж тренера", this.parameterList[26].number],
          ["Районный коэффициент тренера", this.parameterList[27].number],
          ["Длительность обучения", this.parameterList[28].number],
          ["Коб", this.Staff_training_costs],
          ["Оклад персонала, работающего с информационной системой", this.parameterList[29].number],
          ["Надбавка за стаж персонала", this.parameterList[30].number],
          ["Районный коэффициент персонала", this.parameterList[31].number],
          ["Длительность опытной эксплуатации", this.parameterList[32].number],
          ["Коэ", this.Trial_operation_costs],
          ["К", this.Capital_expenditures],
          ["Оклад эксплуатационный", this.parameterList[35].number],
          ["Надбавка эксплуатационная", this.parameterList[36].number],
          ["Районный коэффициент эксплуатационный", this.parameterList[37].number],
          ["Зарплата эксплуатационная", this.parameterList[38].number],
          ["Часы эксплуатационные", this.parameterList[39].number],
          ["Сзп", this.parameterList[38].number * this.parameterList[39].number / 168],
          ["Стоимость оборудования", this.parameterList[40].number],
          ["Количество часов эксплуатации оборудования", this.parameterList[41].number],
          ["Срок службы оборудования", this.parameterList[42].number],
          ["Нам", 100 / Number(this.parameterList[42].number)],
          ["Агод", Number(this.parameterList[40].number) * (100 / Number(this.parameterList[42].number)) / 100],
          ["Аэксп", this.Depreciation_deductions],
          ["Сто", this.parameterList[44].number],
          ["Слс", this.parameterList[45].number],
          ["Сни", this.parameterList[46].number],
          ["Спроч (процент)", this.parameterList[47].number],
          ["Спроч", this.Other_costs],
          ["С", this.Operating_costs],
          ["DE1", this.parameterList[34].number],
          ["DE2", this.parameterList[38].number * this.parameterList[39].number / 168],
          ["DE3", this.parameterList[43].number + this.parameterList[44].number],
          ["DE4", this.parameterList[50].number],
          ["DE5", this.parameterList[51].number],
          ["DE6", this.parameterList[52].number],
          ["DE7", this.parameterList[53].number],
          ["DE8 (процент)", this.parameterList[54].number],
          ["DE8", this.Other_expense_groups],
          ["IC1", this.parameterList[56].number],
          ["IC2", this.parameterList[57].number],
          ["TCO", this.TCO],
          [this.optionalParameterList[0].parameterName, this.optionalParameterList[0].number],
          [this.optionalParameterList[1].parameterName, this.optionalParameterList[1].number],
          [this.optionalParameterList[2].parameterName, this.optionalParameterList[2].number],
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
          complete: function (results) {
            self.parameterList[0].number = results.data[3][1];
            self.parameterList[1].number = results.data[4][1];
            self.parameterList[2].number = results.data[5][1] / results.data[3][1];
            self.parameterList[3].number = results.data[6][1];
            self.parameterList[4].number = results.data[7][3];
            self.parameterList[5].number = results.data[8][3];
            self.parameterList[6].number = results.data[9][1];
            self.parameterList[7].number = results.data[10][1];
            self.parameterList[8].number = results.data[11][1];
            self.parameterList[12].number = results.data[12][1];
            self.parameterList[13].number = results.data[16][1];
            self.parameterList[14].number = results.data[17][1];
            self.parameterList[17].number = results.data[20][1];
            self.parameterList[18].number = results.data[21][1];
            self.parameterList[21].number = results.data[23][1];
            self.parameterList[22].number = results.data[24][1];
            self.parameterList[23].number = results.data[25][1];
            self.parameterList[25].number = results.data[26][1];
            self.parameterList[26].number = results.data[27][1];
            self.parameterList[27].number = results.data[28][1];
            self.parameterList[28].number = results.data[29][1];
            self.parameterList[29].number = results.data[31][1];
            self.parameterList[30].number = results.data[32][1];
            self.parameterList[31].number = results.data[33][1];
            self.parameterList[32].number = results.data[34][1];
            self.parameterList[33].number = results.data[35][1];
            self.parameterList[35].number = results.data[37][1];
            self.parameterList[36].number = results.data[38][1];
            self.parameterList[37].number = results.data[39][1];
            self.parameterList[38].number = results.data[40][1];
            self.parameterList[39].number = results.data[41][1];
            self.parameterList[40].number = results.data[43][1];
            self.parameterList[41].number = results.data[44][1];
            self.parameterList[42].number = results.data[45][1];
            self.parameterList[44].number = results.data[49][1];
            self.parameterList[45].number = results.data[50][1];
            self.parameterList[46].number = results.data[51][1];
            self.parameterList[47].number = results.data[52][1];
            self.parameterList[50].number = results.data[58][1];
            self.parameterList[51].number = results.data[59][1];
            self.parameterList[52].number = results.data[60][1];
            self.parameterList[53].number = results.data[61][1];
            self.parameterList[54].number = results.data[62][1];
            self.parameterList[56].number = results.data[64][1];
            self.parameterList[57].number = results.data[65][1];
            self.optionalParameterList[0].number = results.data[67][1];
            self.optionalParameterList[1].number = results.data[68][1];
            self.optionalParameterList[2].number = results.data[69][1];
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
    },

    generateDataPoints1() {
      let dps = [
        {
          y: this.parameterList[6].number,
          name: this.parameterList[6].parameterName,
          label: this.parameterList[6].parameterName,
          indexLabel: Math.round(this.parameterList[6].number / this.parameterList[16].number * 100) + "%"
        },
        {
          y: this.parameterList[11].number,
          name: this.parameterList[11].parameterName,
          label: this.parameterList[11].parameterName,
          indexLabel: Math.round(this.parameterList[11].number / this.parameterList[16].number * 100) + "%"
        },
        {
          y: this.parameterList[13].number,
          name: this.parameterList[13].parameterName,
          label: this.parameterList[13].parameterName,
          indexLabel: Math.round(this.parameterList[13].number / this.parameterList[16].number * 100) + "%"
        },
        {
          y: this.parameterList[15].number,
          name: this.parameterList[15].parameterName,
          label: this.parameterList[15].parameterName,
          indexLabel: Math.round(this.parameterList[15].number / this.parameterList[16].number * 100) + "%"
        }
      ];

      this.options1.data[0].dataPoints = dps;
      this.chart1.render();
    },
    chartInstance1(chart) {
      this.chart1 = chart;
      this.generateDataPoints1();
    },

    generateDataPoints2() {
      let dps = [
        {
          y: this.parameterList[16].number,
          name: this.parameterList[16].parameterName,
          label: this.parameterList[16].parameterName,
          indexLabel: Math.round(this.parameterList[16].number / this.parameterList[34].number * 100) + "%"
        },
        {
          y: this.parameterList[20].number,
          name: this.parameterList[20].parameterName,
          label: this.parameterList[20].parameterName,
          indexLabel: Math.round(this.parameterList[20].number / this.parameterList[34].number * 100) + "%"
        },
        {
          y: this.parameterList[21].number,
          name: this.parameterList[21].parameterName,
          label: this.parameterList[21].parameterName,
          indexLabel: Math.round(this.parameterList[21].number / this.parameterList[34].number * 100) + "%"
        },
        {
          y: this.parameterList[22].number,
          name: this.parameterList[22].parameterName,
          label: this.parameterList[22].parameterName,
          indexLabel: Math.round(this.parameterList[22].number / this.parameterList[34].number * 100) + "%"
        },
        {
          y: this.parameterList[23].number,
          name: this.parameterList[23].parameterName,
          label: this.parameterList[23].parameterName,
          indexLabel: Math.round(this.parameterList[23].number / this.parameterList[34].number * 100) + "%"
        },
        {
          y: this.parameterList[24].number,
          name: this.parameterList[24].parameterName,
          label: this.parameterList[24].parameterName,
          indexLabel: Math.round(this.parameterList[24].number / this.parameterList[34].number * 100) + "%"
        },
        {
          y: this.parameterList[33].number,
          name: this.parameterList[33].parameterName,
          label: this.parameterList[33].parameterName,
          indexLabel: Math.round(this.parameterList[33].number / this.parameterList[34].number * 100) + "%"
        },
      ];

      this.options2.data[0].dataPoints = dps;
      this.chart2.render();
    },
    chartInstance2(chart) {
      this.chart2 = chart;
      this.generateDataPoints2();
    },

    generateDataPoints3() {
      let dps = [
        {
          y: Math.round(this.parameterList[38].number * this.parameterList[39].number / 168),
          name: "Зарплата персонала, работающего с информационной системой",
          label: "Зарплата персонала, работающего с информационной системой",
          indexLabel: Math.round(Math.round(this.parameterList[38].number * this.parameterList[39].number / 168) / this.parameterList[49].number * 100) + "%"
        },
        {
          y: this.parameterList[43].number,
          name: this.parameterList[43].parameterName,
          label: this.parameterList[43].parameterName,
          indexLabel: Math.round(this.parameterList[43].number / this.parameterList[49].number * 100) + "%"
        },
        {
          y: this.parameterList[44].number,
          name: this.parameterList[44].parameterName,
          label: this.parameterList[44].parameterName,
          indexLabel: Math.round(this.parameterList[44].number / this.parameterList[49].number * 100) + "%"
        },
        {
          y: this.parameterList[45].number,
          name: this.parameterList[45].parameterName,
          label: this.parameterList[45].parameterName,
          indexLabel: Math.round(this.parameterList[45].number / this.parameterList[49].number * 100) + "%"
        },
        {
          y: this.parameterList[46].number,
          name: this.parameterList[46].parameterName,
          label: this.parameterList[46].parameterName,
          indexLabel: Math.round(this.parameterList[46].number / this.parameterList[49].number * 100) + "%"
        },
        {
          y: this.parameterList[48].number,
          name: this.parameterList[48].parameterName,
          label: this.parameterList[48].parameterName,
          indexLabel: Math.round(this.parameterList[48].number / this.parameterList[49].number * 100) + "%"
        }
      ];

      this.options3.data[0].dataPoints = dps;
      this.chart3.render();
    },
    chartInstance3(chart) {
      this.chart3 = chart;
      this.generateDataPoints3();
    },
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light fixed-top" aria-label="Offcanvas навигационная панель большая">
    <div class="container">
      <a class="navbar-brand text-dark h2 fs-2 ps-4">
        <router-link to="/" class="nav-link p-0">
          <span class="d-inline">Главная</span>
        </router-link>
      </a>
      <div class="navbar-light">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasNavbar2Label">Методика ТСО</h3>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрывать"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav nav-pills justify-content-end flex-grow-1 pe-3 fs-5" role="tablist">
            <li class="nav-item">
              <a class="nav-link fs-5 px-2 active" aria-current="page" href="#scrollspyHeading1">Проектные затраты</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5 px-2" href="#scrollspyHeading2">Капитальные затраты</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5 px-2" href="#scrollspyHeading3">Эксплуатационные затраты</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5 px-2" href="#scrollspyHeading4">ТСО</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#offcanvasNavbar2" data-bs-offset="0" tabindex="0"
    class="container-fluid d-flex flex-column align-items-center p-0 m-0 position-relative">
    <div class="container position-relative p-0 m-0 mt-5">
      <div class="d-flex flex-column m-4 shadow rounded-3 mt-5" id="scrollspyHeading1">
        <div class="row h2 m-4">
          Методика ТСО
        </div>
        <button class="btn btn-primary fs-5 m-4 me-auto w-auto" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseExplanations" aria-expanded="false" aria-controls="collapseExplanations">
          Показать пояснения
        </button>
        <div class="row collapse" id="collapseExplanations">
          <div class="row m-0 p-4 justify-content-center">
            <div class="introduction row fs-5 text-wrap">
              Методика ТСО (Total cost of ownership — совокупная стоимость владения) разработана в конце 80-х компанией
              Gartner Group
              для определения финансовых затрат на владение компьютерами.
              Методика была усовершенствована в 1994 г. фирмой Intepose и переработана в полноценную модель анализа
              финансовой стороны использования информационных технологий.
              Впервые термин «совокупная стоимость» владения (Total Cost of Ownership – ТСО) был введен Полем Страссманом.
              Под ТСО он понимал денежные затраты на обслуживание, модернизацию, ремонт, приобретение новых программных
              продуктов для
              технического средства (например, компьютера), или поддержание в рабочем состоянии программного продукта
              (например, базы данных)
              за все предполагаемое или фактическое время его существования.
              Цель применения методики ТСО – получить картину, которая отражала бы реальные затраты, связанные с
              приобретением определенных
              средств и технологий, и учитывала все аспекты их последующего использования.
            </div>
            <div class="row row-cols-auto row-cols-md-2 g-0 g-md-4">
              <div class="col">
                <div class="border rounded-3 shadow">
                  <img src="../../src/Images/TCO-Microsoft.png" class="img-fluid p-4"
                    alt="Модель ТСО, разработанная компанией Microsoft совместно с Interpose">
                  <p class="introduction fs-5 text-wrap text-center p-2">Модель ТСО, разработанная компанией Microsoft
                    совместно с Interpose</p>
                </div>
              </div>
              <div class="col">
                <div class="align-self-center h-auto border rounded-3 shadow">
                  <img src="../../src/Images/TCO-GartnerGroup.png" class="img-fluid p-4"
                    alt="Модель TCO, предложенная Gartner Group">
                  <p class="introduction fs-5 text-wrap text-center p-2">Модель TCO, предложенная Gartner Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column m-4 shadow rounded-3">
        <div class="h2 m-4">
          Проектные затраты в составе капитальных затрат
        </div>
        <button class="btn btn-primary fs-5 m-4 me-auto w-auto" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseCapitalExpenditures" aria-expanded="false" aria-controls="collapseCapitalExpenditures">
          Показать пояснения
        </button>
        <div class="row mx-4 collapse" id="collapseCapitalExpenditures">
          <div class="col p-2 fs-5 text-wrap">
            Капитальные затраты на разработку информационной системы вычисляются по формуле<br>
            <br>
            К = К<sub>пр</sub> + К<sub>тс</sub> + К<sub>лс</sub> + К<sub>по</sub> + К<sub>ио</sub> + К<sub>об</sub> +
            К<sub>оэ</sub>,<br>
            <br>
            где К<sub>пр</sub> – затраты на проектирование ИС;<br>
            К<sub>тс</sub> – затраты на технические средства управления;<br>
            К<sub>лс</sub> – затраты на создание линий связи локальных сетей; <br>
            К<sub>по</sub> – затраты на программные средства;<br>
            К<sub>ио</sub> – затраты на формирование информационной базы; <br>
            К<sub>об</sub> – затраты на обучение персонала;<br>
            К<sub>оэ</sub> – затраты на опытную эксплуатацию.<br>
            Одной из ключевых частей капитальных затрат являются затраты на проектирование информационной системы, также
            называемые затратами на разработку.<br>
            Затраты на разработку рассчитываются по формуле<br>
            <br>
            К<sub>пр</sub> = К<sub>зп</sub> + К<sub>ипс</sub> + К<sub>свт</sub> + К<sub>проч</sub>,<br>
            <br>
            где К<sub>зп</sub> – затраты на заработную плату проектировщиков;<br>
            К<sub>ипс</sub> – затраты на инструментальные программные средства; <br>
            К<sub>свт</sub> – затраты на средства вычислительной техники;<br>
            К<sub>проч</sub> – прочие затраты на проектирование.<br>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">К<sub>зп</sub></p>
          <div class="table-responsive fs-5">
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
                    <CalculationParameter v-model="parameterList[0].number" />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="p-0">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Северная надбавка, коэффициент</td>
                          <td>
                            <CalculationParameter v-model="parameterList[1].number" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    {{ Math.round(Number(parameterList[0].number) * Number(parameterList[1].number)) }}
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="p-0">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Районный коэффициент</td>
                          <td>
                            <CalculationParameter v-model="parameterList[2].number" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    {{ District_coefficient }}
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
                  <td>Страховые взносы</td>
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
        <div class="row p-4">
          <p class="h4">К<sub>ипс</sub></p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>Затраты на инструментальные программные средства, руб.</p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[13].number" />
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">К<sub>свт</sub></p>
          <div class="row p-4">
            <button class="btn btn-primary fs-5 me-auto w-auto" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseDepreciation" aria-expanded="false" aria-controls="collapseDepreciation">
              Показать пояснения
            </button>
          </div>
          <div class="row collapse" id="collapseDepreciation">
            <div class="col p-4 fs-5 text-wrap">
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
          </div>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>Стоимость ПК для разработки, руб.</p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[7].number" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>Количество дней эксплуатации ПК (длительность периода разработки ИС)</p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[8].number" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>Срок службы ПК, лет</p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[12].number" />
            </div>
          </div>
          <div class="row">
            <div class="col mx-4 p-0 col-4 fs-5">
              Н<sub>ам</sub> = {{ Depreciation_rate }}%.
            </div>
          </div>
          <div class="row">
            <div class="col mx-4 p-0 col-4 fs-5">
              А<sub>год</sub> = {{ Depreciation_per_year }} руб.
            </div>
          </div>
          <div class="row">
            <div class="col mx-4 p-0 col-4 fs-5">
              А<sub>пр</sub> = {{ Depreciation_per_project }} руб.
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">Дополнительные проектные затраты</p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Например, стоимость электроэнергии, потребляемой комплексом вычислительной техники,
                стоимость вспомогательных материалов, затраты, связанные с арендой помещения,
                затраты на текущий и профилактический ремонт, расходы, связанные с покупкой и установкой оборудования для
                центра обработки данных, затраты на сетевое управление, затраты на управление системой и другие.
                В случае, если перечисленные затраты находятся в пределах 3-5% от К<sub>зп</sub>, рекомендуется учесть их
                в составе К<sub>проч</sub>.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="optionalParameterList[0].number" />
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">К<sub>проч</sub></p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Прочие расходы связаны с неучтенными затратами,
                включающими электроэнергию, администрирование,
                обслуживание сервера и другие статьи затрат не подлежащие точному учету.<br>
                Рекомендуется 3-5%.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[14].number" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              Прочие затраты на проектирование
            </div>
            <div class="col fs-5 col-5">
              К<sub>проч</sub> = {{ Other_design_costs }} руб.
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            К<sub>пр</sub> =
            {{ parameterList[6].number }} +
            {{ parameterList[13].number }} +
            {{ parameterList[11].number }} +
            {{ Number(optionalParameterList[0].number) > 0 ? (optionalParameterList[0].number + ' +') : '' }}
            {{ parameterList[15].number }} =
            {{ Design_costs }} руб.
          </p>
        </div>
      </div>
      <div class="d-flex flex-column m-4 shadow rounded-3">
        <CanvasJSChart :options="options1" @chart-ref="chartInstance1" />
      </div>
      <div class="d-flex flex-column m-4 shadow rounded-3" id="scrollspyHeading2">
        <div class="h2 m-4">
          Капитальные затраты
        </div>
        <div class="row p-4">
          <p class="h4">
            К<sub>тс</sub>
          </p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Длительность тестирования и введения в эксплуатацию, дни
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[17].number" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Амортизация серверного ПК (если есть), руб.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[18].number" />
            </div>
          </div>
          <div class="row">
            <div class="col fs-5 col-5 mx-4 p-0">
              К<sub>тс</sub> =
              {{ Costs_for_technical_controls_1 }} +
              {{ parameterList[18].number }} =
              {{ Costs_for_technical_controls_2 }} руб.
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            К<sub>лс</sub>
          </p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Затраты на создание линий связи локальных сетей, руб.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[21].number" />
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            К<sub>по</sub>
          </p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Затраты на программные средства, руб.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[22].number" />
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            К<sub>ио</sub>
          </p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Затраты на формирование информационной базы, руб.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[23].number" />
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            К<sub>об</sub>
          </p>
          <div class="row align-items-center">
            <div class="table-responsive fs-5">
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
                      <CalculationParameter v-model="parameterList[25].number" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="p-0">
                      <table class="table table-borderless mb-0">
                        <tbody>
                          <tr>
                            <td>Северная надбавка, коэффициент</td>
                            <td>
                              <CalculationParameter v-model="parameterList[26].number" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      {{ Math.round(Number(parameterList[25].number) * Number(parameterList[26].number)) }}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="p-0">
                      <table class="table table-borderless mb-0">
                        <tbody>
                          <tr>
                            <td>Районный коэффициент</td>
                            <td>
                              <CalculationParameter v-model="parameterList[27].number" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      {{ Math.round(Number(parameterList[25].number) * Number(parameterList[27].number)) }}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Все доходы</th>
                    <td>
                      {{ Math.round(Number(parameterList[25].number) * (1 + Number(parameterList[26].number) +
                        Number(parameterList[27].number))) }}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>НДФЛ</td>
                    <td>
                      {{ Math.round(Number(parameterList[25].number) * (1 + Number(parameterList[26].number) +
                        Number(parameterList[27].number)) * 0.13) }}
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td></td>
                    <td>Страховые взносы</td>
                    <td>
                      {{ Math.round(Number(parameterList[25].number) * (1 + Number(parameterList[26].number) +
                        Number(parameterList[27].number)) * 0.302) }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Итог</th>
                    <td colspan="3">
                      {{ Math.round(Number(parameterList[25].number) * (1 + Number(parameterList[26].number) +
                        Number(parameterList[27].number)) * 1.302) }}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Длительность обучения, часы
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[28].number" />
            </div>
          </div>
          <div class="container fs-5 text-wrap">
            К<sub>об</sub> =
            ({{ parameterList[25].number }} * (1 +
            {{ parameterList[26].number }} +
            {{ parameterList[27].number }})) * (1 + 0.302) *
            {{ parameterList[28].number }} / 168 =
            {{ Staff_training_costs }} руб.
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            К<sub>оэ</sub>
          </p>
          <div class="table-responsive fs-5">
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
                  <td>Оклад специалиста в период опытной эксплуатации</td>
                  <td>
                    <CalculationParameter v-model="parameterList[29].number" />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="p-0">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Северная надбавка, коэффициент</td>
                          <td>
                            <CalculationParameter v-model="parameterList[30].number" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    {{ Math.round(parameterList[29].number * parameterList[30].number) }}
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="p-0">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Районный коэффициент</td>
                          <td>
                            <CalculationParameter v-model="parameterList[31].number" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    {{ Math.round(Number(parameterList[29].number) * Number(parameterList[31].number)) }}
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Все доходы</th>
                  <td>
                    {{ Math.round(Number(parameterList[29].number) * (1 + Number(parameterList[30].number) +
                      Number(parameterList[31].number))) }}
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                  <td>НДФЛ</td>
                  <td>
                    {{ Math.round((Number(parameterList[29].number) * (1 + Number(parameterList[30].number) +
                      Number(parameterList[31].number))) *
                      0.13) }}
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                  <td>Страховые взносы</td>
                  <td>
                    {{ Math.round((Number(parameterList[29].number) * (1 + Number(parameterList[30].number) +
                      Number(parameterList[31].number))) *
                      0.302) }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Итог</th>
                  <td colspan="3">
                    {{ Math.round((Number(parameterList[29].number) * (1 + Number(parameterList[30].number) +
                      Number(parameterList[31].number))) *
                      1.302) }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Длительность опытной эксплуатации, часы
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[32].number" />
            </div>
          </div>
          <div class="container fs-5 text-wrap">
            К<sub>оэ</sub> =
            ({{ parameterList[29].number }} * (1 +
            {{ parameterList[30].number }} +
            {{ parameterList[31].number }})) * (1 + 0.302) *
            {{ parameterList[32].number }} / 168 =
            {{ Math.round(Trial_operation_costs) }} руб.
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">Дополнительные капитальные затраты</p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Например, затраты на привлечение внешних консультантов, затраты на учебные курсы и сертификацию, стоимость
                электроэнергии, потребляемой комплексом вычислительной техники и другие.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="optionalParameterList[1].number" />
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            К =
            {{ parameterList[16].number }} +
            {{ parameterList[20].number }} +
            {{ parameterList[21].number }} +
            {{ parameterList[22].number }} +
            {{ parameterList[23].number }} +
            {{ parameterList[24].number }} +
            {{ parameterList[33].number }}
            {{ Number(optionalParameterList[1].number) > 0 ? (' + ' + Number(optionalParameterList[1].number)) : '' }} =
            {{ Capital_expenditures }} руб.
          </p>
        </div>
      </div>
      <div class="d-flex flex-column m-4 shadow rounded-3">
        <CanvasJSChart :options="options2" @chart-ref="chartInstance2" />
      </div>
      <div class="d-flex flex-column m-4 shadow rounded-3" id="scrollspyHeading3">
        <div class="h2 m-4">
          Эксплуатационные затраты
        </div>
        <div class="row p-4">
          <button class="btn btn-primary ms-2 fs-5 me-auto w-auto" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOperatingCosts" aria-expanded="false" aria-controls="collapseOperatingCosts">
            Показать пояснения
          </button>
        </div>
        <div class="row p-0 m-0 collapse" id="collapseOperatingCosts">
          <div class="col fs-5 col-5 m-4 text-wrap">
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
        </div>
        <div class="row p-4">
          <p class="h4">С<sub>зп</sub></p>
          <div class="table-responsive fs-5">
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
                  <td>Оклад персонала, работающего с системой</td>
                  <td>
                    <CalculationParameter v-model="parameterList[35].number" />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="p-0">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Северная надбавка, коэффициент</td>
                          <td>
                            <CalculationParameter v-model="parameterList[36].number" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    {{ Surcharge_OC }}
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="p-0">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Районный коэффициент</td>
                          <td>
                            <CalculationParameter v-model="parameterList[37].number" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    {{ District_coefficient_OC }}
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
                  <td>Страховые взносы</td>
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
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Количество часов в месяц
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[39].number" />
            </div>
          </div>
          <div class="container fs-5">
            С<sub>зп</sub> = {{ Math.round(parameterList[38].number * parameterList[39].number / 168) }} руб.
          </div>
        </div>
        <div class="row row-cols-1 p-4">
          <p class="h4">С<sub>ао</sub></p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>Стоимость оборудования</p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[40].number" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>Количество часов эксплуатации оборудования</p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[41].number" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>Срок службы оборудования, лет</p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[42].number" />
            </div>
          </div>
          <div class="col mx-4 p-0 fs-5">
            Н<sub>ам</sub> = {{ Math.round(100 / Number(parameterList[42].number)) }}%.
          </div>
          <div class="col mx-4 p-0 fs-5">
            А<sub>год</sub> = {{ Math.round(Number(parameterList[40].number) * (100 / Number(parameterList[42].number)) /
              100) }} руб.
          </div>
          <div class="col mx-4 p-0 fs-5">
            А<sub>эксп</sub> = {{ Depreciation_deductions }} руб.
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            С<sub>то</sub>
          </p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Затраты на техническое обслуживание, руб.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[44].number" />
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            С<sub>лс</sub>
          </p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Затраты на использование глобальных сетей, руб.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[45].number" />
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            С<sub>ни</sub>
          </p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Затраты на носители информации, руб.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[46].number" />
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">Дополнительные эксплуатационные затраты</p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Например, затраты на привлечение внешних консультантов, затраты, связанные с арендой помещения,
                затраты на текущий и профилактический ремонт, стоимость обновлений основных модулей информационной
                системы,
                заработная плата обслуживающего персонала и другие.
                В случае, если перечисленные затраты находятся в пределах 3-5% от С<sub>зп</sub>, рекомендуется учесть
                их в составе С<sub>проч</sub>.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="optionalParameterList[2].number" />
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">С<sub>проч</sub></p>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              <p>
                Прочие расходы связаны с неучтенными затратами,
                включающими электроэнергию, администрирование,
                обслуживание сервера и другие статьи затрат не подлежащие точному учету.<br>
                Рекомендуется 3-5%.
              </p>
            </div>
            <div class="col fs-5 col-5">
              <CalculationParameter v-model="parameterList[47].number" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mx-4 p-0 fs-5 col-4">
              Прочие затраты, руб.
            </div>
            <div class="col fs-5 col-5">
              С<sub>проч</sub> = {{ Other_costs }} руб.
            </div>
          </div>
        </div>
        <div class="row p-4">
          <p class="h4">
            С =
            {{ Math.round(parameterList[38].number * parameterList[39].number / 168) }} +
            {{ parameterList[43].number }} +
            {{ parameterList[44].number }} +
            {{ parameterList[45].number }} +
            {{ parameterList[46].number }} +
            {{ Number(optionalParameterList[2].number) > 0 ? (Number(optionalParameterList[2].number) + ' +') : '' }}
            {{ parameterList[48].number }} =
            {{ Operating_costs }} руб.
          </p>
        </div>
      </div>
      <div class="d-flex flex-column m-4 shadow rounded-3">
        <CanvasJSChart :options="options3" @chart-ref="chartInstance3" />
      </div>
      <div class="d-flex flex-column m-4 shadow rounded-3" id="scrollspyHeading4">
        <div class="h2 m-4">
          Совокупная стоимость владения
        </div>
        <button class="btn btn-primary fs-5 m-4 me-auto w-auto" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseTCO" aria-expanded="false" aria-controls="collapseTCO">
          Показать пояснения
        </button>
        <div class="row collapse" id="collapseTCO">
          <div class="col m-4 p-4 fs-5 text-wrap">
            Показатель совокупной стоимости владения ИС рассчитывается по формуле<br>
            <br>
            TCO = DE + IC1 + IC2,<br>
            <br>
            где DE (direct expenses) – прямые расходы;<br>
            IC1 – (indirect costs) – косвенные расходы первой группы;<br>
            IC2 – косвенные расходы второй группы.<br>
            Прямые расходы рассчитываются по формуле<br>
            <br>
            DE = DE1 + DE2 + DE3 + DE4 + DE5 + DE6 + DE7 + DЕ8,<br>
            <br>
            где DE1 – капитальные затраты;<br>
            DE2 = Сзп – расходы на управление ИТ;<br>
            DE3 = Сто + Сао – расходы на техническую поддержку АО и ПО;<br>
            DE4 – расходы на разработку прикладного ПО внутренними силами;<br>
            DE5 – расходы на аутсорсинг;<br>
            DE6 – командировочные расходы;<br>
            DE7 – расходы на услуги связи;<br>
            DE8 – другие группы расходов. <br>
            Косвенные расходы первой группы IC1 – это расходы на компенсацию недостатков системы, вызванных ошибками
            проектирования.<br>
            Косвенные расходы второй группы IC2 – это расходы на компенсацию недостатков в организации функционирования
            информационной системы.<br>
          </div>
        </div>
        <div class="row px-4">
          <p class="h4 px-4">
            DE1 = {{ parameterList[34].number }} руб.
          </p>
        </div>
        <div class="row px-4">
          <p class="h4 px-4">
            DE2 = {{ Math.round(Number(parameterList[38].number) * Number(parameterList[39].number) / 168) }} руб.
          </p>
        </div>
        <div class="row px-4">
          <p class="h4 px-4">
            DE3 = {{ Math.round(Number(parameterList[43].number) + Number(parameterList[44].number)) }} руб.
          </p>
        </div>
        <div class="row px-4 align-items-center">
          <div class="container mx-4 p-0 h4 col-4">
            <p>
              DE4
            </p>
          </div>
          <div class="col fs-5 col-5">
            <CalculationParameter v-model="parameterList[50].number" />
          </div>
        </div>
        <div class="row px-4 align-items-center">
          <div class="container mx-4 p-0 h4 col-4">
            <p>
              DE5
            </p>
          </div>
          <div class="col fs-5 col-5">
            <CalculationParameter v-model="parameterList[51].number" />
          </div>
        </div>
        <div class="row px-4 align-items-center">
          <div class="container mx-4 p-0 h4 col-4">
            <p>
              DE6
            </p>
          </div>
          <div class="col fs-5 col-5">
            <CalculationParameter v-model="parameterList[52].number" />
          </div>
        </div>
        <div class="row px-4 align-items-center">
          <div class="container mx-4 p-0 h4 col-4">
            <p>
              DE7
            </p>
          </div>
          <div class="col fs-5 col-5">
            <CalculationParameter v-model="parameterList[53].number" />
          </div>
        </div>
        <div class="row px-4 align-items-center">
          <div class="container mx-4 p-0 h4 col-4">
            <p>
              DE8 = {{ Other_expense_groups }} руб.<br>
              Рекомендуется 3-5%.
            </p>
          </div>
          <div class="col fs-5 col-5">
            <CalculationParameter v-model="parameterList[54].number" />
          </div>
        </div>
        <div class="row px-4 align-items-center">
          <div class="container mx-4 p-0 h4 col-4">
            <p>
              IC1
            </p>
          </div>
          <div class="col fs-5 col-5">
            <CalculationParameter v-model="parameterList[56].number" />
          </div>
        </div>
        <div class="row px-4 align-items-center">
          <div class="container mx-4 p-0 h4 col-4">
            <p>
              IC2
            </p>
          </div>
          <div class="col fs-5 col-5">
            <CalculationParameter v-model="parameterList[57].number" />
          </div>
        </div>
        <div class="col p-4">
          <p class="h4">
            TCO = {{ TCO }} руб.
          </p>
        </div>
      </div>
      <div class="d-flex flex-column m-4 p-2 shadow rounded-3">
        <button class="btn btn-primary fs-5 m-4 me-auto w-auto" type="button" v-on:click="Download_csv">
          Скачать CSV
        </button>
        <div class="col align-content-center m-4 p-2">
          <div class="dropzone border rounded-3 shadow bg-light d-flex flex-column align-items-center"
            @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent @drop.prevent="drop"
            v-bind:class="{ 'active-dropzone': active }">
            <div class="text-center text-wrap w-auto fs-5">Для загрузки файлов перетащите их сюда</div>
            <div class="fs-5">ИЛИ</div>
            <label class="btn btn-primary fs-5 m-4 mx-auto w-auto" for="dropzoneFile">Выберите файл</label>
            <input class="dropzoneFile d-none" type="file" id="dropzoneFile" @change="onChange" ref="file"
              accept=".csv" />
            <div class="fileInfo fs-5">Файл: {{ dropzoneFile.name }}</div>
          </div>
        </div>
      </div>
      <div class="p-4">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 fs-5 mb-0 text-muted">2023 Хакасский технический институт – филиал федерального
            государственного автономного образовательного учреждения высшего образования «Сибирский федеральный
            университет»</p>

          <a href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item fs-5"><a href="#" class="nav-link px-2 text-muted">Наверх</a></li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
.active-dropzone {
  background-color: var(--bs-gray-200) !important;
}

.active-dropzone label {
  border-color: #D13C16 !important;
  background-color: #FF6000 !important;
}

p {
  word-wrap: break-word;
}
</style>

