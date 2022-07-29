import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../templarios';

export default {
  title: 'Components/Compositions/Banner (snackbar)',
  decorators: [withDesign],
};

const Template = ({dsColor, titulo, texto, btnLeft, btnRight, icon, image}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-center">

          <!-- component markdown -->
          <med-banner
            .dsColor=${dsColor}
            .titulo=${titulo}
            .texto=${texto}
            .btnLeft=${btnLeft}
            .btnRight=${btnRight}
            .icon=${icon}
            .image=${image}>
          </med-banner>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=4166%3A17187',
  },
  actions: {
    handles: ['btnLeftClick', 'btnRightClick'],
  },
}
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
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
    description: 'Define o texto do botão esquerdo, se existir.',
    defaultValue: 'Cancelar',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  btnRight: {
    control: { type: 'text' },
    description: 'Define o texto do botão direito, se existir.',
    defaultValue: 'Editar Dados',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  icon: {
    control: { type: 'text' },
    description: 'Define o icone, se existir.',
    defaultValue: '',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  image: {
    control: { type: 'text' },
    description: 'Define a url da imagem, se existir.',
    defaultValue: '',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
}
