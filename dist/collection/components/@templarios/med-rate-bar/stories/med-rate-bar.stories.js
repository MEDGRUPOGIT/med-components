import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Rate Bar',
};

const Template = ({dsColor}) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component -->
        <med-rate-bar .dsColor=${dsColor}>
          Avalie esse vídeo
          <med-rate-like slot="avaliacao"></med-rate-like>
        </med-rate-bar>
        <!-- component -->

      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  actions: {
    handles: ['medChange'],
  },
}
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
