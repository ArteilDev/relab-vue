<template>
    <div class="container">
        <router-link to="/" class="main-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 13L1.70711 7.70711C1.31658 7.31658 1.31658 6.68342 1.70711 6.29289L7 1" stroke="#373737"
                    stroke-linecap="round" />
            </svg>
            Главная
        </router-link>
    </div>
    <section class="section section-feedback container">
        <div class="d-flex justify-content-between align-items-center">
            <h2 class="section-title">Отзывы</h2>
        </div>
        <feedbacks />
    </section>
</template>
<script>
import Feedbacks from '@/components/Feedbacks.vue'

export default {
    components: {
        Feedbacks
    },
};
</script>