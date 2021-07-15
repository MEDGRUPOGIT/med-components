import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Monta Provas/Components/Chart',
  decorators: [withDesign],
};

const TemplateDefault = ({valores}) => {

  setTimeout(() => {
    document.querySelector('med-chart-radial').valores = valores.valores;
    document.querySelector('med-chart-label').valores = valores.valores;
  }, 1000);

  return html`
    <style>
      .header__heading {
        font-size: var(--med-font-size-xs);
        font-weight: var(--med-font-weight-semibold);
        line-height: var(--med-line-height-default);
        color: var(--med-color-neutral-10);
        margin: 0;
        padding; 0;
        width: 100%;
      }

      .monta-provas-chart {
        background: var(--med-color-neutral-2);
        padding: var(--med-spacing-stretch-md);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        max-width: 400px;
        margin: 0 auto;
      }

      .monta-provas-chart__total {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        line-height: var(--med-line-height-compressed);
      }

      .monta-provas-chart__label {
        font-size: var(--med-font-size-nano);
        color: var(--med-color-neutral-dark-10);
        font-weight: var(--med-font-weight-bold);
      }

      .monta-provas-chart__number {
        font-weight: var(--med-font-weight-bold);
        font-size: var(--med-font-size-md);
        color: var(--med-color-neutral-10);
      }
    </style>

    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
        <med-accordion class="monta-provas-accordion" icon="left">
          <div class="header" slot="header">
            <h4 class="header__heading">Nome da Prova</h4>
            <ion-icon class="header__icon" name="med-context-menu"></ion-icon>
          </div>

          <div class="monta-provas-chart" slot="content">

            <med-chart-radial>
              <div class="monta-provas-chart__total">
                <span class="monta-provas-chart__label">Total de</span>
                <span class="monta-provas-chart__number">100</span>
                <span class="monta-provas-chart__label">Questões</span>
              </div>
            </med-chart-radial>

            <med-chart-label></med-chart-label>

          </div>
        </med-accordion>
        <!-- component -->

      </div>
    </ion-app>
  `
}

export const Chart = TemplateDefault.bind({});
Chart.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zdbyAa3XpX3loOjJEaXc6E/Quest%C3%B5es?node-id=826%3A1008',
  },
}
Chart.argTypes = {
  valores: {
    defaultValue: {
      valores: [
        {
          cor: 'ion-color-success',
          label: 'Acertos',
          quantia: 32,
          ignoreBarra: false,
        },
        {
          cor: 'ion-color-caution',
          label: 'Erros',
          quantia: 16,
          ignoreBarra: false,
        },
        {
          cor: '',
          label: 'Restantes',
          quantia: 52,
          ignoreBarra: true,
        }
      ],
    },
    control: { type: 'array' },
    description: 'Define a lista...',
    table: {
      type:  { summary: 'MedRadialItem[]' },
      defaultValue: { summary: 'undefined' },
    },
  },
}
