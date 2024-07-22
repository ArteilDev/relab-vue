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
    <div class="section section-reserve container">
        <h2 class="section-title">Забронировать стол</h2>
        <div class="reserve">
            <!-- <div class="reserve-available">
                <p>Доступные для брони столы</p>
                <p>{{ available_reservation }} из {{ reservation_limit }}</p>
                <div class="reserve-available-progressbar">
                    <span class="reserve-available-progressbar__item" :style="'width: calc(' + available_reservation / reservation_limit + ' * 100%);'"></span>
                </div> 
                <span>Бронь на сайте осуществляется минимум за час до посещения ресторана.</span>
                <span>Стол бронируется на 2 часа, в случае задержки более чем на 20 минут бронь аннулируется.</span>
            </div> -->

            <div class="reserve-rests">
                <div class="toggle-switch toggle-switch_rests">
                    <button
                        class="toggle-switch__button"
                        :class="toggleSwitch === 'ichigo'? 'active' : ''"
                        @click="toggleSwitch = 'ichigo'"
                        >
                        Ichi-Go Ichi-E
                    </button>
                    <button
                        class="toggle-switch__button"
                        :class="toggleSwitch === 'relab'? 'active' : ''"
                        @click="toggleSwitch = 'relab'"
                    >
                        Relab Cocktail Bar
                    </button>
                    <button
                        class="toggle-switch__button"
                        :class="toggleSwitch === 'paloma'? 'active' : ''"
                        @click="toggleSwitch = 'paloma'"
                    >
                        Paloma Cantina
                    </button>
                    <button
                        class="toggle-switch__button"
                        :class="toggleSwitch === 'cicheti'? 'active' : ''"
                        @click="toggleSwitch = 'cicheti'"
                    >
                        ChiCheTi
                    </button>
                </div>
            </div>
            <iframe v-if="toggleSwitch === 'ichigo'" class="reserve-iframe" src="https://www.restoplace.ws/?address=fae8be17094c7c30b583" frameborder="0" style="width: 100%; height: 700px;"></iframe>
            <iframe v-if="toggleSwitch === 'relab'" class="reserve-iframe" src="https://www.restoplace.ws/?address=f88ff7e7794b0273b1b7" frameborder="0" style="width: 100%; height: 700px;"></iframe>
            <iframe v-if="toggleSwitch === 'paloma'" class="reserve-iframe" src="https://www.restoplace.ws/?address=f44e1f1f58d1f56745af" frameborder="0" style="width: 100%; height: 700px;"></iframe>
            <iframe v-if="toggleSwitch === 'cicheti'" class="reserve-iframe" src="https://www.restoplace.ws/?address=a31d0ed980695aa58538" frameborder="0" style="width: 100%; height: 700px;"></iframe>
            <!-- <label class="reserve-label">Дата посещения</label>
            <div class="reserve-date">
                <vue-date-picker
                    class="form-select mt-3"
                    v-model="reserveDate"
                    model-type="dd.MM.yyyy"
                    locale="ru"
                    :format="format"
                    :min-date="new Date()"
                    type="date"
                    cancelText=""
                    selectText="Выбрать"
                    placeholder="Выбрать дату посещения"
                    month-name-format="long"
                    :enable-time-picker="false"
                    auto-apply
                    required
                />
            </div>
            <div v-if="!can_be_reserved" class="reserve-error">
                Свободных столов для брони нет. Пожалуйста, выберите другую дату или время.
            </div>
            <div class="reserve-time">
                <multiselect class="form-select mt-3" v-model="reserveTime" :options="optionTime" :canDeselect="false"></multiselect>
            </div>
            <label class="reserve-label" for="table">Выбрать стол</label>
            <div class="reserve-tables">
                <div class="reserve-tables__item radio-wrapper">
                    <input class="radio-1" type="radio" name="table" id="table-1" @click="reserveData.table = 'На 2 чел'" checked :disabled="!can_be_reserved">
                    <label for="table-1" class="option option-1">
                        <div class="dot"></div>
                        <span>На 2 чел</span>
                    </label>
                </div>
                <div class="reserve-tables__item radio-wrapper">
                    <input class="radio-2" type="radio" name="table" id="table-2" @click="reserveData.table = 'На 4 чел'" :disabled="!can_be_reserved">
                    <label for="table-2" class="option option-2">
                        <div class="dot"></div>
                        <span>На 4 чел</span>
                    </label>
                </div>
                <div class="reserve-tables__item radio-wrapper">
                    <input class="radio-3" type="radio" name="table" id="table-3" @click="reserveData.table = 'На 6 чел'" :disabled="!can_be_reserved">
                    <label for="table-3" class="option option-3">
                        <div class="dot"></div>
                        <span>На 6 чел</span>
                    </label>
                </div>
                <div class="reserve-tables__item radio-wrapper">
                    <input class="radio-4" type="radio" name="table" id="table-4" @click="reserveData.table = 'На 8 чел'" :disabled="!can_be_reserved">
                    <label for="table-4" class="option option-4">
                        <div class="dot"></div>
                        <span>На 8 чел</span>
                    </label>
                </div>
                <div class="reserve-tables__item radio-wrapper">
                    <input class="radio-5" type="radio" name="table" id="table-5" @click="reserveData.table = 'У нас большая компания'" :disabled="!can_be_reserved">
                    <label for="table-5" class="option option-5">
                        <div class="dot"></div>
                        <span>У нас большая компания</span>
                    </label>
                </div>
            </div>
            <div class="reserve-name">
                <label class="reserve-label" for="first_name">Имя</label>
                <input class="input" type="text" name="first_name" id="first_name" v-model="reserveData.first_name" placeholder="Мария" required :disabled="!can_be_reserved">
            </div>
            <div class="reserve-surname">
                <label class="reserve-label" for="last_name">Фамилия</label>
                <input class="input" type="text" name="last_name" id="last_name" v-model="reserveData.last_name" placeholder="Иванова" required :disabled="!can_be_reserved">
            </div>
            <div class="reserve-phone">
                <label class="reserve-label" for="phone">Телефон</label>
                <input class="input" type="tel" name="phone" id="phone" v-model="reserveData.phone" v-mask="'+7 ### ### ## ##'" placeholder="+7 900 000 00 00" required :disabled="!can_be_reserved">
            </div>
            <div class="reserve-comment">
                <label class="reserve-label" for="comment">Пожелания к брони</label>
                <textarea class="textarea" type="text" name="comment" id="comment" rows="3" v-model="reserveData.comment" :disabled="!can_be_reserved"></textarea>
            </div>
            <div class="reserve-checkbox">
                <input type="checkbox" id="conditions" required>
                <label for="conditions">Я ознакомлен с <a href="#">условиями посещения</a></label>
            </div>
            <button type="submit" class="btn btn_red">Далее</button> -->
        </div>
    </div>

    <!-- <div class="modal-wrapper" :class="{ active : verCodeShow }">
        <div class="modal-login-wrapper">
            <div class="modal-login">
                <div class="modal-close" @click="verCodeShow = false, is_reserved = false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M1 1L17 17" stroke="#1C1C1C" stroke-linecap="round"/>
                        <path d="M17 1L0.999999 17" stroke="#1C1C1C" stroke-linecap="round"/>
                    </svg>
                </div>
                <div v-if="!is_reserved" class="modal-login-body modal-login-body_code">
                    <div class="modal-login-title">
                        Введите код
                    </div>
                    <p>Мы отправили его на номер {{ reserveData.phone }}</p>
                    <div class="input-login-wrapper">
                        <input type="tel" class="input input_code" v-model="verCode" placeholder="0000" v-mask="'####'">
                        <div v-if="verCodeError" class="input_code__error">Неверный код!</div>
                    </div>
                    <div class="modal-login-buttons">
                        <button @click="reserveTable('repeat')">Повторить SMS</button>
                        <button @click="verCodeShow = false">Отмена</button>
                    </div>
                </div>
                <div v-else class="modal-login-body modal-login-body_code">
                    <div class="modal-login-title">
                        Ваша заявка принята
                    </div>
                    <p>Сообщение о подтверждение придет вам в виде смс на телефон после проверки менеджером ресторана</p>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script>
