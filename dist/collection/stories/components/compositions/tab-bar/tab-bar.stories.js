import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Compositions/Tab Bar',
  decorators: [withDesign],
};

const Template = ({dsColor}) => {
  return html`
    <ion-app>
      <ion-tabs>

        <ion-tab tab="questao"></ion-tab>
        <ion-tab tab="gabarito-comentado"></ion-tab>
        <ion-tab tab="med-cartao-resposta"></ion-tab>
        <ion-tab tab="questao-sec"></ion-tab>
        <ion-tab tab="gabarito-comentado"></ion-tab>

        <!-- component -->
          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="questao" .dsColor=${dsColor}>
              <ion-icon class="med-icon" name="med-questao"></ion-icon>
              <med-type token="p10">Questão</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="gabarito-comentado" .dsColor=${dsColor}>
              <ion-icon class="med-icon" name="med-gabarito"></ion-icon>
              <med-type token="p10">Gabarito Comentado</med-type>
            </ion-tab-button>

            <ion-tab-button tab="med-cartao-resposta" .dsColor=${dsColor}>
              <ion-icon class="med-icon" name="med-cartao"></ion-icon>
              <med-type token="p10">Cartão Resposta</med-type>
            </ion-tab-button>

            <ion-tab-button tab="questao-sec" .dsColor=${dsColor}>
              <ion-icon class="med-icon" name="med-duvidas"></ion-icon>
              <med-type token="p10">Dúvidas</med-type>
            </ion-tab-button>

            <ion-tab-button tab="gabarito-comentado" .dsColor=${dsColor} disabled>
              <ion-icon class="med-icon" name="med-recursos"></ion-icon>
              <med-type token="p10">Recursos</med-type>
            </ion-tab-button>
          </ion-tab-bar>
        <!-- component -->

      </ion-tabs>
    </ion-app>
    `
}

export const TabBar = Template.bind({});
TabBar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=1464%3A2481',
  },
}
TabBar.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
