import Vue from 'vue';
import Vuex from 'vuex';

import designsModule from './designs-module/designs-module';

Vue.use(Vuex);

export const vuexStore = new Vuex.Store({
    modules: {
        designs: designsModule
    }
});