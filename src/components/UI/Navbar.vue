<template>
    <header class="header" :class="`${$route.name === 'home' ? '' : 'header_white'}`">
        <nav class="nav">
            <div class="container">
                <div class="nav-navbar" :class="`${$route.name === 'home' ? '' : 'nav-navbar_white'}`">
                    <a href="/#about" class="nav-navbar__item">О нас</a>
                    <a href="/#rests" class="nav-navbar__item">Заведения</a>
                    <router-link to="/catalog" class="nav-navbar__item">Доставка</router-link>
                    <router-link to="/reserve" class="nav-navbar__item">Забронировать стол</router-link>
                    <router-link to="/vacation" class="nav-navbar__item">Вакансии</router-link>
                    <a href="/#contacts" class="nav-navbar__item">Контакты</a>
                    <div class="nav-navbar-buttons">
                        <a v-if="!isAuth" href="#" class="nav-navbar__item" @click="modalLoginShow = true">
                            <svg v-if="$route.name === 'home'" xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                                <circle cx="8.5" cy="6" r="5.5" stroke="white"/>
                                <path d="M1 18.5001C5.5 14 11.5 14 16.5 18.5001" stroke="white" stroke-linecap="round"/>
                            </svg>
                            <svg v-if="$route.name !== 'home'" xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                                <circle cx="8.5" cy="6" r="5.5" stroke="#2A2A2A" />
                                <path d="M1 18.5001C5.5 14 11.5 14 16.5 18.5001" stroke="#373737" stroke-linecap="round" />
                            </svg>
                            <p>{{ login }}</p>
                        </a>
                        <router-link v-else to="/profile" class="nav-navbar__item">
                            <svg v-if="$route.name === 'home'" xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                                <circle cx="8.5" cy="6" r="5.5" stroke="white"/>
                                <path d="M1 18.5001C5.5 14 11.5 14 16.5 18.5001" stroke="white" stroke-linecap="round"/>
                            </svg>
                            <svg v-if="$route.name !== 'home'" xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                                <circle cx="8.5" cy="6" r="5.5" stroke="#2A2A2A" />
                                <path d="M1 18.5001C5.5 14 11.5 14 16.5 18.5001" stroke="#373737" stroke-linecap="round" />
                            </svg>
                            <p>{{ login }}</p>
                        </router-link>
                        <router-link v-if="isAuth" to="/favorites" class="nav-navbar__item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 25"
                                fill="none">
                                <path
                                    d="M7.02858 0.524467L7.02719 0.52462C6.36972 0.596836 5.4653 0.84668 4.86561 1.12154L4.86508 1.12178C4.02311 1.50648 3.37134 1.96554 2.68089 2.66841L2.68052 2.66878C1.25523 4.11667 0.5 5.97428 0.5 8.03955C0.5 9.25331 0.735248 10.3072 1.25283 11.422C2.55477 14.2234 6.07081 17.9473 11.1539 21.8133C12.0386 22.4853 13.0014 23.1775 13.7663 23.7006C14.1494 23.9626 14.4786 24.1792 14.7216 24.3289C14.8029 24.379 14.8716 24.4198 14.9276 24.4515C15.0022 24.4086 15.0976 24.3505 15.2125 24.2777C15.5017 24.0945 15.8909 23.8335 16.3323 23.5273C17.2145 22.9153 18.2894 22.1341 19.1606 21.4589C24.032 17.6814 27.2661 14.2107 28.5756 11.4514L28.5758 11.451C28.993 10.5739 29.1941 9.86781 29.3063 8.89514C29.3322 8.66962 29.343 8.27889 29.3372 7.87568C29.3313 7.47113 29.3093 7.09962 29.2796 6.90778C29.1478 6.08409 28.9253 5.3751 28.5835 4.67077C27.5013 2.44255 25.4797 0.933954 23.1057 0.563662L23.1055 0.563622C22.7089 0.501562 21.8925 0.4809 21.4672 0.51948C19.8395 0.674084 18.3259 1.32385 16.8213 2.53815C16.6458 2.68118 16.2226 3.07445 15.8866 3.41214L15.2715 4.03283L14.9071 4.40047L14.5523 4.0236L14.3658 3.82548L14.3657 3.82554L14.3593 3.81852C14.2594 3.70821 14.1368 3.57164 14.0907 3.51824L14.0855 3.51219L14.0805 3.50598L14.0804 3.50584C14.0791 3.50434 14.0672 3.49077 14.0383 3.46112C14.0102 3.43228 13.9735 3.39589 13.9292 3.35314C13.8409 3.26782 13.7288 3.16301 13.6085 3.05313C13.3653 2.83112 13.1022 2.60094 12.9441 2.4752L12.9421 2.4736C11.6171 1.40865 10.2437 0.786242 8.77113 0.560879L8.77061 0.560799C8.622 0.537897 8.27695 0.517763 7.90031 0.509863C7.5235 0.501959 7.17807 0.507626 7.02858 0.524467ZM15.0589 24.5199C15.069 24.524 15.067 24.5223 15.0558 24.5186C15.0571 24.5192 15.0581 24.5196 15.0589 24.5199Z"
                                    stroke="white" />
                            </svg>
                        </router-link>
                        <router-link to="/cart" class="nav-navbar__item nav-navbar__item_cart">
                            <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 5.5H2C1.44772 5.5 1 5.94772 1 6.5V7.5C1 8.05228 1.44772 8.5 2 8.5H26C26.5523 8.5 27 8.05228 27 7.5V6.5C27 5.94772 26.5523 5.5 26 5.5H20.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 8.5L5.81063 19.7425C5.92193 20.1877 6.32191 20.5 6.78078 20.5H21.2192C21.6781 20.5 22.0781 20.1877 22.1894 19.7425L25 8.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 11.5L10.3636 17.5M19 11.5L17.6364 17.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17 0.5L25 5.5H3L11 0.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 11.5V17.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div class="line"></div>
                            {{ price }} ₽
                        </router-link>
                    </div>
                </div>
                <div class="nav-mobile">
                    <button class="nav-mobile__btn">
                        <div v-if="$route.name === 'home'" class="burger" @click="mobileMenu = true">
                            <div class="burger-line_1"></div>
                            <div class="burger-line_2"></div>
                            <div class="burger-line_3"></div>
                        </div>
                        <div v-if="$route.name !== 'home'" class="burger burger_white" @click="mobileMenu = true">
                            <div class="burger-line_1"></div>
                            <div class="burger-line_2"></div>
                            <div class="burger-line_3"></div>
                        </div>
                    </button>
                    <div class="nav-navbar-buttons">
                        <router-link to="/cart" class="nav-navbar__item nav-navbar__item_cart">
                            <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 5.5H2C1.44772 5.5 1 5.94772 1 6.5V7.5C1 8.05228 1.44772 8.5 2 8.5H26C26.5523 8.5 27 8.05228 27 7.5V6.5C27 5.94772 26.5523 5.5 26 5.5H20.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 8.5L5.81063 19.7425C5.92193 20.1877 6.32191 20.5 6.78078 20.5H21.2192C21.6781 20.5 22.0781 20.1877 22.1894 19.7425L25 8.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 11.5L10.3636 17.5M19 11.5L17.6364 17.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17 0.5L25 5.5H3L11 0.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 11.5V17.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div class="line"></div>
                            {{ price }} ₽
                        </router-link>
                    </div>
                </div>
                <div class="navbar-collapse" :class="{ active: mobileMenu }">
                    <div class="navbar-collapse-header">
                        <a class="navbar-collapse__btn navbar-collapse__btn_close" @click="mobileMenu = false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                <path d="M6 11L1.70711 6.70711C1.31658 6.31658 1.31658 5.68342 1.70711 5.29289L6 1" stroke="white" stroke-linecap="round"/>
                            </svg>
                        </a>
                        <a v-if="!isAuth" class="navbar-collapse__btn navbar-collapse__btn_login" @click="modalLoginShow = true">
                            <p>{{ login }}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                                <circle cx="8.5" cy="6" r="5.5" stroke="white"/>
                                <path d="M1 18.5001C5.5 14 11.5 14 16.5 18.5001" stroke="white" stroke-linecap="round"/>
                            </svg>
                        </a>
                        <router-link v-else to="/profile" class="navbar-collapse__btn navbar-collapse__btn_login" @click="mobileMenu = false">
                            <p>{{ login }}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                                <circle cx="8.5" cy="6" r="5.5" stroke="white"/>
                                <path d="M1 18.5001C5.5 14 11.5 14 16.5 18.5001" stroke="white" stroke-linecap="round"/>
                            </svg>
                        </router-link>
                        
                    </div>
                    <div class="navbar-collapse-body">
                        <router-link v-if="isAuth" to="/favorites" @click="mobileMenu = false" class="navbar-collapse-body__item">Избранное</router-link>
                        <a href="/#about" @click="mobileMenu = false" class="navbar-collapse-body__item">О нас</a>
                        <a href="/#rests" @click="mobileMenu = false" class="navbar-collapse-body__item">Заведения</a>
                        <router-link to="/catalog" @click="mobileMenu = false" class="navbar-collapse-body__item">Доставка</router-link>
                        <router-link to="/reserve" @click="mobileMenu = false" class="navbar-collapse-body__item">Забронировать стол</router-link>
                        <router-link to="/vacation" @click="mobileMenu = false" class="navbar-collapse-body__item">Вакансии</router-link>
                        <router-link to="/feedback" @click="mobileMenu = false" class="navbar-collapse-body__item">Отзывы</router-link>
                        <a href="/#store" @click="mobileMenu = false" class="navbar-collapse-body__item">Магазин</a>
                        <a href="/#contacts" @click="mobileMenu = false" class="navbar-collapse-body__item">Контакты</a>
                        <div class="navbar-collapse-body__socials">
                            <a href="https://t.me/ReLab_Family" target="__blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.893483 4.736C4.3833 3.1836 6.71022 2.16006 7.87423 1.66539C11.1988 0.254327 11.8932 0.00927106 12.3398 0.000152708C12.5054 -0.00313369 12.6678 0.0466971 12.8042 0.142627C12.8999 0.226884 12.9609 0.344943 12.975 0.473167C12.999 0.632635 13.0058 0.794324 12.9951 0.955301C12.8153 2.89295 12.035 7.57636 11.6387 9.74083C11.4712 10.6527 11.1408 10.9638 10.8204 10.9946C10.126 11.0596 9.59234 10.525 8.92251 10.0748C7.86865 9.36926 7.27361 8.935 6.25101 8.242C5.06876 7.44415 5.83571 7.00989 6.50889 6.29637C6.68528 6.10945 9.74641 3.26452 9.80669 3.00693C9.81464 2.96889 9.81372 2.92948 9.80403 2.89187C9.79433 2.85425 9.77613 2.81949 9.75087 2.79037C9.71423 2.76699 9.67274 2.75265 9.62972 2.74849C9.5867 2.74434 9.54332 2.75048 9.50303 2.76643C9.39809 2.78999 7.71533 3.9256 4.45475 6.17328C3.97694 6.50838 3.54415 6.67175 3.15639 6.66339C2.72882 6.65313 1.90716 6.41605 1.29538 6.20747C0.546285 5.959 -0.0442771 5.82792 0.002611 5.40962C0.0301485 5.19077 0.327104 4.96624 0.893483 4.736Z" fill="#CB181A"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div v-if="$route.name === 'home'" class="header-block">
            <div class="container" v-if="mainData">
                <div class="header-block-left">
                    <img src="@/assets/img/header-logo.png" alt="RELAB FAMILY">
                    <p>{{ mainData.main_description }}</p>
                </div>
                <div class="header-block-right">
                    <img :src="mainData.main_banner_1" alt="Изображение">
                    <img :src="mainData.main_banner_2" alt="Изображение">
                </div>
                <div class="header-block-right_mobile">
                    <div
                        class="header-block-right__img"
                        :style="{ backgroundImage: 'url(' + mainData.main_banner_1 + ')', backgroundSize: 'cover' }"
                    ></div>
                    <div
                        class="header-block-right__img"
                        :style="{ backgroundImage: 'url('+ mainData.main_banner_2 +')', backgroundSize: 'cover' }"
                    ></div>
                </div>
                <p class="header-block_mobile">{{ mainData.main_description }}</p>
            </div>
            <div class="header-block_bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="812" height="474" viewBox="0 0 812 474" fill="none">
                    <path d="M812 0H319L0 474H812V0Z" fill="#DF0000"/>
                </svg>
            </div>
        </div>
        
        <div v-if="$route.name === 'home'" class="header-stories">
            <stories-menu-slider v-if="$route.name === 'home'" />
        </div>
        <modal-login :modalShow="modalLoginShow" @close="modalLoginHide" @auth="userAuth"/>
        <stories-wrapper v-if="$route.name === 'home'"/>
    </header>
