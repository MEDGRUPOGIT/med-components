import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Compositions/Fab',
  decorators: [withDesign],
};

const TemplateDefault = ({dsColor}) => {
  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component markdown -->
        <ion-fab vertical="center" horizontal="center" slot="fixed">
          <ion-fab-button .dsColor=${dsColor}>
            <ion-icon class="med-icon" name="med-mais"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="top">
            <ion-fab-button ds-color="neutral-10">
              <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
            </ion-fab-button>
            <ion-fab-button ds-color="neutral-10">
              <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
            </ion-fab-button>
            <ion-fab-button ds-color="neutral-10">
              <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
            </ion-fab-button>
            <ion-fab-button ds-color="neutral-10">
              <ion-icon class="med-icon" name="med-star-filled"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
        <!-- component markdown -->

      </div>
    </ion-app>
  `
}

export const Default = TemplateDefault.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=2436%3A21',
  }
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

