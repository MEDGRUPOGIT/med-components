import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/Toolbar',
  decorators: [withDesign],
};

const Template = ({ dsColor }) => {
  return html `
    <ion-app>

      <!-- component -->
      <med-toolbar .dsColor=${dsColor}>
        <ion-button ds-name="tertiary" slot="start">
          <ion-icon class="med-icon" slot="icon-only" name="med-setaesquerda"></ion-icon>
        </ion-button>
        <ul>
          <li>
            <ion-button ds-name="tertiary">
              <ion-icon class="med-icon" slot="icon-only" name="med-estrela"></ion-icon>
            </ion-button>
            <ion-button ds-name="tertiary">
              <ion-icon class="med-icon" slot="icon-only" name="med-visivel"></ion-icon>
            </ion-button>
            <ion-button ds-name="tertiary">
              <ion-icon class="med-icon" slot="icon-only" color="brand" name="med-editar"></ion-icon>
            </ion-button>
            <ion-button ds-name="tertiary">
              <ion-icon class="med-icon med-neutral med-neutral-4" slot="icon-only" name="med-fonte"></ion-icon>
            </ion-button>
          </li>
        </ul>
        <ion-button ds-name="tertiary" slot="end">
          <ion-icon class="med-icon" slot="icon-only" name="med-setadireita"></ion-icon>
        </ion-button>
      </med-toolbar>
      <!-- component -->

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
