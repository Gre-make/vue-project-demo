import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import NaiveUl from 'naive-ui'
// import 'element-plus'
import 'naive-ui'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

// app.use(ElementPlus)
app.use(NaiveUl)
app.use(router)
app.mount('#app')
