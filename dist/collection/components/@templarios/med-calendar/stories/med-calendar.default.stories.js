import { html } from 'lit-html';

import { MedColors } from '../../../../@templarios/templarios';

const meta = {
  title: 'Components/Calendar',
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
    mes: {
      control: { type: 'text' },
      defaultValue: 'Dezembro',
    },
    ano: {
      control: { type: 'text' },
      defaultValue: '2021',
    },
    container: {
      control: { type: 'text' },
      defaultValue: 'teste',
    },
    choice: {
      control: { type: 'text' },
      defaultValue: 'teste',
    },
    fill: {
      defaultValue: 'undefined',
      options: [undefined, 'outline'],
      control: { type: 'radio' },
      description: 'Define a variação de estilo do componente.',
      table: {
        type: { summary: ['outline'] },
        defaultValue: { summary: 'undefined' },
      },
    },
    disable: {
      control: { type: 'boolean' },
      description: 'Desabilita botão do componente.',
      defaultValue: 'undefined',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    mes: 'Dezembro',
    ano: '2021',
    container: 'teste',
    choice: 'teste',
  },
};

export default meta;

export const Default = {
  render: ({ ...args }) => {
    return html`
      <ion-app>
        <ion-content>
          <!-- component markdown -->
          <med-calendar
            ds-color="${args.dsColor}"
            mes="${args.mes}"
            ano="${args.ano}"
            container="${args.container}"
            ?disable="${args.disable}"
            choice="${args.choice}"
          >
            <med-calendar-day ds-color="${args.dsColor}" active>1</med-calendar-day>
            <med-calendar-day fill=${args.fill} ds-color="${args.dsColor}">2</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">3</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">4</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">5</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">6</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">7</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">8</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">9</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">10</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">11</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">12</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">13</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">14</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">15</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">16</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">18</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">18</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">19</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">20</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">21</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">22</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">23</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">24</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">25</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">26</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">27</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">28</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">29</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">30</med-calendar-day>
            <med-calendar-day ds-color="${args.dsColor}">31</med-calendar-day>
          </med-calendar>
          <!-- component markdown -->
        </ion-content>
      </ion-app>
    `;
  },
};
