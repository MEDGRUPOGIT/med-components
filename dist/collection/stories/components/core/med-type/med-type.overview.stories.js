import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor, MedType } from '../../../constants';

export default {
  title: 'Components/Core/Type',
  decorators: [withDesign],
};

const Template = ({dsColor, token, slot}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-type .dsColor=${dsColor} .token=${token}>${slot}</med-type>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Overview = Template.bind({});
Overview.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=6105%3A46607',
  },
}
Overview.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
  token: {
    options: MedType,
    control: { type: 'select'},
    description: "Define o token do componente.",
    table: {
      type:  { summary: 'MedType' },
      defaultValue: { summary: 'undefined' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: 'Lorem Ipsum Dolor.',
  },
};
