import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/Lista',
  decorators: [withDesign],
};

const Template = ({dsColor}) => {
  return html`
    <style>
      .med-icon {
        stroke: hsl(var(--med-color-neutral-10));
      }
    </style>

    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-lista .dsColor=${dsColor} padding>
          <ion-radio-group value="biff">
            <med-item>
              <!--<ion-radio slot="start" value="biff"></ion-radio>-->
              <med-type token="p14">Texto Primario</med-type>
              <med-type token="p10" ds-color="neutral-8">Texto Primario</med-type>
              <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
            </med-item>
            <med-item>
              <!--<ion-radio slot="start" value="teste"></ion-radio>-->
              <med-type token="p14">Texto Primario</med-type>
              <med-type token="p10" ds-color="neutral-8">Texto Primario</med-type>
              <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
            </med-item>
            <med-item>
              <!--<ion-radio slot="start" value="teste2"></ion-radio>-->
              <med-type token="p14">Texto Primario</med-type>
              <med-type token="p10" ds-color="neutral-8">Texto Primario</med-type>
              <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
            </med-item>
          </ion-radio-group>
        </med-lista>
        <!-- component markdown -->

        <!-- component markdown -->
        <!--<ion-list>
          <ion-radio-group value="grape">
            <ion-item>
              <med-type token="p14">Texto Primario</med-type>
              <med-type token="p10" ds-color="neutral-8">Texto Primario</med-type>
              <ion-radio slot="start" color="success" value="apple"></ion-radio>
            </ion-item>

            <ion-item>
              <med-type token="p14">Texto Primario</med-type>
              <med-type token="p10" ds-color="neutral-8">Texto Primario</med-type>
              <ion-radio slot="start" color="tertiary" value="grape"></ion-radio>
            </ion-item>

            <ion-item>
              <med-type token="p14">Texto Primario</med-type>
              <med-type token="p10" ds-color="neutral-8">Texto Primario</med-type>
              <ion-radio slot="start" color="danger" value="cherry"></ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-list>-->
        <!-- component markdown -->

      </ion-content>
    </ion-app>
  `
}

export const Lista = Template.bind({});
Lista.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Lista.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
}