<script>
import CalculationParameter from './CalculationParameter.vue';
import CanvasJSChart from '../assets/CanvasJSVueComponent.vue';
export default {
    mounted() {
        // Инициализация Scrollspy
        const scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#navbar-tco'
        });
    },
    components: {
        CalculationParameter,
        CanvasJSChart
    },
    data() {
        return {
            parameterList: [
                {
                    parameterName: "Базовый коэффициент актуальности", // #0
                    number: 0
                },
                {
                    parameterName: "Базовый коэффициент соответствия", // #1
                    number: 0
                },
                {
                    parameterName: "Базовый коэффициент сложности", // #2
                    number: 0
                },
                {
                    parameterName: "Базовый коэффициент места использования", // #3
                    number: 0
                },
                {
                    parameterName: "Базовый коэффициент объема использования", // #4
                    number: 0
                },
                {
                    parameterName: "Базовый коэффициент широты охвата", // #5
                    number: 0
                },
                {
                    parameterName: "Разрабатываемый коэффициент актуальности", // #6
                    number: 0
                },
                {
                    parameterName: "Разрабатываемый коэффициент соответствия", // #7
                    number: 0
                },
                {
                    parameterName: "Разрабатываемый коэффициент сложности", // #8
                    number: 0
                },
                {
                    parameterName: "Разрабатываемый коэффициент места использования", // #9
                    number: 0
                },
                {
                    parameterName: "Разрабатываемый коэффициент объема использования", // #10
                    number: 0
                },
                {
                    parameterName: "Разрабатываемый коэффициент широты охвата", // #11
                    number: 0
                },
                {
                    parameterName: "", // #12
                    number: 0
                },
            ],

            rows: [
                { name: 'John Doe', email: 'john@example.com' },
                { name: 'Jane Smith', email: 'jane@example.com' },
            ],

            dropzoneFile: '', // Store our uploaded files
            active: false,


        }
    },
    //   watch: {
    //     parameterList: {
    //       deep: true,
    //       handler() {
    //         this.generateDataPoints1();
    //         this.generateDataPoints2();
    //         this.generateDataPoints3();
    //       }
    //     }
    //   },
    computed: {
        ZTR_basic() {
            return Math.round((this.parameterList[0].number *
                this.parameterList[1].number *
                this.parameterList[2].number) +
                (this.parameterList[3].number *
                    this.parameterList[4].number *
                    this.parameterList[5].number));
        },
        ZTR_new() {
            return Math.round((this.parameterList[6].number *
                this.parameterList[7].number *
                this.parameterList[8].number) +
                (this.parameterList[9].number *
                    this.parameterList[10].number *
                    this.parameterList[11].number));
        },
        ETU() {
            return Math.round(this.ZTR_new / this.ZTR_basic);
        }
    },
    methods: {
        Download_csv() {
            exportToCsv("TCO",
                [
                    ["TCO", "Не меняйте порядок ячеек, если хотите продолжать редактирование данных в веб-приложении"],

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

        addRow() {
            this.rows.push({ name: '', email: '' });
        },
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light fixed-top" aria-label="Offcanvas навигационная панель большая">
        <div class="container">
            <a class="navbar-brand text-dark h2 fs-2 ps-4">
                <router-link to="/" class="nav-link p-0">
                    <span class="d-none d-sm-inline">Главная</span>
                </router-link>
            </a>
            <div class="navbar-light">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                    aria-controls="offcanvasNavbar2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label">
                <div class="offcanvas-header">
                    <h3 class="offcanvas-title" id="offcanvasNavbar2Label">Методика ЭТУ</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрывать"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav nav-pills justify-content-end flex-grow-1 pe-3 fs-5" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link fs-5 px-2 active" aria-current="page" href="#scrollspyHeading1">Значимость
                                технического решения</a>
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
                    Методика обобщающей характеристики эксплуатационно-технического уровня системы
                </div>
                <button class="btn btn-primary fs-5 m-4 me-auto w-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseExplanations" aria-expanded="false" aria-controls="collapseExplanations">
                    Показать пояснения
                </button>
                <div class="row collapse" id="collapseExplanations">
                    <div class="row m-0 p-4 justify-content-center">
                        <div class="introduction row fs-5 text-wrap">
                            Обобщающая характеристика эксплуатационно-технического уровня системы позволяет
                            комплексно оценить систему с учетом ее технического состояния, функциональности и экономической
                            эффективности. Эта методика помогает принимать информированные решения о разработке,
                            модернизации и эксплуатации системы, оптимизируя затраты и повышая общую эффективность.
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column m-4 shadow rounded-3">
                <div class="row h2 m-4">
                    Значимость технического решения
                </div>
                <button class="btn btn-primary fs-5 m-4 me-auto w-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseCapitalExpenditures" aria-expanded="false"
                    aria-controls="collapseCapitalExpenditures">
                    Показать пояснения
                </button>
                <div class="row collapse" id="collapseCapitalExpenditures">
                    <div class="col p-4 fs-5 text-wrap">
                        Для обобщающей характеристики эксплуатационно-технического уровня системы (ЭТУ) используется
                        аддитивно-мультипликативный показатель «значимость технического решения» (ЗТР) для решенной
                        технической задачи, в общем виде рассчитываемый по формуле<br><br>
                        ЗТР = К<sub>а</sub> * К<sub>п</sub> * К<sub>с</sub> + К<sub>м</sub> * К<sub>о</sub> *
                        К<sub>ш</sub>,<br><br>
                        где К<sub>а</sub> – коэффициент актуальности;<br>
                        К<sub>п</sub> − коэффициент соответствия программам важнейших работ научно-технического
                        прогресса;<br>
                        К<sub>с</sub> – коэффициент сложности;<br>
                        К<sub>м</sub> – коэффициент места использования;<br>
                        К<sub>о</sub> – коэффициент объема использования;<br>
                        К<sub>ш</sub> – коэффициент широты охвата охранными мероприятиями.<br>
                        Коэффициенты определяются по шкале (0; 2] с шагом 0,1.<br>
                        Далее вычисляется коэффициент эксплуатационно-технического уровня К<sub>эту</sub> по формуле<br><br>
                        К<sub>эту</sub> = ЗТР<sub>пр</sub>/ЗТР<sub>баз</sub>,<br><br>
                        где ЗТР<sub>пр</sub> и ЗТР<sub>баз</sub> - значимость технического решения для проекта и для
                        базового варианта соответственно.<br>
                        Если К<sub>эту</sub> > 1, следовательно, разработка проекта является оправданной с
                        технической точки
                        зрения.
                    </div>
                </div>
                <div class="row p-4">
                    <div class="table-responsive fs-5">
                        <table class="table table-bordered">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Коэффициенты</th>
                                    <th scope="col">Базовый вариант</th>
                                    <th scope="col">Разрабатываемый вариант</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>К<sub>а</sub></th>
                                    <td>
                                        <CalculationParameter v-model="parameterList[0].number" />
                                    </td>
                                    <td>
                                        <CalculationParameter v-model="parameterList[6].number" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>К<sub>п</sub></th>
                                    <td>
                                        <CalculationParameter v-model="parameterList[1].number" />
                                    </td>
                                    <td>
                                        <CalculationParameter v-model="parameterList[7].number" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>К<sub>с</sub></th>
                                    <td>
                                        <CalculationParameter v-model="parameterList[2].number" />
                                    </td>
                                    <td>
                                        <CalculationParameter v-model="parameterList[8].number" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>К<sub>м</sub></th>
                                    <td>
                                        <CalculationParameter v-model="parameterList[3].number" />
                                    </td>
                                    <td>
                                        <CalculationParameter v-model="parameterList[9].number" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>К<sub>о</sub></th>
                                    <td>
                                        <CalculationParameter v-model="parameterList[4].number" />
                                    </td>
                                    <td>
                                        <CalculationParameter v-model="parameterList[10].number" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>К<sub>ш</sub></th>
                                    <td>
                                        <CalculationParameter v-model="parameterList[5].number" />
                                    </td>
                                    <td>
                                        <CalculationParameter v-model="parameterList[11].number" />
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>ЗТР</th>
                                    <td>{{ ZTR_basic }}</td>
                                    <td>{{ ZTR_new }}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div class="container p-0">
                    <div class="row row-cols-2 mx-4 mb-4 g-4">
                        <div class="col fs-5 text-wrap">
                            <div>Коэффициент эксплуатационно-технического уровня</div>
                        </div>
                        <div class="col fs-5">
                            <div>К<sub>эту</sub> = {{ ETU }} руб.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column m-4 shadow rounded-3" id="scrollspyHeading2">
                <div class="row p-4">
                    <div class="table-responsive fs-5">
                        <table class="table table-bordered">
                            <thead class="table-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in rows" :key="index">
                                    <td>{{ row.name }}</td>
                                    <td>{{ row.email }}</td>
                                    <td><calculation-parameter v-model="row.number" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button class="btn btn-primary fs-5 m-4 me-auto w-auto" @click="addRow">Добавить сроку</button>
            </div>
        </div>
    </div>
</template>