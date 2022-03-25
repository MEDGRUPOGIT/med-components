import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";
import { MedIcons } from '../../../constants';

export default {
  title: 'Components/Core/@OK Chip',
  decorators: [withDesign],
};

const Template = ({ dsColor, dsSize, label, active, disabled, iconLeft, iconRight }) => {
  return html`
    <style>
      /* !NÃO UTILIZAR! Apenas para estória */
        ion-content {
          --background: hsl(var(--med-color-neutral-2));
        }
      /* !NÃO UTILIZAR! Apenas para estória */
    </style>

    <ion-app>
      <ion-content>

        <div class="ion-padding">
          <med-chip ds-name="secondary" .dsColor=${dsColor} ds-size=${dsSize} label=${label} ?active=${active} ?disabled=${disabled}></med-chip>
        </div>

        <div class="ion-padding">
          <med-chip ds-name="secondary" .dsColor=${dsColor} ds-size=${dsSize} label=${label} ?active=${active} ?disabled=${disabled} icon-left=${iconLeft}></med-chip>
        </div>

        <div class="ion-padding">
          <med-chip ds-name="secondary" .dsColor=${dsColor} ds-size=${dsSize} label=${label} ?active=${active} ?disabled=${disabled} icon-right=${iconRight}></med-chip>
        </div>

      </ion-content>
    </ion-app>
  `
}

export const Secondary = Template.bind({});
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=7015%3A50401',
  },
}
Secondary.argTypes = {
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
    options: [undefined, 'sm', 'md'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'sm | md' },
      defaultValue: { summary: 'undefined' },
    },
  },
  label: {
    control: { type: 'text' },
    description: 'Define o texto do componente.',
    defaultValue: 'Chip',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'Chip' },
    },
  },
  disabled: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define o estado disabled do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  active: {
    active: false,
    control: { type: 'boolean' },
    description: 'Define o estado active do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  iconLeft: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-fechar',
    description: 'Define o icone left do componente.',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-fechar' },
    },
  },
  iconRight: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-fechar',
    description: 'Define o icone right do componente.',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-fechar' },
    },
  },
};
