import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/Avatar',
  decorators: [withDesign],
};

const TemplateDefault = ({dsColor, dsSize, letter}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

        <!-- component markdown -->
        <med-avatar letter="A" .dsColor=${dsColor} ds-size=${dsSize} letter=${letter}></med-avatar>
        <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Letra = TemplateDefault.bind({});
Letra.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=5248%3A39908',
  },
}
Letra.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: ['xxs', 'xs', 'sm', 'base', 'md', 'lg', 'xl', 'xxl'],
    control: { type: 'radio'},
    defaultValue: 'base',
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'xxs | xs | sm | base | md | lg | xl | xxl' },
      defaultValue: { summary: 'undefined' },
    },
  },
  letter: {
    control: { type: 'text' },
    description: 'Define a letra a ser exibida, se existir.',
    defaultValue: 'A',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
