import type { Meta, StoryObj } from '@storybook/vue3';

import Sidebar from '@/layouts/Sidebar/Sidebar.vue';

const meta: Meta<typeof Sidebar> = {
  title: 'Layouts/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'full-screen'
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
