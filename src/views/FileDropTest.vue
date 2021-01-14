<template lang='pug'>
  div.full-screen-div.flex-col
    div.p-5.text-3xl File Drop Component
    FileDrop
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import FileDrop from '@/components/FileDrop.vue';

  @Component({
    components: {
      FileDrop
    }
  })
  export default class FileDropTest extends Vue {
  }
</script>
