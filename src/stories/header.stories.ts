import { HeaderComponent } from '../app/header/header.component';

export default {
  title: 'Components/HeaderComponent',
  component: HeaderComponent,
};

const Template: any = (args: any) => ({
  component: HeaderComponent,
  props: args,
});

export const Default = Template.bind({});
