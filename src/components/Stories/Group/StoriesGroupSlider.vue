<template>
  <swiper class="stories-group-slider" :modules="swiperOptions.modules" :pagination="swiperOptions.pagination">
    <swiper-slide class="stories-group-slider__item" :style="{ backgroundColor: story.bg }"
      v-for="(story, i) in mainStory.slideGroups" :key="i">
      <div class="stories-group-slider__item-body">
        <img :src="story.image" alt="">
      </div>
    </swiper-slide>

    <div class="swiper-pagination stories-group-slider__pagination"></div>
  </swiper>
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

defineProps({
  mainStory: {
    type: Object,
    default: () => ({})
  }
});

const swiperOptions = ref({
  modules: [Pagination],
  pagination: {
    el: ".stories-group-slider__pagination",
    type: "bullets",
    clickable: false,
    renderBullet: function (index, className) {
      return (
        '<div class="' + className + '">' + "<span>" + "</span>" + "</div>"
      );
    },
  }
});


</script>

<style lang="scss" scoped>
.stories-group-slider {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.75rem;
  &__item {
    width: 100%;
    height: 100%;

    &-body {
      font-size: 20px;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: flex-start;
      justify-content: center;
      border-radius: 0.75rem;
      overflow: hidden;
      & img {
        width: 100%;
        border-radius: 0.75rem;
      }
    }
  }

  &__pagination {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 14px !important;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.8s ease;
    
    :deep(.swiper-pagination-bullet) {
      position: relative;
      width: 100%;
      flex-shrink: 10;
      border-radius: 999px;
      height: 4px;
      background-color: rgba(#ffffff, 0.16);
      overflow: hidden;
      box-shadow: 0 0 1px #ffffff59;
      border: none;
      margin-right: 0.9rem;

      &:first-child {
        margin-left: 2rem;
      }

      &:last-child {
        margin-right: 2rem;
      }

      span {
        position: absolute;
        background-color: #ffffff;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 999px;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
    }
  }
}
</style>