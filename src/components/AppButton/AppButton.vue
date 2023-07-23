<template>
  <button class="btn" :class="classes">
    <slot>button</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  /**
   * Can be set to `primary` `dashed` `link` `text` `default`.
   */
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  /**
   * Can be set to `small` `medium` `large`.
   */
  size?: 'small' | 'medium' | 'large';
}

const props = defineProps<ButtonProps>();

const classes = computed(() => ({ 
  'btn-primary': props.type === 'primary',
  'btn-dashed': props.type === 'dashed',
  'btn-text': props.type === 'text',
  'btn-link':
    props.type === 'link',
  'btn-default':
    props.type === 'default',
  'text-sm': props.size === 'small',
  'text-md': props.size === 'medium',
  'px-4 py-2 text-lg': props.size === 'large',
}));
</script>

<style scoped>
.btn {
  @apply px-2 py-1 cursor-pointer rounded-md;
}

.btn-primary {
  @apply border border-transparent bg-blue-600 text-white hover:opacity-80;
}

.btn-dashed {
  @apply border border-dashed border-gray-300 hover:text-blue-600 hover:border-blue-600 hover:opacity-80;
}

.btn-text {
  @apply border border-transparent hover:bg-gray-200;
}

.btn-link {
  @apply border border-transparent text-blue-600 hover:opacity-80;
}

.btn-default {
  @apply border border-gray-300 hover:text-blue-600 hover:border-blue-600 hover:opacity-80;
}
</style>
