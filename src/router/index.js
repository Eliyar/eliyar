import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Designs from '@/components/Designs'
import SliderModal from '@/components/SliderModal'
import Contact from '@/components/Contact'
import NotFound from '@/components/NotFound'

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
    }, {
        path: '/designs/:projectID/attachment/:assetID',
        name: 'SliderModal',
        component: SliderModal
    }, {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }, {
        path: '/404',
        alias: '*',
        name: 'NotFound',
        component: NotFound
    }]
})