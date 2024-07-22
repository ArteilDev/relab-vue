<template>
    <div class="container">
        <a href="/" class="main-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke="#373737"
                    stroke-linecap="round" />
            </svg>
            Главная
        </a>
    </div>
    <section class="section section-cart container">
        <h2 class="section-title">Корзина</h2>
        
        <div class="cart-wrapper" v-if="cart">
            <div class="cart-list">
                <div class="cart-product" v-for="item in cart">
                    <div class="cart-product__img" :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }"></div>
                    <div class="cart-product-info">
                        <div class="cart-product-info__title">{{ item.name }}</div>
                        <div class="cart-product-info-footer">
                            <div class="cart-product-info-footer__price">{{ item.price * item.count }} ₽</div>
                            <div class="cart-product-info-footer__size">{{ item.size }}</div>
                            <div class="cart-product-info-footer-count">
                                <span>{{ item.count }}</span>
                                <div class="cart-product-info-footer-count__btn">
                                    <span @click="cartController(item.id, item.size, 'less')">
                                        -
                                    </span>
                                    <span class="line">
                                    </span>
                                    <span @click="cartController(item.id, item.size, 'add')">
                                        +
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cart-result">
                <div class="cart-result-points">
                    Баллы Wollzy
                    <span>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L7.70711 6.29289C7.31658 6.68342 6.68342 6.68342 6.29289 6.29289L1 1" stroke="white" stroke-linecap="round"/>
                        </svg>
                    </span>
                </div>
                <div class="cart-result-price">
                    <span>К оплате</span>
                    <span>{{ price }} ₽</span>
                </div>
                <button class="btn btn_red" @click="buyMerch()">Оформить заказ</button>
            </div>
        </div>
        <div v-else class="cart-empty">
            Корзина пуста
        </div>
    </section>
    <modal-login :modalShow="modalLoginShow" @close="modalLoginHide" @auth="userAuth"/>
    <modal-alerts :modalShow="modalAlertsShow" @close="modalAlertsHide">Ваша заявка на покупку, успешно отправлена!</modal-alerts>
</template>
<script>
import axios from 'axios'
import api from '@/api'

import ModalLogin from "@/components/modals/ModalLogin.vue";
import ModalAlerts from '@/components/modals/ModalAlerts.vue';

export default {
    data() {
        return {
            modalLoginShow: false,
            modalAlertsShow: false,
            cart: null,
            price: 0,
        }
    },

    components: {
        ModalLogin, ModalAlerts
    },

    mounted() {
        if(localStorage.getItem('cart')) {
            this.cart = JSON.parse(localStorage.getItem('cart'));

            this.calcPrice()
        } 
    },

    methods: {
        cartController(id, size, type) {
            const array = this.cart

            const elem = array.find((item, index) => item.id === id && item.size === size);
            const index = array.findIndex((item, index) => item.id === id && item.size === size);
            if(type === 'add') {
                elem.count ++
                this.calcPrice()
            } else {
                if(elem.count > 1) {
                    elem.count --
                    this.calcPrice()
                } else {
                    array.splice(index, 1)
                    this.calcPrice()
                }
            }

            if(array.length === 0) {
                localStorage.removeItem('cart')
                this.cart = null
            } else {
                localStorage.setItem('cart', JSON.stringify(array));
            }
        },

        calcPrice() {
            this.price = 0

            for(let i = 0; i < this.cart.length; i++) {
                this.price += this.cart[i].price * this.cart[i].count
            }
        },

        modalLoginHide() {
            this.modalLoginShow = false
        },

        async userAuth(token) {
            try {
                const response = await axios.get(api + "/profile/", {
                    headers: {
                    Authorization: 'Token ' + token
                    }
                })
                localStorage.setItem('token', token);
                localStorage.setItem('phone', response.data.user.phone);
                localStorage.setItem('first_name', response.data.user.first_name);
                this.modalLoginShow = false
                this.sendBuyRequest()
            } catch(err) { // Если есть ошибка
                alert(err)
            }
        },

        buyMerch() {
            let products = ''

            for(let i = 0; i < this.cart.length; i++) {
                products += `
${this.cart[i].name},
Размер: ${this.cart[i].size},
Кол-во: ${this.cart[i].count};
`
            }

            let token = localStorage.getItem('token')

            if(token !== null) {
                this.sendBuyRequest(products)
            } else {
                this.modalLoginShow = true
            }
        },

        async sendBuyRequest(products) {
            try {
                const response = await axios.post(api + "/simple-order/",
                {
                    phone: localStorage.getItem('phone'),
                    name: localStorage.getItem('first_name'),
                    comment: products
                },
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token'),
                    }
                })
                if(response.data.success) {
                    this.modalAlertsShow = true
                    localStorage.removeItem('cart')
                    this.cart = null
                    this.price = 0
                }
            } catch(err) { // Если есть ошибка
                alert(err)
            }
        },

        modalLoginHide() {
            this.modalLoginShow = false
        },

        modalAlertsHide() {
            this.modalAlertsShow = false
        }
    }
}
</script>