// import Multiselect from '@vueform/multiselect'
// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'
// import { ref } from 'vue'
// import axios from 'axios'
// import api from '@/api'

export default {
    data() {
        return {
            toggleSwitch: 'ichigo'
            // rests: {},
            // restCode: null,
            // optionRests: [],
            // optionTime: [
            //     '19:00',
            //     '20:00',
            //     '21:00',
            //     '22:00',
            //     '23:00',
            // ],
            // reserveData: {
            //     rest: '',
            //     time: '19:00',
            //     table: 'На 2 чел',
            //     first_name: null,
            //     last_name: null,
            //     phone: null,
            //     comment: null
            // },
            // reserveDate: ref(new Date()),
            // reserveTime: '19:00',
            // format: (date) => {
            //     const day = String(date.getDate()).padStart(2, '0');
            //     const month = String(date.getMonth() + 1).padStart(2, '0')
            //     const year = date.getFullYear();

            //     return `${day}.${month}.${year}`;
            // },
            // verCodeShow: false,
            // verCode: '',
            // verCodeError: false,
            // reserveID: null,
            // is_reserved: false,
            // available_reservation: 10,
            // reservation_limit: 10,
            // can_be_reserved: true
        }
    },

    components: {
        // Multiselect, VueDatePicker
    },

    methods: {
        // // Запрос на получение данных по ресторанам
        // fecthRests() {
        //     axios
        //     .get(api + "/shops/")
        //     .then((response) => {
        //         let rests_name = []
        //         this.rests = response.data
        //         this.reserveData.rest = response.data[0].name
        //         for(let i = 0; i < response.data.length; i++) {
        //             rests_name.push(response.data[i].name)
        //         }
        //         this.optionRests = rests_name
        //     })
        //     .catch((error) => {
        //         console.log(error.response);
        //     });
        // },

        // // Запрос на бронирование
        // reserveTable(e) {
        //     if(e !== 'repeat') {
        //         e.preventDefault()
        //     }

        //     let data = {}
        //     let formatDate = ''

        //     // Форматирование даты из ДД.ММ.ГГГГ в ГГГГ-ММ-ДД
        //     if(this.reserveDate) {
        //         formatDate = this.reserveDate.split('.')
        //         data['reserved_time'] = formatDate[2] + '-' + formatDate[1] + '-' + formatDate[0] + ' ' + this.reserveTime
        //     }

        //     // Формируем объект Название ресторана:код ресторана
        //     for(let i = 0; i < this.rests.length; i++) { 
        //         if(this.rests[i].name === this.reserveData.rest) {
        //             this.restCode = this.rests[i].code
        //         }
        //     }

        //     // Добавляем остальные данные
        //     data['phone'] = this.reserveData.phone.replace(/\s+/g, '').slice(1)
        //     data['table'] = this.reserveData.table
        //     data['first_name'] = this.reserveData.first_name
        //     data['last_name'] = this.reserveData.last_name
        //     data['comment'] = this.reserveData.comment

        //     // Отправялем запрос
        //     axios
        //     .post(api + "/" + this.restCode + "/reservation-add/", data)
        //     .then((response) => {
        //         if(response.data.is_reserved === true) {
        //             this.reserveID = response.data.id
        //             this.verCodeShow = true
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error.response);
        //     });
        // },

        // // Подтверждение бронирования
        // reserveConfirm() {
        //     if(this.reserveID !== null) {
        //         axios
        //         .post(api + "/" + this.restCode + "/reservation-confirm/", {
        //             reservation_id: this.reserveID,
        //             verification_code: this.verCode
        //         })
        //         .then((response) => {
        //             if(response.data.is_reserved === true) {
        //                 this.is_reserved = true
        //                 this.reserveData.first_name = null
        //                 this.reserveData.last_name = null
        //                 this.reserveData.phone = null
        //                 this.reserveData.comment = null
        //             }
        //         })
        //         .catch((error) => {
        //             console.log(error.response);
        //         });
        //     }
        // },

        // // Запрос проверки доступности бронирования
        // fecthAvailable(data, type) {
        //     let formatDate = ''
        //     let completeDate = null

        //     if(type === 'date') {
        //         formatDate = data.split('.')
        //         completeDate = formatDate[2] + '-' + formatDate[1] + '-' + formatDate[0] + ' ' + this.reserveTime
        //     } else {
        //         formatDate = this.reserveDate.split('.')
        //         completeDate = formatDate[2] + '-' + formatDate[1] + '-' + formatDate[0] + ' ' + data
        //     }

        //     // Формируем объект Название ресторана:код ресторана
        //     for(let i = 0; i < this.rests.length; i++) { 
        //         if(this.rests[i].name === this.reserveData.rest) {
        //             this.restCode = this.rests[i].code
        //         }
        //     }

        //     axios
        //     .post(api + "/" + this.restCode + "/check-reservation/", {
        //         reserved_time: completeDate
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         this.reservation_limit = response.data.reservation_limit
        //         this.available_reservation = response.data.available_reservation
        //         this.can_be_reserved = response.data.can_be_reserved
        //     })
        //     .catch((error) => {
        //         console.log(error.response);
        //     });
        // },
    },

    mounted() {
        // this.fecthRests()
        if(!Object.keys(this.$route.query).length == 0) {
            this.toggleSwitch = this.$route.query.rest
        }
    },

    watch: {
        // verCode(newValue) {
        //     if(newValue.length === 4) {
        //         this.reserveConfirm()
        //     }
        // },

        // reserveDate(newValue) {
        //     this.fecthAvailable(newValue, 'date')
        // },

        // reserveTime(newValue) {
        //     this.fecthAvailable(newValue, 'time')
        // }

    }
}
</script>