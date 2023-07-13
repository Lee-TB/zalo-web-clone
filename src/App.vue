<script setup lang="ts">
import { ref, watch } from 'vue';
import ContactSearch from '@/views/ContactSearch.vue';
import MainTab from '@/views/MainTab.vue';
import Modal from '@/components/ModalComponent/ModalComponent.vue';
import Popover from '@/components/PopoverComponent/PopoverComponent.vue';
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
      <MainTab />
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
        <Popover
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
        </Popover>
      </div>
      <Teleport to="#modal">
        <Modal
          :show="showModal"
          @on-click-outside="showModal = false"
          closable
          @on-close="showModal = false"
        >
          <div class="bg-white w-[400px] h-[400px]">something</div>
        </Modal>
      </Teleport>

    </main>
  </div>
</template>
