import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Core/Agrupador',
  decorators: [withDesign],
};

const TemplateDefault = ({ dsColor, texto1, texto2 }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

        <!-- component -->
          <med-agrupador .dsColor=${dsColor} .texto1=${texto1} .texto2=${texto2}></med-agrupador>
        <!-- component -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Agrupador = TemplateDefault.bind({});
Agrupador.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=2781%3A8634',
  },
}
Agrupador.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
  texto1: {
    control: { type: 'text' },
    defaultValue: 'Expandir a lista',
  },
  texto2: {
    control: { type: 'text' },
    defaultValue: 'Ocultar a lista',
  },
};
