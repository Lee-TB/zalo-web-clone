import type { Meta, StoryObj } from '@storybook/vue3';

import ModalComponent from './ModalComponent.vue';

const meta: Meta<typeof ModalComponent> = {
  title: 'Components/ModalComponent',
  component: ModalComponent
};

export default meta;

type Story = StoryObj<typeof ModalComponent>;

export const Default: Story = {
  render: () => ({
    component: { ModalComponent },
    template: `
      <ModalComponent
        :show="true"
        closable
      >
      <div class="bg-white w-[400px] h-[400px]">something</div>
    </ModalComponent>
    `
  })
};
