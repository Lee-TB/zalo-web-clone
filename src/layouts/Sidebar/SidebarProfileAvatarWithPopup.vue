<template>
  <AppPopover v-model:visible="showAvatarPopup" placement="rightTop">
    <div class="flex">
      <AppAvatar
        class="mx-auto cursor-pointer border border-white"
        :src="'/src/assets/images/profile-avatar.jpg'"
        :alt="`account avatar`"
        :size="46"
        @click="showAvatarPopup = true"
      />
    </div>

    <template #content>
      <div
        class="w-[300px] p-2 bg-white rounded-md shadow-[0_0_15px_0px_rgba(0,0,0,0.25)]"
      >
        <div class="px-3 -mx-2 text-lg font-semibold h-[36px]">Lý Đức</div>
        <div class="border-b" />
        <div
          @click="(showProfileModal = true), (showAvatarPopup = false)"
          class="px-3 -mx-2 h-[36px] leading-[36px] text-sm font-normal hover:bg-gray-100 cursor-pointer"
        >
          Hồ sơ của bạn
        </div>
        <div
          class="px-3 -mx-2 h-[36px] leading-[36px] text-sm font-normal hover:bg-gray-100 cursor-pointer"
        >
          Cài Đặt
        </div>
        <div class="border-b" />
        <div
          class="px-3 -mx-2 h-[36px] leading-[36px] text-sm font-normal hover:bg-gray-100 cursor-pointer"
        >
          Đăng xuất
        </div>
      </div>
    </template>
  </AppPopover>
</template>

<script setup lang="ts">
import AppPopover from '@/components/AppPopover/AppPopover.vue';
import AppAvatar from '@/components/AppAvatar/AppAvatar.vue';
import { ref, inject, type Ref } from 'vue';

const showAvatarPopup = ref(true);
const showProfileModal = inject('showProfileModal') as Ref<boolean>;
</script>
