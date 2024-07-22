<template>
<swiper
    :slidesPerView="slidesPerView"
    :spaceBetween="20"
    :navigation="true"
    :pagination="{
    clickable: true,
    }"
    :modules="modules"
    class="mySwiper mt-4"
>
    <swiper-slide v-for="item in feedbacks" :key="item.id">
        <div v-if="popup[item.id-1]" class="feedback-card" @mouseleave="popupClose(item.id)">
            <div class="feedback-card-popup" :id="item.id" @mouseleave="popupClose(item.id)">
                Еще отзывы:
                <a v-if="popup[item.id-1]['yandex'] !== null" :href="popup[item.id-1]['yandex']" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 70 20" fill="none">
                        <path d="M66.7389 17.4151C68.1122 17.4151 69.0849 17.1698 69.8097 16.6415V14.2453C69.0659 14.7547 68.1694 15.0755 66.9105 15.0755C64.7934 15.0755 63.916 13.4529 63.916 10.8868C63.916 8.18871 64.9841 6.81135 66.9296 6.81135C68.074 6.81135 69.1994 7.20757 69.7906 7.58493V5.09437C69.1612 4.75474 68.074 4.50946 66.5863 4.50946C62.7906 4.50946 60.8261 7.20757 60.8261 10.9812C60.8451 15.1132 62.7716 17.4151 66.7389 17.4151ZM48.1803 16.3208V13.9246C47.2648 14.5472 45.7007 15.0944 44.2702 15.0944C42.0958 15.0944 41.2757 14.0755 41.1421 12H48.3138V10.4529C48.3138 6.1321 46.3874 4.50946 43.431 4.50946C39.807 4.50946 38.0904 7.24531 38.0904 11C38.0904 15.3208 40.2457 17.4151 44.0223 17.4151C45.9105 17.4151 47.3029 16.9057 48.1803 16.3208ZM20.9623 4.73588V9.64154H16.995V4.73588H14.0195V17.1698H16.995V11.9812H20.9623V17.1698H23.9378V4.73588H20.9623ZM37.3465 14.8302H36.0304V4.73588H27.371V5.79248C27.371 8.83021 27.1803 12.7547 26.1312 14.8302H25.1776V20H27.9242V17.1698H34.5808V20H37.3274V14.8302H37.3465ZM57.6599 17.1698H61.0359L56.2675 10.4717L60.4637 4.73588H57.4691L53.2729 10.4717V4.73588H50.2975V17.1698H53.2729V11.0566L57.6599 17.1698ZM43.3547 6.81135C44.8233 6.81135 45.2811 8.01889 45.2811 9.58493V9.83021H41.1421C41.2184 7.84908 41.9432 6.81135 43.3547 6.81135ZM33.055 14.8302H28.8588C29.6789 12.9623 29.9078 9.56606 29.9078 7.41512V7.03776H33.055V14.8302Z" fill="black"/>
                        <path d="M11.5395 17.1698H8.50681V2.32075H7.15259C4.67302 2.32075 3.37602 3.54717 3.37602 5.37736C3.37602 7.45283 4.27248 8.41509 6.12262 9.64151L7.6485 10.6604L3.26158 17.1698H0L3.94823 11.3585C1.67847 9.75472 0.400545 8.18868 0.400545 5.54717C0.400545 2.24528 2.72752 0 7.13352 0H11.5204V17.1698H11.5395Z" fill="#FC3F1D"/>
                    </svg>
                </a>
                <a v-if="popup[item.id-1]['gis'] !== null" :href="popup[item.id-1]['gis']" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="63" height="20" viewBox="0 0 63 20" fill="none">
                        <path d="M59.6239 7.36639H62.4915C62.1288 4.60774 60.0903 3.15771 57.2572 3.15771C54.3896 3.15771 52.4721 4.66082 52.4721 7.24261C52.4721 10.1781 54.9424 10.8323 56.2553 11.0976C57.9482 11.4336 59.6066 11.469 59.6066 12.9543C59.6066 13.9623 58.7774 14.4574 57.6027 14.4574C56.1517 14.4574 55.1843 13.7147 54.9424 12.3709H52.1094C52.2821 15.2709 54.3379 16.827 57.361 16.827C60.1594 16.827 62.4569 15.5185 62.4569 12.6891C62.4569 9.64753 59.8139 9.09938 57.9655 8.81642C56.7044 8.62193 55.3225 8.44507 55.3225 7.08343C55.3225 6.12854 56.0307 5.54501 57.2227 5.54501C58.6047 5.54501 59.4338 6.34081 59.6239 7.36639Z" fill="#403F41"/>
                        <path d="M50.5384 3.59979H47.8262V16.4202H50.5384V3.59979Z" fill="#403F41"/>
                        <path d="M39.6372 11.9464H43.1785C42.6257 13.3258 41.3819 13.9799 39.9481 13.9799C37.426 13.9799 36.2514 11.9817 36.2514 10.0012C36.2514 8.00294 37.3569 5.96938 39.9309 5.96938C41.5029 5.96938 42.6775 6.71208 43.1267 8.03833L46.0461 8.03834C45.5451 5.04989 42.9885 3.33459 39.9654 3.33459C36.2341 3.33459 33.4355 5.93399 33.4355 10.0366C33.4355 14.1922 36.4759 16.6502 39.9481 16.6502C43.3685 16.6502 46.0461 14.369 46.0461 10.797V9.75362H39.6372V11.9464Z" fill="#403F41"/>
                        <path d="M27.2336 3.33459C24.1241 3.33459 21.8266 5.33277 21.8438 8.65726H24.6424C24.6078 7.20723 25.5061 5.88099 27.0953 5.88099C28.4774 5.88099 29.2893 6.87127 29.2893 8.00295C29.2893 9.13471 28.4774 9.77133 26.9744 10.461C24.9187 11.3982 23.4504 11.9994 21.9475 12.53V16.4203H32.416V13.8031H25.2293C25.2293 13.8031 25.2532 13.7955 25.265 13.7918C26.4873 13.4127 27.4057 13.0008 28.4946 12.5123C30.8267 11.4513 32.1569 10.125 32.1569 7.86154C32.1569 5.08519 30.153 3.33459 27.2336 3.33459Z" fill="#403F41"/>
                        <path d="M14.4857 11.911C10.9616 11.9287 10.3916 14.1038 10.2016 15.9428L10.1152 16.7563H9.40688L9.32052 15.9428C9.13054 14.1038 8.5432 11.9287 5.14004 11.911C4.56999 10.7085 4.32814 9.73592 4.32814 8.63955C4.32814 5.89867 6.52205 3.3345 9.76964 3.3345C13.0173 3.3345 15.1766 5.88089 15.1766 8.65732C15.1767 9.73592 15.073 10.7085 14.4857 11.911ZM9.73515 0.0100098C4.38002 0.0100098 -0.0078125 4.50164 -0.0078125 10.0011C-0.0078125 15.5184 4.38002 20.01 9.73515 20.01C15.1421 20.01 19.5126 15.5184 19.5126 10.0011C19.5126 4.50166 15.1421 0.0100098 9.73515 0.0100098Z" fill="#29B24A"/>
                    </svg>
                </a>
            </div>
            <span @mouseover="popupShow(item.id)">#{{ item.shop }}</span>
            <div class="feedback-card__text">
                <p>{{ item.content }}</p>
            </div>
            <a :href="item.link" target="_blank">{{ item.name }}</a>
        </div>
    </swiper-slide>
</swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import axios from 'axios'
import api from '@/api'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
            popup: []
        };
    },

    data() {
        return {
            slidesPerView: 3,
            feedbacks: {}
        }
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        this.fetchFeedback()
    },

    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
        handleResize() {
            if(window.innerWidth <= 768) {
                this.slidesPerView = 1
            } 
            else {
                this.slidesPerView = 3
            }
        },

        fetchFeedback() {
            axios
            .get(api + "/reviews/")
            .then((response) => {
                this.feedbacks = response.data;
                for(let i = 0; i < response.data.length; i++) {
                    this.generatePopup(response.data[i].id, response.data[i].shop)
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
        },

        generatePopup(id, shop) {
            let popupData = {}
            popupData.id = id
            popupData.active = false
            if(shop === 'CiCheTi') {
                popupData.yandex = 'https://yandex.ru/maps/org/cicheti/159219786638/reviews/?ll=49.112233%2C55.792563&mode=search&sctx=ZAAAAAgBEAAaKAoSCWHdeHdkjkhAEep7DcFx5UtAEhIJtK1mnfF9gT8Rrws%2FOJ86dj8iBgABAgMEBSgKOABAiJ0GSAFiNnJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjpsM19kYzM1MTA2OGI3cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl93b3JsZF9mb3JtdWxhPTAuNzpsM19kYzM1MTA2OGI2cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9tYXBzX2Zvcm11bGE9MC42OmwzX2RjMzUxMDY4agJydZ0BzcxMPaABAKgBAL0BLDG9EMIBBo7H9JHRBOoBAPIBAPgBAIICDtGH0LjQutC10YLRgtC4igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=49.112233%2C55.792563&sspn=0.015873%2C0.005697&tab=reviews&text=чикетти&z=16.37'
                popupData.gis = 'https://2gis.ru/kazan/firm/70000001059080668/tab/reviews?m=49.112485%2C55.792786%2F16'
            }
            else if(shop === 'Ichi-Go Ichi-E') {
                popupData.yandex = 'https://yandex.ru/maps/org/ichi_go_ichi_e/92964854138/?ll=49.112441%2C55.792534&z=16'
                popupData.gis = 'https://2gis.ru/kazan/search/ичи%20ичи%20/firm/70000001062541165/49.112716%2C55.792683/tab/reviews'
            }
            else if(shop === 'Mr.Willard') {
                popupData.yandex = 'https://yandex.ru/maps/org/mr_willard/189942372069/reviews/?display-text=уиллард%20бар&filter=alternate_vertical%3ARequestWindow&ll=49.124357%2C55.791021&mode=search&sctx=ZAAAAAgBEAAaKAoSCRhEpKZdjkhAEYSCUrRy5UtAEhIJ7x01JsRcgj8Rtwn3yrxVdz8iBgABAgMEBSgKOABAiJ0GSAFiNnJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjpsM19kYzM1MTA2OGI3cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl93b3JsZF9mb3JtdWxhPTAuNzpsM19kYzM1MTA2OGI2cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9tYXBzX2Zvcm11bGE9MC42OmwzX2RjMzUxMDY4agJydZ0BzcxMPaABAKgBAL0BFGGgMcIBBuWtysvDBeoBAPIBAPgBAIICFdGD0LjQu9C70LDRgNC0INCx0LDRgIoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=49.124357%2C55.791021&sspn=0.031746%2C0.011394&tab=reviews&text=уиллард%20бар&z=15.37 '
                popupData.gis = null
            }
            else if(shop === 'Paranoia') {
                popupData.yandex = null
                popupData.gis = 'https://2gis.ru/kazan/firm/70000001052650986/tab/reviews?m=49.111954%2C55.793883%2F16'
            }
            else if(shop === 'Paloma Cantina') {
                popupData.yandex = 'https://yandex.ru/maps/org/paloma_cantina/131152288651/reviews/?ll=49.112441%2C55.792534&mode=search&sctx=ZAAAAAgBEAAaKAoSCWHdeHdkjkhAEep7DcFx5UtAEhIJzjRh%2B8kYfz8RRkPGo1TCcz8iBgABAgMEBSgKOABAiJ0GSAFiNnJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjpsM19kYzM1MTA2OGI3cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl93b3JsZF9mb3JtdWxhPTAuNzpsM19kYzM1MTA2OGI2cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9tYXBzX2Zvcm11bGE9MC42OmwzX2RjMzUxMDY4agJydZ0BzcxMPaABAKgBAL0BtxHxK8IBBou3pMroA%2BoBAPIBAPgBAIICDNC%2F0LDQu9C%2B0LzQsIoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=49.112441%2C55.792534&sspn=0.015121%2C0.005427&tab=reviews&text=палома&z=16.44'
                popupData.gis = 'https://2gis.ru/kazan/search/палома/firm/70000001040142857/49.112746%2C55.792601/tab/reviews'
            }
            else if(shop === 'ReLab Cocktail Bar') {
                popupData.yandex = 'https://yandex.ru/maps/org/relab/104334034324/reviews/?ll=49.112441%2C55.792534&tab=reviews&z=16.61'
                popupData.gis = 'https://2gis.ru/kazan/search/релаб/firm/2956015536834064/49.112652%2C55.792535/tab/reviews'
            }

            this.popup.push(popupData)
        },

        popupShow(id) {
            document.getElementById(id).classList.add('active')
        }, 

        popupClose(id) {
            document.getElementById(id).classList.remove('active')
        }
    },
};
</script>