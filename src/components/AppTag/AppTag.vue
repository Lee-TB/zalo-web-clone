<template>
  <div class="AppTag inline-flex items-center">
    <div
      class="text-sm"
      :class="[{ 'border rounded-md': hasSlotContent }]"
      :style="[sizeStyle, colorStyle]"
    >
      <slot />
    </div>
    <div
      v-if="!hasSlotContent"
      class="left-full border-transparent"
      :style="[{ borderWidth: size / 2 + 'px', borderLeftColor: color }]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useHasSlotContent } from '@/composables/slots';

type AppTagsProps = {
  color?: string;
  size?: number;
};

const props = withDefaults(defineProps<AppTagsProps>(), {
  color: `#cccccc`,
  size: 16
});

const hasSlotContent = ref(useHasSlotContent());

const colorStyle = computed(() => {
  let result = {};
  if (props.color) {
    result = {
      background: props.color,
      color: 'white'
    };
  }
  return result;
});

const sizeStyle = computed(() => {
  let result = {};
  if (!hasSlotContent.value && props.size) {
    result = {
      width: props.size + 'px',
      height: props.size + 'px'
    };
  }
  return result;
});
</script>

<style scoped></style>
