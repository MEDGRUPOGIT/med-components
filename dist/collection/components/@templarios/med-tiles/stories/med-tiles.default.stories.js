import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Compositions/Tiles',
};

const Template = ({ dsColor, titulo, label, badge, selected, solid }) => {
  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
        <med-tiles .dsColor=${dsColor} .titulo=${titulo} .label=${label} .badge=${badge} .selected=${selected} .solid=${solid}>
          <ion-badge ds-size="xs">badge XS</ion-button>
        </med-tiles>
        <!-- component -->

      </div>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  titulo: {
    control: { type: 'text' },
    defaultValue: 'Teste',
  },
  label: {
    control: { type: 'text' },
    defaultValue: 'Teste',
  },
  badge: {
    control: { type: 'text' },
    defaultValue: 'BADGE',
  },
  selected: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente.',
    defaultValue: false,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};
