import { html } from 'lit-html';
import { MedColors } from '../../../templarios';

export default {
  title: 'Components/Compositions/Task/Check Card (Task)',
};

const Template = ({ dsColor, alert, titulo, categoria, horaInicial, horaFinal, dataInicial, dataFinal,iconName, modalPlacement, tooltipCollapsed, tooltipHeading, tooltipContent }) => {
  return html`
    <style>
      .med-check-card__tooltip {
        --background: hsl(var(--med-color-fb-warning));
        --z-index: 4;
        display: none;
      }

      .med-check-card--alert .med-check-card__tooltip {
        display: block;
      }

      .med-check-card__tooltip-icon {
        stroke: hsl(var(--med-color-neutral-1));
        cursor: pointer;
      }

      .med-check-card__alert-icon {
        stroke: hsl(var(--med-color-fb-warning));
        cursor: pointer;
      }
    </style>
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown-->
          <med-check-card
            .dsColor=${dsColor}
            .alert=${alert}
            titulo=${titulo}
            categoria=${categoria}
            hora-inicial=${horaInicial}
            hora-final=${horaFinal}
            data-inicial=${dataInicial}
            data-final=${dataFinal}
            icon-name=${iconName}
            modal-placement=${modalPlacement}
            tooltip-collapsed=${tooltipCollapsed}
            tooltip-heading=${tooltipHeading}
            tooltip-content=${tooltipContent}
          >
            <ion-checkbox slot="input"></ion-checkbox>

            <med-tooltip class="med-check-card__tooltip" slot="tooltip" placement="top" position="end" ds-color="fb-warning" titulo=${tooltipHeading} content=${tooltipContent}>
              <ion-icon class="med-check-card__alert-icon med-icon med-icon--sm" name="med-alerta" slot="input"></ion-icon>
            </med-tooltip>
          </med-check-card>
          <!-- component markdown-->

        </div>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  alert: {
    control: { type: 'boolean' },
    description: 'Define o estado.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  titulo: {
    description: "Define o titulo.",
    control: { type: 'text' },
    defaultValue: 'Título',
  },
  categoria: {
    description: "Define a categoria.",
    control: { type: 'text' },
    defaultValue: 'Categoria',
  },
  horaInicial: {
    description: "Define a hora de inicio.",
    control: { type: 'text' },
    defaultValue: '21h00',
  },
  horaFinal: {
    description: "Define a hora de termino.",
    control: { type: 'text' },
    defaultValue: '23h00',
  },
  dataInicial: {
    description: "Define a data de inicio.",
    control: { type: 'text' },
    defaultValue: '25/12',
  },
  dataFinal: {
    description: "Define a data de termino.",
    control: { type: 'text' },
    defaultValue: '25/12',
  },
  tooltipHeading: {
    description: "Define a header da tooltip.",
    control: { type: 'text' },
    defaultValue: 'Tarefa pendente',
  },
  tooltipContent: {
    description: "Define o conteudo do tooltip.",
    control: { type: 'text' },
    defaultValue: 'Para reagendar este card, clique no menu ao lado e selecione Editar.',
  },
  iconName: {
    description: "Define o icone.",
    control: { type: 'text' },
    defaultValue: 'med-marcar',
  },
  modalPlacement: {
    options: [undefined, 'top', 'bottom', 'left', 'right'],
    control: { type: 'radio'},
    description: "Define posicionamento em relação ao ícone.",
    table: {
      type:  { summary: 'top | bottom | left | right' },
      defaultValue: { summary: 'top' },
    },
  },
  tooltipCollapsed: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente.',
    defaultValue: true,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'true' },
    },
  },
};
