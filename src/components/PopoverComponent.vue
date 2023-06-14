<!-- Popover Component -->
<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

defineProps({ visible: Boolean, placement: String });
const emit = defineEmits(['update:visible']);

const popoverRef = ref(null);

onClickOutside(popoverRef, () => {
  emit('update:visible', false);
});
</script>
<template>
  <div class="popover relative">
    <slot>popover trigger here</slot>
    <div v-show="visible" ref="popoverRef" class="popover-content absolute" :class="placement">
      <slot name="content">content</slot>
    </div>
  </div>
</template>

<style>
.top {
  @apply bottom-full left-1/2 -translate-x-1/2 mb-2;
}

.bottom {
  @apply top-full left-1/2 -translate-x-1/2 mt-2;
}

.left {
  @apply top-1/2 right-full -translate-y-1/2 mr-2;
}

.right {
  @apply top-1/2 left-full -translate-y-1/2 ml-2;
}

.topLeft {
  @apply bottom-full left-0 mb-2;
}

.topRight {
  @apply bottom-full right-0 mb-2;
}

.bottomLeft {
  @apply top-full left-0 mt-2;
}

.bottomRight {
  @apply top-full right-0 mt-2;
}

.leftTop {
  @apply top-0 right-full mr-2;
}

.leftBottom {
  @apply bottom-0 right-full mr-2;
}

.rightTop {
  @apply top-0 left-full ml-2;
}

.rightBottom {
  @apply bottom-0 left-full ml-2;
}
</style>
