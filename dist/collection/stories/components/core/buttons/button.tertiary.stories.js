import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";
import { MedIcons } from '../../../constants';

export default {
  title: 'Components/Core (Revisado: abril 2022)/Buttons',
  decorators: [withDesign],
};

const Template = ({ dsColor, disabled, expand, dsSize, icon, label }) => {
  return html`
    <style>
      ion-button {
        margin: 5px 15px;
      }
    </style>
    <ion-app>
      <ion-content>

        <div>
          <ion-button ds-name="tertiary" .dsColor=${dsColor} ?disabled=${disabled} .expand=${expand} ds-size=${dsSize}>${label}</ion-button>
        </div>

        <div>
          <ion-button ds-name="tertiary" .dsColor=${dsColor} ?disabled=${disabled} .expand=${expand} ds-size=${dsSize}>
            <ion-icon slot="start" class="med-icon" name=${icon}></ion-icon>
            ${label}
          </ion-button>
        </div>

        <div>
          <ion-button ds-name="tertiary" .dsColor=${dsColor} ?disabled=${disabled} .expand=${expand} ds-size=${dsSize}>
            ${label}
            <ion-icon slot="end" class="med-icon" name=${icon}></ion-icon>
          </ion-button>
        </div>

      </ion-content>
    </ion-app>
  `
}

export const Tertiary = Template.bind({});
Tertiary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=9541%3A63441',
  },
}
Tertiary.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  disabled: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define o comportamento disabled do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: [undefined, 'md', 'sm', 'xs', 'xxs'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'md | sm | xs | xxs' },
      defaultValue: { summary: 'undefined' },
    },
  },
  expand: {
    defaultValue: 'none',
    options: [undefined, 'full', 'block'],
    control: { type: 'radio'},
    description: "Define a variação de estilo do componente.",
    table: {
      type:  { summary: ['full | block'] },
      defaultValue: { summary: 'undefined' },
    },
  },
  icon: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-esquerda',
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-esquerda' },
    },
  },
  label: {
    control: { type: 'text' },
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    defaultValue: 'Label',
    table: {
      type:  { summary: 'string' },
    },
  },
};
