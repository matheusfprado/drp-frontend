import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardNumber, { ICardNumber } from './CardNumber';
import CardNumberDocumentation from './CardNumber.documentation.mdx';
import { mockCardNumberProps } from './CardNumber.mocks';

export default {
  title: 'forms/CardNumber',
  component: CardNumber,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    docs: {
      page: CardNumberDocumentation,
    },
  },
} as ComponentMeta<typeof CardNumber>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardNumber> = (args) => (
  <CardNumber {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCardNumberProps.cardNumber,
} as ICardNumber;
