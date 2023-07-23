<script setup lang="ts">
import Sidebar from '@/layouts/Sidebar/Sidebar.vue';
import { Header } from '@/layouts/Header';

import ContactSearch from '@/views/widgets/ContactSearch/ContactSearch.vue';
import { ProfileModal } from '@/views/widgets/ProfileModal';

import Contacts from '@/views/Contacts/Contacts.vue';
import Todo from '@/views/Todo/Todo.vue';
import Messages from '@/views/Messages/Messages.vue';

import { ref, type Ref, provide } from 'vue';

// handle sidebar tabs
const tabs = {
  Messages,
  Contacts,
  Todo
};
type tabsType = keyof typeof tabs;
const selectedTab: Ref<tabsType> = ref('Messages'); // default selected tab is Messages
provide('selectedTab', selectedTab);

// provide showProfileModal ref
const showProfileModal = ref(false);
provide('showProfileModal', showProfileModal);
</script>

<template>
  <Teleport to="#modal">
    <ProfileModal />
  </Teleport>

  <div id="container" class="flex h-screen">
    <nav id="SidebarNav" class="flex">
      <Sidebar />
      <div id="control-section" class="w-[344px] hidden md:block">
        <ContactSearch />
        <component :is="tabs[selectedTab]" class="tab"></component>
      </div>
    </nav>
    <main class="w-[100%] border-l">
      <Header> </Header>

   </main>
  </div>
</template>
