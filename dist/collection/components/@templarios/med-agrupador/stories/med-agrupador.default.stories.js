import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Button Cluster',
};

const Template = ({ 'ds-color': dsColor, 'label-default': labelDefault, 'label-alternativo': labelAlternativo, collapsed }) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-agrupador .dsColor=${dsColor} .labelDefault=${labelDefault} .labelAlternativo=${labelAlternativo} .collapsed=${collapsed}></med-agrupador>
        <!-- component markdown -->

      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind();
Default.argTypes = {
  'ds-color': {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  'label-default': {
    control: { type: 'text' },
    description: 'Define o texto no estado default.',
    defaultValue: 'Expandir a lista',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'Expandir a lista' },
    },
  },
  'label-alternativo': {
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
