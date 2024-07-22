import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import CatalogView from '@/views/CatalogView.vue'

import CheckoutView from '../views/CheckoutView.vue'
import ProcessedView from '../views/ProcessedView.vue'
import ProfileView from '../views/ProfileView.vue'
import ReserveView from '../views/ReserveView.vue'
import FeedbackView from '../views/FeedbackView.vue'
import QrPayView from '../views/QrPayView.vue'
import VacationView from '../views/VacationView.vue'
import ShopView from '../views/ShopView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import CartView from '../views/CartView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogView
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: CheckoutView
    },
    {
        path: '/processed',
        name: 'processed',
        component: ProcessedView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    },
    {
        path: '/reserve',
        name: 'reserve',
        component: ReserveView
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: FeedbackView
    },
    {
        path: '/qrpay',
        name: 'qrpay',
        component: QrPayView
    },
    {
        path: '/vacation',
        name: 'vacation',
        component: VacationView
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: FavoritesView
    },
    {
        path: '/shop/:code',
        name: 'shop',
        component: ShopView
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {el: to.hash}
        } else {
            return { top: 0 }
        }
    }
})

export default router
