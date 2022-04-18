import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core (Revisado: abril 2022)/Inputs',
  decorators: [withDesign],
};

const Template = ({ dsName, placeholder, disabled, noIcon }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="ion-padding">

          <!-- component markdown -->
          <ion-searchbar
            mode="ios"
            .dsName=${dsName}
            placeholder=${placeholder}
            ?disabled=${disabled}
            ?no-icon=${noIcon}
          >
          </ion-searchbar>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Search = Template.bind({});
Search.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=9341%3A58123',
  },
}
Search.argTypes = {
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
  noIcon: {
    noIcon: false,
    control: { type: 'boolean' },
    description: 'Remove icone de procura.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
