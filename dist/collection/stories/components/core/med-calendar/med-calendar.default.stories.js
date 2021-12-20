import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Core/Calendar',
  decorators: [withDesign],
};

const Template = ({dsColor}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <med-calendar .dsColor=${dsColor}></med-calendar>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Default.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: 'Define a cor do componente.',
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
