import { ComponentMeta, ComponentStory } from '@storybook/react';
import ThemeSwitcher, { IThemeSwitcher } from './ThemeSwitcher';
import { mockThemeSwitcherProps } from './ThemeSwitcher.mocks';

export default {
  title: 'elements/ThemeSwitcher',
  component: ThemeSwitcher,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ThemeSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockThemeSwitcherProps.themeSwitcher,
} as IThemeSwitcher;
