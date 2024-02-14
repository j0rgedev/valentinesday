import './assets/style.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-pink/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueConfetti from 'vue-confetti'

import PrimeVue from 'primevue/config';
import Button from "primevue/button";

import App from './App.vue'
import router from './router'
import InputText from "primevue/inputtext";
import FloatLabel from 'primevue/floatlabel';

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(VueConfetti)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.use(router)

app.mount('#app')
