import Vue from "vue";
import App from "./App.vue";
import store from './store'
import context from './plugins/ModalContext'
import modal from './plugins/ModalWindow'
import router from "./router"
import vuetify from './plugins/vuetify/index';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

Vue.use(Donut);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(context)
Vue.use(modal)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
  vuetify,

}).$mount("#app");
