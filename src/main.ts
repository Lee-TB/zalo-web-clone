import { createApp } from 'vue';
import App from '@/App.vue';

// These things below are global, you need to import them into .storybook/preview.ts
import '@/assets/css/main.css';

createApp(App).mount('#app');
