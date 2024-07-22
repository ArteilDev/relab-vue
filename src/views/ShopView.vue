<template>
    <div class="rest-header" v-if="shopData">
        <div class="rest-header-left rest-header-left_desc">
            <router-link to="/" class="main-nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke="#373737"
                        stroke-linecap="round" />
                </svg>
                Главная
            </router-link>
            <h1 class="rest-header-left__title"><span>{{ shopData.name }}</span></h1>
            <p class="rest-header-left__info">
                {{ shopData.description }}
            </p>
            <a class="rest-header-left__link" @click="modalInfo = true">
                Прочитать еще
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                    <path d="M25 11L30 6L25 1" stroke="#CB181A" stroke-linecap="round"/>
                    <path d="M30 6H1" stroke="#CB181A" stroke-linecap="round"/>
                </svg>
            </a>
        </div>
        <div class="rest-header-left rest-header-left_mobile container">
            <router-link to="/" class="main-nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke="#373737"
                        stroke-linecap="round" />
                </svg>
                Главная
            </router-link>
            <h1 class="rest-header-left__title"><span>{{ shopData.name }}</span></h1>
            <p class="rest-header-left__info">
                {{ shopData.description }}
            </p>
            <a class="rest-header-left__link" @click="modalInfo = true">
                Прочитать еще
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
                    <path d="M25 11L30 6L25 1" stroke="#CB181A" stroke-linecap="round"/>
                    <path d="M30 6H1" stroke="#CB181A" stroke-linecap="round"/>
                </svg>
            </a>
        </div>
        <div class="rest-header-right">
            <div class="rest-header-right-swiper">
                <swiper
                    :slidesPerView="1"
                    :spaceBetween="20"
                    :navigation="true"
                    :pagination="{
                        clickable: true,
                    }"
                    :modules="modules"
                    class="mySwiper">
                    
                    <swiper-slide v-for="image in shopData.images" :key="image.id">
                        <div class="rest-header-right-swiper__img" :style="{ backgroundImage: 'url(' + image.image + ')' }"></div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
    <div class="rest-header-bottom">
        <div
            class="rest-header-bottom-list container"
        >
            <div class="rest-header-bottom__item" v-for="item in shopData.buttons" :key="item.id">
                <div class="rest-header-bottom__item__img">
                    <img :src="item.image" alt="Emoji">
                </div>
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
    <section class="section section-catalog container" id="catalog">
        <h2 class="section-title">Меню</h2>

        <div class="catalog-sort-buttons">
            <button
                @click="sortProductCatalog = 'Новинка'"
                class="btn" :class="`${sortProductCatalog === 'Новинка' ? ' btn_active' : ''}`">
                Новинка
            </button>
            <button
                @click="sortProductCatalog = 'Хит'"
                class="btn" :class="`${sortProductCatalog === 'Хит' ? ' btn_active' : ''}`">
                Хит
            </button>
            <button
                @click="sortProductCatalog = 'Популярное'"
                class="btn" :class="`${sortProductCatalog === 'Популярное' ? ' btn_active' : ''}`">
                Популярное
            </button>
            <div style="margin-left: auto; width: 220px;">
                <multiselect v-model="selectSort" :options="optionSort" :canDeselect="false"></multiselect>
            </div>
        </div>

        <div class="card-list-4">
            <div class="side-menu">
                <div class="side-menu-header">
                    <a href="#">
                        <img src="@/assets/img/icon-sale.png" alt="Акции">
                        Акции
                    </a>
                </div>
                <div class="side-menu-body">
                    <a
                        v-for="item in categories"
                        :key="item.id"
                        :class="`${selectedCategory.real_name === item.real_name ? 'side-menu-body__item_active' : ''}`"
                        @click="selectedCategory = item"
                        class="side-menu-body__item"
                    >
                        {{ item.real_name }}
                    </a>
                </div>
            </div>
            <div class="product-categories">
                <button
                    v-for="item in categories"
                    :key="item.id"
                    :class="`${selectedCategory.real_name === item.real_name ? 'btn_red' : ''}`"
                    @click="selectedCategory = item"
                    class="btn"
                >
                    {{ item.real_name }}
                </button>
            </div>
            <div class="product-list">
                <div class="card-product" v-for="product in products" :key="product.id">
                    <div class="card-product-image">
                        <div class="card-product-image__img" :style="{ backgroundImage: 'url('+ product.image +')' }"></div>
                        <div class="card-product__favorite"
                            @click="addFavorite(product.id)"
                            :class="product.is_favourite ? 'is_favorite' : ''"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25"
                                fill="none">
                                <path
                                    d="M7.02858 0.524467L7.02719 0.52462C6.36972 0.596836 5.4653 0.84668 4.86561 1.12154L4.86508 1.12178C4.02311 1.50648 3.37134 1.96554 2.68089 2.66841L2.68052 2.66878C1.25523 4.11667 0.5 5.97428 0.5 8.03955C0.5 9.25331 0.735248 10.3072 1.25283 11.422C2.55477 14.2234 6.07081 17.9473 11.1539 21.8133C12.0386 22.4853 13.0014 23.1775 13.7663 23.7006C14.1494 23.9626 14.4786 24.1792 14.7216 24.3289C14.8029 24.379 14.8716 24.4198 14.9276 24.4515C15.0022 24.4086 15.0976 24.3505 15.2125 24.2777C15.5017 24.0945 15.8909 23.8335 16.3323 23.5273C17.2145 22.9153 18.2894 22.1341 19.1606 21.4589C24.032 17.6814 27.2661 14.2107 28.5756 11.4514L28.5758 11.451C28.993 10.5739 29.1941 9.86781 29.3063 8.89514C29.3322 8.66962 29.343 8.27889 29.3372 7.87568C29.3313 7.47113 29.3093 7.09962 29.2796 6.90778C29.1478 6.08409 28.9253 5.3751 28.5835 4.67077C27.5013 2.44255 25.4797 0.933954 23.1057 0.563662L23.1055 0.563622C22.7089 0.501562 21.8925 0.4809 21.4672 0.51948C19.8395 0.674084 18.3259 1.32385 16.8213 2.53815C16.6458 2.68118 16.2226 3.07445 15.8866 3.41214L15.2715 4.03283L14.9071 4.40047L14.5523 4.0236L14.3658 3.82548L14.3657 3.82554L14.3593 3.81852C14.2594 3.70821 14.1368 3.57164 14.0907 3.51824L14.0855 3.51219L14.0805 3.50598L14.0804 3.50584C14.0791 3.50434 14.0672 3.49077 14.0383 3.46112C14.0102 3.43228 13.9735 3.39589 13.9292 3.35314C13.8409 3.26782 13.7288 3.16301 13.6085 3.05313C13.3653 2.83112 13.1022 2.60094 12.9441 2.4752L12.9421 2.4736C11.6171 1.40865 10.2437 0.786242 8.77113 0.560879L8.77061 0.560799C8.622 0.537897 8.27695 0.517763 7.90031 0.509863C7.5235 0.501959 7.17807 0.507626 7.02858 0.524467ZM15.0589 24.5199C15.069 24.524 15.067 24.5223 15.0558 24.5186C15.0571 24.5192 15.0581 24.5196 15.0589 24.5199Z"
                                    stroke="white" />
                            </svg>
                        </div>
                        <div class="card-product__badges">
                            <img src="@/assets/img/badges/new.png" alt="New">
                            <img src="@/assets/img/badges/stars.png" alt="Stars">
                            <img src="@/assets/img/badges/fire.png" alt="Fire">
                        </div>
                    </div>
                    <h5 class="card-product__title">{{ product.real_name }}</h5>
                    <div class="card-product-footer">
                        <div class="card-product-footer__price">{{ product.price }} ₽</div>
                    </div>
                </div>

                <div class="product-list-paginate">
                    <paginate
                        v-if="pageNum !== 1"
                        :page-count="1"
                        :page-range="10"
                        :click-handler="changePage"
                        :prev-text="'<<'"
                        :next-text="'>>'"
                        :container-class="'paginate'"
                    >
                    </paginate>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <h2 class="section-title">Услуги</h2>
            <div class="stores-categories">
                <button
                    v-if="$route.params.code === 'cicheti' && certificate"
                    class="btn btn_red_outline btn_lg btn_w100 active"
                >
                    Кофейные абонементы
                </button>
                <router-link
                    v-if="shopData.is_reservation"
                    :to="'/reserve?rest=' + $route.params.code"
                    class="btn btn_red_outline btn_lg btn_w100"
                >
                    Забронировать столик онлайн
                </router-link>
                <!-- <router-link to="/qrpay" class="btn btn_red_outline btn_lg btn_w100">
                    Оплата столика по QR-коду со стола
                </router-link> -->
                <a
                    v-if="shopData.is_reservation"
                    class="btn btn_red_outline btn_lg btn_w100"
                    :href="'tel:' + shopData.phone"
                >
                    Забронировать столик: {{ shopData.phone }}
                </a>
            </div>
            <certificate v-if="$route.params.code === 'cicheti' && certificate" :certificate="certificate"/>
            <div v-else>
                <img :src="shopData.services_image" style="width: 100%;" alt="">
            </div>
        </div>
    </section>
    <section class="section contacts container" id="contacts">
        <h2 class="section-title">Контакты</h2>
        <div class="contacts-body">
            <a
                v-if="shopData.phone"
                :href="'tel:'+ shopData.phone"
                class="btn btn_contacts btn_black_outline"
            >
                {{ shopData.phone }}
            </a>
            <a
                v-if="shopData.email"
                :href="'mailto:' + shopData.email"
                class="btn btn_contacts btn_red"
            >
                {{ shopData.email }}
            </a>
            <a
                v-if="shopData.telegram_link"
                class="btn btn_socials btn_red_outline"
                :href="shopData.telegram_link"
                target="__blank"
                
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="31" viewBox="0 0 40 31" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03988 13.3163C13.4771 9.08244 20.4364 6.29098 23.9177 4.94188C33.8608 1.09352 35.9375 0.425187 37.2731 0.400319C37.7683 0.391356 38.2541 0.527258 38.662 0.788885C38.9483 1.01868 39.1307 1.34066 39.1729 1.69036C39.2448 2.12527 39.2649 2.56624 39.233 3.00527C38.6954 8.28977 36.3616 21.0627 35.1763 26.9658C34.6754 29.4526 33.6871 30.3013 32.7289 30.3852C30.6521 30.5624 29.0562 29.1045 27.0529 27.8766C23.901 25.9524 22.1214 24.7681 19.063 22.8781C15.5272 20.7021 17.8209 19.5178 19.8343 17.5718C20.3618 17.062 29.5169 9.30315 29.6972 8.60062C29.721 8.49688 29.7183 8.38939 29.6893 8.28681C29.6603 8.18422 29.6058 8.08941 29.5303 8.01C29.4207 7.94623 29.2966 7.90712 29.168 7.89579C29.0393 7.88446 28.9096 7.90121 28.7891 7.94472C28.4752 8.00896 23.4425 11.1061 13.6908 17.2361C12.2618 18.15 10.9674 18.5956 9.80772 18.5728C8.52895 18.5448 6.07154 17.8982 4.24185 17.3294C2.00149 16.6517 0.235253 16.2942 0.375485 15.1534C0.457843 14.5566 1.34597 13.9442 3.03988 13.3163Z" fill="#DF0000"/>
                </svg>
            </a>
        </div>
        <div class="yandex-map">
            <iframe :src="shopData.geopos_link" width="100%" height="400" frameborder="0"></iframe>
            <p class="yandex-map__subtitle">
                <svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M39.76192 512a472.23808 459.43808 0 1 0 944.47616 0 472.23808 459.43808 0 1 0-944.47616 0Z" fill="#C8C6C4"></path><path d="M94.09536 512a417.90464 406.57408 0 1 0 835.80928 0 417.90464 406.57408 0 1 0-835.80928 0Z" fill="#FFFFFF"></path><path d="M470.24128 512a41.75872 40.6272 0 1 0 83.51744 0 41.75872 40.6272 0 1 0-83.51744 0Z" fill="#242424"></path><path d="M528.7168 472.93952c0 8.9856-7.48544 16.26624-16.7168 16.26624-9.23136 0-16.7168-7.28064-16.7168-16.26624V253.35808c0-8.9856 7.48544-16.26624 16.7168-16.26624 9.23136 0 16.7168 7.28064 16.7168 16.26624v219.58144zM476.83584 532.25984c7.03488-5.82144 17.5872-4.992 23.56736 1.85344a15.96416 15.96416 0 0 1-1.90464 22.92736l-101.88288 84.3008c-7.03488 5.82144-17.5872 4.992-23.56736-1.85344a15.96416 15.96416 0 0 1 1.90464-22.92736l101.88288-84.3008z" fill="#242424"></path></g></svg>
                {{ shopData.open_time }}
            </p>
            <p class="yandex-map__subtitle">
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#D13903" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
                {{ shopData.address }}
            </p>
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
                <p>{{ shopData.detailed_description }}</p>
            </div>
            <div class="modal-info__img chicheti" :style="{ backgroundImage: 'url(' + shopData.detailed_image + ')' }"></div>
        </div>
    </div>
    <modal-login :modalShow="modalLoginShow" @close="modalLoginHide" @auth="userAuth"/>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
