import type { Meta, StoryObj } from '@storybook/vue3';

import { AppTag } from '.';

const meta: Meta<typeof AppTag> = {
  title: 'Components/AppTag',
  component: AppTag
};

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Basic: Story = {
  render(args) {
    return {
      components: { AppTag },
      setup() {
        return {
          args
        };
      },
      template: `
            <AppTag :color="'red'" :size="13" />            
            <AppTag :color="'BLUE'" :size="14" />            
            <AppTag :color="'gReen'"  :size="15"/>
            <AppTag :color="'rgb(111, 63, 207)'" />
            <AppTag :color="'#ff6905'" />           
            <AppTag :color="'#ccc'">Tag 1</AppTag>
            <AppTag>Tag 2</AppTag>
            <AppTag>Link</AppTag>
        `
    };
  }
};
