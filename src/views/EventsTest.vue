<template lang='pug'>
  div.full-screen-div
    p.p-5.text-3xl Demonstration of Events in Vue
    div.demo-box.pt-20.pl-20(ref="topDiv" @click="highlightDiv('topDiv')")
      div.demo-box.pt-20.pl-20(ref="midDiv" @click="highlightDiv('midDiv')")
        div.w-48.h-48.demo-box(ref="botDiv" @click.stop="highlightDiv('botDiv')" @click.right.prevent)
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component({})
  export default class EventsTest extends Vue {
    highlightDiv(refName: string) {
      (this.$refs[refName] as HTMLElement).style.backgroundColor = 'red';
      setTimeout(() => {
        (this.$refs[refName] as HTMLElement).style.backgroundColor = 'white';
      }, 1500);
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
