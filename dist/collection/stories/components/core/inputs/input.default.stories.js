import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedIcons } from '../../../constants';

export default {
  title: 'Components/Core/Inputs',
  decorators: [withDesign],
};

const Template = ({ dsName, placeholder, disabled, status, clearInput, icon }) => {
  return html`
    <ion-app>
      <ion-content>

          <div class="ion-padding">
            <!-- component markdown -->
              <ion-input
                .dsName=${dsName}
                placeholder=${placeholder}
                ?disabled=${disabled}
                ?clear-input=${clearInput}
                .status=${status}
                icon="med-visivel"
              >
              </ion-input>
            <!-- component markdown -->
          </div>

          <div class="ion-padding">
            <!-- component markdown -->
              <ion-input
                .dsName=${dsName}
                placeholder=${placeholder}
                ?disabled=${disabled}
                icon=${icon}
                .status=${status}
              >
              </ion-input>
            <!-- component markdown -->
          </div>

      </ion-content>
    </ion-app>
  `
}

export const Input = Template.bind({});
Input.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=9341%3A58123',
  },
}
Input.argTypes = {
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
  status: {
    options: [undefined, 'valid', 'invalid'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'valid | invalid' },
      defaultValue: { summary: 'undefined' },
    },
  },
  clearInput: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define a opção de limpeza do input.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  icon: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'undefined',
    description: 'Define o icone do componente.',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'undefined' },
    },
  },
};
