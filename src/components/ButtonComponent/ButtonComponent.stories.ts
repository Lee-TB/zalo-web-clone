import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonComponent from '@/components/ButtonComponent/ButtonComponent.vue';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/ButtonComponent',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'default', 'dashed', 'text', 'link'] }
  },
    
}

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Primary: Story = {
  render: (args) => ({
    components: { ButtonComponent },
    setup() {
      return { args };
    },
    template: '<ButtonComponent v-bind="args">primary button</ButtonComponent>',
  }),
  args: {
    type: 'primary',
  },
};
export const Default: Story = {
  args: {
    type: 'default'
  }
};
export const Dashed: Story = {
  args: {
    type: 'dashed'
  }
};
export const Text: Story = {
  args: {
    type: 'text'
  }
};
export const Link: Story = {
  args: {
    type: 'link'
  }
};
