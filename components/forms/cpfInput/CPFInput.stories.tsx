import { ComponentMeta, ComponentStory } from '@storybook/react';
import CPFInput, { ICPFInput } from './CPFInput';
import CPFDocumentation from './CPFInput.documentation.mdx';
import { mockCPFInputProps } from './CPFInput.mocks';

export default {
  title: 'forms/CPFInput',
  component: CPFInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    docs: {
      page: CPFDocumentation,
    },
  },
} as ComponentMeta<typeof CPFInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CPFInput> = (args) => (
  <CPFInput {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCPFInputProps.cpfInput,
} as ICPFInput;
