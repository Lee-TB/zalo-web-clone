import type { Meta, StoryObj } from '@storybook/vue3';

import AppAvatar from './AppAvatar.vue';

import avatar from '@/assets/images/profile-avatar.jpg';

const meta: Meta<typeof AppAvatar> = {
  title: 'Components/AppAvatar',
  component: AppAvatar,
  render: (args) => ({
    components: { AppAvatar },
    setup() {
      return {
        args
      };
    },
    template: `
      <AppAvatar v-bind="args"></AppAvatar>
    `
  }),
  args: {
    src: avatar,
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['circle', 'square']
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
