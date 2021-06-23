import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
Vue.mixin({
  created() {
    console.log("global mixin");
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
