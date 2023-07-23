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
const appTabs = inject('appTabs') as Ref<string>;
const appTabsKeys = Object.keys(appTabs)
</script>

<template>
  <div id="MainTab" class="bg-background-leftmenu h-screen w-[64px]">
    <div class="pt-8 h-[100px]">
      <SidebarProfileAvatarWithPopup />
    </div>
    <div class="h-[calc(100%-100px)] flex flex-col justify-between">
      <div id="nav-tabs-top" class="w-full">
        <AppTabs v-model:activeKey="selectedTab">
          <AppTabPane
            :key="appTabsKeys[0]"
            class="h-[64px] w-full flex items-center justify-center hover:bg-background-leftmenu-hover cursor-pointer"
            :class="selectedTab === appTabsKeys[0] ? 'bg-background-leftmenu-selected' : ''"            
          >
            <font-awesome-icon
              class="text-white text-2xl"
              icon="fa-regular fa-comment-dots"
            />
          </AppTabPane>
          <AppTabPane
            :key="appTabsKeys[1]"
            class="h-[64px] w-full flex items-center justify-center hover:bg-background-leftmenu-hover cursor-pointer"
            :class="selectedTab === appTabsKeys[1] ? 'bg-background-leftmenu-selected' : ''"
          >
            <font-awesome-icon
              class="text-white text-2xl"
              icon="fa-regular fa-address-book"
              flip="horizontal"
            />
          </AppTabPane>
          <AppTabPane
            :key="appTabsKeys[2]"
            class="h-[64px] w-full flex items-center justify-center hover:bg-background-leftmenu-hover cursor-pointer"
            :class="selectedTab === appTabsKeys[2] ? 'bg-background-leftmenu-selected' : ''"
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
