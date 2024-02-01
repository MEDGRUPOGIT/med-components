import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Tooltip',
};

const Template = ({ dsColor, dsName, collapsed, enableHover, placement, position, content }) => {
  return html`
    <style>
      .med-icon {
        stroke: hsl(var(--med-color-neutral-10));
      }
    </style>

    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown -->
          <med-tooltip .dsColor=${dsColor} .dsName=${dsName} .content=${content} .collapsed=${collapsed} .enableHover=${enableHover} .placement=${placement} .position=${position}>
            <ion-icon class="med-icon" name="med-fechar" slot="input"></ion-icon>
          </med-tooltip>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Simple = Template.bind({});
Simple.argTypes = {
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
  enableHover: {
    control: { type: 'boolean' },
    description: 'Habilita o toggle no hover.',
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
  content: {
    control: { type: 'text' },
    description: "Define o conteúdo de texto do componete.",
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae leo egestas, maximus elit eget, auctor dui. Nunc quis pulvinar magna, at dapibus est.',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
