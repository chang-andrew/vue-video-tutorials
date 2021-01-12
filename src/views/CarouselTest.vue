<template lang='pug'>
  div.flex.justify-center
    div
      h1.text-4xl Image Carousel w/ Transitions
      Carousel
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import Carousel from '@/components/Carousel.vue';

  @Component({
    components: {
      Carousel
    }
  })
  export default class CarouselTest extends Vue {
    modalVisible = false;
  }
</script>
