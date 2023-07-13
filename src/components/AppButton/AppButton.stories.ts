import type { Meta, StoryObj } from '@storybook/vue3';

import AppButton from '@/components/AppButton/AppButton.vue';

const meta: Meta<typeof AppButton> = {
  title: 'Components/AppButton',
  component: AppButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link']
    },
    size: { control: 'select', options: ['small', 'middle', 'large'] }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Type: Story = {
  render: (args) => ({
    components: { AppButton },
    template: `
      <div class="flex gap-2">
        <div>
          <AppButton type="primary">primary button</AppButton>
        </div>
        <div>
          <AppButton type="default">default button</AppButton>
        </div>
        <div>
          <AppButton type="dashed">dashed button</AppButton>
        </div>
        <div>
          <AppButton type="text">text button</AppButton>
        </div>
        <div>
          <AppButton type="link">link button</AppButton>
        </div>
      </div>
    `
  }),
};

export const Size: Story = {
  render: (args) => ({
    components: { AppButton },
    template: `
      <div class="flex gap-2">
        <div>
          <AppButton type="primary" size="small">small button</AppButton>
        </div>
        <div>
          <AppButton type="primary" size="middle">middle button</AppButton>
        </div>
        <div>
          <AppButton type="primary" size="large">large button</AppButton>
        </div>
      </div>
    `
  }),
};
