import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/Tabs',
  decorators: [withDesign],
};

const TemplateDefault = ({dsColor}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

        <!-- component markdown-->
        <ion-segment .dsColor=${dsColor} (ionChange)="segmentChanged($event)">

          <ion-segment-button .dsColor=${dsColor} value="TABS 1">
            <ion-label>TABS 1</ion-label>
          </ion-segment-button>

          <ion-segment-button .dsColor=${dsColor} value="TABS 2">
            <ion-label>TABS 2</ion-label>
          </ion-segment-button>

          <ion-segment-button .dsColor=${dsColor} value="TABS 3">
            <ion-label>TABS 3</ion-label>
          </ion-segment-button>

          <ion-segment-button .dsColor=${dsColor} value="TABS 4">
            <ion-label>TABS 4</ion-label>
          </ion-segment-button>

          <ion-segment-button .dsColor=${dsColor} value="TABS 5">
            <ion-label>TABS 5</ion-label>
          </ion-segment-button>

        </ion-segment>
        <!-- component markdown-->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = TemplateDefault.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=4206%3A18957',
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
