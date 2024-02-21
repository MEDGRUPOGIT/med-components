import { html } from 'lit-html';

import { MedColors } from '../../../../@templarios/templarios';

const meta = {
  title: 'Components/Base',
  parameters: {
    layout: 'centered',
  },
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
    radius: {
      options: [undefined, 's00', 's02', 's04', 's08'],
      control: { type: 'select' },
      description: 'Define a variação de borde-radius do componente.',
      table: {
        type: { summary: 's00 | s02 | s04 | s08' },
        defaultValue: { summary: 'undefined' },
      },
    },
    gap: {
      options: [undefined, 's00', 's02', 's04', 's08', 's12', 's16', 's24'],
      control: { type: 'select' },
      description: 'Define o gap entre slots.',
      table: {
        type: { summary: 's00 | s02 | s04 | s08 | s12 | s16 | s24' },
        defaultValue: { summary: 'undefined' },
      },
    },
    spacingV: {
      options: [undefined, 's00', 's02', 's04', 's08', 's12', 's16', 's24'],
      control: { type: 'select' },
      description: 'Define a variação de padding vertical do componente.',
      table: {
        type: { summary: 's00 | s02 | s04 | s08 | s12 | s16 | s24' },
        defaultValue: { summary: 'undefined' },
      },
    },
    spacingH: {
      options: [undefined, 's00', 's02', 's04', 's08', 's12', 's16', 's24'],
      control: { type: 'select' },
      description: 'Define a variação de padding horizontal do componente.',
      table: {
        type: { summary: 's00 | s02 | s04 | s08 | s12 | s16 | s24' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;

export const Default = {
  render: ({ ...args }) => {
    return html`
      <ion-app>
        <ion-content>
          <!-- component markdown -->
          <med-base
            ds-color="${args.dsColor}"
            radius="${args.radius}"
            gap="${args.gap}"
            spacing-v="${args.spacingV}"
            spacing-h="${args.spacingH}"
          >
            <med-type slot="start">Left</med-type>
            <med-type class="middle" slot="middle">Middle</med-type>
            <med-type slot="end">Right</med-type>
          </med-base>
          <!-- component markdown -->
        </ion-content>
      </ion-app>
    `;
  },
};
