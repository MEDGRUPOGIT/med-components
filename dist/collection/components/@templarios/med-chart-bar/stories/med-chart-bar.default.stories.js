import { html } from 'lit-html';

import { MedColors } from '../../../../@templarios/templarios';

const meta = {
  title: 'Components/Chart Bar',
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
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Define a valor da %(porcentagem) do componente.',
      table: {
        type: { summary: 'nummber' },
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'Define a valor da altura do componente.',
      table: {
        type: { summary: 'nummber' },
        defaultValue: { summary: 'undefined' },
      },
    },
    width: {
      control: { type: 'number' },
      description: 'Define a valor da largura do componente.',
      table: {
        type: { summary: 'nummber' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    value: 50,
    height: 50,
    width: 32,
  },
};

export default meta;

export const Default = {
  render: ({ ...args }) => {
    return html`
      <style>
        .full-height-flex {
          display: flex;
          align-items: flex-end;
        }

        med-chart-bar:not(:last-child) {
          margin-right: 24px;
        }
      </style>

      <ion-app>
        <ion-content>
          <div class="full-height-flex">
            <!-- component markdown -->
            <med-chart-bar
              ds-color="${args.dsColor}"
              value="${args.value}"
              height="${args.height}"
              width="${args.width}"
            >
              <med-type token="p12b">50%</med-type>
            </med-chart-bar>

            <med-chart-bar
              ds-color="${args.dsColor}"
              value="${args.value}"
              height="${args.height}"
              width="${args.width}"
              no-label
            >
            </med-chart-bar>
            <!-- component markdown -->
          </div>
        </ion-content>
      </ion-app>
    `;
  },
};

