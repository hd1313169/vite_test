// 外部
import './assets/main.css'
import "./assets/all.scss";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// --axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// --vue loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// 內部 src
import App from './App.vue'
import router from './router'

// 程式碼、引用
const app = createApp(App);

app.use(createPinia());
app.use(router);

// axios
app.use(VueAxios, axios)

// --vue loading
app.component('VueLoading', Loading)

app.mount('#app')
