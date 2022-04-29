import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Compositions/Toolbar',
  decorators: [withDesign],
};

const Template = ({ dsColor }) => {
  return html `
    <style>
      .med-tollbar__button {
        margin: 0 4px;
      }
    </style>
    <ion-app>

      <!-- component markup -->
      <med-toolbar .dsColor=${dsColor}>
        <ion-button slot="start" ds-name="tertiary" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-setaesquerda"></ion-icon>
        </ion-button>

        <ion-button class="med-tollbar__button" ds-name="tertiary" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" color="brand" name="med-editar"></ion-icon>
        </ion-button>
        <ion-button class="med-tollbar__button" ds-name="tertiary" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-estrela"></ion-icon>
        </ion-button>
        <ion-button class="med-tollbar__button" ds-name="tertiary" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-visivel"></ion-icon>
        </ion-button>
        <ion-button class="med-tollbar__button" ds-name="tertiary" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-fonte"></ion-icon>
        </ion-button>

        <ion-button slot="end" ds-name="tertiary" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-setadireita"></ion-icon>
        </ion-button>
      </med-toolbar>
      <!-- component markup -->

    </ion-app>
  `
}

export const Toolbar = Template.bind({});
Toolbar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=404%3A0',
  },
}
Toolbar.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
