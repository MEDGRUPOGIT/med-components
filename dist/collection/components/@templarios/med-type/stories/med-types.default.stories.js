import { html } from 'lit-html';
import { MedColors, MedType, MedTypeTag } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Type',
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
