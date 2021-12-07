import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Core/Chart Bar',
  decorators: [withDesign],
};

const Template = ({dsColor, value}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-chart-bar .dsColor=${dsColor} value=${value}></med-chart-bar>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Overview = Template.bind({});
Overview.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Overview.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
  value: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: "Define a valor do componente.",
    defaultValue: '0',
    table: {
      type:  { summary: 'nummber' },
      defaultValue: { summary: '0' },
    },
  },
};
