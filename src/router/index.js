import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Designs from '@/components/Designs'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }, {
        path: '/designs',
        name: 'Designs',
        component: Designs
    }]
})