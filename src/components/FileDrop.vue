<template lang='pug'>
  div.demo-box.w-64.h-64(ref="dragDiv"
    @drop.prevent="dropHandler('dragDiv')"
    @dragover.prevent="dragOverHandler('dragDiv')"
    @dragleave.prevent="dragLeaveHandler('dragDiv')")
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component({})
  export default class EventsTest extends Vue {
    dropHandler(refName: string) {
      (this.$refs[refName] as HTMLElement).style.backgroundColor = 'red';
      setTimeout(() => {
        (this.$refs[refName] as HTMLElement).style.backgroundColor = 'white';
      }, 1500);
    }

    dragOverHandler(refName: string) {
      (this.$refs[refName] as HTMLElement).style.backgroundColor = 'green';
    }

    dragLeaveHandler(refName: string) {
      (this.$refs[refName] as HTMLElement).style.backgroundColor = 'white';
    }
  }
</script>

<style scoped>
  .demo-box {
    @apply border-2;
    @apply border-black;
    @apply transition-all;
    @apply duration-500;
  }
</style>
