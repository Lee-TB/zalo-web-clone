<script setup lang="ts">
import { ref, watch } from 'vue';
import ContactSearch from '@/components/widgets/ContactSearch/ContactSearch.vue';
import Sidebar from '@/layouts/Sidebar/Sidebar.vue';
import AppModal from '@/components/AppModal/AppModal.vue';
import AppPopover from '@/components/AppPopover/AppPopover.vue';
import ContactsContainer from '@/views/Contacts/ContactsContainer.vue';
import TodoContainer from '@/views/Todo/TodoContainer.vue';
import MessagesContainer from '@/views/Messages/MessagesContainer.vue';

const showModal = ref(false);
const visible = ref(false);
watch(showModal, () => {
  console.log(showModal.value);
});

const tabs = {
  MessagesContainer,
  ContactsContainer,
  TodoContainer
};
</script>

<template>
  <div id="container" class="flex h-screen">
    <nav id="SidebarNav" class="flex">
      <Sidebar />
      <div id="control-section" class="w-[344px] hidden md:block">
        <ContactSearch />
        <component :is="tabs['MessagesContainer']" class="tab"></component>
      </div>
    </nav>
    <main class="w-[100%] border-l">
      <button
        class="bg-gray-500 rounded-md p-2 text-white cursor-pointer"
        @click="showModal = true"
      >
        Open modal
      </button>
      <div>
        <AppPopover
          class="inline-block"
          v-model:visible="visible"
          placement="right"
        >
          <button
            @click="visible = !visible"
            class="popover-button bg-gray-500 rounded-md p-2 text-white cursor-pointer"
          >
            poppover
          </button>
          <template #content>
            <ul class="bg-white shadow-lg drop-shadow-md p-4 w-[300px]">
              <li v-for="n in 10" :key="n">{{ n }} item</li>
            </ul>
          </template>
        </AppPopover>
      </div>
      <Teleport to="#modal">
        <AppModal
          :show="showModal"
          @on-click-outside="showModal = false"
          closable
          @on-close="showModal = false"
        >
          <div class="bg-white w-[400px] h-[400px]">something</div>
        </AppModal>
      </Teleport>

    </main>
  </div>
</template>
