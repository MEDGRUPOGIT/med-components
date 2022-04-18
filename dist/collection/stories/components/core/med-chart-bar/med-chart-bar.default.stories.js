import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core (Revisado: abril 2022)/Chart Bar (Chart Column)',
  decorators: [withDesign],
};

const Template = ({dsColor, value, height, width}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown -->
          <med-chart-bar .dsColor=${dsColor} value=${value} height=${height} width=${width}>
            <med-type token="p12b">50%</med-type>
          </med-chart-bar>
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
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=11906%3A47663',
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
  value: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a valor da %(porcentagem) do componente.',
    defaultValue: '50',
    table: {
      type:  { summary: 'nummber' },
      defaultValue: { summary: 'undefined' },
    },
  },
  height: {
    control: { type: 'number' },
    description: 'Define a valor da altura do componente.',
    defaultValue: '50',
    table: {
      type:  { summary: 'nummber' },
      defaultValue: { summary: 'undefined' },
    },
  },
  width: {
    control: { type: 'number' },
    description: 'Define a valor da largura do componente.',
    defaultValue: '32',
    table: {
      type:  { summary: 'nummber' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
