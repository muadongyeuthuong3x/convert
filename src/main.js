import Vue from 'vue'
import App from './App.vue'
import './assets/javascript'
import LoadScript from 'vue-plugin-load-script';
 
Vue.use(LoadScript);

Vue.loadScript("https://cdn.tgdd.vn/v2015/Scripts/desktop/V5/home.min.v202012031000.js")
    .then(() => {
      // Script is loaded, do something
    })
    .catch(() => {
      // Failed to fetch script
    });




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
