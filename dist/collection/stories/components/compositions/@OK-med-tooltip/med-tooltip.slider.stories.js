import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Compositions/@OK Tooltip',
  decorators: [withDesign],
};

const Template = ({ dsColor, collapsed, placement, position, titulo, btnLeft, btnRight }) => {
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
          <med-tooltip
            .dsColor=${dsColor}
            .titulo=${titulo}
            .collapsed=${collapsed}
            .placement=${placement}
            .position=${position}
            .btnLeft=${btnLeft}
            .btnRight=${btnRight}
            >
            <ion-icon class="med-icon" name="med-fechar" slot="input"></ion-icon>

            <ion-slides class="tp-tooltip-slider" pager="true" slot="content">
              <ion-slide>
                <med-type>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</med-type>
              </ion-slide>
              <ion-slide>
                <med-type>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</med-type>
              </ion-slide>
              <ion-slide>
                <med-type>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</med-type>
              </ion-slide>
            </ion-slides>
          </med-tooltip>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Slider = Template.bind({});
Slider.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=11820%3A73579',
  },
  actions: {
    handles: ['btnLeftClick', 'btnRightClick'],
  },
}
Slider.argTypes = {
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
  titulo: {
    control: { type: 'text' },
    description: "Define o titulo do componete.",
    defaultValue: 'Tooltip Title',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'undefined' },
    },
  },
  btnLeft: {
    control: { type: 'text' },
    description: 'Define o texto do botão esquerdo, se existir.',
    defaultValue: 'ANTERIOR',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
  btnRight: {
    control: { type: 'text' },
    description: 'Define o texto do botão direito, se existir.',
    defaultValue: 'PRÓXIMO',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
