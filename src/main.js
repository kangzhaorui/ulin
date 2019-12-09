// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store'
import App from './App';
import axios from 'axios';
import qs  from 'qs'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios=axios;
Vue.prototype.$qs=qs;
Vue.config.productionTip = false
Vue.use(ElementUI);

import 'lib-flexible/flexible.js';
import '@/styles/glabal.scss';
import '@/styles/myEleStyle.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
