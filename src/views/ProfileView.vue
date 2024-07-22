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
    <section class="section section-profile container">
        <!-- <div class="toggle-switch">
            <button class="toggle-switch__button"
                @click="toggleSwitch = 0"
                :class="toggleSwitch === 0 ? 'active' : ''">
                История заказов
            </button>
            <button class="toggle-switch__button"
                @click="toggleSwitch = 1"
                :class="toggleSwitch === 1 ? 'active' : ''">
                Профиль
            </button>
        </div> -->

        <!-- <section v-if="toggleSwitch === 0" class="profile profile-orders">
            <div class="profile-orders-item">
                <div class="profile-orders-item__header">
                    <p>Заказ 576 от 17 августа</p>
                    <button>Повторить заказ</button>
                </div>
                <div class="profile-orders-item__body">
                    <div class="profile-orders-item__body_address">
                        <span>Адрес доставки</span>
                        <p>ул. Сафиуллина,66/7 кв.7, 6 этаж, домофон 55</p>
                    </div>
                    <div>
                        <span>Доставка</span>
                        <p>Курьерская</p>
                    </div>
                    <div>
                        <span>Время</span>
                        <p>Получен в 14:56</p>
                    </div>
                    <div>
                        <span>Стоимость</span>
                        <p>1200 ₽</p>
                    </div>
                    <div>
                        <span>О заказе</span>
                        <button>Написать отзыв</button>
                    </div>
                    <div>
                        <button class="btn btn_red">Повторить заказ</button>
                    </div>
                </div>
            </div>
            
            <div class="profile-orders-item">
                <div class="profile-orders-item__header">
                    <p>Заказ 576 от 17 августа</p>
                    <button>Повторить заказ</button>
                </div>
                <div class="profile-orders-item__body">
                    <div class="profile-orders-item__body_address">
                        <span>Адрес доставки</span>
                        <p>ул. Сафиуллина,66/7 кв.7, 6 этаж, домофон 55</p>
                    </div>
                    <div>
                        <span>Доставка</span>
                        <p>Курьерская</p>
                    </div>
                    <div>
                        <span>Время</span>
                        <p>Получен в 14:56</p>
                    </div>
                    <div>
                        <span>Стоимость</span>
                        <p>1200 ₽</p>
                    </div>
                    <div>
                        <span>О заказе</span>
                        <button>Написать отзыв</button>
                    </div>
                    <div>
                        <button class="btn btn_red">Повторить заказ</button>
                    </div>
                </div>
            </div>
        </section> -->
        <div class="profile-bonuses" v-if="points">
            <div class="profile-bonuses-header">
                <span>Б</span>
                <p>Мои баллы</p>
                <div class="profile-bonuses-header__dropdown" @click="dropDownController('bonuses')">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289L0.999998 1" stroke="#373737" stroke-linecap="round"/>
                        <path d="M9 1L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289L0.999998 1" stroke="#373737" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
            <div class="profile-bonuses-body" :class="mobilePoints ? 'active' : ''">
                <div class="profile-bonuses-body-item">
                    <p>{{ points.bonuses }} баллов</p>
                    <span>Доступно</span>
                </div>
                <div class="profile-bonuses-body-item">
                    <p>{{ points.total }}</p>
                    <span>Использовано</span>
                </div>
                <div class="profile-bonuses-body-item">
                    <p>{{ points.encouragement }}%</p>
                    <span>Процент вознаграждения/скидки</span>
                </div>
                <div class="profile-bonuses-body-item">
                    <p>{{ points.repayment_rate }}%</p>
                    <span>Процент чека, который можно оплатить баллами</span>
                </div>
            </div>
        </div>

        <form class="profile profile-profile" v-on:submit="editUser">
            <div v-if="abonements" class="profile-profile-abonements_mobile">
                <div class="profile-profile-abonements_mobile-header">
                    <p>Абонементы</p>
                    <div class="profile-profile__dropdown" @click="dropDownController('abonements')">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289L0.999998 1" stroke="#373737" stroke-linecap="round"/>
                            <path d="M9 1L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289L0.999998 1" stroke="#373737" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
                <div class="profile-profile-abonements_mobile-body" :class="mobileAbonements ? 'active' : ''">
                    <div class="profile-profile-abonements__list">
                        <span>Дата приобретения: {{ abonements.abonement_start_date }}</span>
                        <span>Дата окончания: {{ abonements.abonement_end_date }}</span>
                    </div>
                    <p v-if="abonements.abonement_uses_left === 'Безлимит'">Безлимит</p>
                    <p v-else>Осталось {{ abonements.abonement_uses_left }} использований</p>
                    <a class="btn btn_red profile-profile-abonements__button" @click="qr_code_view = true">Открыть QR-код</a>
                </div>
            </div>
            <div class="profile-profile-inputs">
                <div>
                    <label class="checkout-left__title" for="name">Имя</label>
                    <input class="input" v-model="userData.first_name" type="text" name="name" id="name" placeholder="Ваше имя" required>
                </div>
                <div>
                    <label class="checkout-left__title" for="phone">Телефон</label>
                    <input class="input" v-model="phone" type="text" name="phone" id="phone" placeholder="+7 900 000 00 00" v-mask="'+7 ### ### ## ##'" disabled>
                </div>
                <div>
                    <label class="checkout-left__title" for="email">Электронная почта</label>
                    <input class="input" v-model="userData.email" type="email" name="email" id="email" placeholder="Введите почту">
                    <button v-if="!editSuccess" type="submit" class="profile-profile__save_desc mt-3" style="color: #e80509; text-decoration: underline;">Сохранить данные</button>
                    <p v-else class="profile-profile__save_success_desc mt-3" style="color: #198754">Данные успешно сохранены!</p>
                </div>
                <div>
                    <label class="checkout-left__title" for="birthdate">Дата рождения</label>
                    <input class="input" v-model="userData.birth_date" v-mask="'##.##.####'" type="text" name="birthdate" id="birthdate" placeholder="00.00.00">
                </div>
            </div>

            <div v-if="abonements" class="profile-profile-abonements">
                <p>Абонементы</p>
                <div class="profile-profile-abonements__list">
                    <span>Дата приобретения: {{ abonements.abonement_start_date }}</span>
                    <span>Дата окончания: {{ abonements.abonement_end_date }}</span>
                </div>
                <p v-if="abonements.abonement_uses_left === 'Безлимит'">Безлимит</p>
                <p v-else>Осталось {{ abonements.abonement_uses_left }} использований</p>
                <a class="btn btn_red profile-profile-abonements__button" @click="qr_code_view = true">Открыть QR-код</a>
            </div>
            <!-- <div class="profile-profile__address">
                <label class="checkout-left__title">Мои адреса</label>
                <div class="profile-profile__address-list">
                    <div class="profile-profile__address__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M2 15.9333H30" stroke="#7C7F7E" stroke-width="3" stroke-linecap="round"/>
                            <path d="M16 2V30" stroke="#7C7F7E" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                        <p>Добавить адрес</p>
                    </div>
                </div>
            </div>
            <div class="profile-profile__card">
                <label class="checkout-left__title">Мои карты</label>
                <div class="profile-profile__card-list">
                    <div class="profile-profile__card__item">
                        <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="64px" height="64px">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> <g> <g> 
                                <path d="M460.8,153.6H51.2C22.921,153.6,0,176.52,0,204.8v230.4c0,28.279,22.921,51.2,51.2,51.2h409.6 c28.279,0,51.2-22.921,51.2-51.2V204.8C512,176.52,489.079,153.6,460.8,153.6z M486.4,435.2c0,14.114-11.486,25.6-25.6,25.6H51.2 c-14.114,0-25.6-11.486-25.6-25.6V204.8c0-14.114,11.486-25.6,25.6-25.6h409.6c14.114,0,25.6,11.486,25.6,25.6V435.2z"></path> </g> </g> <g> <g> 
                                <path d="M392.038,55.176c-11.955-25.634-42.411-36.719-68.045-24.764L114.714,128h60.57l159.531-74.385 c12.791-5.965,28.058-0.41,34.022,12.382L397.756,128h28.245L392.038,55.176z"></path> </g> </g> <g> <g>
                                <path d="M153.6,204.8H76.8c-14.14,0-25.6,11.46-25.6,25.6v51.2c0,14.14,11.46,25.6,25.6,25.6h76.8c14.14,0,25.6-11.46,25.6-25.6 v-51.2C179.2,216.26,167.74,204.8,153.6,204.8z M153.6,281.6H76.8v-51.2h76.8V281.6z"></path> </g> </g> <g> <g> 
                                <rect x="51.2" y="384" width="256" height="25.6"></rect> </g> </g> <g> <g> <path d="M422.4,358.4c-9.882,0-18.799,3.84-25.6,9.967c-6.801-6.127-15.718-9.967-25.6-9.967c-21.205,0-38.4,17.195-38.4,38.4 c0,21.205,17.195,38.4,38.4,38.4c9.882,0,18.799-3.84,25.6-9.967c6.801,6.127,15.718,9.967,25.6,9.967 c21.205,0,38.4-17.195,38.4-38.4C460.8,375.595,443.605,358.4,422.4,358.4z M371.2,409.6c-7.057,0-12.8-5.743-12.8-12.8 c0-7.057,5.743-12.8,12.8-12.8s12.8,5.743,12.8,12.8C384,403.857,378.257,409.6,371.2,409.6z M422.4,409.6 c-7.057,0-12.8-5.743-12.8-12.8c0-7.057,5.743-12.8,12.8-12.8s12.8,5.743,12.8,12.8C435.2,403.857,429.457,409.6,422.4,409.6z"></path> </g> </g> 
                            </g>
                        </svg>
                        <p>Новая карта</p>
                    </div>
                </div>
            </div> -->
            <button v-if="!editSuccess" type="submit" class="profile-profile__save_mobile btn btn_red" style="padding: 4px 0;">Сохранить данные</button>
            <p v-else class="profile-profile__save_success_mobile btn btn_red" style="padding: 4px 0;">Данные успешно сохранены!</p>
            <button class="profile-profile__exit profile-profile__exit_desc" @click="profileExit()">Выйти из профиля</button>
            <button class="profile-profile__exit profile-profile__exit_mobile" @click="profileExit()">Выйти из профиля</button>
        </form>
        <div
            v-if="qr_code_view"
            class="qr-code-wrapper"
            @click="qr_code_view = false"
        >
            <div class="qr-code">
                <img :src="qr_code">
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
import api from '@/api'

