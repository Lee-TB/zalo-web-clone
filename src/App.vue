<script setup lang="ts">
import { Sidebar } from '@/layouts/Sidebar';
import { Header } from '@/layouts/Header';

import { ContactSearch } from '@/views/widgets/ContactSearch';
import { ProfileModal } from '@/views/widgets/ProfileModal';

import MessagesContainer from '@/views/Messages/MessagesContainer.vue';
import ContactsContainer from '@/views/Contacts/ContactsContainer.vue';
import TodoContainer from '@/views/Todo/TodoContainer.vue';

import { ref, type Ref, provide } from 'vue';

// handle sidebar tabs
const appTabs = {
  MessagesContainer,
  ContactsContainer,
  TodoContainer
};
type appTabsType = keyof typeof appTabs;
const selectedTab: Ref<appTabsType> = ref(Object.keys(appTabs)[0]) as Ref<appTabsType>; // default selected tab is first element
provide('selectedTab', selectedTab);
provide('appTabs', appTabs);

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
        <component :is="appTabs[selectedTab]" class="tab"></component>
      </div>
    </nav>
    <main class="w-[100%] border-l">
      <Header></Header>
    </main>
  </div>
</template>
