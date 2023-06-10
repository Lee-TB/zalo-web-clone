<script setup>
import ContactSearch from './views/ContactSearch.vue';
import MainTab from './views/MainTab.vue';
</script>

<template>
  <div id="container" class="flex h-screen">
    <nav id="SidebarNav" class="flex">
      <MainTab />
      <div id="control-section" class="w-[344px] hidden md:block">
        <ContactSearch />
      </div>
    </nav>
    <main class="w-[100%] border-l">main section</main>
  </div>
</template>
