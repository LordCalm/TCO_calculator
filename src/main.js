import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/bootstrap.css'
import './bootstrap.js'
import './download-csv.js'
import VuePapaParse from 'vue-papa-parse'
import CanvasJSChart from '@canvasjs/vue-charts';

import '../node_modules/font-awesome/css/font-awesome.min.css';



let app = createApp(App)
app.use(router)
app.use(VuePapaParse)
app.use(CanvasJSChart); // install the CanvasJS Vuejs Chart Plugin
app.mount('#app')
