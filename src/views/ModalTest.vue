<template lang='pug'>
  div.flex.justify-center
    div
      h1.text-4xl Just a testing page
      button.btn(@click="modalVisible = true") Open Modal
    Modal(:isVisible="modalVisible" @cancel="modalVisible = false" @confirm="modalVisible = false")
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import Modal from '@/components/Modal.vue';

  @Component({
    components: {
      Modal
    }
  })
  export default class ModalTest extends Vue {
    modalVisible = false;
  }
</script>
