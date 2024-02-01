import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Chart Radial',
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
          <med-chart-radial titulo="100" subtitulo="Questoes" .dsColor=${dsColor} ds-name=${dsName} .dsSize=${dsSize}></med-chart-radial>
        <!-- component markdown-->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default3 = Template.bind({});
Default3.argTypes = {
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
    defaultValue: 'md',
    description: "Define a variação de tamanho.",
    table: {
      type:  { summary: 'xs | sm | md | lg' },
      defaultValue: { summary: 'md' },
    },
  },
  valores: {
    description: "Define os valores do gráfico.",
    defaultValue: {
      valores: [
        {
          cor: 'med-color-fb-success',
          label: 'acertos',
          quantia: 15,
          ignoreBarra: false,
        },
        {
          cor: 'med-color-fb-caution',
          label: 'acertos',
          quantia: 30,
          ignoreBarra: false,
       },
       {
          cor: 'med-color-revalida',
          label: 'teste',
          quantia: 45,
          ignoreBarra: false,
      },
       {
         cor: '',
          label: 'restantes',
          quantia: 10,
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
