<template>
    <footer class="footer">
        <div class="footer-dropdowns container">
            <router-link to="/#about" class="footer-dropdowns__item">О компании</router-link>
            <router-link to="/#rests" class="footer-dropdowns__item">Заведения</router-link>
            <router-link to="/catalog" class="footer-dropdowns__item">Доставка</router-link>
        </div>
        <div class="container">
            <div class="col">
                <img src="@/assets/img/logo-footer.png" class="footer-logo" alt="RELAB FAMILY">
                <p class="footer-desc">© 2023 Relab Family</p>
            </div>
            <div class="footer-links">
                <div class="col">
                    <a href="mailto:relab@gmail.com">relab@gmail.com</a>
                    <a href="https://t.me/ReLab_Family" target="__blank" class="btn btn_socials btn_white_outline" style="width: 30px; height: 30px;;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 40 31" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03988 13.3163C13.4771 9.08244 20.4364 6.29098 23.9177 4.94188C33.8608 1.09352 35.9375 0.425187 37.2731 0.400319C37.7683 0.391356 38.2541 0.527258 38.662 0.788885C38.9483 1.01868 39.1307 1.34066 39.1729 1.69036C39.2448 2.12527 39.2649 2.56624 39.233 3.00527C38.6954 8.28977 36.3616 21.0627 35.1763 26.9658C34.6754 29.4526 33.6871 30.3013 32.7289 30.3852C30.6521 30.5624 29.0562 29.1045 27.0529 27.8766C23.901 25.9524 22.1214 24.7681 19.063 22.8781C15.5272 20.7021 17.8209 19.5178 19.8343 17.5718C20.3618 17.062 29.5169 9.30315 29.6972 8.60062C29.721 8.49688 29.7183 8.38939 29.6893 8.28681C29.6603 8.18422 29.6058 8.08941 29.5303 8.01C29.4207 7.94623 29.2966 7.90712 29.168 7.89579C29.0393 7.88446 28.9096 7.90121 28.7891 7.94472C28.4752 8.00896 23.4425 11.1061 13.6908 17.2361C12.2618 18.15 10.9674 18.5956 9.80772 18.5728C8.52895 18.5448 6.07154 17.8982 4.24185 17.3294C2.00149 16.6517 0.235253 16.2942 0.375485 15.1534C0.457843 14.5566 1.34597 13.9442 3.03988 13.3163Z" fill="#FFF"/>
                        </svg>
                    </a>
                </div>
                <div class="col">
                    <router-link to="/#about">О компании</router-link>
                    <router-link to="/#rests">Заведения</router-link>
                    <router-link to="/catalog">Доставка</router-link>
                </div>
                <div class="col">
                    <router-link to="/reserve">Забронировать</router-link>
                    <router-link to="/#store">Магазин</router-link>
                </div>
                <div class="col">
                    <router-link to="/feedback">Отзывы</router-link>
                    <router-link to="/vacation">Вакансии</router-link>
                </div>
                <div class="col">
                    <a href="/Политика_обработки_персональных_данных.pdf" target="__blank">Политика обработки<br>персональных данных </a>
                </div>
            </div>
        </div>
    </footer>
</template>