<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, inject, type Ref } from 'vue';
import AppPopover from '@/components/AppPopover/AppPopover.vue';
const showSettingPopup = ref(false);
const showProfileModal = inject('showProfileModal') as Ref<boolean>;
</script>

<template>
  <AppPopover v-model:visible="showSettingPopup" placement="topLeft ">
    <div
      @click="showSettingPopup = true"
      class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
    >
      <font-awesome-icon
        class="text-white text-2xl"
        icon="fa-solid fa-gear"
        title="Cài đặt"
      />
    </div>
    <template #content>
      <div
        class="bg-white w-[220px] p-2 ml-2 rounded-md shadow-[0_0_10px_0_rgba(0,0,0,0.25)]"
      >
        <div class="text-gray-600 font-normal">
          <div
            @click="(showSettingPopup = false), (showProfileModal = true)"
            class="px-3 -mx-2 h-[36px] text-[14px] flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
          >
            <font-awesome-icon class="text-[16px]" icon="fa-regular fa-user" />
            <span>Thông tin tài khoản</span>
          </div>
          <div
            class="px-3 -mx-2 h-[36px] text-[14px] flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
          >
            <font-awesome-icon class="text-[16px]" icon="fa-solid fa-gear" />
            <span>Cài đặt</span>
          </div>
          <div class="px-3 -mx-2 border-b" />
          <div
            class="px-3 -mx-2 h-[36px] text-[14px] flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
          >
            <font-awesome-icon
              class="text-[16px]"
              icon="fa-solid fa-database"
            />
            <span>Dữ liệu</span>
            <font-awesome-icon
              class="ml-auto"
              icon="fa-solid fa-chevron-right"
            />
          </div>
          <div
            class="px-3 -mx-2 h-[36px] text-[14px] flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
          >
            <font-awesome-icon class="text-[16px]" icon="fa-solid fa-wrench" />
            <span>Công cụ</span>
            <font-awesome-icon
              class="ml-auto"
              icon="fa-solid fa-chevron-right"
            />
          </div>
          <div
            class="px-3 -mx-2 h-[36px] text-[14px] flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
          >
            <font-awesome-icon class="text-[16px]" icon="fa-solid fa-globe" />
            <span>Ngôn ngữ</span>
            <font-awesome-icon
              class="ml-auto"
              icon="fa-solid fa-chevron-right"
            />
          </div>
          <div
            class="px-3 -mx-2 h-[36px] text-[14px] flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
          >
            <font-awesome-icon
              class="text-[16px]"
              icon="fa-solid fa-info-circle"
            />
            <span> Giới thiệu </span>
            <font-awesome-icon
              class="ml-auto"
              icon="fa-solid fa-chevron-right"
            />
          </div>
          <div class="px-3 -mx-2 border-b" />
          <div
            class="px-3 -mx-2 h-[36px] text-[14px] flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
          >
            <div class="w-[16px]" />
            <span class="text-red-600">Đăng xuất</span>
          </div>
        </div>
      </div>
    </template>
  </AppPopover>
</template>
