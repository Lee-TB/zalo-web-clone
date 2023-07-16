<template>
  <div class="AppTabs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watchEffect } from 'vue';

const props = withDefaults(
  defineProps<{
    /**
     * Current TabPane's key
     */
    activeKey: string;
  }>(),
  {}
);

const emit = defineEmits<{
  (event: 'update:activeKey', value: string): void;
}>();

const selectedKey = ref(props.activeKey ||'');
provide('selectedKey', selectedKey); // provide selectedKey for TabPane

watchEffect(() => {
  emit('update:activeKey', selectedKey.value); // if selectedKey change we update activeKey
});
</script>
