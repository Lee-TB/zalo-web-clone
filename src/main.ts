import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';

// These things below are global, you need to import them into .storybook/preview.ts
import '@/assets/css/main.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
