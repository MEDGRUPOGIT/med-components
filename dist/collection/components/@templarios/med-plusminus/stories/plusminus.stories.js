import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Compositions/Plus Minus',
};

const Template = ({dsColor, disabled, dsSize}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

        <!-- component markdown -->
        <med-plusminus .dsColor=${dsColor} .disabled=${disabled} .dsSize=${dsSize}>500</med-plusminus>
        <!-- component markdown -->

        </div>
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
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  disabled: {
    defaultValue: 'none',
    options: [undefined, 'minus', 'plus', 'both'],
    control: { type: 'radio'},
    description: "Define a variação de desabilitado do componente.",
    table: {
      type:  { summary: ['minus | plus | both'] },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: ['lg'],
    control: { type: 'radio'},
    defaultValue: undefined,
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'lg' },
      defaultValue: { summary: 'undefined' },
    },
  },
}
