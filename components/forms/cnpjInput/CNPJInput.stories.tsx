import { ComponentMeta, ComponentStory } from '@storybook/react';
import CNPJInput, { ICNPJInput } from './CNPJInput';
import CNPJDocumentation from './CNPJInput.documentation.mdx';
import { mockCNPJInputProps } from './CNPJInput.mocks';

export default {
  title: 'forms/CNPJInput',
  component: CNPJInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    docs: {
      page: CNPJDocumentation,
    },
  },
} as ComponentMeta<typeof CNPJInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CNPJInput> = (args) => (
  <CNPJInput {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCNPJInputProps.cnpjInput,
} as ICNPJInput;
