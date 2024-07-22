<template>
  <div class="stories-menu-wrapper">
    <div
      class="header-stories__item"
        v-for="(story, index) in stories.stories"
        :key="story.id"
      >
      <div
        class="stories-menu-slider__item"
        :style="{ backgroundImage: 'url(' + story.preview + ')' }"
        @click="openStory(index)"
      >
      </div>
      <p>{{ story.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { useStoriesStore } from '@/stores/stories';


const stories = useStoriesStore();

const openStory = (index) => {
  stories.storyIndex = index;
  stories.isStoriesActive = true;
}

</script>

<style lang="scss" scoped>
.stories-menu-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  @media only screen and (max-width: '1024px') {
    gap: 24px;
  }
  @media only screen and (max-width: '425px') {
    gap: 18px;
    justify-content: flex-start;
  }
}
.stories-menu-slider {
  overflow: visible;

  &__item {
    width: 140px;
    height: 140px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    cursor: pointer;
    
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &-title {
      font-size: 20px;

      @media only screen and (max-width: '767px') {
        font-size: 16px;
      }
    }
    @media only screen and (max-width: '1024px') {
      width: 120px;
      height: 120px;
    }
    @media only screen and (max-width: '425px') {
      width: 100px;
      height: 100px;
    }
  }

}
</style>