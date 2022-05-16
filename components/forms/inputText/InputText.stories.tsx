import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputText, { IInputText } from './InputText';
import InputTextDocumentation from './InputText.documentation.mdx';
import { mockInputTextProps } from './InputText.mocks';
export default {
  title: 'forms/InputText',
  component: InputText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    docs: {
      page: InputTextDocumentation,
    },
  },
} as ComponentMeta<typeof InputText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockInputTextProps.inputText,
} as IInputText;
