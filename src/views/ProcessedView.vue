<template>
    <div class="container">
        <router-link to="/" class="main-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke="#373737" stroke-linecap="round"/>
            </svg>
            Главная
        </router-link>
    </div>
    <section class="section section-processed container">
        <div class="d-flex justify-content-between">
            <h2 class="section-title">Заказ 567 оформлен</h2>
            <div class="checkout-step checkout-step_desc">
                <div class="checkout-step__item">
                    <span class="active">1</span>
                    <p>Обработка заказа</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="2" viewBox="0 0 90 2" fill="none">
                    <path d="M0 1L90 0.999992" stroke="#CB181A" stroke-dasharray="4 4"/>
                    </svg>
                <div class="checkout-step__item">
                    <span class="active">2</span>
                    <p>Начали готовить</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="2" viewBox="0 0 90 2" fill="none">
                    <path d="M0 1L90 0.999992" stroke="#373737" stroke-dasharray="4 4"/>
                </svg>
                <div class="checkout-step__item">
                    <span>3</span>
                    <p>Передано курьеру</p>
                </div>
            </div>
        </div>
        <p class="processed-title">Мы готовим ваш заказ, курьер свяжется с вами когда будет у вас</p>
        <div class="processed">
            <div class="processed-details">
                <div class="processed-details__item">
                    <p>Детали заказа</p>
                </div>
                <div class="processed-details__item">
                    <span>Адрес доставки</span>
                    <p>ул. Сафиуллина,66/7 кв.7, 6 этаж, домофон 55</p>
                </div>
                <div class="processed-details__item">
                    <span>Время доставки</span>
                    <p>21 августа с 8:00 до 9:00</p>
                </div>
                <div class="processed-details__item">
                    <div class="d-flex justify-content-between">
                        <div>
                            <span>Способ оплаты</span>
                            <p>онлайн</p>
                        </div>
                        <div>
                            <span>Стоимость заказа</span>
                            <p>500 ₽</p>
                        </div>
                    </div>
                </div>
                <a href="#">У меня есть вопросы по заказу</a>
            </div>
            <div class="checkout-step checkout-step_mobile">
                <div class="checkout-step-line">
                    <div class="checkout-step-line__item active"></div>
                </div>
                <div class="checkout-step__item">
                    <span class="active">1</span>
                    <p>Обработка заказа</p>
                </div>
                <div class="checkout-step-line">
                    <div class="checkout-step-line__item"></div>
                </div>
                <div class="checkout-step__item">
                    <span>2</span>
                    <p>Начали готовить</p>
                </div>
                <div class="checkout-step-line">
                    <div class="checkout-step-line__item"></div>
                </div>
                <div class="checkout-step__item">
                    <span>3</span>
                    <p>Передан курьеру</p>
                </div>
                <div class="checkout-step-line">
                    <div class="checkout-step-line__item"></div>
                </div>
            </div>
            <div class="processed-stocks">
                <div class="processed-stocks__img"></div>
                <div class="processed-stocks__info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <path d="M35.434 15.1939L13.086 32.9539C12.642 33.3239 12.494 34.0639 12.938 34.5079C13.16 34.8039 13.456 34.9519 13.826 34.9519C14.048 34.9519 14.344 34.8779 14.492 34.7299L36.84 16.9699C37.284 16.5999 37.432 15.8599 36.988 15.4159C36.618 14.8979 35.952 14.8239 35.434 15.1939Z" fill="white"/>
                        <path d="M19.0797 23.112C19.3757 23.112 19.6717 23.112 19.9677 23.038C23.0017 22.594 25.1477 19.708 24.6297 16.6C24.4077 15.12 23.5937 13.788 22.4097 12.9C21.2257 12.012 19.7457 11.642 18.2657 11.864C16.7857 12.086 15.4537 12.9 14.5657 14.084C13.6777 15.268 13.3077 16.748 13.5297 18.228C13.9737 21.114 16.4157 23.112 19.0797 23.112ZM18.5617 14.158C18.7097 14.158 18.9317 14.084 19.0797 14.084C20.7077 14.084 22.1877 15.268 22.4097 16.97C22.7057 18.82 21.4477 20.522 19.5977 20.818C17.7477 21.114 16.0457 19.856 15.7497 18.006C15.4537 16.156 16.7857 14.454 18.5617 14.158Z" fill="white"/>
                        <path d="M31.9199 26.812C28.8119 26.812 26.2959 29.328 26.2959 32.436C26.2959 35.544 28.8119 38.06 31.9199 38.06C35.0279 38.06 37.5439 35.544 37.5439 32.436C37.4699 29.328 34.9539 26.812 31.9199 26.812ZM31.9199 35.766C30.0699 35.766 28.5159 34.212 28.5159 32.362C28.5159 30.512 30.0699 28.958 31.9199 28.958C33.7699 28.958 35.3239 30.512 35.3239 32.362C35.2499 34.286 33.7699 35.766 31.9199 35.766Z" fill="white"/>
                        <circle cx="25" cy="25" r="24" stroke="white" stroke-width="2"/>
                    </svg>
                    Подписаться на наши<br>новости об акциях
                </div>
            </div>
        </div>
    </section>
</template>