<script>
import Multiselect from '@vueform/multiselect'
import Paginate from "vuejs-paginate-next";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Certificate from '@/components/Certificate.vue'
import ModalLogin from "@/components/modals/ModalLogin.vue";

import axios from 'axios'
import api from '@/api'

export default {
    data() {
        return {
            pageLoading: true,
            shopData: {},
            modalInfo: false,
            products: {},
            optionSort: [
                'По популярности',
                'Дешевле',
                'Дороже',
            ],
            selectSort: 'По популярности',
            sortProductCatalog: 'Новинка',
            categories: {},
            selectedCategory: {},
            pageNum: 1,
            modalLoginShow: false,
            certificate: null
        }
    },
    components: {
        Multiselect,
        Swiper,
        SwiperSlide,
        Paginate,
        Certificate,
        ModalLogin
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
    methods: {
        fecthShopData() {
            this.pageLoading = true
            axios
            .get(api + "/shops/" + this.$route.params.code)
            .then((response) => {
                this.shopData = response.data
                this.pageLoading = false
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },

        fetchCategories() {
            axios
            .get(api + "/" + this.$route.params.code + "/categories/")
            .then((response) => {
                this.categories = response.data;
                this.selectedCategory = response.data[0]
                this.fetchProducts(response.data[0].id, this.pageNum, 'is_popular')
            })
            .catch((error) => {
                console.log(error);
            });
        },
        
        fetchProducts(category,pageNum,order) {
            if(localStorage.getItem('token')) {
                axios
                .get(api + "/" + this.$route.params.code + "/products/?category=" + category + "&page=" + pageNum + "&ordering=" + order, {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    },
                }) 
                .then((response) => {
                    this.products = response.data.items
                    this.pageNum = response.data.num_pages
                })
                .catch((error) => {
                    console.log(error);
                });
            } else {
                axios
                .get(api + "/" + this.$route.params.code + "/products/?category=" + category + "&page=" + pageNum + "&ordering=" + order) 
                .then((response) => {
                    this.products = response.data.items
                    this.pageNum = response.data.num_pages
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        
        changePage(pageNum) {
            this.pageNum = pageNum
        },

        addFavorite(id) {
            if(localStorage.getItem('token')) {
                for(let i = 0; i < this.products.length; i++) {
                    if(this.products[i].id === id) {
                        if(this.products[i].is_favourite) {
                            this.products[i].is_favourite = false

                            axios
                            .delete(api +'/'+ this.$route.query.rest +'/favourites/', 
                            {
                                headers: {
                                    Authorization: 'Token ' + localStorage.getItem('token')
                                },
                                data: {
                                    product_id: id
                                }
                            },)
                            .then(() => {
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                        } else {
                            this.products[i].is_favourite = true

                            axios
                            .post(api +'/'+ this.$route.query.rest +'/favourites/', 
                            {
                                product_id: id
                            },
                            {
                                headers: {
                                    Authorization: 'Token ' + localStorage.getItem('token')
                                },
                            }) 
                            .then((response) => {
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                        }
                    }
                }
            } else {
                this.modalLoginShow = true
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
                this.$router.go(0)
            } catch(err) { // Если есть ошибка
                alert(err)
            }
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
                }
            })
            .catch((error) => {
                console.log(error);
            });
        },
    },

    mounted() {
        if(this.$route.params.code) {
            this.fecthShopData()
            this.fetchCategories()
        }

        if(this.$route.params.code === 'cicheti') {
            this.getCertificate()
        }
    },

    watch: {
        selectedCategory(newValue) {
            this.fetchProducts(newValue.id, this.pageNum, 'is_popular')
        },

        pageNum(newValue) {
            this.fetchProducts(this.selectedCategory.id, newValue, 'is_popular')
        },

        selectSort(newValue) {
            if(newValue === 'Дешевле') {
                this.fetchProducts(this.selectedCategory.id, this.pageNum, 'price')
            } else if (newValue === 'Дороже') {
                this.fetchProducts(this.selectedCategory.id, this.pageNum, '-price')
            } else {
                this.fetchProducts(this.selectedCategory.id, this.pageNum, 'is_popular')
            }
        }
    },
};
</script>