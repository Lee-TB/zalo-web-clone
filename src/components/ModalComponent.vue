<!-- Modal Component -->
<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faXmark);

interface ModalProps {
  show: boolean;
  closable: boolean;
  maskClosable: boolean;
}

const props = withDefaults(defineProps<ModalProps>(), {
  closable: false,
  maskClosable: true
});
const emit = defineEmits<{
  onClose: [value: boolean];
  onClickOutside: [value: boolean];
}>();

const modalRef = ref<HTMLElement | null>(null);

onClickOutside(modalRef, () => {
  if (props.maskClosable) {
    emit('onClickOutside', false);
  }
});
</script>
<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed top-0 left-0 w-screen h-screen bg-black/40 flex justify-center items-center"
    >
      <div ref="modalRef" class="modal relative">
        <div v-if="closable" class="absolute right-1 top-1">
          <button
            class="hover:bg-gray-200 w-[32px] h-[32px] flex justify-center items-center p-1 rounded-full"
            @click="emit('onClose', false)"
          >
            <font-awesome-icon
              class="w-[16px] h-[16px] text-gray-500 font-light"
              icon="fa-solid fa-xmark"
            />
            <span class="sr-only">close modal</span>
          </button>
        </div>

        <div class="modal-content">
          <slot
            ><p class="bg-white">
              This is the default modal text. Feel free to add your content
              here.
            </p>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
