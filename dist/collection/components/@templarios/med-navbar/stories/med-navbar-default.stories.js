import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Navbar',
};

const Template = ({ dsColor, dsName }) => {
  return html `
    <ion-app>

      <!-- component markup -->
      <med-navbar .dsColor=${dsColor} .dsName=${dsName} >
        <ion-back-button slot="left" ds-name="tertiary" ds-size="xxs">
          <ion-icon slot="icon-only" class="med-icon"></ion-icon>
        </ion-back-button>

        <med-type slot="title">Page Title</med-type>
        <med-type slot="subtitle">Page Title</med-type>

        <ion-button mode="ios" icon-only fill="clear" slot="right" ds-size="xxs">
          <ion-icon slot="icon-only" class="med-icon" name="med-star-filled"></ion-icon>
        </ion-button>
      </med-navbar>
      <!-- component markup -->

    </ion-app>
  `
}

export const Default = Template.bind({});
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
  dsName: {
    options: [undefined, 'transparent'],
    control: { type: 'radio'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'secondary' },
      defaultValue: { summary: 'undefined' },
    },
  },
};