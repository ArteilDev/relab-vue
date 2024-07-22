<template>
    <div class="container">
        <router-link to="/" class="main-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke="#373737" stroke-linecap="round"/>
            </svg>
            Главная
        </router-link>
    </div>
    <section class="section section-checkout container">
        <div class="d-flex justify-content-between">
            <h2 class="section-title">Оформление заказа</h2>
            <div class="checkout-step checkout-step_desc">
                <div class="checkout-step__item">
                    <span class="active">1</span>
                    <p>Корзина</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="2" viewBox="0 0 90 2" fill="none">
                    <path d="M0 1L90 0.999992" stroke="#CB181A" stroke-dasharray="4 4"/>
                    </svg>
                <div class="checkout-step__item">
                    <span class="active">2</span>
                    <p>Оформление заказа </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="2" viewBox="0 0 90 2" fill="none">
                    <path d="M0 1L90 0.999992" stroke="#373737" stroke-dasharray="4 4"/>
                </svg>
                <div class="checkout-step__item">
                    <span>3</span>
                    <p>Заказ принят </p>
                </div>
            </div>
        </div>
        <div class="checkout">
            <div class="checkout-left">
                <p class="checkout-left__title" style="margin-top: 0;">Выберите способ доставки</p>
                <div class="radio-wrapper">
                    <input class="radio-1" v-model="deliveryType" type="radio" name="delivery" id="delivery-rest" value="1">
                    <label for="delivery-rest" class="option option-1">
                        <div class="dot"></div>
                        <span>В ресторане</span>
                    </label>
                </div>
                <div class="radio-wrapper">
                    <input class="radio-2" v-model="deliveryType" type="radio" name="delivery" id="delivery-home" value="2">
                    <label for="delivery-home" class="option option-2">
                        <div class="dot"></div>
                        <span>Доставка</span>
                    </label>
                </div>
                <div v-if="deliveryType == 2" class="checkout-left-address">
                    <div class="checkout-left-address__item">
                        <div class="d-flex">
                            <p>Мой адрес</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M22.4121 3.7207C21.4306 3.7207 20.4499 4.10093 19.6875 4.86328L5.06836 19.4824L4.86328 19.6875L4.80469 19.9805L3.7793 25.1367L3.48633 26.5137L4.86328 26.2207L10.0195 25.1953L10.3125 25.1367L10.5176 24.9316L25.1367 10.3125C26.6614 8.78779 26.6614 6.38799 25.1367 4.86328C24.3744 4.10093 23.3936 3.7207 22.4121 3.7207ZM22.4121 5.50781C22.8837 5.50781 23.362 5.72525 23.8184 6.18164C24.7311 7.09443 24.7311 8.08135 23.8184 8.99414L23.1445 9.63867L20.3613 6.85547L21.0059 6.18164C21.4623 5.72525 21.9405 5.50781 22.4121 5.50781ZM19.043 8.17383L21.8262 10.957L10.4883 22.2949C9.87482 21.0944 8.90563 20.1252 7.70508 19.5117L19.043 8.17383ZM6.50391 21.0352C7.62805 21.4907 8.50932 22.372 8.96484 23.4961L5.88867 24.1113L6.50391 21.0352Z" fill="#373737"/>
                            </svg>
                        </div>
                        <span>пл. Манежная, дом 2 кв 65</span>
                    </div>
                    <div class="checkout-left-address__item checkout-left-address__item_empty">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M1 14.9333H29" stroke="#373737" stroke-linecap="round"/>
                            <path d="M15 1V29" stroke="#373737" stroke-linecap="round"/>
                        </svg>
                        <p>Добавить адрес</p>
                    </div>
                </div>
                <div class="checkout-left-rest">
                    <p>Казань, Рихарда Зорге, 10</p>
                    <p>Пн-вс: 10:00-21:00</p>
                </div>
                <div class="radio-wrapper">
                    <input class="radio-1" v-model="receivingType" type="radio" name="feeding" id="feeding-tray" value="1" checked>
                    <label for="feeding-tray" class="option option-1">
                        <div class="dot"></div>
                        <span>На подносе</span>
                    </label>
                </div>
                <div class="radio-wrapper">
                    <input class="radio-1" v-model="receivingType" type="radio" name="feeding" id="feeding-self" value="2">
                    <label for="feeding-self" class="option option-1">
                        <div class="dot"></div>
                        <span>С собой</span>
                    </label>
                </div>
                <p class="checkout-left__title">Время выдачи</p>
                <div class="radio-wrapper">
                    <input class="radio-1" v-model="issueType" type="radio" name="time" id="time-now" value="1" checked>
                    <label for="time-now" class="option option-1">
                        <div class="dot"></div>
                        <span>Ближайшее</span>
                    </label>
                </div>
                <div class="checkout-left-cooktime" style="margin-top: 24px; display: flex; align-items: center; gap: 7px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M12.4997 2.08337C6.75596 2.08337 2.08301 6.75633 2.08301 12.5C2.08301 18.2438 6.75596 22.9167 12.4997 22.9167C18.2434 22.9167 22.9163 18.2438 22.9163 12.5C22.9163 6.75633 18.2434 2.08337 12.4997 2.08337ZM12.4997 3.64587C17.399 3.64587 21.3538 7.60077 21.3538 12.5C21.3538 17.3993 17.399 21.3542 12.4997 21.3542C7.6004 21.3542 3.64551 17.3993 3.64551 12.5C3.64551 7.60077 7.6004 3.64587 12.4997 3.64587ZM11.7062 6.23885C11.4992 6.24209 11.3019 6.32736 11.1577 6.47594C11.0135 6.62452 10.9342 6.82426 10.9372 7.03129V12.7605C10.9372 12.9676 11.0195 13.1663 11.1661 13.3128L13.7702 15.917C13.8422 15.992 13.9284 16.0518 14.0239 16.0931C14.1193 16.1343 14.2219 16.1561 14.3259 16.1571C14.4298 16.1582 14.5329 16.1385 14.6292 16.0992C14.7254 16.0599 14.8128 16.0018 14.8863 15.9283C14.9598 15.8548 15.0179 15.7674 15.0572 15.6712C15.0965 15.575 15.1162 15.4719 15.1151 15.3679C15.1141 15.264 15.0923 15.1613 15.051 15.0659C15.0098 14.9705 14.9499 14.8842 14.875 14.8123L12.4997 12.437V7.03129C12.5012 6.92673 12.4817 6.82292 12.4423 6.72604C12.403 6.62915 12.3445 6.54115 12.2706 6.46725C12.1966 6.39335 12.1085 6.33506 12.0115 6.29582C11.9146 6.25659 11.8108 6.23722 11.7062 6.23885Z" fill="#373737"/>
                    </svg>
                    <p style="text-decoration: underline;">Приготовим за 10 минут</p>
                </div>
                <div class="radio-wrapper checkout-left-later">
                    <input class="radio-1" v-model="issueType" type="radio" name="time" id="time-later" value="2">
                    <label for="time-later" class="option option-1">
                        <div class="dot"></div>
                        <span>Заберу позже</span>
                    </label>
                </div>
                <div class="d-flex checkout-left-selects">
                    <multiselect class="checkout-select" v-model="selectIssueDate" :options="optionIssueDate" :canDeselect="false"></multiselect>
                    <multiselect class="checkout-select" v-model="selectIssueTime" :options="optionIssueTime" :canDeselect="false" style="width: 50%;"></multiselect>
                </div>
                <div>
                    <p class="checkout-left__title" for="name">Имя</p>
                    <input class="input" type="text" name="name" id="name" placeholder="Маруся">
                </div>
                <div>
                    <p class="checkout-left__title" for="phone">Телефон</p>
                    <input class="input" type="text" name="phone" id="phone" placeholder="+7 000 000 00 00">
                </div>
                <p class="checkout-left__title">Способ оплаты</p>
                <div class="checkout-left-pay">
                    <div class="pay-method">
                        <input class="pay-method__radio" type="radio" name="pay" id="pay-card" checked>
                        <label for="pay-card" class="pay-method-option option-1">
                            <div class="pay-method__body pay-method__body_card">
                                <span>**7684</span>
                            </div>
                        </label>
                    </div>
                    <div class="pay-method">
                        <input class="pay-method__radio" type="radio" name="pay" id="pay-sbp" >
                        <label for="pay-sbp" class="pay-method-option option-1">
                            <div class="pay-method__body pay-method__body_sbp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="35" viewBox="0 0 70 35" fill="none">
                                    <path d="M61.3598 13.7951V22.3521H58.292V16.3496H55.3382V22.3521H52.2705V13.7946H61.3598V13.7951Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9699 22.6577C48.7164 22.6577 50.7557 20.9806 50.7557 18.4385C50.7557 15.9777 49.2511 14.3799 46.7365 14.3799C45.576 14.3799 44.6185 14.7868 43.8972 15.4889C44.0694 14.0378 45.3014 12.9785 46.6578 12.9785C46.9708 12.9785 49.3275 12.9735 49.3275 12.9735L50.6599 10.4331C50.6599 10.4331 47.7014 10.5002 46.326 10.5002C43.1833 10.555 41.0605 13.4002 41.0605 16.8556C41.0605 20.8818 43.1309 22.658 45.9702 22.658L45.9699 22.6577ZM45.9869 16.6299C47.0065 16.6299 47.7134 17.2972 47.7134 18.4382C47.7134 19.4649 47.0853 20.3113 45.9869 20.3136C44.9362 20.3136 44.2293 19.5296 44.2293 18.4557C44.2293 17.3144 44.9362 16.6299 45.9869 16.6299Z" fill="black"/>
                                    <path d="M38.5633 19.4872C38.5633 19.4872 37.8388 19.9031 36.7565 19.9819C35.5129 20.0186 34.4045 19.2361 34.4045 17.8457C34.4045 16.4895 35.3826 15.7122 36.7255 15.7122C37.5489 15.7122 38.6383 16.2806 38.6383 16.2806C38.6383 16.2806 39.4354 14.8238 39.8483 14.0952C39.0922 13.5244 38.0851 13.2114 36.9138 13.2114C33.9576 13.2114 31.668 15.1312 31.668 17.8285C31.668 20.5603 33.82 22.4354 36.9138 22.3785C37.7785 22.3464 38.9715 22.0443 39.6986 21.5791L38.5633 19.4872Z" fill="black"/>
                                    <path d="M0.841797 7.61829L5.09725 15.1943V19.8155L0.846775 27.3767L0.841797 7.61829Z" fill="#5B57A2"/>
                                    <path d="M17.1807 12.4376L21.1682 10.0033L29.3289 9.99573L17.1807 17.4081V12.4376Z" fill="#D90751"/>
                                    <path d="M17.1579 7.57371L17.1805 17.6041L12.915 14.9937V0L17.1579 7.57371Z" fill="#FAB718"/>
                                    <path d="M29.3286 9.99571L21.1677 10.0033L17.1579 7.57371L12.915 0L29.3286 9.99571Z" fill="#ED6F26"/>
                                    <path d="M17.1805 27.4187V22.5523L12.915 19.9915L12.9174 35L17.1805 27.4187Z" fill="#63B22F"/>
                                    <path d="M21.1586 25.0066L5.09696 15.1943L0.841797 7.61829L29.3119 24.9967L21.1586 25.0066Z" fill="#1487C9"/>
                                    <path d="M12.918 35L17.1805 27.4187L21.158 25.0066L29.3114 24.9967L12.918 35Z" fill="#017F36"/>
                                    <path d="M0.84668 27.3768L12.9504 19.9918L8.88115 17.505L5.09716 19.8156L0.84668 27.3768Z" fill="#984995"/>
                                </svg>
                            </div>
                        </label>
                    </div>
                    <div class="pay-method">
                        <input class="pay-method__radio" type="radio" name="pay" id="pay-newcard" >
                        <label for="pay-newcard" class="pay-method-option option-1">
                            <div class="pay-method__body">
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
                        </label>
                    </div>
                    <div class="pay-method">
                        <input class="pay-method__radio" type="radio" name="pay" id="pay-cash" >
                        <label for="pay-cash" class="pay-method-option option-1">
                            <div class="pay-method__body">
                                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M9 14H12" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> 
                                        <path d="M10 12V8.2C10 8.0142 10 7.9213 10.0123 7.84357C10.0801 7.41567 10.4157 7.08008 10.8436 7.01231C10.9213 7 11.0142 7 11.2 7H13.5C14.8807 7 16 8.11929 16 9.5C16 10.8807 14.8807 12 13.5 12H10ZM10 12V17M10 12H9" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                                    </g>
                                </svg>
                                <p>Наличные</p>
                            </div>
                        </label>
                    </div>
                </div>
                <p class="checkout-left__title">Комментарий к заказу</p>
                <textarea type="text" class="textarea checkout-left-comment" name="comment" id="comment" rows="3"></textarea>
            </div>
            <div class="checkout-right">
                <div class="checkout-right-order">
                    <p class="checkout-left__title" style="margin-top: 0;">Ваш заказ</p>
                    <div class="checkout-right-order__item">
                        <div class="col">
                            <p>Татарсткий рибай</p>
                            <p>740 гр - 1 шт</p>
                        </div>
                        <div class="col">
                            <span>200 ₽</span>
                        </div>
                    </div>
                    <div class="checkout-right-order__item">
                        <div class="col">
                            <p>Чай татарсткий</p>
                            <p>1 шт</p>
                        </div>
                        <div class="col">
                            <span>200 ₽</span>
                        </div>
                    </div>
                    <div class="checkout-right-order__item">
                        <div class="col">
                            <p>Скидка по промокоду</p>
                            <p>Доставка</p>
                        </div>
                        <div class="col">
                            <span>- 60 ₽</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between checkout-right-total">
                        <p class="checkout-left__title" style="margin-top: 0;">К оплате</p>
                        <span class="checkout-right__total-price">140 ₽</span>
                    </div>
                    <button class="btn btn_red btn_lg" style="width: 100%;">Оплатить заказ</button>
                    <a href="#" class="checkout-right__conditions">
                        Узнать условия доставки
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <circle cx="11" cy="11" r="11" fill="#CB181A"/>
                            <path d="M9 5L14.2929 10.2929C14.6834 10.6834 14.6834 11.3166 14.2929 11.7071L9 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </a>
                    <div class="checkout-step checkout-step_mobile">
                        <div class="checkout-step-line">
                            <div class="checkout-step-line__item active"></div>
                        </div>
                        <div class="checkout-step__item">
                            <span class="active">1</span>
                            <p>Корзина</p>
                        </div>
                        <div class="checkout-step-line">
                            <div class="checkout-step-line__item active"></div>
                        </div>
                        <div class="checkout-step__item">
                            <span class="active">2</span>
                            <p>Оформление заказа </p>
                        </div>
                        <div class="checkout-step-line">
                            <div class="checkout-step-line__item"></div>
                        </div>
                        <div class="checkout-step__item">
                            <span>3</span>
                            <p>Заказ принят </p>
                        </div>
                        <div class="checkout-step-line">
                            <div class="checkout-step-line__item"></div>
                        </div>
                    </div>
                    <div class="checkout-right__points">
                        <div class="checkout-right__points_header">
                            <p>Начислим баллов за заказ</p>
                            <p>+ 100 ₽</p>
                        </div>
                        <div class="checkout-right__points_body">
                            <span>Подробнее о системе баллов и как ими пользоваться можно почитать <a href="#">тут</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Multiselect from '@vueform/multiselect'
export default {
    data() {
        return {
            deliveryType: 1,
            receivingType: 1,
            issueType: 1,
            selectIssueDate: 'Сегодня, 16 августа',
            selectIssueTime: '15:00',
            optionIssueDate: [
                'Сегодня, 16 августа'
            ],
            optionIssueTime: [
                '15:00',
                '17:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
            ]
        }
    },

    components: {
        Multiselect
    }
}
</script>