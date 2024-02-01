import { html } from 'lit-html';

export default {
  title: 'Components/Chart Radial Label',
};

const Template = ({ valores, dsSize }) => {
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

export const Default = Template.bind({});
Default.argTypes = {
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
