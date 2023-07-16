<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './font-awesome-icon';

import SidebarProfileAvatarWithPopup from './SidebarProfileAvatarWithPopup.vue';
import SidebarMyCloud from './SidebarMyCloud.vue';
import SidebarToolPopup from './SidebarToolPopup.vue';
import SidebarSettingPopup from './SidebarSettingPopup.vue';

import { AppTabs } from '@/components/AppTabs';
import { AppTabPane } from '@/components/AppTabPane';

import { inject, type Ref } from 'vue';

const selectedTab = inject('selectedTab') as Ref<string>;
</script>

<template>
  <div id="MainTab" class="bg-[#0091ff] h-screen w-[64px]">
    <div class="pt-8 h-[100px]">
      <SidebarProfileAvatarWithPopup />
    </div>
    <div class="h-[calc(100%-100px)] flex flex-col justify-between">
      <div id="nav-tabs-top" class="w-full">
        <AppTabs v-model:activeKey="selectedTab">
          <AppTabPane
            key="Messages"
            class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
            :class="selectedTab === 'Messages' ? 'bg-[#006edc]' : ''"
            id="message-tab"
          >
            <font-awesome-icon
              class="text-white text-2xl"
              icon="fa-regular fa-comment-dots"
            />
          </AppTabPane>
          <AppTabPane
            key="Contacts"
            class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
            :class="selectedTab === 'Contacts' ? 'bg-[#006edc]' : ''"
            id="contact-tab"
          >
            <font-awesome-icon
              class="text-white text-2xl"
              icon="fa-regular fa-address-book"
              flip="horizontal"
            />
          </AppTabPane>
          <AppTabPane
            key="Todo"
            class="h-[64px] w-full flex items-center justify-center hover:bg-[#006edc] cursor-pointer"
            :class="selectedTab === 'Todo' ? 'bg-[#006edc]' : ''"
            id="todo-tab"
          >
            <font-awesome-icon
              class="text-white text-2xl"
              icon="fa-solid fa-square-check"
            />
          </AppTabPane>
        </AppTabs>
      </div>

      <div id="nav-tabs-bottom" class="w-full">
        <SidebarMyCloud />
        <SidebarToolPopup />
        <SidebarSettingPopup />
      </div>
    </div>
  </div>
</template>
