import { ComponentMeta, ComponentStory } from '@storybook/react';
import SimpleCentered, { ISimpleCentered } from './SimpleCentered';
import { mockSimpleCenteredProps } from './SimpleCentered.mocks';

export default {
  title: 'layouts/SimpleCentered',
  component: SimpleCentered,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    docs: {
      page: mockSimpleCenteredProps,
    },
  },
} as ComponentMeta<typeof SimpleCentered>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleCentered> = (args) => (
  <SimpleCentered {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSimpleCenteredProps.base,
} as ISimpleCentered;
