import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/Tooltip',
  decorators: [withDesign],
};

const Template = ({ dsColor, dsName, collapsed, placement, position, content, titulo }) => {
  return html`
    <style>
      .med-icon {
        stroke: hsl(var(--med-color-neutral-10));
      }
    </style>

    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-tooltip .dsColor=${dsColor} .dsName=${dsName} .titulo=${titulo} .content=${content} .collapsed=${collapsed} .placement=${placement} .position=${position}>
          <ion-icon class="med-icon" name="med-fechar" slot="input"></ion-icon>
        </med-tooltip>
        <!-- component markdown -->

      </ion-content>
    </ion-app>
  `
}

export const Tooltip = Template.bind({});
Tooltip.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Tooltip.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  collapsed: {
    control: { type: 'boolean' },
    description: 'Define o estado do componente.',
    defaultValue: true,
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  placement: {
    options: [undefined, 'top', 'bottom', 'left', 'right'],
    control: { type: 'radio'},
    description: "Define posicionamento em relação ao componente parent.",
    table: {
      type:  { summary: 'top | bottom | left | right' },
      defaultValue: { summary: 'undefined' },
    },
  },
  position: {
    options: [undefined, 'start', 'center', 'end'],
    control: { type: 'radio'},
    description: "Define posicionamento horizontal do componente.",
    table: {
      type:  { summary: 'start | center | end' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsName: {
    options: ['definition'],
    control: { type: 'inline-check'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  titulo: {
    control: { type: 'text' },
    description: "Define o titulo do componete.",
    defaultValue: 'Tooltip Title',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'undefined' },
    },
  },
  content: {
    control: { type: 'text' },
    description: "Define o conteúdo de texto do componete.",
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae leo egestas, maximus elit eget, auctor dui. Nunc quis pulvinar magna, at dapibus est. Suspendisse volutpat euismod ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris malesuada semper purus non vehicula. Integer convallis sollicitudin.',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'undefined' },
    },
  },
  content: {
    description: "**!!! Component Slot !!!**",
  },
  inout: {
    description: "**!!! Component Slot !!!**"
  },
};
