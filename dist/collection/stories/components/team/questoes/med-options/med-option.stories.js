import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../../constants';

export default {
  title: 'Components/Team/Questões/Option',
  decorators: [withDesign],
};

const TemplateDefault = ({dsColor}) => {
  return html`
      <ion-app>
        <ion-content>
          <div class="flex-center">

            <ion-radio-group value="value">

              <!-- component -->
              <med-option .dsColor=${dsColor}>
                <ion-radio></ion-radio>
                <label slot="label" value="A">A</label>
              </med-option>
              <!-- component -->

            </ion-radio-group>

          </div>
        </ion-content>
      </ion-app>
    `
}

export const Option = TemplateDefault.bind({});
Option.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Option.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
};

