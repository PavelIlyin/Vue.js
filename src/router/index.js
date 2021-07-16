import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'StartPage',
            component: () => import("../page/PageDashboard"),

        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import("../page/PageDashboard"),

        },
        {
            path: '/dashboard/:category',
            name: 'dashboardCategory',
            component: () => import("../page/PageDashboard"),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import("../page/PageAbout"),
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import("../page/Page404"),
        }
    ]
})