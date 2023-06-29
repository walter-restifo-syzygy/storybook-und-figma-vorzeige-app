import { moduleMetadata, StoryFn, Meta } from '@storybook/angular';
import { CreateAccountComponent } from '../app/create-account/create-account.component';
import { ButtonComponent } from '../app/button/button.component';
import { InputComponent } from 'src/app/input/input.component';

export default {
  title: 'Components/CreateAccount',
  component: CreateAccountComponent,
  decorators: [
    moduleMetadata({
      declarations: [CreateAccountComponent, ButtonComponent, InputComponent],
    }),
  ],
} as Meta;

const Template: StoryFn<CreateAccountComponent> = (args) => ({
  props: args,
  template: `
    <app-create-account></app-create-account>
  `,
});

export const Default = Template.bind({});
