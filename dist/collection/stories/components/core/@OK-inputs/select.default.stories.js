import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedIcons } from '../../../constants';

export default {
  title: 'Components/Core/@OK Inputs',
  decorators: [withDesign],
};

const Template = ({ placeholder, dsName, disabled, icon }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="ion-padding">

          <!-- component markdown -->
          <ion-select
            .dsName=${dsName}
            placeholder=${placeholder}
            ?disabled=${disabled}
            icon=${icon}
            okText="Okay"
            cancelText="Dismiss">
            <ion-select-option value="brown">Brown</ion-select-option>
            <ion-select-option value="blonde">Blonde</ion-select-option>
            <ion-select-option value="black">Black</ion-select-option>
            <ion-select-option value="red">Red</ion-select-option>
          </ion-select>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Select = Template.bind({});
Select.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=9341%3A58123',
  },
}
Select.argTypes = {
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
  icon: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-baixo',
    description: 'Define o icone do componente.',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-baixo' },
    },
  },
};