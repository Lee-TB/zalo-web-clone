<script setup>
import MainTab from './components/MainTab.vue'
</script>

<template>
  <div id="container" class="flex h-screen">
    <nav id="SidebarNav">
      <MainTab />
      <div>
        <ContactSearch />
      </div>
    </nav>
    <main class="border border-red-500">b</main>
  </div>
</template>