export default {
    data() {
        return {
            toggleSwitch: 1,
            phone: null,
            userData: {
                first_name: null,
                email: null,
                birth_date: null,
            },
            qr_code_view: false,
            qr_code: null,
            points: null,
            editSuccess: false,
            abonements: null,
            mobilePoints: false,
            mobileAbonements: false,
        }
    },
    
    methods: {
        getUserData() {
            if(localStorage.getItem('token') === '') {
                this.$router.push('/')
            } else {
                axios
                .get(api + "/profile/", {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    },
                })
                .then((response) => {
                    this.userData.first_name = response.data.user.first_name
                    this.phone = response.data.user.phone
                    this.userData.email = response.data.user.email
                    if(response.data.user.birth_date) {
                        let birthday = response.data.user.birth_date.split('-')
                        this.userData.birth_date = birthday[2] + '.' + birthday[1] + '.' + birthday[0]
                    }
                    this.qr_code = response.data.user.abonements_qr_code

                    this.getBonuses()
                })
                .catch((error) => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('phone')
                    localStorage.removeItem('first_name')
                    this.$router.push(`/`).then(() => {
                        window.location.reload()
                    })
                });
            }
        },

        editUser(e) {
            e.preventDefault()
            let newUserData = {}
            let userBirthday = ''

            for(let key in this.userData) {
                if(this.userData[key] !== null) {
                    console.log(key);
                    if(key === 'birth_date') {
                        userBirthday = this.userData[key].split('.')
                        newUserData[key] = userBirthday[2] + '-' + userBirthday[1] + '-' + userBirthday[0]
                    } else {
                        newUserData[key] = this.userData[key]
                    }
                    
                    if(key === 'first_name') {
                        localStorage.setItem('first_name', this.userData[key])
                    }
                }
            }
            axios
            .put(api + "/profile/", newUserData, {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                },
            })
            .then((response) => {
                this.editSuccess = true
            })
            .catch((error) => {
                console.log(error.response);
            });
        },

        getBonuses() {
            axios
            .get(api + '/bonuses/', {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                },
            })
            .then((response) => {
                this.points = response.data
            })
            .catch((error) => {
                console.log(error.response);
            });
        },

        getAbonements() {
            axios
            .get(api + '/cicheti/abonement-orders/', {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                },
            })
            .then((response) => {
                if(Array.isArray(response.data)) {
                    for(let i = 0; i < response.data.length; i++) {
                        let startDate = response.data[i].abonement_start_date.split('-')
                        let endDate = response.data[i].abonement_end_date.split('-')

                        response.data[i].abonement_start_date = startDate[2] + '.' + startDate[1] + '.' + startDate[0]
                        response.data[i].abonement_end_date = endDate[2] + '.' + endDate[1] + '.' + endDate[0]
                    }
                
                    this.abonements = response.data[0]
                } else {
                    this.abonements = null
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
        },

        dropDownController(item) {
            if(item === 'bonuses') {
                if(this.mobilePoints) {
                    this.mobilePoints = false
                } else {
                    this.mobilePoints = true
                }
            }
            else if(item === 'abonements') {
                if(this.mobileAbonements) {
                    this.mobileAbonements = false
                } else {
                    this.mobileAbonements = true
                }
            }
        },

        profileExit() {
            localStorage.removeItem('token')
            localStorage.removeItem('phone')
            localStorage.removeItem('first_name')
            window.location.reload()
        }
    },

    mounted() {
        this.getUserData()
        this.getBonuses(),
        this.getAbonements()
    }
}
</script>