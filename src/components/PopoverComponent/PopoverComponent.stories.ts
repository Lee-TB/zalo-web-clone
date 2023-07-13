import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonComponent from '@/components/ButtonComponent/ButtonComponent.vue';
import PopoverComponent from '@/components/PopoverComponent/PopoverComponent.vue';

const meta: Meta<typeof PopoverComponent> = {
  title: 'Components/PopoverComponent',
  component: PopoverComponent,
  tags: ['autodocs'],
  argsTypes: {
    placement: {
      control: 'select',
      options: [];
    }
  },
  args: {
    placement: 'bottom'
  }
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
        <ButtonComponent v-bind="args.buttonProps">Trigger</ButtonComponent>
        <template #content>
          <ul class="bg-white shadow-lg drop-shadow-md p-4 w-[300px]">
            <li v-for="n in 10" :key="n">{{ n }} item</li>
          </ul>
        </template>
      </PopoverComponent>
    `,
  }),
  args: {
    buttonProps: {
      type: 'primary',
    },

  },
};
