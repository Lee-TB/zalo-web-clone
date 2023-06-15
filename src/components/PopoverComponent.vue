<!-- Popover Component -->
<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

interface PopoverProps {
  visible: boolean;
  placement?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'topLeft '
    | 'topRight '
    | 'bottomLeft '
    | 'bottomRight '
    | 'leftTop '
    | 'leftBottom '
    | 'rightTop'
    | 'rightBottom';
}

withDefaults(defineProps<PopoverProps>(), {
  placement: 'bottom'
});

const emit = defineEmits<{
  'update:visible': [value: boolean];
  clickOutside: [value: boolean];
}>();

const popoverRef = ref<HTMLElement | null>(null);

onClickOutside(popoverRef, () => {
  emit('clickOutside', false);
  emit('update:visible', false);
});
</script>
<template>
  <div class="popover relative">
    <slot>popover trigger here</slot>
    <div
      v-show="visible"
      ref="popoverRef"
      class="popover-content absolute z-50"
      :class="placement"
    >
      <slot name="content">content</slot>
    </div>
  </div>
</template>

<style scoped>
.top {
  @apply bottom-full left-1/2 -translate-x-1/2;
}

.bottom {
  @apply top-full left-1/2 -translate-x-1/2;
}

.left {
  @apply top-1/2 right-full -translate-y-1/2;
}

.right {
  @apply top-1/2 left-full -translate-y-1/2;
}

.topLeft {
  @apply bottom-full left-0;
}

.topRight {
  @apply bottom-full right-0;
}

.bottomLeft {
  @apply top-full left-0;
}

.bottomRight {
  @apply top-full right-0;
}

.leftTop {
  @apply top-0 right-full;
}

.leftBottom {
  @apply bottom-0 right-full;
}

.rightTop {
  @apply top-0 left-full;
}

.rightBottom {
  @apply bottom-0 left-full;
}
</style>
