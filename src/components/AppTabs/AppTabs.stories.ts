import { type Meta, type StoryObj } from '@storybook/vue3';

import { AppTabs } from '.';
import { AppButton } from '@/components/AppButton';
import { AppTabPane } from '@/components/AppTabPane';

import Contacts from '@/views/Contacts/Contacts.vue';
import Todo from '@/views/Todo/Todo.vue';
import Messages from '@/views/Messages/Messages.vue';

const tabs = {
  Messages,
  Contacts,
  Todo
};

const meta: Meta<typeof AppTabs> = {
  title: 'Components/AppTabs',
  component: AppTabs,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {
      AppTabs,
      AppTabPane,
      AppButton
    },
    setup() {
      return { args, tabs };
    },
    template: `
      <div>
      <!-- Tab Control -->
      <AppTabs v-model:activeKey="args.activeKey" class="flex gap-2">
          <AppTabPane v-for="key in Object.keys(tabs)" :key="key">
            <AppButton :type="args.activeKey === key ? 'primary' : 'dashed'">{{key}} Icon</AppButton>
          </AppTabPane>            
      </AppTabs>

        <!-- Tab Content -->
        <component :is="tabs[args.activeKey]" class="tab"></component>
      </div>
    `
  }),
  args: {
    activeKey: 'Contacts'
  }
};
