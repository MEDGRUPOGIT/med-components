import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/@OK Chart Radial',
  decorators: [withDesign],
};

const Template = ({dsColor, dsName, dsSize, valores}) => {

  setTimeout(() => {
    document.querySelector('med-chart-radial').valores = valores.valores;
  }, 1000);

  return html`
    <style>
      .full-height-flex {
        display: space-evenly;
      }
    </style>
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown-->
          <med-chart-radial titulo="65%" .dsColor=${dsColor} ds-name=${dsName} .dsSize=${dsSize}></med-chart-radial>
          <!-- component markdown-->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default1 = Template.bind({});
Default1.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=11565%3A79802',
  },
}
Default1.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsName: {
    options: [undefined, 'secondary'],
    control: { type: 'radio'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'secondary' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: ['xs', 'sm', 'md', 'lg'],
    control: { type: 'radio'},
    defaultValue: 'sm',
    description: "Define a variação de tamanho.",
    table: {
      type:  { summary: 'xs | sm | md | lg' },
      defaultValue: { summary: 'sm' },
    },
  },
  valores: {
    description: "Define os valores do gráfico.",
    defaultValue: {
      valores: [
        {
          cor: 'med-color-brand',
          label: 'acertos',
          quantia: 65,
          ignoreBarra: false,
        },
       {
         cor: '',
          label: 'restantes',
          quantia: 35,
          ignoreBarra: true,
        }
      ],
    },
    control: { type: 'array' },
    description: 'Define a lista...',
    table: {
      type:  { summary: 'MedRadialItem[]' },
      defaultValue: { summary: 'undefined' },
    },
  },
}
