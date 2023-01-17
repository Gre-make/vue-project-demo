import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import NaiveUl from 'naive-ui'
import '../node_modules/element-plus/dist/index.css'
import 'naive-ui'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)

app.use(ElementPlus)
app.use(NaiveUl)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
