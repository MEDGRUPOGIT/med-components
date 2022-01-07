import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';
import imageTest from "./image-test.png";

export default {
  title: 'Components/Core/Banner',
  decorators: [withDesign],
};

const Template = ({dsColor, dsSize, titulo, texto, btnLeft, btnRight}) => {
  return html`
    <style>
      .full-height-center {
        display: flex;
        align-items: center;
        height: 100vh;
      }
      .med-icon {
        stroke: hsl(var(--med-color-neutral-10));
      }
    </style>
    <ion-app>
      <ion-content>
        <div class="full-height-center">
          <ion-grid>
            <ion-row>
              <ion-col class="ion-text-center">
                <!-- component markdown -->
                  <med-banner .dsColor=${dsColor} .dsSize=${dsSize} .titulo=${titulo} .texto=${texto} .btnLeft=${btnLeft} .btnRight=${btnRight}>
                  <!-- <img slot="imagem" src=${imageTest} alt=""> -->
                  <ion-icon slot="imagem" class="med-icon" name="med-star-filled"></ion-icon>
                </med-banner>
                <!-- component markdown -->
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-content>
    </ion-app>
  `
}

export const Overview = Template.bind({});
Overview.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=6870%3A57814',
  },
  actions: {
    handles: ['btnLeftClick', 'btnRightClick'],
  },
}
Overview.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: 'Define a cor do componente.',
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: [undefined, 'sm', 'md'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'sm | md' },
      defaultValue: { summary: 'sm' },
    },
  },
  titulo: {
    control: { type: 'text' },
    description: 'Define o título do componente.',
    defaultValue: 'Notification Title',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  texto: {
    control: { type: 'text' },
    description: 'Define o título do componente.',
    defaultValue: 'Corpo do texto vai aqui e ele pode assumir um espaço de parágrafos, contendo até 4 linhas de conteúdo.',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  btnLeft: {
    control: { type: 'text' },
    description: 'Define o título do componente.',
    defaultValue: 'Cancelar',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  btnRight: {
    control: { type: 'text' },
    description: 'Define o título do componente.',
    defaultValue: 'Editar Dados',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
}
