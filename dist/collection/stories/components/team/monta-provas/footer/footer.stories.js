import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Monta Provas/Footer',
  decorators: [withDesign],
};

const Default = ({}) => {
  return html`
    <ion-app>
      <ion-container></ion-container>
      <!-- component -->

        <ion-footer class="monta-provas-footer">

          <div class="monta-provas-footer__container">
            <div class="monta-provas-footer__col">
              <med-caption ds-size="xl" ds-color="neutral-7">
                <span class="monta-provas-footer__text-number">253.478</span>
              </med-caption>
              <med-caption ds-size="sm" ds-color="neutral-7">
                <span>Questões Filtradas</span>
              </med-caption>
            </div>

            <div class="monta-provas-footer__col">
              <monta-provas-plusminus ds-size="">500</monta-provas-plusminus>
              <med-caption ds-size="sm" ds-color="neutral-7">
                <span>Total de Questões</span>
              </med-caption>
            </div>
          </div>

          <div class="monta-provas-footer__container-button">
            <ion-button ds-name="primary">Realizar Prova</ion-button>
          </div>

        </ion-footer>

        <!-- component -->
    </ion-app>
  `
}

export const Footer = Default.bind({});
Footer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zdbyAa3XpX3loOjJEaXc6E/Quest%C3%B5es?node-id=826%3A1008',
  },
}
Footer.argTypes = {
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
