// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// vuex
import { vuexStore } from './vuex-store/vuex-store';

// vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

// Bootstrap Vue.js
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

// Firebase and VueFire
var VueFire = require('vuefire')
var firebase = require('firebase')
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store: vuexStore,
    router,
    template: '<App/>',
    components: { App }
})