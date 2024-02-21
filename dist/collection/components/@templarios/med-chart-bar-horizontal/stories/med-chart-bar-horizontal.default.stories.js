import { html } from 'lit-html';

import { MedColors } from '../../../../@templarios/templarios';

const meta = {
  title: 'Components/Chart Bar Horizontal',
  argTypes: {
    dsColor: {
      options: Object.values(MedColors),
      control: { type: 'select' },
      description: 'Define a cor do componente.',
      table: {
        type: { summary: Object.values(MedColors).join(' |') },
        defaultValue: { summary: 'undefined' },
      },
    },
    dsSize: {
      options: [undefined, 'md'],
      control: { type: 'select' },
      description: 'Define o tamanho do componente.',
      table: {
        type: { summary: ['md'] },
        defaultValue: { summary: 'undefined' },
      },
    },
    hideValue: {
      control: { type: 'boolean' },
      description: 'Define a visibilidade do do valor da porcentagem.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    label: {
      control: { type: 'boolean' },
      description: 'Define a visibilidade do label.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    value: {
      control: { type: 'range', min: 0, max: 150, step: 1 },
      description: 'Define a porcentagem a ser mostrada.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    labelContent: {
      control: { type: 'text' },
      description: 'Define o conteúdo do label.',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    hideValue: false,
    label: true,
    value: 150,
  },
};

export default meta;

export const Default = {
  render: ({ ...args }) => {
    return html`
      <ion-app>
        <ion-content>
          <!-- component markdown -->
          <med-chart-bar-horizontal
            ds-color="${args.dsColor}"
            ?hide-value="${args.hideValue}"
            ds-size="${args.dsSize}"
            label="${args.label}"
            value="${args.value}"
            label-content="${args.labelContent}"
          >
          </med-chart-bar-horizontal>
          <!-- component markdown -->
        </ion-content>
      </ion-app>
    `;
  },
};
