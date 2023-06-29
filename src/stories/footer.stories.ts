import { FooterComponent } from '../app/footer/footer.component';

export default {
  title: 'Components/FooterComponent',
  component: FooterComponent,
};

const Template: any = (args: any) => ({
  component: FooterComponent,
  props: args,
});

export const Default = Template.bind({});
