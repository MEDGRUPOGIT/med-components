import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from "../../../constants";

export default {
  title: 'Components/Team/Chart Categoria',
  decorators: [withDesign],
};

const Template = ({ dsColor, value, titulo, meta, realizado }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center flex-center--xs">

          <!-- component -->
          <med-chart-categoria .dsColor=${dsColor} value=${value} titulo=${titulo} meta=${meta} realizado=${realizado}></med-chart-categoria>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
Default.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: "MedColor" },
      defaultValue: { summary: "undefined" },
    },
  },
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 150, step: 1 },
    description: 'Define a porcentagem a ser mostrada.'
  },
  titulo: {
    control: { type: 'text' },
    defaultValue: 'Assistir Videoaulas',
  },
  meta: {
    control: { type: 'text' },
    defaultValue: '100h',
  },
  realizado: {
    control: { type: 'text' },
    defaultValue: '85h',
  },
};

