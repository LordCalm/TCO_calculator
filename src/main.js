import { createApp } from 'vue'
import App from './App.vue'

import './assets/bootstrap.css'
import './bootstrap.js'
import './assets/calc.css'
import './download-csv.js'
import VuePapaParse from 'vue-papa-parse'

const app = createApp(App)
app.use(VuePapaParse)
app.mount('#app')
