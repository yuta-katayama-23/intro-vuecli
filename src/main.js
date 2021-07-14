import Vue from "vue"
import App from "./App.vue"

import axios from "axios";

import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/main.css";

Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-80ec1/databases/(default)/documents";

const interceptersRequest = axios.interceptors.request.use(
  config => {
    console.log("interceptors request", config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const interceptersResponse = axios.interceptors.response.use(
  response => {
    console.log("interceptors response", response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(interceptersRequest);
axios.interceptors.response.eject(interceptersResponse);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")

