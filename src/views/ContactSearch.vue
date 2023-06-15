<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass);
library.add(faCircleXmark);
library.add(faUserPlus);
library.add(faUserGroup);

import { ref, watch } from 'vue';
const searchText = ref('');
const isFocus = ref(false);
watch(isFocus, () => {
  console.log(isFocus.value);
});
</script>
<template>
  <div class="h-[64px] px-[16px] flex items-center gap-2">
    <div
      class="flex items-center bg-gray-200 h-[32px] w-[240px] rounded-md focus-within:border border-blue-400 focus-within:bg-white"
    >
      <label class="cursor-pointer px-[8px]" for="search-input"
        ><font-awesome-icon
          class="text-gray-500 text-sm font-light"
          icon="fa-solid fa-magnifying-glass"
      /></label>
      <input
        ref="searchInputRef"
        id="search-input"
        type="text"
        class="outline-none bg-transparent placeholder:font-medium placeholder:text-sm"
        placeholder="Tìm kiếm"
        v-model="searchText"
        @focus="isFocus = true"
      />
      <span class="px-[8px]">
        <font-awesome-icon
          class="text-gray-500 text-sm font-light hover:text-blue-500 cursor-pointer"
          icon="fa-solid fa-circle-xmark"
          v-show="searchText"
          @click="searchText = ''"
        />
      </span>
    </div>
    <div>
      <div v-show="!isFocus">
        <button class="w-[32px] h-[32px] hover:bg-gray-200 rounded-md">
          <font-awesome-icon class="text-gray-500 text-sm" icon="fa-solid fa-user-plus" />
        </button>
        <button class="w-[32px] h-[32px] hover:bg-gray-200 rounded-md">
          <font-awesome-icon class="text-gray-500 text-sm" icon="fa-solid fa-user-group" />
        </button>
      </div>
      <div v-show="isFocus">
        <button
          @click="isFocus = false"
          class="px-3 font-semibold hover:bg-gray-200 rounded-md h-[32px]"
        >
          Đóng
        </button>
      </div>
    </div>
  </div>
</template>
