import type { Meta, StoryObj } from '@storybook/vue3';

import AppButton from '@/components/AppButton/AppButton.vue';
import AppPopover from '@/components/AppPopover/AppPopover.vue';

const meta: Meta<typeof AppPopover> = {
  title: 'Components/AppPopover',
  component: AppPopover,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'topLeft ',
        'topRight ',
        'bottomLeft ',
        'bottomRight ',
        'leftTop ',
        'leftBottom ',
        'rightTop',
        'rightBottom'
      ]
    }
  },
  args: {
    visible: true
  },
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="margin: 3em; margin-bottom: 300px;"><story/></div>' })],
};

export default meta;
type Story = StoryObj<typeof AppPopover>;

// Stories
export const Default: Story = {
  render: (args) => ({
    components: { AppPopover, AppButton },
    setup() {
      return { args };
    },
    template: `
      <AppPopover v-bind="args">
        <AppButton type="primary" @click="args.visible=!args.visible">Trigger</AppButton>
        <template #content> 
          <ul class="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] drop-shadow-md p-4 w-[100px]">
            <li v-for="n in 3" :key="n">{{ n }} item</li>
          </ul>
        </template>
      </AppPopover>
    `
  }),
  args: {
    visible: true,    
  }
};
