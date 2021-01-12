declare module '*.vue' {
  import Vue from 'vue';

  declare module 'vue/types/vue' {
    interface Vue {
      $bus: Vue;
    }
  }

  export default Vue;
}
