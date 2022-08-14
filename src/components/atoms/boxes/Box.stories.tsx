import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from './Box';

export default {
  title: 'Components/Atoms/Box',
  component: Box,

  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  content: 'content',
  width: '10rem',
};
