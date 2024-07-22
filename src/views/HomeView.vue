<template>
    <section class="section about container" id="about">
        <h2 class="section-title">О компании</h2>
        <div class="card-list-4" v-if="mainData.abouts">
            <div class="card" v-for="about in mainData.abouts" :key="about.id">
                <img :src="about.image" :alt="about.name">
                <h5 class="card__title" :style="{ color: about.color }">{{ about.name }}</h5>
                <ul class="card__list">
                    <li v-for="description in about.description" :key="description">
                        {{ description }}
                    </li>
                </ul>
                <a :href="'tel:' + about.phone" class="card__button" :style="{ backgroundColor: about.color }">Оставить заявку</a>
            </div>
        </div>
    </section>

    <section class="section rests container" id="rests" v-if="shopsData">
        <h2 class="section-title">Заведения</h2>
        <div class="card-list-3">
            <div class="card" v-for="shop in shopsData" :key="shop.id">
                <img :src="shop.image" :alt="shop.name">
                <h5 class="card__title">{{ shop.name }}</h5>
                <p class="card__description">{{ shop.short_description }}</p>
                <p class="card__times">
                    <svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M39.76192 512a472.23808 459.43808 0 1 0 944.47616 0 472.23808 459.43808 0 1 0-944.47616 0Z" fill="#C8C6C4"></path><path d="M94.09536 512a417.90464 406.57408 0 1 0 835.80928 0 417.90464 406.57408 0 1 0-835.80928 0Z" fill="#FFFFFF"></path><path d="M470.24128 512a41.75872 40.6272 0 1 0 83.51744 0 41.75872 40.6272 0 1 0-83.51744 0Z" fill="#242424"></path><path d="M528.7168 472.93952c0 8.9856-7.48544 16.26624-16.7168 16.26624-9.23136 0-16.7168-7.28064-16.7168-16.26624V253.35808c0-8.9856 7.48544-16.26624 16.7168-16.26624 9.23136 0 16.7168 7.28064 16.7168 16.26624v219.58144zM476.83584 532.25984c7.03488-5.82144 17.5872-4.992 23.56736 1.85344a15.96416 15.96416 0 0 1-1.90464 22.92736l-101.88288 84.3008c-7.03488 5.82144-17.5872 4.992-23.56736-1.85344a15.96416 15.96416 0 0 1 1.90464-22.92736l101.88288-84.3008z" fill="#242424"></path></g></svg>
                    {{ shop.open_time }}
                </p>
                <p class="card__location">
                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#D13903" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
                    {{ shop.short_address }}
                </p>
                <router-link class="card__button" :to="'/shop/' + shop.code">Посмотреть меню</router-link>
            </div>
        </div>
    </section>

    <section class="section feedbacks container" id="feedbacks">
        <h2 class="section-title">Отзывы</h2>
        <feedbacks />
    </section>

    <section class="section contacts container" id="contacts">
        <h2 class="section-title">Контакты</h2>
        <div class="contacts-body">
            <a
                v-if="mainData.contacts_phone"
                :href="'tel:' + mainData.contacts_phone"
                class="btn btn_contacts btn_black_outline"
            >
                {{ mainData.contacts_phone }}
            </a>
            <a
                v-if="mainData.contacts_email"
                :href="'mailto:' + mainData.contacts_email"
                class="btn btn_contacts btn_red"
            >
                {{ mainData.contacts_email }}
            </a>
            <a
                v-if="mainData.contacts_telegram_link"
                :href="mainData.contacts_telegram_link"
                target="__blank"
                class="btn btn_socials btn_red_outline"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="31" viewBox="0 0 40 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03988 13.3163C13.4771 9.08244 20.4364 6.29098 23.9177 4.94188C33.8608 1.09352 35.9375 0.425187 37.2731 0.400319C37.7683 0.391356 38.2541 0.527258 38.662 0.788885C38.9483 1.01868 39.1307 1.34066 39.1729 1.69036C39.2448 2.12527 39.2649 2.56624 39.233 3.00527C38.6954 8.28977 36.3616 21.0627 35.1763 26.9658C34.6754 29.4526 33.6871 30.3013 32.7289 30.3852C30.6521 30.5624 29.0562 29.1045 27.0529 27.8766C23.901 25.9524 22.1214 24.7681 19.063 22.8781C15.5272 20.7021 17.8209 19.5178 19.8343 17.5718C20.3618 17.062 29.5169 9.30315 29.6972 8.60062C29.721 8.49688 29.7183 8.38939 29.6893 8.28681C29.6603 8.18422 29.6058 8.08941 29.5303 8.01C29.4207 7.94623 29.2966 7.90712 29.168 7.89579C29.0393 7.88446 28.9096 7.90121 28.7891 7.94472C28.4752 8.00896 23.4425 11.1061 13.6908 17.2361C12.2618 18.15 10.9674 18.5956 9.80772 18.5728C8.52895 18.5448 6.07154 17.8982 4.24185 17.3294C2.00149 16.6517 0.235253 16.2942 0.375485 15.1534C0.457843 14.5566 1.34597 13.9442 3.03988 13.3163Z" fill="#DF0000"/>
                </svg>
            </a>
        </div>
        <div class="yandex-map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A47bab5641b895f1c6ba775c3009d4e245c2f3d2fe7623b8f2c22871c6f0f9ca1&amp;source=constructor" width="100%" height="453" frameborder="0"></iframe>
        </div>
    </section>

    <section class="section stores" id="store">
        <div class="container">
            <div class="stores-categories stores-categories_main">
                <!-- <button class="btn btn_white_outline btn_lg">Сертификаты</button> -->
                <button
                    v-if="certificate"
                    class="btn btn_white_outline btn_lg"
                    @click="shopCategories = 1"
                    :class="shopCategories === 1 ? 'active' : ''">
                    Кофейные абонементы
                </button>
                <button class="btn btn_white_outline btn_lg"
                    @click="shopCategories = 2"
                    :class="shopCategories === 2 ? 'active' : ''">
                    Наш мерч
                </button>
            </div>
            <certificate v-if="shopCategories === 1" :certificate="certificate"/>
            <shop-merch :shopCategories="shopCategories"/>
        </div>
    </section>

    <div class="modal-wrapper" id="modal-school" :class="modalInfo ? 'active' : ''">
        <div class="modal-info">
            <div class="modal-close modal-close_desc" @click="modalInfo = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M1 1L21 21" stroke="white" stroke-width="2"/>
                    <path d="M21 1L0.999999 21" stroke="white" stroke-width="2"/>
                </svg>
            </div>
            <div class="modal-close modal-close_mobile" @click="modalInfo = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M1 1L17 17" stroke="#1C1C1C" stroke-linecap="round"/>
                    <path d="M17 1L0.999999 17" stroke="#1C1C1C" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="modal-info__info modal-info__info_main">
                <div class="section-title">Relab School</div>
                <p>ReLab School - Школа барменов, существующая с 2010 года.</p>
                <p>В 2022 году Школа пережила обновление и ребрендинг формата. На смену месячному обучению пришел недельный интенсив. За время занятий спикеры полностью погружают в основы миксологии, охватывая диапазон тем от барного инвентаря, формул коктейлей и техник приготовления напитков до образа бармена и участия в конкурсах. Детальное внимание уделяется видам алкоголя и этапам их производства.</p>
                <p>Для удобства слушателей курса существуют несколько форматов обучения, как с практическими часами, так и без них.</p>
                <span>Узнать подробнее о школе: <a href="tel:+79871808962" style="color: #000;">+7 987 180-89-62</a></span>
            </div>
            <div class="modal-info__img" style="height: 100%;"></div>
        </div>
    </div>

    <div class="modal-wrapper" id="modal-login">
        <div class="modal-login-wrapper">
            <div class="modal-login">
                <div class="modal-close" onclick="document.getElementById('modal-login').classList.remove('active')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M1 1L17 17" stroke="#1C1C1C" stroke-linecap="round"/>
                        <path d="M17 1L0.999999 17" stroke="#1C1C1C" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="modal-login-title">
                    Здравствуйте, авторизируйтесь
                </div>
                <p>Так вы сможете получать баллы и быстрее оформлять заказы</p>
                <div class="input-login-wrapper">
                    <input type="tel" class="input input_login" placeholder="+7 000 000 00 00">
                    <button class="btn_login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23" fill="none">
                            <path d="M1 1.94824L11 11.8923L1 21.8364" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
                <span>Указывая номер телефона вы принимаете <a href="#">Политику обработки персональных данных</a></span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import api from '@/api'

import Feedbacks from '@/components/Feedbacks.vue'
import Certificate from '@/components/Certificate.vue'
import ShopMerch from '@/components/ShopMerch.vue'

export default {
    data() {
        return {
            modalInfo: false,
            shopCategories: 2,
            mainData: {},
            shopsData: {},
            certificate: null,
        }
    },

    components: {
        Feedbacks, ShopMerch, Certificate
    },

    methods: {
        fetchMainData() {
            axios
            .get(api + "/settings/")
            .then((response) => {
                this.mainData = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },

        fetchShopsData() {
            axios
            .get(api + "/shops/")
            .then((response) => {
                this.shopsData = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },

        getCertificate() {
            axios
            .get(api + "/cicheti/abonements/")
            .then((response) => {
                if(response.data.length >= 1) {
                    let description = response.data[0].description.split('\r\n')
                    this.certificate = response.data[0]
                    this.certificate.description = description
                    this.certificate.price = this.certificate.price.substring(0, 4)

                    this.shopCategories = 1
                } else {
                    this.shopCategories = 2
                }
            })
            .catch((error) => {
                console.log(error);
            });
        },
    },

    mounted() {
        this.getCertificate()
        this.fetchMainData()
        this.fetchShopsData()
    },
}
</script>