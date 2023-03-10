import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import VueRouter from 'vue-router'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

Vue.use(vuetify)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
