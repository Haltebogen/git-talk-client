import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddButton from './AddButton';

export default {
  title: 'Components/Atoms/Button/AddButton',
  component: AddButton,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddButton>;

const Template: ComponentStory<typeof AddButton> = (args) => <AddButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ariaLabel: 'ariaLabel',
};
