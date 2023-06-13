<script>
import CalculationParameter from './CalculationParameter.vue';
defineProps({
    salary: Number,
    allowance: Number,
    district: Number,
})
defineEmits(['update:firstName', 'update:lastName'])
export default {
    components: {
        CalculationParameter
    },
    computed: {
        // District_coefficient() {
        //     return Math.round(Number(this.parameterList[0].number) * Number(this.parameterList[1].number));
        // },
        // All_income() {
        //     this.parameterList[3].number =
        //         Math.round(Number(this.parameterList[0].number * (1 + Number(this.parameterList[2].number))) +
        //             Number(Number(this.parameterList[0].number) * Number(this.parameterList[1].number)));
        //     return this.parameterList[3].number;
        // },
        // Income_tax() {
        //     this.parameterList[4].number = Math.round(Number(this.parameterList[3].number) * 0.13);
        //     return this.parameterList[4].number;
        // },
        // Fund_allocations() {
        //     this.parameterList[5].number = Math.round(Number(this.parameterList[3].number) * 0.3);
        //     return this.parameterList[5].number;
        // },
        // Salary() {
        //     this.parameterList[6].number =
        //         Math.round(Number(this.parameterList[3].number) +
        //             Number(this.parameterList[4].number) +
        //             Number(this.parameterList[5].number));
        //     return this.parameterList[6].number;
        // },
    }
};
</script>

<template>
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
</template>
