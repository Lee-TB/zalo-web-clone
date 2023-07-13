<template>
  <button class="px-2 py-1 cursor-pointer rounded-md" :class="classes">
    <slot>button</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  /**
   * Can be set to primary dashed link text default
   */
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
}

const props = defineProps<ButtonProps>();

const classes = computed(() => ({
  'border border-transparent bg-blue-600 text-white hover:opacity-80':
    props.type === 'primary',
  'border border-dashed border-gray-300 hover:text-blue-600 hover:border-blue-600 hover:opacity-80':
    props.type === 'dashed',
  'border border-transparent hover:bg-gray-200': props.type === 'text',
  'border border-transparent text-blue-600 hover:opacity-80':
    props.type === 'link',
  'border border-gray-300 hover:text-blue-600 hover:border-blue-600 hover:opacity-80':
    props.type === 'default' || props.type === undefined
}));
</script>

<style scoped></style>
