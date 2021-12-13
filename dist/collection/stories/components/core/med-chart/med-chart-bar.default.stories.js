import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Core/Chart Bar',
  decorators: [withDesign],
};

const Template = ({dsColor, value, height, width}) => {
  return html`
    <style>
      /* !NÃO UTILIZAR! Apenas para estória */
        med-type {
          padding-bottom: 6px;
        }
      /* !NÃO UTILIZAR! Apenas para estória */
    </style>

    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-chart-bar .dsColor=${dsColor} value=${value} height=${height} width=${width}>
            <med-type token="p12b">50%</med-type>
          </med-chart-bar>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Default.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: 'Define a cor do componente.',
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
  value: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a valor do componente.',
    defaultValue: '0',
    table: {
      type:  { summary: 'nummber' },
      defaultValue: { summary: '0' },
    },
  },
  height: {
    control: { type: 'number' },
    description: 'Define a valor do componente.',
    defaultValue: '50',
    table: {
      type:  { summary: 'nummber' },
      defaultValue: { summary: '50' },
    },
  },
  width: {
    control: { type: 'number' },
    description: 'Define a valor do componente.',
    defaultValue: '20',
    table: {
      type:  { summary: 'nummber' },
      defaultValue: { summary: '20' },
    },
  },
};
