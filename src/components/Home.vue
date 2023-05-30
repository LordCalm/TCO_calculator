<script>
export default {
  components: {
  },
  data() {
    return {

    }
  }
}
</script>
<template>
  <div class="container-fluid bg-light">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 p-2 text-center">
          <router-link to="/" class="text-dark text-decoration-none fs-4 title">Технико-экономическое
            обоснование</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-auto row-cols-md-2 mt-5 g-4">
      <div class="col">
        <div class="card text-center shadow">
          <div class="card-body">
            <h5 class="card-title">Методика совокупной стоимости владения</h5>
            <p class="card-text text-wrap">Методика совокупной стоимости владения позволяет оценить все финансовые
              затраты, связанные с приобретением и использованием определенного объекта или продукта за определенный
              период времени.</p>
            <router-link to="/TCO" class="btn btn-primary fs-5 me-auto w-auto">
              <span>ТСО</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-center shadow">
          <div class="card-body">
            <h5 class="card-title">Методика обобщающей характеристики эксплуатационно-технического уровня системы</h5>
            <p class="card-text text-wrap">Методика обобщающей характеристики эксплуатационно-технического уровня системы
              позволяет оценить и анализировать комплексные аспекты функциональности, надежности и эффективности системы в
              целом.</p>
            <router-link to="/Gen" class="btn btn-primary fs-5 me-auto w-auto">
              <span>ЭТУ</span>
            </router-link>
          </div>
        </div>
    </div>
  </div>
</div></template>                              