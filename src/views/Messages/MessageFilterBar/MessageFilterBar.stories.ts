import type { Meta, StoryObj } from '@storybook/vue3';

import MessageFilterBar from './MessageFilterBar.vue';

const meta: Meta<typeof MessageFilterBar> = {
  title: 'Views/Messages/MessageFilterBar',
  component: MessageFilterBar,
  decorators: [
    () => ({
      template:
        '<div :style="{width: `300px`, display: `inline-block`}"><story/></div>'
    })
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
