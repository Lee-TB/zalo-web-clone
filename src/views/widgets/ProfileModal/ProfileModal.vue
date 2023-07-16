<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { AppModal } from '@/components/AppModal';
import { inject, ref, type Ref } from 'vue'

const showProfileModal: Ref<boolean> = inject('showProfileModal', ref(false)); // ref false if showProfileModal not provide 
</script>

<template>
  <AppModal
      :show="showProfileModal"
      :closable="true"
      @onClickOutside="showProfileModal = false"
      @onClose="showProfileModal = false"
    >
      <div class="w-[352px] bg-white rounded-md">
        <div class="h-[48px] text-[16px] font-medium flex items-center pl-3">
          Thông tin tài khoản
        </div>
        <div class="h-[130px] object-contain">
          <img
            src="@/assets/images/profile-background.jpg"
            alt="profile background"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="relative">
          <div
            class="absolute w-full flex flex-col justify-center items-center top-0 translate-y-[-50%]"
          >
            <img
              src="@/assets/images/profile-avatar.jpg"
              alt="profile avatar"
              class="w-[72px] h-[72px] rounded-full border"
            />
          </div>
        </div>
        <div class="profile-name text-[18px] font-medium mt-[46px] text-center">
          Lý Đức
        </div>

        <div class="profile-info pl-[20px] h-[276px]">
          <p class="my-[14px] text-[14px] font-medium">Thông tin cá nhân</p>
          <div class="mt-[14px] mb-[22px]">
            <div class="flex text-[14px] mb-[14px]">
              <div class="w-[110px] font-medium text-gray-400">
                Điện thoại
              </div>
              <div>
                <span>+84337611246</span>
                <font-awesome-icon
                  title="Thông tin này chỉ hiển thị với những người đã lưu số điện thoại của bạn trong danh bạ"
                  icon="fa-solid fa-exclamation-circle"
                  class="text-gray-400 ml-2"
                />
              </div>
            </div>
            <div class="flex text-[14px] mb-[14px]">
              <div class="w-[110px] font-medium text-gray-400">
                Giới tính
              </div>
              <div>
                <span>Nam</span>
              </div>
            </div>
            <div class="flex text-[14px] mb-[14px]">
              <div class="w-[110px] font-medium text-gray-400">
                Ngày sinh
              </div>
              <div>
                <span>24 tháng 12, 1999</span>
              </div>
            </div>
          </div>
        </div>

        <div class="profile-actions px-[20px] py-[16px]">
          <div
            class="px-[16px] flex items-center justify-center bg-gray-200 rounded-sm cursor-pointer h-[40px] hover:bg-gray-300"
          >
            <div class="flex gap-2 text-[16px]">
              <span
                ><font-awesome-icon icon="fa-regular fa-pen-to-square"
              /></span>
              <span class="font-medium">Cập nhật thông tin</span>
            </div>
          </div>
        </div>
      </div>
    </AppModal>
</template>
