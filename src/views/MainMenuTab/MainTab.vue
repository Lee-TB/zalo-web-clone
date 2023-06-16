<script setup lang="ts">
import { ref } from 'vue';
import Poppover from '@/components/PopoverComponent.vue';
import Modal from '@/components/ModalComponent.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCommentDots,
  faAddressBook,
  faUser,
  faStar,
  faMessage,
  faPenToSquare
} from '@fortawesome/free-regular-svg-icons';
import {
  faSquareCheck,
  faCloud,
  faGear,
  faBriefcase,
  faDatabase,
  faWrench,
  faInfoCircle,
  faGlobe,
  faChevronRight,
  faBullhorn,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';

library.add(faCommentDots);
library.add(faSquareCheck);
library.add(faAddressBook);
library.add(faGear);
library.add(faBriefcase);
library.add(faCloud);
library.add(faUser);
library.add(faDatabase);
library.add(faWrench);
library.add(faInfoCircle);
library.add(faGlobe);
library.add(faChevronRight);
library.add(faStar);
library.add(faMessage);
library.add(faBullhorn);
library.add(faExclamationCircle);
library.add(faPenToSquare);

const showAvatarPopup = ref(false);
const showSettingPopup = ref(false);
const showToolPopup = ref(false);
const showProfileModal = ref(true);
</script>

<template>
  <div id="MainTab" class="bg-[#0091ff] h-screen w-[64px]">
    <Teleport to="#modal">
      <Modal
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
              src="@/assets/f6c7f7f2a27107eeb043983dda48bb5c (1).jpg"
              alt="profile background"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="relative">
            <div
              class="absolute w-full flex flex-col justify-center items-center top-0 translate-y-[-50%]"
            >
              <img
                src="@/assets/f6c7f7f2a27107eeb043983dda48bb5c.jpg"
                alt="profile avatar"
                class="w-[72px] h-[72px] rounded-full border"
              />
            </div>
          </div>
          <div
            class="profile-name text-[18px] font-medium mt-[46px] text-center"
          >
            Lý Đức
          </div>

          <div class="profile-info pl-[20px] h-[276px]">
            <p class="my-[14px] text-[14px] font-medium">Thông tin cá nhân</p>
            <div class="mt-[14px] mb-[22px]">
              <div class="flex text-[14px] mb-[14px]">
                <faDivide class="w-[110px] font-medium text-gray-400">
                  Điện thoại
                </faDivide>
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
                <faDivide class="w-[110px] font-medium text-gray-400">
                  Giới tính
                </faDivide>
                <div>
                  <span>Nam</span>
                </div>
              </div>
              <div class="flex text-[14px] mb-[14px]">
                <faDivide class="w-[110px] font-medium text-gray-400">
                  Ngày sinh
                </faDivide>
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
      </Modal>
    </Teleport>
    <div class="pt-8 h-[100px]">
      <Poppover v-model:visible="showAvatarPopup" placement="rightTop">
        <img
          @click="showAvatarPopup = true"
          src="@/assets/f6c7f7f2a27107eeb043983dda48bb5c.jpg"
          alt="account avatar"
          width="48"
          class="rounded-full border border-white mx-auto cursor-pointer"
        />

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
      </Poppover>
    </div>
    <div class="h-[calc(100%-100px)] flex flex-col justify-between">
      <div id="nav-tabs-top" class="w-full">
        <div
          class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
          id="message-tab"
        >
          <font-awesome-icon
            class="text-white text-2xl"
            icon="fa-regular fa-comment-dots"
          />
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
          <font-awesome-icon
            class="text-white text-2xl"
            icon="fa-solid fa-square-check"
          />
        </div>
      </div>

      <div id="nav-tabs-bottom" class="w-full">
        <div
          class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
          id="my-cloud-tab"
        >
          <font-awesome-icon
            class="text-white text-2xl"
            icon="fa-solid fa-cloud"
            title="Cloud của tôi"
          />
        </div>

        <Poppover v-model:visible="showToolPopup" placement="rightTop">
          <div
            @click="showToolPopup = true"
            class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
          >
            <font-awesome-icon
              class="text-white text-2xl"
              icon="fa-solid fa-briefcase"
              title="Công cụ"
            />
          </div>
          <template #content>
            <div
              class="bg-white rounded-md p-3 shadow-[0_0_15px_0_rgba(0,0,0,0.25)]"
            >
              <div class="flex text-[14px] text-gray-600">
                <div
                  class="w-[90px] px-2 pt-4 m-1 flex flex-col items-center gap-2 hover:bg-gray-100 cursor-pointer"
                >
                  <font-awesome-icon
                    class="text-[24px]"
                    icon="fa-regular fa-message"
                  />
                  <div class="text-center">
                    <div>Tin</div>
                    nhắn nhanh
                  </div>
                </div>
                <div
                  class="w-[90px] px-2 pt-4 m-1 flex flex-col items-center gap-2 hover:bg-gray-100 cursor-pointer"
                >
                  <font-awesome-icon
                    class="text-[24px]"
                    icon="fa-regular fa-star"
                  />
                  <div class="text-center">
                    <div>Tin</div>
                    đánh dấu
                  </div>
                </div>
                <div
                  class="w-[90px] px-2 pt-4 m-1 flex flex-col items-center gap-2 hover:bg-gray-100 cursor-pointer"
                >
                  <font-awesome-icon
                    class="text-[24px]"
                    icon="fa-solid fa-bullhorn"
                  />
                  <div class="text-center">
                    <div>Tin</div>
                    đồng thời
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Poppover>

        <Poppover v-model:visible="showSettingPopup" placement="topLeft ">
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
                  <font-awesome-icon
                    class="text-[16px]"
                    icon="fa-regular fa-user"
                  />
                  <span>Thông tin tài khoản</span>
                </div>
                <div
                  class="px-3 -mx-2 h-[36px] text-[14px] flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
                >
                  <font-awesome-icon
                    class="text-[16px]"
                    icon="fa-solid fa-gear"
                  />
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
                  <font-awesome-icon
                    class="text-[16px]"
                    icon="fa-solid fa-wrench"
                  />
                  <span>Công cụ</span>
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
                    icon="fa-solid fa-globe"
                  />
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
        </Poppover>
      </div>
    </div>
  </div>
</template>
