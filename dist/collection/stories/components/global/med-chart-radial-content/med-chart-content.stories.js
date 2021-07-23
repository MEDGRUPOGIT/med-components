import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/Chart Label',
  decorators: [withDesign],
};

const Default = ({ total }) => {

  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
        <med-chart-label-content total=${total}></med-chart-label-content>
        <!-- component -->

      </div>
    </ion-app>
  `
}

export const ChartRadialContent = Default.bind({});
ChartLabel.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zdbyAa3XpX3loOjJEaXc6E/Quest%C3%B5es?node-id=826%3A1008',
  },
}
ChartRadialContent.argTypes = {
  total: {
    control: { type: 'text' },
    description: "Define o total de questões.",
    defaultValue: '500',
  },
}