</template>
<script>
import axios from 'axios'
import api from '@/api'
import ModalLogin from "@/components/modals/ModalLogin.vue";
import StoriesMenuSlider from "@/components/Stories/Menu/StoriesMenuSlider.vue";
import StoriesWrapper from '@/components/Stories/Main/StoriesMainWrapper.vue';
import { useStoriesStore } from '@/stores/stories';

export default {
    data() {
        return {
            mobileMenu: false,
            modalLoginShow: false,
            isAuth: false,
            login: 'Войти',
            mainData: {},
            cart: null,
            price: 0,
        }
    },

    components: {
        ModalLogin, StoriesMenuSlider, StoriesWrapper
    },

    methods: {
        async userAuth(token) {
            try {
                const response = await axios.get(api + "/profile/", {
                    headers: {
                    Authorization: 'Token ' + token
                    }
                })
                console.log(response.data.user);
                localStorage.setItem('token', token);
                localStorage.setItem('phone', response.data.user.phone);
                localStorage.setItem('first_name', response.data.user.first_name);
                this.modalLoginShow = false
                this.$router.go(0)
            } catch(err) { // Если есть ошибка
                alert(err)
            }
        },

        checkAuth() {
            if (localStorage.getItem('token') !== null ) {
                this.isAuth = true
                if (localStorage.getItem('first_name') !== 'null') {
                    this.login = localStorage.getItem('first_name')
                }
                else if (localStorage.getItem('phone') !== 'null') {
                    this.login = localStorage.getItem('phone')
                }
            } else {
                this.login = 'Войти'
            }
        },

        getMainData() {
            axios
            .get(api + "/settings/")
            .then((response) => {
                this.mainData = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },

        modalLoginHide() {
            this.modalLoginShow = false
        },

        cartController() {
            if(localStorage.getItem('cart')) {
                this.cart = JSON.parse(localStorage.getItem('cart'))

                this.price = 0
                for(let i = 0; i < this.cart.length; i++) {
                    this.price += this.cart[i].price * this.cart[i].count
                }
            }
        }
    },

    mounted() {
        this.checkAuth()
        const stories = useStoriesStore()
    
        const openStory = () => {
            stories.fetchStories()
        }
    
        openStory(),

        this.getMainData(),

        // Отслеживает изменения в корзине
        this.cartController(),

        window.addEventListener('add-to-cart', (event) => {
            this.cart = JSON.parse(event.detail.storage);
        });
    },

    watch: {
        cart() {
            this.price = 0
            for(let i = 0; i < this.cart.length; i++) {
                this.price += this.cart[i].price * this.cart[i].count
            }
        }
    }
}
</script>