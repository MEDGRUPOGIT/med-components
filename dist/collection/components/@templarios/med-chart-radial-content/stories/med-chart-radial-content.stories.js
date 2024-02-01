import { html } from 'lit-html';

export default {
  title: 'Components/Compositions/Chart Radial Content',
};

const Template = ({ total, dsSize }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

        <!-- component -->
        <med-chart-radial-content total=${total} ds-size=${dsSize}></med-chart-radial-content>
        <!-- component -->

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
  total: {
    control: { type: 'text' },
    description: "Define o total de questões.",
    defaultValue: '500',
  },
}
