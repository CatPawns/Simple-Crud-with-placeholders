const { createApp } = require('vue');
import App from './App.vue';
import Balerts from "./components/Balerts.vue"
import toast from "./components/toast.vue"
import EnviromentSelector from "./components/EnviromentSelector.vue"

//import listItem from "./components/listItem.vue";
import { BAlert, BToast ,BootstrapVue } from 'bootstrap-vue-3'
const app = createApp(App)
app.component('b-alert', BAlert)
app.component('EnviSelector', EnviromentSelector)

app.component('Balerts-js', Balerts)
app.component('BAlert', BAlert)
app.component("toast" ,toast)
.mount('#app');


