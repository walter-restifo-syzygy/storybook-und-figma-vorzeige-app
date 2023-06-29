import { InputComponent } from '../app/input/input.component';

export default {
  title: 'Components/InputComponent',
  component: InputComponent,
};

const Template: any = (args: any) => ({
  component: InputComponent,
  props: args,
});

export const Default = Template.bind({});
