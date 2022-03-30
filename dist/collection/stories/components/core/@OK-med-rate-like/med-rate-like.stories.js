import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/@OK Rate Like',
  decorators: [withDesign],
};

const TemplateDefault = ({ status }) => {
  return html`
  <ion-app>
    <ion-content>
      <div class="flex-center">

        <!-- component markdown-->
          <med-rate-like .status=${status}></med-rate-like>
        <!-- component markdown-->

      </div>
    </ion-content>
  </ion-app>
  `
}

export const RateLike = TemplateDefault.bind({});
RateLike.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=13509%3A51259',
  },
  actions: {
    handles: ['medChange'],
  },
}
RateLike.argTypes = {
  status: {
    options: [undefined, 'like', 'dislike'],
    control: { type: 'radio'},
    description: "Define o tamanho do botão.",
    table: {
      type:  { summary: 'like | dislike' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
