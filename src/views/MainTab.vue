<script setup>
import { ref } from 'vue';
import Poppover from '../components/PopoverComponent.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

library.add(faCommentDots);
library.add(faSquareCheck);
library.add(faAddressBook);
library.add(faGear);
library.add(faBriefcase);
library.add(faCloud);

const showAvatarPopup = ref(false);
</script>

<template>
  <div id="MainTab" class="bg-[#0091ff] h-screen w-[64px]">
    <div class="pt-8 h-[100px]">
      <Poppover v-model:visible="showAvatarPopup" placement="rightTop">
        <img
          @click="showAvatarPopup = true"
          src="../assets/f6c7f7f2a27107eeb043983dda48bb5c.jpg"
          alt="account avatar"
          width="48"
          class="rounded-full border border-white mx-auto cursor-pointer"
        />

        <template #content>
          <div class="w-[300px] p-2 bg-white rounded-md shadow-[0_0_15px_0px_rgba(0,0,0,0.25)]">
            <div class="px-3 -mx-2 text-lg font-semibold h-[36px]">Lý Đức</div>
            <div class="border-b" />
            <a
              class="block px-3 -mx-2 h-[36px] leading-[36px] text-sm font-normal hover:bg-gray-100"
              href="#"
              >Hồ sơ của bạn</a
            >
            <a
              class="block px-3 -mx-2 h-[36px] leading-[36px] text-sm font-normal hover:bg-gray-100"
              href="#"
              >Cài Đặt</a
            >
            <div class="border-b" />
            <a
              class="block px-3 -mx-2 h-[36px] leading-[36px] text-sm font-normal hover:bg-gray-100"
              href="#"
              >Đăng xuất</a
            >
          </div>
        </template>
      </Poppover>
    </div>
    <div class="h-[calc(100%-100px)] flex flex-col justify-between">
      <div id="nav-tabs-top" class="w-full">
        <div
          class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
          id="message-tab"
        >
          <font-awesome-icon class="text-white text-2xl" icon="fa-regular fa-comment-dots" />
        </div>
        <div
          class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
          id="contact-tab"
        >
          <font-awesome-icon
            class="text-white text-2xl"
            icon="fa-regular fa-address-book"
            flip="horizontal"
          />
        </div>
        <div
          class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
          id="todo-tab"
        >
          <font-awesome-icon class="text-white text-2xl" icon="fa-solid fa-square-check" />
        </div>
      </div>
      <div id="nav-tabs-bottom" class="w-full">
        <div
          class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
          id="my-cloud-tab"
        >
          <font-awesome-icon class="text-white text-2xl" icon="fa-solid fa-cloud" />
        </div>
        <div
          class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
        >
          <font-awesome-icon class="text-white text-2xl" icon="fa-solid fa-briefcase" />
        </div>
        <div
          class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
        >
          <font-awesome-icon class="text-white text-2xl" icon="fa-solid fa-gear" />
        </div>
      </div>
    </div>
  </div>
</template>
