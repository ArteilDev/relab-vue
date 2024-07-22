<template>
    <div class="modal-wrapper" :class="show ? 'active' : ''">
        <div v-if="merch" class="modal-merch">
            <div class="modal-close" @click="show = false; merch = null">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M1 1L17 17" stroke="#1C1C1C" stroke-linecap="round"/>
                    <path d="M17 1L0.999999 17" stroke="#1C1C1C" stroke-linecap="round"/>
                </svg>
            </div>
            <p class="modal-merch__title modal-merch__title_mobile">{{ merch.real_name }}</p>
            <div class="modal-merch-img">
                <swiper
                    :slidesPerView="1"
                    :spaceBetween="20"
                    :navigation="true"
                    :pagination="{
                        clickable: true,
                    }"
                    :modules="modules"
                    class="merch-swiper">
                    
                    <swiper-slide v-for="n in 3" :key="n">
                        <div class="modal-merch-img__img" :style="{ backgroundImage: 'url(' + merch.image + ')' }"></div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="modal-merch-info">
                <p class="modal-merch__title modal-merch__title_desc">{{ merch.real_name }}</p>
                <div class="modal-merch__subtitle">Не следует, однако забывать, что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Равным образом укрепление и развитие структуры в значительной степени обуславливает создание форм развития. </div>
                <p>Размеры</p>
                <div class="modal-merch-sizes">
                    <span
                        :class="size === 'XS' ? 'active' : ''"
                        @click="size = 'XS'"
                    >
                        XS
                    </span>
                    <span
                        :class="size === 'S' ? 'active' : ''"
                        @click="size = 'S'"
                    >
                        S
                    </span>
                    <span
                        :class="size === 'M' ? 'active' : ''"
                        @click="size = 'M'"
                    >
                        M
                    </span>
                    <span
                        :class="size === 'XL' ? 'active' : ''"
                        @click="size = 'XL'"
                    >
                        XL
                    </span>
                </div>
                <p>Доставка</p>
                <div class="modal-merch-delivery">
                    <span
                        :class="delivery === 'Самовывоз' ? 'active' : ''"
                        @click="delivery = 'Самовывоз'"
                    >
                        Самовывоз
                    </span>
                    <span
                        :class="delivery === 'Доставка по адресу' ? 'active' : ''"
                        @click="delivery = 'Доставка по адресу'"
                    >
                        Доставка по адресу
                    </span>
                </div>
                <div class="modal-merch-footer">
                    <div class="modal-merch-footer-row">
                        <span>Цена</span>
                        <span>{{ merch.price }} ₽</span>
                    </div>
                    <button class="btn btn_red" @click="addCart(merch)">Добавить в корзину</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    data() {
        return {
            show: false,
            merch: null,
            size: 'XS',
            delivery: 'Самовывоз'
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

    methods: {
        showMerchInfo(merch) {
            this.show = true
            this.merch = merch
        },

        // Добавление в корзину
        addCart(merch) {
            // Если в локальном хранилище есть корзина с объектами, то получаем их, если нет, создаем пустой массив
            const array = JSON.parse(localStorage.getItem('cart')) ?? [];
            // Если в корзине имеется такой же продукт, который мы хотим добавить, с тем же размером, присваиваем к переменной
            const elem = array.find(item => item.id === merch.id && item.size === this.size);
            
            // Если при прошлой проверке, нашелся такой же товар, с тем же размером, добавляем количество
            if (elem) {
                elem.count++;
            // Иначе, в массив корзины добавляется новый объект товара
            } else {
                let product = {
                    id: merch.id,
                    name: merch.real_name,
                    image: merch.image,
                    thumbnail: merch.thumbnail,
                    price: merch.price,
                    size: this.size,
                    count: 1
                }

                array.push(product);
            }

            // Помещаем сформированный массив корзины в локальное хранилище
            localStorage.setItem('cart', JSON.stringify(array));
            this.show = false

            // Событие для проверки, было ли добавление в корзину (чтобы обновить navbar)
            window.dispatchEvent(new CustomEvent('add-to-cart', {
                detail: {
                    storage: localStorage.getItem('cart')
                }
            }));
        }
    }
}
</script>