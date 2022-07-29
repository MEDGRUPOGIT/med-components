import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../templarios';

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
        <ion-button mode="ios" icon-only fill="clear" slot="start" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-setaesquerda"></ion-icon>
        </ion-button>

        <ion-button mode="ios" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
          <ion-icon class="med-icon" slot="icon-only" color="brand" name="med-editar"></ion-icon>
        </ion-button>
        <ion-button mode="ios" icon-only fill="clear" class="med-tollbar__button" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-estrela"></ion-icon>
        </ion-button>
        <ion-button mode="ios" icon-only fill="clear" class="med-tollbar__button" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-visivel"></ion-icon>
        </ion-button>
        <ion-button mode="ios" icon-only fill="clear" class="med-tollbar__button" ds-size="xs">
          <ion-icon class="med-icon" slot="icon-only" name="med-fonte"></ion-icon>
        </ion-button>

        <ion-button mode="ios" icon-only fill="clear" slot="end" ds-size="xxs">
          <ion-icon class="med-icon" slot="icon-only" name="med-setadireita"></ion-icon>
        </ion-button>
      </med-toolbar>
      <!-- component markup -->

    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=404%3A0',
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
};
