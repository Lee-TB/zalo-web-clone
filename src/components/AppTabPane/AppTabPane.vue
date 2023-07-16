<template>
  <div class="AppTabPane" @click="selectedKey = key">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref, inject, getCurrentInstance } from 'vue';

const selectedKey = inject('selectedKey') as Ref<string>; // receive selectedKey from Tabs component

const currentInstance = getCurrentInstance(); // get current component instance
const key = ref(currentInstance?.vnode.key) as Ref<string>; // get key prop is passed in this component
</script>
