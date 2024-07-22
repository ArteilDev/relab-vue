<template>
    <div class="modal-wrapper" id="modal-login" :class="{ active : modalShow }">
        <div class="modal-login-wrapper">
            <div class="modal-login">
                <div class="modal-close" @click="hideModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M1 1L17 17" stroke="#1C1C1C" stroke-linecap="round"/>
                        <path d="M17 1L0.999999 17" stroke="#1C1C1C" stroke-linecap="round"/>
                    </svg>
                </div>
                <div v-if="!verInputCode" class="modal-login-body">
                    <div class="modal-login-title ">
                        Здравствуйте, авторизируйтесь
                    </div>
                    <p>Так вы сможете получать баллы и быстрее оформлять заказы</p>
                    <div class="input-login-wrapper">
                        <input type="tel" class="input input_phone" v-model="phone" placeholder="+7 000 000 00 00" v-mask="'+7 ### ### ## ##'">
                        <button class="btn_login" @click="setNumberPhone">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23" fill="none">
                                <path d="M1 1.94824L11 11.8923L1 21.8364" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <span>Указывая номер телефона вы принимаете <a href="/Политика_обработки_персональных_данных.pdf">Политику обработки персональных данных</a></span>
                </div>
                <div v-else class="modal-login-body modal-login-body_code">
                    <div class="modal-login-title">
                        Введите код
                    </div>
                    <p>Мы отправили его на номер {{ phone }}</p>
                    <div class="input-login-wrapper">
                        <input type="tel" class="input input_code" v-model="verCode" placeholder="0000" v-mask="'####'">
                        <div v-if="verCodeError" class="input_code__error">Неверный код!</div>
                    </div>
                    <div class="modal-login-buttons">
                        <button @click="setNumberPhone">Повторить SMS</button>
                        <button @click="this.verInputCode = false">Изменить номер</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import api from '@/api'

export default {
    data() {
        return {
            phone: null,
            verCode: null,
            verInputCode: false,
            verCodeError: false
        }
    },

    props: {
        modalShow: {
            type: Boolean,
            default: false
        },
    },

    methods: {
        setNumberPhone() {
            if (this.phone !== "") {
                axios
                .post(api + "/auth-query/", {
                    phone: this.phone,
                })
                .then((response) => {
                    this.verInputCode = true;
                })
                .catch((error) => {
                    console.log(error.response);
                });
            }
        },

        validateCode() {
            const phone = this.phone.replace(/\s+/g, '').slice(1)
            axios
            .post(api + "/confirm-auth-query/", {
                phone: phone,
                code: this.verCode,
            })
            .then((response) => {
                this.$emit('auth', response.data.token)
                this.verCodeError = false
            })
            .catch((error) => {
                console.log(error.response);
                this.verCodeError = true
            });
        },

        hideModal() {
            this.$emit('close')
        },
    },

    watch: {
        verCode(newValue) {
            if (newValue.length === 4) {
                this.validateCode()
            }
        }
    }
}
</script>