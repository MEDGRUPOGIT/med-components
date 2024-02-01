import { html } from 'lit-html';

export default {
  title: 'Components/Rate Like',
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

export const Default = TemplateDefault.bind({});
Default.parameters = {
  actions: {
    handles: ['medChange'],
  },
}
Default.argTypes = {
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
