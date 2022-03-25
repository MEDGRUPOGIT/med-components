import { withDesign } from 'storybook-addon-designs';
import { html } from 'lit-html';

export default {
  title: 'Components/Core/@OK Inputs',
  decorators: [withDesign],
};

const Template = ({ placeholder, dsName, disabled }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="ion-padding">

          <!-- component markdown -->
          <ion-textarea
            .dsName=${dsName}
            placeholder=${placeholder}
            ?disabled=${disabled}>
          </ion-textarea>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const TextArea = Template.bind({});
TextArea.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=12435%3A44190',
  },
}
TextArea.argTypes = {
  dsName: {
    options: [undefined, 'secondary'],
    control: { type: 'radio'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'secondary' },
      defaultValue: { summary: 'undefined' },
    },
  },
  placeholder: {
    control: { type: 'text' },
    description: 'Define o placeholder.',
    defaultValue: 'Placeholder Text',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  disabled: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define o estado disabled do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
