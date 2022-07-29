import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../templarios';

export default {
  title: 'Components/Compositions/Plus Minus',
  decorators: [withDesign],
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
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=14355%3A51155',
  },
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
