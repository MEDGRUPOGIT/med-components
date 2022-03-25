import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/@OK Inputs',
  decorators: [withDesign],
};

const Template = ({ label }) => {
  return html`
    <ion-app>
      <ion-content>
          <div class="ion-padding">

            <!-- component markdown -->
              <med-input>
                <med-type slot="label" token="p14" slot="label">${label}</med-type>
                <ion-input slot="input" placeholder="Placeholder">
                </ion-input>
              </med-input>
            <!-- component markdown -->

          </div>
      </ion-content>
    </ion-app>
  `
}

export const LabledInput = Template.bind({});
LabledInput.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=9341%3A58123',
  },
}
LabledInput.argTypes = {
  label: {
    control: { type: 'text' },
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    defaultValue: 'Label',
    table: {
      type:  { summary: 'string' },
    },
  },
};
