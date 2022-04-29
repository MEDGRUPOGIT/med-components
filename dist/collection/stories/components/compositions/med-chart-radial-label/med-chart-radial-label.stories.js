import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Chart Radial Label',
  decorators: [withDesign],
};

const Default = ({ valores, dsSize }) => {

  setTimeout(() => {
    document.querySelector('med-chart-radial-label').valores = valores.valores;
  }, 1000);

  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component markdown-->
          <med-chart-radial-label ds-size=${dsSize}></med-chart-radial-label>
          <!-- component markdown-->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const ChartRadialLabel = Default.bind({});
ChartRadialLabel.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=12132%3A43953',
  },
}
ChartRadialLabel.argTypes = {
  dsSize: {
    options: [undefined, 'lg'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'lg' },
      defaultValue: { summary: 'undefined' },
    },
  },
  valores: {
    defaultValue: {
      valores: [
        {
          cor: 'med-color-fb-success',
          label: 'Acertos',
          quantia: 32,
          ignoreBarra: false,
        },
        {
          cor: 'med-color-fb-warning',
          label: 'Erros',
          quantia: 16,
          ignoreBarra: false,
        },
        {
          cor: '',
          label: 'Restantes',
          quantia: 52,
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
