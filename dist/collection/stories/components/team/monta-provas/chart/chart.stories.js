import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Monta Provas/Chart',
  decorators: [withDesign],
};

const TemplateDefault = ({valores}) => {

  setTimeout(() => {
    document.querySelector('med-chart-radial').valores = valores.valores;
    document.querySelector('med-chart-radial-label').valores = valores.valores;
  }, 1000);

  return html`

    <ion-app>
      <ion-content>

        <!-- component -->
        <med-accordion-list accordion-list single-open="true">
          <med-accordion-item>

            <med-caption class="monta-provas-accordion__text-header" slot="start">
              <h3 class="med-clamp">Nome da prova</h3>
            </med-caption>

            <div class="monta-provas__header-end" slot="end">
              <ion-button class="med-list-item-accordion__button" ds-name="tertiary" ds-size="xs">
                <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
              </ion-button>
            </div>

            <div class="monta-provas-content" slot="content">

              <div class="monta-provas-content__chart">
                <med-chart-radial>
                  <med-chart-radial-content class="monta-provas-content__chart-data" total="999999" ></med-chart-radial-content>
                </med-chart-radial>

                <med-chart-radial-label class="monta-provas-content__chart-label" ></med-chart-radial-label>
              </div>

              <div class="monta-provas-content__button">
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-duplicar"></ion-icon>
                </ion-button>
                <med-tooltip from-stencil class="med-tooltip monta-provas-content__button-icon-duplicar" placement="top" content="Tooltip Simples">
                  <ion-icon slot="icon" class="med-icon monta-provas-content__button-tooltip" name="med-duplicar"></ion-icon>
                </med-tooltip>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-lixeira"></ion-icon>
                </ion-button>
                <ion-button ds-size="xxs" ds-name="primary" class="monta-provas-content__button-realizar">
                  Realizar Prova
                </ion-button>
              </div>

            </div>

          </med-accordion-item>

          <med-accordion-item>

            <med-caption class="monta-provas-accordion__text-header" slot="start">
              <h3 class="med-clamp">Nome da prova</h3>
            </med-caption>

            <div class="monta-provas__header-end" slot="end">
              <ion-button class="med-list-item-accordion__button" ds-name="tertiary" ds-size="xs">
                <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
              </ion-button>
            </div>

            <div class="monta-provas-content" slot="content">

              <div class="monta-provas-content__chart">
                <med-chart-radial>
                  <med-chart-radial-content class="monta-provas-content__chart-data" total="999999" ></med-chart-radial-content>
                </med-chart-radial>

                <med-chart-radial-label class="monta-provas-content__chart-label" ></med-chart-radial-label>
              </div>

              <div class="monta-provas-content__button">
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-duplicar"></ion-icon>
                </ion-button>
                <med-tooltip from-stencil class="med-tooltip monta-provas-content__button-icon-duplicar" placement="top" content="Tooltip Simples">
                  <ion-icon slot="icon" class="med-icon monta-provas-content__button-tooltip" name="med-duplicar"></ion-icon>
                </med-tooltip>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-lixeira"></ion-icon>
                </ion-button>
                <ion-button ds-size="xxs" ds-name="primary" class="monta-provas-content__button-realizar">
                  Realizar Prova
                </ion-button>
              </div>

            </div>

          </med-accordion-item>
          <med-accordion-item>

            <med-caption class="monta-provas-accordion__text-header" slot="start">
              <h3 class="med-clamp">Nome da prova</h3>
            </med-caption>

            <div class="monta-provas__header-end" slot="end">
              <ion-button class="med-list-item-accordion__button" ds-name="tertiary" ds-size="xs">
                <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
              </ion-button>
            </div>

            <div class="monta-provas-content" slot="content">

              <div class="monta-provas-content__chart">
                <med-chart-radial>
                  <med-chart-radial-content class="monta-provas-content__chart-data" total="999999" ></med-chart-radial-content>
                </med-chart-radial>

                <med-chart-radial-label class="monta-provas-content__chart-label" ></med-chart-radial-label>
              </div>

              <div class="monta-provas-content__button">
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-duplicar"></ion-icon>
                </ion-button>
                <med-tooltip from-stencil class="med-tooltip monta-provas-content__button-icon-duplicar" placement="top" content="Tooltip Simples">
                  <ion-icon slot="icon" class="med-icon monta-provas-content__button-tooltip" name="med-duplicar"></ion-icon>
                </med-tooltip>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-lixeira"></ion-icon>
                </ion-button>
                <ion-button ds-size="xxs" ds-name="primary" class="monta-provas-content__button-realizar">
                  Realizar Prova
                </ion-button>
              </div>

            </div>

          </med-accordion-item>
          <med-accordion-item>

            <med-caption class="monta-provas-accordion__text-header" slot="start">
              <h3 class="med-clamp">Nome da prova</h3>
            </med-caption>

            <div class="monta-provas__header-end" slot="end">
              <ion-button class="med-list-item-accordion__button" ds-name="tertiary" ds-size="xs">
                <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
              </ion-button>
            </div>

            <div class="monta-provas-content" slot="content">

              <div class="monta-provas-content__chart">
                <med-chart-radial>
                  <med-chart-radial-content class="monta-provas-content__chart-data" total="999999" ></med-chart-radial-content>
                </med-chart-radial>

                <med-chart-radial-label class="monta-provas-content__chart-label" ></med-chart-radial-label>
              </div>

              <div class="monta-provas-content__button">
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-duplicar"></ion-icon>
                </ion-button>
                <med-tooltip from-stencil class="med-tooltip monta-provas-content__button-icon-duplicar" placement="top" content="Tooltip Simples">
                  <ion-icon slot="icon" class="med-icon monta-provas-content__button-tooltip" name="med-duplicar"></ion-icon>
                </med-tooltip>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-lixeira"></ion-icon>
                </ion-button>
                <ion-button ds-size="xxs" ds-name="primary" class="monta-provas-content__button-realizar">
                  Realizar Prova
                </ion-button>
              </div>

            </div>

          </med-accordion-item>
          <med-accordion-item>

            <med-caption class="monta-provas-accordion__text-header" slot="start">
              <h3 class="med-clamp">Nome da prova</h3>
            </med-caption>

            <div class="monta-provas__header-end" slot="end">
              <ion-button class="med-list-item-accordion__button" ds-name="tertiary" ds-size="xs">
                <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
              </ion-button>
            </div>

            <div class="monta-provas-content" slot="content">

              <div class="monta-provas-content__chart">
                <med-chart-radial>
                  <med-chart-radial-content class="monta-provas-content__chart-data" total="999999" ></med-chart-radial-content>
                </med-chart-radial>

                <med-chart-radial-label class="monta-provas-content__chart-label" ></med-chart-radial-label>
              </div>

              <div class="monta-provas-content__button">
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-duplicar"></ion-icon>
                </ion-button>
                <med-tooltip from-stencil class="med-tooltip monta-provas-content__button-icon-duplicar" placement="top" content="Tooltip Simples">
                  <ion-icon slot="icon" class="med-icon monta-provas-content__button-tooltip" name="med-duplicar"></ion-icon>
                </med-tooltip>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-lixeira"></ion-icon>
                </ion-button>
                <ion-button ds-size="xxs" ds-name="primary" class="monta-provas-content__button-realizar">
                  Realizar Prova
                </ion-button>
              </div>

            </div>

          </med-accordion-item>
          <med-accordion-item>

            <med-caption class="monta-provas-accordion__text-header" slot="start">
              <h3 class="med-clamp">Nome da prova</h3>
            </med-caption>

            <div class="monta-provas__header-end" slot="end">
              <ion-button class="med-list-item-accordion__button" ds-name="tertiary" ds-size="xs">
                <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
              </ion-button>
            </div>

            <div class="monta-provas-content" slot="content">

              <div class="monta-provas-content__chart">
                <med-chart-radial>
                  <med-chart-radial-content class="monta-provas-content__chart-data" total="999999" ></med-chart-radial-content>
                </med-chart-radial>

                <med-chart-radial-label class="monta-provas-content__chart-label" ></med-chart-radial-label>
              </div>

              <div class="monta-provas-content__button">
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-duplicar"></ion-icon>
                </ion-button>
                <med-tooltip from-stencil class="med-tooltip monta-provas-content__button-icon-duplicar" placement="top" content="Tooltip Simples">
                  <ion-icon slot="icon" class="med-icon monta-provas-content__button-tooltip" name="med-duplicar"></ion-icon>
                </med-tooltip>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-lixeira"></ion-icon>
                </ion-button>
                <ion-button ds-size="xxs" ds-name="primary" class="monta-provas-content__button-realizar">
                  Realizar Prova
                </ion-button>
              </div>

            </div>

          </med-accordion-item>
          <med-accordion-item>

            <med-caption class="monta-provas-accordion__text-header" slot="start">
              <h3 class="med-clamp">Nome da prova</h3>
            </med-caption>

            <div class="monta-provas__header-end" slot="end">
              <ion-button class="med-list-item-accordion__button" ds-name="tertiary" ds-size="xs">
                <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
              </ion-button>
            </div>

            <div class="monta-provas-content" slot="content">

              <div class="monta-provas-content__chart">
                <med-chart-radial>
                  <med-chart-radial-content class="monta-provas-content__chart-data" total="999999" ></med-chart-radial-content>
                </med-chart-radial>

                <med-chart-radial-label class="monta-provas-content__chart-label" ></med-chart-radial-label>
              </div>

              <div class="monta-provas-content__button">
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-duplicar"></ion-icon>
                </ion-button>
                <med-tooltip from-stencil class="med-tooltip monta-provas-content__button-icon-duplicar" placement="top" content="Tooltip Simples">
                  <ion-icon slot="icon" class="med-icon monta-provas-content__button-tooltip" name="med-duplicar"></ion-icon>
                </med-tooltip>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-lixeira"></ion-icon>
                </ion-button>
                <ion-button ds-size="xxs" ds-name="primary" class="monta-provas-content__button-realizar">
                  Realizar Prova
                </ion-button>
              </div>

            </div>

          </med-accordion-item>
          <med-accordion-item>

            <med-caption class="monta-provas-accordion__text-header" slot="start">
              <h3 class="med-clamp">Nome da prova</h3>
            </med-caption>

            <div class="monta-provas__header-end" slot="end">
              <ion-button class="med-list-item-accordion__button" ds-name="tertiary" ds-size="xs">
                <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
              </ion-button>
            </div>

            <div class="monta-provas-content" slot="content">

              <div class="monta-provas-content__chart">
                <med-chart-radial>
                  <med-chart-radial-content class="monta-provas-content__chart-data" total="999999" ></med-chart-radial-content>
                </med-chart-radial>

                <med-chart-radial-label class="monta-provas-content__chart-label" ></med-chart-radial-label>
              </div>

              <div class="monta-provas-content__button">
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-duplicar"></ion-icon>
                </ion-button>
                <med-tooltip from-stencil class="med-tooltip monta-provas-content__button-icon-duplicar" placement="top" content="Tooltip Simples">
                  <ion-icon slot="icon" class="med-icon monta-provas-content__button-tooltip" name="med-duplicar"></ion-icon>
                </med-tooltip>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-lixeira"></ion-icon>
                </ion-button>
                <ion-button ds-size="xxs" ds-name="primary" class="monta-provas-content__button-realizar">
                  Realizar Prova
                </ion-button>
              </div>

            </div>

          </med-accordion-item>
          <med-accordion-item>

            <med-caption class="monta-provas-accordion__text-header" slot="start">
              <h3 class="med-clamp">Nome da prova</h3>
            </med-caption>

            <div class="monta-provas__header-end" slot="end">
              <ion-button class="med-list-item-accordion__button" ds-name="tertiary" ds-size="xs">
                <ion-icon slot="icon-only" class="med-icon med-rotate" name="med-cima"></ion-icon>
              </ion-button>
            </div>

            <div class="monta-provas-content" slot="content">

              <div class="monta-provas-content__chart">
                <med-chart-radial>
                  <med-chart-radial-content class="monta-provas-content__chart-data" total="999999" ></med-chart-radial-content>
                </med-chart-radial>

                <med-chart-radial-label class="monta-provas-content__chart-label" ></med-chart-radial-label>
              </div>

              <div class="monta-provas-content__button">
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-filtro"></ion-icon>
                </ion-button>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-duplicar"></ion-icon>
                </ion-button>
                <med-tooltip from-stencil class="med-tooltip monta-provas-content__button-icon-duplicar" placement="top" content="Tooltip Simples">
                  <ion-icon slot="icon" class="med-icon monta-provas-content__button-tooltip" name="med-duplicar"></ion-icon>
                </med-tooltip>
                <ion-button ds-name="tertiary" class="monta-provas-content__button-icon">
                  <ion-icon slot="icon-only" class="med-icon" name="med-lixeira"></ion-icon>
                </ion-button>
                <ion-button ds-size="xxs" ds-name="primary" class="monta-provas-content__button-realizar">
                  Realizar Prova
                </ion-button>
              </div>

            </div>

          </med-accordion-item>
        </med-accordion-list>
        <!-- component -->

      </ion-content>
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
          cor: 'med-color-fb-success',
          label: 'Acertos',
          quantia: 50,
          ignoreBarra: false,
        },
        {
          cor: 'med-color-fb-warning',
          label: 'Erros',
          quantia: 50,
          ignoreBarra: false,
        },
        {
          cor: '',
          label: 'Restantes',
          quantia: 0,
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
