import { html } from 'lit-html';

import { MedColors } from '../../../../@templarios/templarios';

const meta = {
  title: 'Components/Alert Fixed',
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
    dsName: {
      options: ['offline', 'atualizar'],
      control: { type: 'radio' },
      defaultValue: undefined,
      description: 'Define a variação do componente.',
      table: {
        type: { summary: 'offline | atualizar' },
        defaultValue: { summary: 'base' },
      },
    },
    labelOffline: {
      control: { type: 'text' },
      description: 'Define o texto da variação offline.',
      defaultValue: undefined,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Você está offline. Conecte-se para acessar o conteúdo.' },
      },
    },
    labelAtualizar: {
      control: { type: 'text' },
      description: 'Define o texto da variação atualizar.',
      defaultValue: undefined,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Versão desatualizada' },
      },
    },
  },
  args: {
    dsName: 'offline',
    labelOffline: 'Você está offline. Conecte-se para acessar o conteúdo.',
    labelAtualizar: 'Versão desatualizada',
  },
};

export default meta;

export const Default = {
  render: ({ ...args }) => {
    return html`
      <ion-app>
        <ion-content>
          <!-- component markdown -->
          <med-alert-fixed .dsColor=${args.dsColor} .dsName=${args.dsName}> </med-alert-fixed>
          <!-- component markdown -->
        </ion-content>
      </ion-app>
    `;
  },
};

