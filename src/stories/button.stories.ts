import { ButtonComponent } from 'src/app/button/button.component';

export default {
  title: 'Components/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    content: { control: 'text' },
  },
};

const Template: any = (args: any) => ({
  component: ButtonComponent,
  props: args,
});

export const Default = Template.bind({});
