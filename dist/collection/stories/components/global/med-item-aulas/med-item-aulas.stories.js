import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { medColors, medNeutrals } from '../../../med-colors';

export default {
  title: 'Components/Core/Item Aulas',
  decorators: [withDesign],
};

const TemplateDefault = ({color, dados}) => {

  setTimeout(() => {
    document.querySelector('med-item-aulas').dados = dados;
    console.log(dados);
  }, 1000);

  return html`
    <ion-app class="storybook-only">
      <ion-content class="storybook-only__container" style="text-align:left;">

        <!-- component -->
          <med-item-aulas .color=${color}></med-item-aulas>
        <!-- component -->

      </ion-content>
    </ion-app>
  `
}

export const ItemAulas = TemplateDefault.bind({});
ItemAulas.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QaJANG4TVrskupANopYUPL/Aulas?node-id=6%3A10088',
  },
}
ItemAulas.argTypes = {
  dados: {
    defaultValue: {
      avatar: {
        letra: 'A',
        imagem: null
      },
      professor: 'Felipe Marinho Bastos',
      porcentagem: 0.2,
      videos: 15,
      rate: {
        excelente: 1000,
        bom: 367,
        regular: 17,
        ruim: 2
      }
    },
    control: { type: 'array' },
    description: 'Define a lista...',
    table: {
      type:  { summary: 'MedRadialItem[]' },
      defaultValue: { summary: 'undefined' },
    },
  },
  color: {
    options: medColors,
    control: { type: 'inline-radio'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'Color' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
