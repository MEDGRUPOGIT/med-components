import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Rate Aula',
  decorators: [withDesign],
};

const TemplateDefault = ({}) => {
  return html`

    <ion-app>
      <ion-content>

        <!-- component -->
        <med-rate-aula>
        </med-rate-aula>
        <!-- component -->

      </ion-content>
    </ion-app>
  `
}

export const RateAula = TemplateDefault.bind({});
RateAula.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=3138%3A10553',
  },
  actions: {
    handles: ['medChange'],
  },
}
RateAula.argTypes = {

};
