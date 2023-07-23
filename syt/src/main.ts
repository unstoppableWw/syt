import { createApp } from 'vue'
import '@/style/reset.scss'
import App from './App.vue'
import HospitalTop from '@/components/hospital_top/index.vue';
import HosiptalBottom from '@/components/hospital_bottom/index.vue';
import Login from '@/components/login/index.vue';

import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import pinia from '@/store'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HosiptalBottom)
app.component('Login', Login)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(pinia)
app.mount('#app')
