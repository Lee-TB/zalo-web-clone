<template>
  <div class="inline-block overflow-hidden" :class="[classes, sizeClass]">
    <img :src="src" :alt="alt" :width="size" class="object-contain"/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type avatarProps = {
  /**
   * The address of the image for an image avatar or image element.
   */
  src?: string;

  /**
   * This attribute defines the alternative text describing the image
   */
  alt?: string;

  /**
   * The size of the avatar.
   */
  size?: number;

  /**
   * The shape of avatar
   */
  shape: 'circle' | 'square';
};
const props = withDefaults(defineProps<avatarProps>(), {
  size: 48,
  shape: 'circle'
});

const classes = computed(() => ({
  'rounded-full': props.shape === 'circle',
  'rounded-md': props.shape === 'square',
}));

const sizeClass = computed(()=> `w-[${props.size}px] h-[${props.size}px]`)
</script>
