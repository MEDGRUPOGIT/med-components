import { html } from 'lit-html';

import { MedColors } from '../../../../@templarios/templarios';

const meta = {
  title: 'Components/Cartão Resposta',
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
    anulada: {
      control: { type: 'boolean' },
      description: 'Define o estado do componente para anulado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    impressa: {
      control: { type: 'boolean' },
      description: 'Define o estado do componente para impresso.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    ativa: {
      control: { type: 'boolean' },
      description: 'Define o estado do componente para ativo.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    slot: {
      control: { type: 'text' },
    },
  },
  args: {
    anulada: false,
    impressa: false,
    ativa: false,
    slot: '01',
  },
};

export default meta;

export const Default = {
  render: ({ ...args }) => {
    return html`
      <ion-app>
        <ion-content>
          <!-- component markdown -->
          <med-cartao-resposta-item
            ds-color="${args.dsColor}"
            ?ativa="${args.ativa}"
            ?impressa="${args.impressa}"
            ?anulada="${args.anulada}"
          >
            ${args.slot}
          </med-cartao-resposta-item>
          <!-- component markdown -->
        </ion-content>
      </ion-app>
    `;
  },
};
