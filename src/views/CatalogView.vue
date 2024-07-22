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
    <section class="section section-catalog container">
        <h2 class="section-title">Каталог блюд</h2>

        <div class="toggle-switch">
            <button
                class="toggle-switch__button"
                @click="rest='cicheti'"
                :class="$route.query.rest === 'cicheti' ? 'active' : ''"
            >
                CiCheTi Italo Bistro
            </button>
            <button
                class="toggle-switch__button"
                @click="rest='ichigo'"
                :class="$route.query.rest === 'ichigo' ? 'active' : ''"
            >
                Ichi-Go Ichi-E
            </button>
        </div>

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

        <div class="card-list-4" v-if="categories">
            <div class="side-menu">
                <div class="side-menu-header">
                    <a href="#">
                        <img src="@/assets/img/icon-sale.png" alt="Акции">
                        Акции
                    </a>
                </div>
                <div class="side-menu-body">
                    <!-- <a href="#" class="side-menu-body__item">Каталог блюд</a> -->
                    <a
                        v-for="category in categories"
                        :key="category.id"
                        :class="`${selectedCategory.real_name === category.real_name ? 'side-menu-body__item_active' : ''}`"
                        @click="selectedCategory = category"
                        class="side-menu-body__item"
                    >
                        {{ category.real_name }}
                    </a>
                </div>
            </div>
            <div class="product-categories">
                <button class="btn">Завтраки</button>
                <button class="btn">Супы</button>
                <button class="btn">Паста</button>
                <button class="btn btn_red">Пицца</button>
                <button class="btn">Антипаста</button>
                <button class="btn">Закуски</button>
                <button class="btn">Десерты</button>
            </div>
            <div class="product-list" v-if="products">
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
                        <div :data-dish-external-id="product.articul" class="card-product-footer__button btn btn_red">В корзину</div>
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
        <modal-login :modalShow="modalLoginShow" @close="modalLoginHide" @auth="userAuth"/>
    </section>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
<script>
import ModalLogin from "@/components/modals/ModalLogin.vue";
import Multiselect from '@vueform/multiselect'
import Paginate from "vuejs-paginate-next";

import axios from 'axios'
import api from '@/api'

export default {
    data() {
        return {
            catalogLoading: true,
            rest: '',
            sortProductCatalog: 'Новинка',
            optionSort: [
                'По популярности',
                'Дешевле',
                'Дороже',
            ],
            selectSort: 'По популярности',
            categories: {},
            selectedCategory: {},
            products: {},
            pageNum: 1,
            modalLoginShow: false
        }
    },
    components: {
        Multiselect, Paginate, ModalLogin
    },
    methods: {
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

        fetchCategories() {
            this.catalogLoading = true
            axios
            .get(api + "/"+ this.$route.query.rest +"/categories/")
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
                .get(api + "/"+ this.$route.query.rest +"/products/?category=" + category + "&page=" + pageNum + "&ordering=" + order, {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    },
                }) 
                .then((response) => {
                    this.products = response.data.items
                    this.pageNum = response.data.num_pages
                    this.catalogLoading = false
                })
                .catch((error) => {
                    console.log(error);
                });
            } else {
                axios
                .get(api + "/"+ this.$route.query.rest +"/products/?category=" + category + "&page=" + pageNum + "&ordering=" + order) 
                .then((response) => {
                    this.products = response.data.items
                    this.pageNum = response.data.num_pages
                    this.catalogLoading = false
                })
                .catch((error) => {
                    console.log(error);
                });
            }

        },
        
        changePage(pageNum) {
            this.pageNum = pageNum
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
    },

    mounted() {
        if(!this.$route.query.rest) {
            this.$router.push({ path: this.$route.fullPath, query: { rest: 'cicheti' } })
        }

        this.fetchCategories()

        if(this.$route.query.rest === 'cicheti') {
            const smartomato = document.createElement("script");

            smartomato.setAttribute(
                "src",
                "https://smartomato.ru/basket/widget/widget.js"
                );
            document.head.appendChild(smartomato);

            // Инициализация скрипта виджета Смартомато
            smartomato.onload = function() {
                    smartomatoWidget.initialize({
                    host: "https://42227.smartomato.ru/", // Например, "//26.smartomato.ru/",
                    assetsBase: "https://smartomato.ru/basket/widget",
                    organization_id: "42227" // id вашей организации
                });
            }
        } else {
            // Добавление скрипта виджета Смартомато
            const smartomato = document.createElement("script");

            smartomato.setAttribute(
                "src",
                "https://smartomato.ru/basket/widget/widget.js"
                );
            document.head.appendChild(smartomato);

            // Инициализация скрипта виджета Смартомато
            smartomato.onload = function() {
                    smartomatoWidget.initialize({
                    host: "https://41880.smartomato.ru/", // Например, "//26.smartomato.ru/",
                    assetsBase: "https://smartomato.ru/basket/widget",
                    organization_id: "41880" // id вашей организации
                });
            }
        }
    },

    watch: {
        rest(newValue) {
            this.$router.push({ path: this.$route.fullPath, query: { rest: newValue } })
        },

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
        },
        
        $route(oldValue, newValue) {
            if(oldValue.fullPath !== newValue.fullPath) {
                window.location.reload()
            }
        }
    },

}
</script>