import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors, MedType, MedTypeTag } from '../../../templarios';

export default {
  title: 'Components/Core/Type',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, token, tag, slot }) => {
  return html`
    <ion-app>
      <ion-content>
        <med-type ds-color=${dsColor} .token=${token} .tag=${tag}> ${slot} </med-type>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=12435%3A44300',
  },
};
Default.argTypes = {
  'ds-color': {
    options: [undefined, ...Object.values(MedColors)],
    control: { type: 'select' },
    description: 'Define a cor do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  token: {
    options: [undefined, ...Object.values(MedType)],
    control: { type: 'select' },
    description: 'Define o token do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedType).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  tag: {
    options: [undefined, ...Object.values(Object.values(MedTypeTag))],
    control: { type: 'select' },
    description: 'Define a tag HTML do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedTypeTag).join(' |') },
      defaultValue: { summary: 'span' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque imperdiet luctus.',
  },
};
