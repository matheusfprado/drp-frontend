import { ComponentMeta, ComponentStory } from '@storybook/react';
import SocialOnly, { ISocialOnly } from './SocialOnly';
import SocialOnlyDocumentation from './SocialOnly.documentation.mdx';
import { mockFooterSocialOnlyProps } from './SocialOnly.mocks';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'layouts/Footer',
  component: SocialOnly,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    docs: {
      page: SocialOnlyDocumentation,
    },
  },
} as ComponentMeta<typeof SocialOnly>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SocialOnly> = (args) => (
  <SocialOnly {...args} />
);

export const Social_Only = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Social_Only.args = {
  ...mockFooterSocialOnlyProps.socialOnly,
} as ISocialOnly;
