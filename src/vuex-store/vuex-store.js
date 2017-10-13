import Vue from 'vue';
import Vuex from 'vuex';

import portfoliosModule from './portfolios-module/portfolios-module';
import analyticsModule from './analytics-module/analytics-module';

Vue.use(Vuex);

export const vuexStore = new Vuex.Store({
    modules: {
        portfolios: portfoliosModule,
        analytics: analyticsModule,
    }
});