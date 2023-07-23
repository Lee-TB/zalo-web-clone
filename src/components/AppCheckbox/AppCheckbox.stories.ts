import type { Meta, StoryObj } from '@storybook/vue3';

import AppCheckbox from './AppCheckbox.vue';

const meta: Meta<typeof AppCheckbox> = {
  title: 'Components/AppCheckbox',
  component: AppCheckbox
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return {
      components: { AppCheckbox },
      template: `
        <div>
            <AppCheckbox id="checkbox1" class="cursor-pointer" />
            <label for="checkbox1" class="cursor-pointer ml-2">checkbox</label>
        </div>
        <div>
            <AppCheckbox id="checkbox2" class="cursor-pointer" :scale="1.2" />
            <label for="checkbox2" class="cursor-pointer ml-2">checkbox scale 1.2</label>       
        </div>
        `
    };
  }
};
