<template lang='pug'>
  transition(name='modal')
    div(v-if="isVisible")
      div.fixed.inset-0.z-50.flex.justify-center.items-center
        div.flex.flex-col.max-w-5xl.rounded-lg.shadow-lg.bg-white
          // header
          div.p-5
            div.flex.justify-between.items-start
              h3.text-2xl.font-semibold
                slot(name='title')
              button.p-1.leading-none(@click="emitCancel")
                div.text-xl.font-semibold.h-6.w-6
                  span x
          // body
          div.p-6
            slot(name='body')
          // footer
          slot(name='footer')
            div.p-6.flex.justify-end.items-center
              button(@click="emitCancel")
                slot(name='cancel-button')
                  button.btn-outline Cancel
              button.ml-2(@click="emitConfirm")
                slot(name='confirm-button')
                  button.btn Confirm
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

<style scoped>
  .modal-leave-active, .modal-enter-active {
    @apply duration-200;
    @apply transition;
  }
  .modal-enter, .modal-leave-to {
    @apply opacity-0;
  }
</style>
