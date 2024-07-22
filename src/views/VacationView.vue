<template>
    <div class="vacation-header" v-if="!pageLoading">
        <div class="vacation-header-left vacation-header-left_desc">
            <router-link to="/" class="main-nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke="#373737"
                        stroke-linecap="round" />
                </svg>
                Главная
            </router-link>
            <h1 class="vacation-header-left__title">{{ pageData.vacancy_name }}</h1>
            <p class="vacation-header-left__info">{{ pageData.vacancy_description }}</p>
            <div class="vacation-header-left-row">
                <a :href="'tel:'+ pageData.vacancy_phone" target="_blank" class="btn btn_red_outline">
                    {{ pageData.vacancy_phone }}
                </a>
                <a @click="modalInfo = true" class="vacation-header-left__link">
                    Прочитать о нас еще
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                        <path d="M25 11L30 6L25 1" stroke="#CB181A" stroke-linecap="round"/>
                        <path d="M30 6H1" stroke="#CB181A" stroke-linecap="round"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="vacation-header-left vacation-header-left_mobile container">
            <router-link to="/" class="main-nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke="#373737"
                        stroke-linecap="round" />
                </svg>
                Главная
            </router-link>
            <h1 class="vacation-header-left__title">{{ pageData.vacancy_name }}</h1>
            <p class="vacation-header-left__info">{{ pageData.vacancy_description }}</p>
            <div class="vacation-header-left-row">
                <a :href="'tel:' + pageData.vacancy_phone" target="_blank" class="btn btn_red_outline">
                    {{ pageData.vacancy_phone }}
                </a>
                <a @click="modalInfo = true" class="vacation-header-left__link">
                    Прочитать о нас еще
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                        <path d="M25 11L30 6L25 1" stroke="#CB181A" stroke-linecap="round"/>
                        <path d="M30 6H1" stroke="#CB181A" stroke-linecap="round"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="vacation-header-right">
            <div class="vacation-header-right__img" :style="{ backgroundImage: 'url(' + pageData.vacancy_image + ')' }"></div>
        </div>
    </div>
    <section class="vacation-body" v-if="!pageLoading">
        <div class="container">
            <div class="vacation-section-header">
                <h2 class="section-title">Вакансии</h2>
                <a :href="pageData.vacancy_link" target="_blank" class="btn btn_red_outline">Оставить заявку</a>
            </div>
            <div class="card-vacation-list">
                <div class="card-vacation" v-for="item in pageData.vacancies" :key="item.id">
                    <div class="card-vacation__img" :style="{background: 'url(' + item.image + ') no-repeat center / cover'}"></div>
                    <div class="card-vacation-body">
                        <div class="card-vacation__title">{{ item.name }}</div>
                        <button class="btn btn_red">Подробнее</button>
                    </div>
                </div>
            </div>
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
            <div class="modal-info__info">
                <p>Мы постоянно растем и ищем новых сотрудников. Работа на смене в ресторане или баре многими воспринимается как что-то временное, мы же видим ее как профессию на длительный период твоей жизни. Бартендер, официант или повар – лишь первая ступень на пути становления востребованным специалистом в индустрии. Работая у нас, ты увидишь перспективы и возможности для своего роста, и не просто увидишь, а поймешь, что и как нужно делать для постоянного движения и развития</p>
                <p>Нам всегда нужны: <br>Повара<br>Бартендеры<br>Официанты</p>
                <p>Даже если у тебя нет опыта, но ты очень хочешь его получить в этой индустрии и не знаешь с чего начать, звони. Наш HR с радостью с тобой пообщается и предложит именно ту вакансию, которая подойдет тебе.</p>
            </div>
            <div class="modal-info__img chicheti" :style="{ backgroundImage: 'url(' + require('@/assets/img/vacation/info.jpg') + ')' }"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import api from '@/api'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    data() {
        return {
            pageData: {},
            vacationCategory: 'Повар',
            slidesPerView: 3,
            modalInfo: false,
            pageLoading: true,
        }
    },

    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },

    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
        fetchPageData() {
            this.pageLoading = true
            axios
            .get(api + "/settings/")
            .then((response) => {
                console.log(response.data);
                this.pageData = response.data
                this.pageLoading = false
            })
            .catch((error) => {
                console.log(error);
            });
        },

        handleResize() {
            if(window.innerWidth <= 767) {
                this.slidesPerView = 1
            } else if(window.innerWidth <= 1199) {
                this.slidesPerView = 2
            }
            else {
                this.slidesPerView = 3
            }
        }
    },

    mounted() {
        this.fetchPageData()
    }
}
</script>