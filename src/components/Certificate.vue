<template>
    <div class="stores-subscription subscription">
        <div class="subscription-main">
            <h2 class="subscription-main__title">{{ certificate.name }}</h2>
            <ul>
                <li v-for="description in certificate.description">{{ description }}</li>
            </ul>
        </div>
        <div class="subscription-location">
            <div class="d-flex">
                <div class="d-flex flex-column">
                    <span>Город</span>
                    <p style="text-transform: uppercase">Казань</p>
                </div>
                <div class="d-flex flex-column">
                    <span>Место</span>
                    <p>CiCheTi</p>
                </div>
            </div>
        </div>
        <div class="subscription-rules">
            <div class="d-flex flex-column">
                <span>Правила</span>
                <p>1 день - {{ certificate.max_usage_per_day }} чашка любого кофе</p>
            </div>
        </div>
        <div class="subscription-price">
            <div class="d-flex">
                <div class="d-flex flex-column">
                    <span>Срок</span>
                    <p>{{ certificate.duration_days }} дней</p>
                </div>
                <div class="d-flex flex-column">
                    <span>Стоимость</span>
                    <p>{{ certificate.price }} ₽</p>
                </div>
            </div>
        </div>
        <div class="subscription-button">
            <a @click="buyCerificate()">Купить абонемент</a>
        </div>
        <div class="subscription-image"></div>
    </div>
    <modal-login :modalShow="modalLoginShow" @close="modalLoginHide" @auth="userAuth"/>
    <modal-alerts :modalShow="modalAlertsShow" @close="modalAlertsHide">Ваша заявка на покупку <span>кофейного абонемента</span>, успешно отправлена!</modal-alerts>
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
            isAuth: false,
            modalAlertsShow: false
        }
    },

    props: {
        certificate: {
            type: Object,
            default: {}
        }
    },

    components: {
        ModalLogin, ModalAlerts
    },

    methods: {
        buyCerificate() {
            let token = localStorage.getItem('token')

            if(token !== null) {
                this.sendBuyRequest()
            } else {
                this.modalLoginShow = true
            }
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

        async sendBuyRequest() {
            try {
                const response = await axios.post(api + "/simple-order/",
                {
                    phone: localStorage.getItem('phone'),
                    name: localStorage.getItem('first_name'),
                    comment: 'Кофейный абонемент'
                },
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token'),
                    }
                })
                
                if(response.data.success) {
                    this.modalAlertsShow = true
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
    },
}
</script>
