<template>
    <div
        v-if="shopCategories === 2 && categories.length !== 0"
        class="stores-categories stores-categories__clothes"
    >
        <div class="stores-sort stores-sort_desc">
            <button
                v-for="item in categories" :key="item"
                class="btn btn_store-sort"
                :class="selectedCategory === item ? 'active' : ''"
                @click="selectedCategory = item"
            >
                {{ item }}
            </button>
        </div>
    </div>
    <div v-if="shopCategories === 3" class="stores-sort stores-sort_mobile">
        <button
            v-for="item in categories" :key="item"
            class="btn btn_store-sort_mobile"
            :class="selectedCategory === item ? 'active' : ''"
            @click="selectedCategory = item"
        >
            {{ item }}
        </button>
    </div>
    <div v-if="shopCategories === 2 && !merchLoading" class="stores-merch card-list-4">
        <div v-for="merch in merchData.filter(x => x.category.real_name === selectedCategory)" :key="merch.id"
            class="card-product card-product_black"
        >
            <div class="card-product-image">
                <div class="card-product-image__img" :style="{ backgroundImage: 'url('+ merch.image +')' }"></div>
                <!-- <div class="card-product__favorite" @click="addFavorite">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25"
                        fill="none">
                        <path
                            d="M7.02858 0.524467L7.02719 0.52462C6.36972 0.596836 5.4653 0.84668 4.86561 1.12154L4.86508 1.12178C4.02311 1.50648 3.37134 1.96554 2.68089 2.66841L2.68052 2.66878C1.25523 4.11667 0.5 5.97428 0.5 8.03955C0.5 9.25331 0.735248 10.3072 1.25283 11.422C2.55477 14.2234 6.07081 17.9473 11.1539 21.8133C12.0386 22.4853 13.0014 23.1775 13.7663 23.7006C14.1494 23.9626 14.4786 24.1792 14.7216 24.3289C14.8029 24.379 14.8716 24.4198 14.9276 24.4515C15.0022 24.4086 15.0976 24.3505 15.2125 24.2777C15.5017 24.0945 15.8909 23.8335 16.3323 23.5273C17.2145 22.9153 18.2894 22.1341 19.1606 21.4589C24.032 17.6814 27.2661 14.2107 28.5756 11.4514L28.5758 11.451C28.993 10.5739 29.1941 9.86781 29.3063 8.89514C29.3322 8.66962 29.343 8.27889 29.3372 7.87568C29.3313 7.47113 29.3093 7.09962 29.2796 6.90778C29.1478 6.08409 28.9253 5.3751 28.5835 4.67077C27.5013 2.44255 25.4797 0.933954 23.1057 0.563662L23.1055 0.563622C22.7089 0.501562 21.8925 0.4809 21.4672 0.51948C19.8395 0.674084 18.3259 1.32385 16.8213 2.53815C16.6458 2.68118 16.2226 3.07445 15.8866 3.41214L15.2715 4.03283L14.9071 4.40047L14.5523 4.0236L14.3658 3.82548L14.3657 3.82554L14.3593 3.81852C14.2594 3.70821 14.1368 3.57164 14.0907 3.51824L14.0855 3.51219L14.0805 3.50598L14.0804 3.50584C14.0791 3.50434 14.0672 3.49077 14.0383 3.46112C14.0102 3.43228 13.9735 3.39589 13.9292 3.35314C13.8409 3.26782 13.7288 3.16301 13.6085 3.05313C13.3653 2.83112 13.1022 2.60094 12.9441 2.4752L12.9421 2.4736C11.6171 1.40865 10.2437 0.786242 8.77113 0.560879L8.77061 0.560799C8.622 0.537897 8.27695 0.517763 7.90031 0.509863C7.5235 0.501959 7.17807 0.507626 7.02858 0.524467ZM15.0589 24.5199C15.069 24.524 15.067 24.5223 15.0558 24.5186C15.0571 24.5192 15.0581 24.5196 15.0589 24.5199Z"
                            stroke="white" />
                    </svg>
                </div> -->
            </div>
            <h5 class="card-product__title">
                {{ merch.real_name }}
            </h5>
            <div class="card-product-footer">
                <div class="card-product-footer__price">{{ merch.price }} ₽</div>
                <button class="card-product-footer__button btn btn_red" @click="$refs.merch_info.showMerchInfo(merch)">
                    Подробнее
                </button>
            </div>
        </div>
    </div>
    <modal-merch ref='merch_info'/>
</template>
<script>
import axios from 'axios'
import api from '@/api'

// Модальное окно с подробным описанием продукта, размеров и тд, которая появляется после нажатия кнопки "Подробнее"
import ModalMerch from "@/components/modals/ModalMerch.vue";

export default {
    data() {
        return {
            merchLoading: true,
            categories: [],
            selectedCategory: 'Футболки',
            merchData: {},
            modalLoginShow: false,
            isAuth: false,
            selectItem: '',
            modalAlertsShow: false,
        }
    },

    components: {
        ModalMerch,
    },

    props: {
        shopCategories: {
            type: Number
        }
    },

    methods: {
        // Получение меча из апи
        fetchMerch() {
            this.merchLoading = true
            axios
            .get(api + "/shop/products/")
            .then((response) => {
                let categories = []
                this.merchData = response.data.items

                // Добавление категорий, которые есть среди полученных продуктов
                for(let i = 0; i < this.merchData.length; i++) {
                    categories.push(this.merchData[i].category.real_name)
                }

                this.categories = categories.filter(function(elem, index, self) {
                    return index === self.indexOf(elem);
                })

                this.merchLoading = false
            })
            .catch((error) => {
                console.log(error);
            });
        },
    },

    mounted() {
        this.fetchMerch()
    }
}
</script>
