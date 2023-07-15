<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AppPopover from '@/components/AppPopover/AppPopover.vue';

const showToolPopup = ref(false);
</script>

<template>
  <AppPopover v-model:visible="showToolPopup" placement="rightTop">
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
      <div class="bg-white rounded-md p-3 shadow-[0_0_15px_0_rgba(0,0,0,0.25)]">
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
            <font-awesome-icon class="text-[24px]" icon="fa-regular fa-star" />
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
  </AppPopover>
</template>
