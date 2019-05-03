import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import uiUtils from './ui-utils.js'
import './assets/scss/margin.scss'
import './assets/scss/padding.scss'
import VueAgile from 'vue-agile'
import 'vue-awesome/icons'
import VueAwesome from 'vue-awesome/components/Icon';
import EasySlider from 'vue-easy-slider'
import Multiselect from 'vue-multiselect'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(VueAgile)
Vue.use(EasySlider)
Vue.use(Toasted, {
  duration: 9000,
  action: {
    text: '확인',
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    }
  },
  icon: 'Wisely',
})
Vue.component('v-icon', VueAwesome)
Vue.component('multiselect', Multiselect)

for(const key in uiUtils) {
  Vue.component(key, uiUtils[key]);
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
