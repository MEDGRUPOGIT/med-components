import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core (Revisado: abril 2022)/Radio',
  decorators: [withDesign],
};

const TemplateDefault = ({dsColor, dsName}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

        <!-- component markdown-->
        <ion-radio-group value="Storybook">
            <ion-radio .dsColor=${dsColor} ds-name=${dsName} slot="start" value="teste"></ion-radio>
            <ion-radio .dsColor=${dsColor} ds-name=${dsName} slot="start" value="teste 2"></ion-radio>
        </ion-radio-group>
        <!-- component markdown-->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const radio = TemplateDefault.bind({});
radio.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=5247%3A39755',
  },
}
radio.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsName: {
    options: [undefined, 'secondary'],
    control: { type: 'inline-radio'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'secondary | undefined' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
