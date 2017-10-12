import Vue from 'vue';
import Vuex from 'vuex';

import portfoliosModule from './portfolios-module/portfolios-module';

Vue.use(Vuex);

export const vuexStore = new Vuex.Store({
    modules: {
        portfolios: portfoliosModule
    }
});