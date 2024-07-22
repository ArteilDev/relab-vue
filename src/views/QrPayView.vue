<template>
    <div class="container">
        <router-link to="/" class="main-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke="#373737"
                    stroke-linecap="round" />
            </svg>
            Главная
        </router-link>
    </div>
    <section class="section section-reserve container">
        <h2 class="section-title">Оплата столика по QR коду</h2>
        <div class="qr-pay">
            <div class="qr-pay-left">
                <p v-if="payComplete" class="qr-pay-left-success">Ваш счет успешно оплачен!</p>
                <div>
                    <label>Выберете заведение</label>
                    <multiselect class="form-select mt-3" v-model="selectRests" :options="optionRests" :canDeselect="false"></multiselect>
                </div>
                <div>
                    <label>Номер столика</label>
                    <multiselect class="form-select mt-3" v-model="selectTable" :options="optionTable" :canDeselect="false"></multiselect>
                </div>
                <div class="qr-pay-left-order">
                    <label>Ваш заказ</label>
                    <div class="qr-pay-left-order__body">
                        <div class="qr-pay-left-order__body__item">
                            <div class="d-flex flex-column">
                                <span>Татарский рибай</span>
                                <span>740 гр - 1 шт</span>
                            </div>
                            <p>200 ₽</p>
                        </div>
                        <div class="qr-pay-left-order__body__item">
                            <div class="d-flex flex-column">
                                <span>Чай татарский</span>
                                <span>1 шт</span>
                            </div>
                            <p>200 ₽</p>
                        </div>
                        <div class="qr-pay-left-order__body__item qr-pay-left-order__body__item_total">
                            <div class="d-flex">
                                <span>Скидка по промокоду</span>
                                <p>-60 ₽</p>
                            </div>
                            <div class="d-flex">
                                <span>Доставка</span>
                                <p></p>
                            </div>
                        </div>
                        <div class="qr-pay-left-order__body__item">
                            <p>К оплате</p>
                            <p>140 ₽</p>
                        </div>
                    </div>
                    <button v-if="!payComplete" class="btn btn_red" @click="payComplete = true">Оплатить</button>
                </div>
            </div>
            <div class="qr-pay-right"></div>
        </div>
    </section>
</template>
<script>
import Multiselect from '@vueform/multiselect'
import axios from 'axios'
import api from '@/api'
export default {
    data() {
        return {
            optionRests: [],
            optionTable: [
                0,
                1,
                2,
                3,
                4,
                5
            ],
            selectRests: null,
            selectTable: 0,
            payComplete: false
        }
    },

    components: {
        Multiselect 
    },

    methods: {
        // Запрос на получение данных по ресторанам
        fecthRests() {
            axios
            .get(api + "/shops/")
            .then((response) => {
                let rest_name = []
                for(let i = 0; i < response.data.length; i++) {
                    rest_name.push(response.data[i].name)
                }

                this.optionRests = rest_name
                this.selectRests = rest_name[0]
            })
            .catch((error) => {
                console.log(error.response);
            });
        },
    },

    created() {
        this.fecthRests()
    }
}
</script>