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
                    <h3 class="offcanvas-title" id="offcanvasNavbar2Label">Методика ЭТУ"</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрывать"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav nav-pills justify-content-end flex-grow-1 pe-3 fs-5" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link fs-5 px-2 active" aria-current="page" href="#scrollspyHeading1">Проектные
                                затраты</a>
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
            </div>
            <div class="d-flex flex-column m-4 shadow rounded-3" id="scrollspyHeading2">
            </div>
        </div>
    </div>
</template>