<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faEllipsis } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronDown);
library.add(faEllipsis);

import { AppTabs } from '@/components/AppTabs';
import { AppTabPane } from '@/components/AppTabPane';
import { AppPopover } from '@/components/AppPopover';
import { AppTag } from '@/components/AppTag';
import { AppCheckbox } from '@/components/AppCheckbox';

import { ref, type Ref, onMounted, watch } from 'vue';

const tabs = ref(['All', 'Unread']);
const selectedTab = ref('All');
const tabPanes = ref([]);
const tabLine: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  updateTabLine();
});

watch(selectedTab, () => {
  updateTabLine();
});

function updateTabLine() {
  tabPanes.value.forEach((tabpane: any) => {
    if (tabLine.value && selectedTab.value === tabpane.vnode.key) {
      tabLine.value.style.width = tabpane.vnode.el.offsetWidth + 'px';
      tabLine.value.style.left = tabpane.vnode.el.offsetLeft + 'px';
    }
  });
}

const showLabels = ref(false);
const labels = ref([
  { label: 'bạn bè', color: 'rgb(111, 63, 207)', checked: false },
  { label: 'công việc', color: '#ff6905', checked: false },
  { label: 'gia đình', color: '#4bc377', checked: true },
  { label: 'khách hàng', color: 'rgb(217, 27, 27)', checked: false },
  { label: 'trả lời sau', color: 'rgb(250, 192, 0)', checked: false }
]);
watch(labels.value, () => {
  console.log(labels.value);
});

const showMore = ref(false);
</script>

<template>
  <div
    class="MessageFiltersbar h-[32px] px-[16px] flex justify-between items-center border-b relative"
  >
    <AppTabs v-model:active-key="selectedTab" class="flex gap-3">
      <AppTabPane
        v-for="tab in tabs"
        :key="tab"
        class="inline-block text-tab-text text-sm font-semibold cursor-pointer hover:text-text-information"
        :class="{ 'text-text-information': selectedTab === tab }"
        ref="tabPanes"
      >
        {{ tab }}
      </AppTabPane>
      <div
        ref="tabLine"
        class="tab-line absolute bottom-0 h-[2px] bg-text-information transition-all"
      />
    </AppTabs>
    <div class="flex gap-1">
      <AppPopover
        :visible="showLabels"
        placement="bottomLeft"
        @click-outside="showLabels = false"
      >
        <button
          @click="showLabels = true"
          class="text-sm flex gap-2 hover:bg-gray-200 px-2 py-[2px] rounded-full"
          :class="{
            'text-text-primary': !showLabels,
            'text-text-information': showLabels,
            'bg-button-neutral-focus-bg hover:bg-button-neutral-focus-bg':
              showLabels
          }"
        >
          Labels
          <font-awesome-icon
            icon="fa-solid fa-chevron-down"
            class="text-[10px] text-gray-600 self-center text-inherit"
          />
        </button>
        <template #content>
          <div
            class="bg-white border shadow-[0_0_10px_0px_rgba(0,0,0,0.2)] min-w-[240px] p-2 rounded-md mt-1"
          >
            <div class="text-sm">By label</div>
            <div>
              <label
                class="-mx-2 p-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center"
                v-for="label in labels"
                :for="label.label"
                :key="label.label"
              >
                <AppCheckbox v-model="label.checked" :id="label.label" />
                <AppTag class="-mr-1 px-4" :color="label.color" :size="12" />
                <span class="text-sm">{{
                  label.label.charAt(0).toLocaleUpperCase() +
                  label.label.slice(1)
                }}</span>
              </label>
            </div>

            <div class="border-b py-1" />
            <div
              class="px-[44px] h-[36px] flex items-center cursor-pointer hover:bg-gray-100 -mx-2"
            >
              <div class="text-sm font-normal">Manage label</div>
            </div>
          </div>
        </template>
      </AppPopover>

      <AppPopover
        :visible="showMore"
        placement="bottomLeft"
        @click-outside="showMore = false"
      >
        <font-awesome-icon
          @click="showMore = true"
          icon="fa-solid fa-ellipsis"
          class="hover:bg-gray-200 rounded-full w-[16px] h-[16px] p-1 cursor-pointer"
          :class="{
            'text-text-primary': !showMore,
            'text-text-information': showMore,
            'bg-button-neutral-focus-bg hover:bg-button-neutral-focus-bg':
              showMore
          }"
        />
        <template #content>
          <div
            class="bg-white border shadow-[0_0_10px_0px_rgba(0,0,0,0.2)] p-2 rounded-md mt-1 inline-flex flex-col min-w-[210px]"
          >
            <div
              class="h-[30px] leading-[30px] px-3 font-normal text-sm cursor-pointer hover:bg-gray-100 -mx-2"
            >
              Mark as read
            </div>
            <div
              class="h-[30px] leading-[30px] px-3 font-normal text-sm cursor-pointer hover:bg-gray-100 -mx-2"
            >
              Send broadcast messages
            </div>
            <div class="border-b my-2" />
            <div
              class="h-[30px] leading-[30px] px-3 font-normal text-sm cursor-pointer hover:bg-gray-100 -mx-2"
            >
              Switch to Classic design
            </div>
          </div>
        </template>
      </AppPopover>
    </div>
  </div>
</template>
