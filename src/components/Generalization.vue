<script>
import CalculationParameter from './CalculationParameter.vue';
import CanvasJSChart from '../assets/CanvasJSVueComponent.vue';
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
                { name: 'Удобство работы', weight: 0.2, base: '0', new: '0' },
                { name: 'Надежность', weight: 0.2, base: '0', new: '0' },
                { name: 'Функциональные возможности', weight: 0.2, base: '0', new: '0' },
                { name: 'Временная экономичность', weight: 0.2, base: '0', new: '0' },
                { name: 'Время обучения персонала', weight: 0.2, base: '0', new: '0' },
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
        },

        Quality_Score_New() {
            let totalWeight = 0;
            let sum = 0;
            for (let row of this.rows) {
                const xi = parseFloat(row.new);
                if (!isNaN(xi)) {
                    sum += xi * row.weight;
                    totalWeight += row.weight;
                }
            }
            return (sum / totalWeight).toFixed(2);
        },
        Quality_Score_Base() {
            let totalWeight = 0.;
            let sum = 0.;
            for (let row of this.rows) {
                const xi = parseFloat(row.base);
                if (!isNaN(xi)) {
                    sum += xi * row.weight;
                    totalWeight += row.weight;
                }
            }
            return (sum / totalWeight).toFixed(2);
        },
    },
    methods: {
        Download_csv() {
            let array = [["Балльно-индексный метод", "Не меняйте порядок ячеек, если хотите продолжать редактирование данных в веб-приложении"],];
            array.push(["Показатель качества", "Весовой коэффициент", "Разрабатываемый проект", "Базовый вариант"]);
            for (let row of this.rows) {
                array.push([row.name, row.weight, row.new, row.base]);
            }
            array.push(["Комплексный показатель качества", "", this.Quality_Score_New, this.Quality_Score_Base]);
            exportToCsv("Point_index_method", array);
        },

        onChange() {
            this.dropzoneFile = this.$refs.file.files[0];
            let ext = '?';
            let self = this;
            self.rows = [];
            let parts = this.dropzoneFile.name.split('.');
            if (parts.length > 1) ext = parts.pop();
            if (ext == "csv") {
                this.$papa.parse(this.dropzoneFile, {
                    header: false,
                    dynamicTyping: true,
                    complete: function (results) {
                        // Get the starting and ending indices for iteration
                        const startIndex = 2; // Index of the 3rd row
                        const endIndex = results.data.length - 2; // Index of the penultimate row

                        // Iterate over each row within the specified range
                        for (let i = startIndex; i < endIndex; i++) {
                            const row = results.data[i];
                            self.rows.push({ name: row[0], weight: row[1], new: row[2], base: row[3] });
                        }
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
            this.rows.push({ name: '', weight: '0', new: '0', base: '0' });
        },
        deleteRow(index) {
            this.rows.splice(index, 1);
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
                            <a class="nav-link fs-5 px-2" href="#scrollspyHeading2">Балльно-индексный метод</a>
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
                <div class="row collapse m-1" id="collapseCapitalExpenditures">
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
                <div class="row h2 m-4">
                    Балльно-индексный метод оценки коэффициента экономической эффективности разработки
                </div>
                <button class="btn btn-primary fs-5 m-4 me-auto w-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                    Показать пояснения
                </button>
                <div class="row collapse m-1" id="collapse1">
                    <div class="col p-4 fs-5 text-wrap">
                        Обобщающий индекс эксплуатационно-технического уровня I<sub>эту</sub> (комплексный показатель
                        качества проекта по группе показателей), рассчитываемый по следующей формуле<br>
                        <br>
                        I<sub>эту</sub> = Σ b<sub>i</sub> X<sub>i</sub>,<br>
                        где b<sub>i</sub> − коэффициент весомости i-го показателя;<br>
                        X<sub>i</sub> – относительный показатель качества, устанавливаемый экспертным путем по выбранной
                        шкале оценивания.<br>
                        Для оценки I<sub>эту</sub> можно использовать пятибалльную шкалу оценивания.<br>
                        Далее следует рассчитать коэффициент технического уровня по формуле<br>
                        <br>
                        К<sub>т</sub> = I<sub>этупр</sub> / I<sub>этубаз</sub><br>
                        <br>
                        Теперь для определения экономического эффекта необходимо рассчитать приведенные затраты
                        З<sub>i</sub> на единицу работ, выполняемых по базовому и разрабатываемому вариантам, по формуле<br>
                        <br>
                        З<sub>i</sub> = C<sub>i</sub> + Е<sub>н</sub> ∙ З<sub>ппi</sub>,<br>
                        <br>
                        где C<sub>i</sub>− текущие эксплуатационные затраты единицы i-го вида работ, руб.;<br>
                        З<sub>ппi</sub>– суммарные затраты, связанные с внедрением проекта;<br>
                        Е<sub>н</sub> = 0.33 − нормативный коэффициент экономической эффективности.<br>
                        Экономический эффект от использования разрабатываемой системы определяется по формуле<br>
                        <br>
                        Э = (З<sub>баз</sub> ∙ К<sub>т</sub> - З<sub>пр</sub>) ∙ V,<br>
                        <br>
                        где З<sub>баз</sub>, З<sub>пр</sub> – приведенные затраты на единицу работ, выполняемых с помощью
                        базового и проектируемого вариантов процесса обработки информации;<br>
                        К<sub>Т</sub> − коэффициент эксплуатационно-технической эквивалентности;<br>
                        V − объем работ, выполняемых с помощью разрабатываемого проекта, натуральные единицы.<br>
                        Кроме того, необходимо вычислить срок окупаемости затрат на разработку проекта по следующей
                        формуле<br>
                        <br>
                        Т<sub>ок</sub> = З<sub>пп</sub> / Э,<br>
                        <br>
                        где З<sub>пп</sub>− единовременные затраты на разработку проекта, руб.;<br>
                        Э − годовая эффективность, руб.<br>
                        Фактический коэффициент экономической эффективности разработки вычисляется по следующей формуле<br>
                        <br>
                        Е<sub>ф</sub> = 1 / Т<sub>ок</sub>,<br>
                        <br>
                        Если Е<sub>ф</sub> > Е<sub>н</sub> = 0.33, то можно сделать вывод об эффективности разработки и
                        внедрения программного продукта. Другими словами, эффект от использования ИС окупает затраты,
                        связанные с проектированием, внедрением и эксплуатацией.
                    </div>
                </div>
                <div class="row p-4">
                    <div class="table-responsive fs-5">
                        <table class="table table-bordered">
                            <thead class="table-light">
                                <tr>
                                    <th class="align-middle">Показатель качества</th>
                                    <th class="align-middle">Весовой коэффициент</th>
                                    <td class="p-0" colspan="2">
                                        <table class="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <th class="text-center" colspan="2">Оценка</th>
                                                </tr>
                                                <tr>
                                                    <th>Разрабатываемый проект</th>
                                                    <th>Базовый вариант</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in rows" :key="index">
                                    <td><calculation-parameter v-model="row.name" /></td>
                                    <td><calculation-parameter v-model="row.weight" /></td>
                                    <td><calculation-parameter v-model="row.new" /></td>
                                    <td><calculation-parameter v-model="row.base" /></td>
                                    <td>
                                        <button type="button" class="btn-close" aria-label="Close"
                                            @click="deleteRow(index)"></button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="2">Комплексный показатель качества</th>
                                    <td>{{ Quality_Score_New }}</td>
                                    <td>{{ Quality_Score_Base }}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <button class="btn btn-primary fs-5 m-4 me-auto w-auto" @click="addRow">Добавить строку</button>
                <button class="btn btn-primary fs-5 m-4 me-auto w-auto" type="button" v-on:click="Download_csv"> Скачать
                    таблицу
                </button>
                <div class="col align-content-center m-4 p-2">
                    <div class="dropzone border rounded-3 shadow bg-light d-flex flex-column align-items-center"
                        @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent
                        @drop.prevent="drop" v-bind:class="{ 'active-dropzone': active }">
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
</style>