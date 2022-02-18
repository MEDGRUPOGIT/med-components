import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/Item',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <style>
      .med-icon {
        stroke: hsl(var(--med-color-neutral-10));
      }
    </style>

    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-item padding button>
          <med-type token="p14">Texto Primario</med-type>
          <med-type token="p10" ds-color="neutral-8">Texto Primario</med-type>
          <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
        </med-item>
        <!-- component markdown -->

        <!--<ion-item>
          <med-type token="p14">Texto Primario</med-type>
          <med-type token="p10" ds-color="neutral-8">Texto Primario</med-type>
          <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
        </ion-item>-->

      </ion-content>
    </ion-app>
  `
}

export const Item = Template.bind({});
Item.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
