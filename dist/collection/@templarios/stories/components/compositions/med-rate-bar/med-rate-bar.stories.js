import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../templarios';

export default {
  title: 'Components/Compositions/Rate Bar',
  decorators: [withDesign],
};

const Template = ({dsColor}) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component -->
        <med-rate-bar .dsColor=${dsColor}>
          Avalie esse vídeo
          <med-rate-like slot="avaliacao"></med-rate-like>
        </med-rate-bar>
        <!-- component -->

      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zdbyAa3XpX3loOjJEaXc6E/Quest%C3%B5es?node-id=826%3A1008',
  },
  actions: {
    handles: ['medChange'],
  },
}
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
