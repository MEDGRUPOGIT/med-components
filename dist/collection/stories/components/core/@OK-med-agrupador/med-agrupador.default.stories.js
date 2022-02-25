import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/@OK Agrupador (Button Cluster)',
  decorators: [withDesign],
};

const Template = ({ dsColor, labelDefault, labelAlternativo, collapsed }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

        <!-- component markdown -->
        <med-agrupador .dsColor=${dsColor} .labelDefault=${labelDefault} .labelAlternativo=${labelAlternativo} .collapsed=${collapsed}></med-agrupador>
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
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=6974%3A52769',
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
  labelDefault: {
    control: { type: 'text' },
    description: 'Define o texto no estado default.',
    defaultValue: 'Expandir a lista',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'Expandir a lista' },
    },
  },
  labelAlternativo: {
    control: { type: 'text' },
    description: 'Define o texto no estado active.',
    defaultValue: 'Ocultar a lista',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'Ocultar a lista' },
    },
  },
  collapsed: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente.',
    defaultValue: true,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
