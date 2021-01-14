<template lang='pug'>
  div.filedrop-wrapper
    // file drop zone
    div.filedrop-box(
      :class="{'filedrop-box-dragover': isDragover}"
      @drop.prevent="dropHandler($event)"
      @dragover.prevent="setIsDragOver(true)"
      @dragleave.prevent="setIsDragOver(false)"
    )
      p.text-xl Drag and Drop Files Here
    // displaying files to user
    div.file-box(v-for="f in allFiles")
      div {{ f.name }}
      div.action-btn(@click="deleteFile(f)")
        Trash2Icon.action-icon.text-red-500
</template>

<script lang='ts'>
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Trash2Icon, FilePlusIcon } from 'vue-feather-icons';

  @Component({
    components: {
      Trash2Icon,
      FilePlusIcon
    }
  })
  export default class EventsTest extends Vue {
    allFiles: File[] = [];
    isDragover = false;

    deleteFile(file: File) {
      this.allFiles = this.allFiles.filter((f: File) => f !== file);
    }

    dropHandler(event: any) {
      const droppedFiles = event.dataTransfer.files;
      droppedFiles.forEach((f: any) => {
        this.allFiles.push(f);
      });
      this.isDragover = false;
    }

    setIsDragOver(isDragover: boolean) {
      this.isDragover = isDragover;
    }
  }
</script>

<style scoped>
  .filedrop-wrapper {
    @apply w-1/4;
    @apply h-auto;
    @apply border;
    @apply py-5;
    @apply border-black;
    @apply bg-gray-100;
    @apply flex;
    @apply items-center;
    @apply flex-col;
  }
  .filedrop-box {
    @apply border-dashed;
    @apply border-2;
    @apply border-gray-500;
    @apply rounded-sm;
    @apply bg-gray-200;
    @apply transition-all;
    @apply duration-500;
    @apply w-10/12;
    @apply h-64;
    @apply flex;
    @apply justify-center;
    @apply items-center;
  }
  .filedrop-box-dragover {
    @apply bg-gray-400;
    @apply border-gray-700;
  }
  .file-box {
    @apply w-10/12;
    @apply px-5;
    @apply py-1;
    @apply my-1;
    @apply flex;
    @apply justify-between;
    @apply border;
    @apply border-gray-500;
    @apply rounded-lg;
  }
  .action-btn {
    @apply h-8;
    @apply w-8;
    @apply rounded-sm;
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply cursor-pointer;
  }
  .action-icon {
    @apply h-4;
    @apply w-4;
  }
</style>
