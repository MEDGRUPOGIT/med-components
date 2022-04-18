import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Legacy/Chart Radial Content',
  decorators: [withDesign],
};

const Default = ({ total, dsSize }) => {

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

export const ChartRadialContent = Default.bind({});
ChartRadialContent.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zdbyAa3XpX3loOjJEaXc6E/Quest%C3%B5es?node-id=826%3A1008',
  },
}
ChartRadialContent.argTypes = {
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
