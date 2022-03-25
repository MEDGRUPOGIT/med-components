import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/@OK Range',
  decorators: [withDesign],
};

const TemplateDefault = ({dsColor}) => {
  return html`
  <ion-app>
    <ion-content>
      <div class="full-height-flex">

        <!-- component markdown-->
        <ion-range .dsColor=${dsColor}></ion-range>
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
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=6974%3A53496',
  },
};
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
