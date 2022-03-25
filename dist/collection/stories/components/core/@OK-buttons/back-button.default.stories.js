import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/@OK Buttons',
  decorators: [withDesign],
};

const Template = ({ dsColor, disabled, expand, dsSize }) => {
  return html`
    <style>
      /* !NÃO UTILIZAR! Apenas para estória */
        ion-button {
          margin: 5px 15px;
        }
      /* !NÃO UTILIZAR! Apenas para estória */
    </style>

    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <ion-back-button ds-name="tertiary" .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>
            <ion-icon slot="icon-only" class="med-icon"></ion-icon>
          </ion-back-button>

        </div>
      </ion-content>
    </ion-app>
  `
}

export const BackButton = Template.bind({});
BackButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=6441%3A51186',
  },
}
BackButton.argTypes = {
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
    options: [undefined, 'lg', 'md', 'sm', 'xs', 'xxs', 'xxxs'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'lg | md | sm | xs | xxs | xxxs' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
