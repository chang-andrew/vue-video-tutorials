<template lang='pug'>
  div(v-if="isVisible")
    div.fixed.inset-0.z-50.flex.justify-center.items-center
      div.flex.flex-col.max-w-5xl.rounded-lg.shadow-lg.bg-white
        // header
        div.p-5
          div.flex.justify-between.items-start
            h3.text-2xl.font-semibold Modal Header
            button.p-1.leading-none(@click="emitCancel")
              div.text-xl.font-semibold.h-6.w-6
                span x
        // body
        div.p-6
          p This is a modal body content. Let's make this line a bit longer to see the width.
        // footer
        div.p-6.flex.justify-end.items-center
          button.btn-outline(@click="emitCancel") Cancel
          button.btn.ml-2(@click="emitConfirm") Confirm
    div.opacity-25.fixed.inset-0.z-40.bg-black
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Prop } from 'vue-property-decorator';

  @Component({})
  export default class Modal extends Vue {
    @Prop() isVisible!: boolean;

    emitCancel() {
      this.$emit('cancel');
    }

    emitConfirm() {
      this.$emit('confirm');
    }
  }
</script>
