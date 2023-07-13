import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonComponent from '@/components/ButtonComponent/ButtonComponent.vue';
import PopoverComponent from '@/components/PopoverComponent/PopoverComponent.vue';

const meta: Meta<typeof PopoverComponent> = {
  title: 'Components/PopoverComponent',
  component: PopoverComponent,
  tags: ['autodocs'],
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
  decorators: [() => ({ template: '<div style="margin: 3em; margin-bottom: 300px;"><story/></div>' })],
};

export default meta;

type Story = StoryObj<typeof PopoverComponent>;
export const Default: Story = {
  render: (args) => ({
    components: { PopoverComponent, ButtonComponent },
    setup() {
      return { args };
    },
    template: `
      <PopoverComponent v-bind="args">
        <ButtonComponent v-bind="args.buttonProps" @click="args.visible=!args.visible">Trigger</ButtonComponent>
        <template #content> 
          <ul class="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] drop-shadow-md p-4 w-[100px]">
            <li v-for="n in 3" :key="n">{{ n }} item</li>
          </ul>
        </template>
      </PopoverComponent>
    `
  }),
  args: {
    buttonProps: {
      type: 'primary'
    },
    visible: true
  }
};
