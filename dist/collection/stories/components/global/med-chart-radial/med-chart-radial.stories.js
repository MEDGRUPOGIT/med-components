import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Core/Chart Radial',
  decorators: [withDesign],
};

const TemplateDefault = ({valores}) => {

  setTimeout(() => {
    document.querySelector('med-chart-radial').valores = valores.valores;
  }, 1000);

  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
          <med-chart-radial></med-chart-radial>
        <!-- component -->

      </div>
    </ion-app>
  `
}

export const ChartRadial = TemplateDefault.bind({});
ChartRadial.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/zdbyAa3XpX3loOjJEaXc6E/Quest%C3%B5es?node-id=826%3A1008',
  },
}
ChartRadial.argTypes = {
  valores: {
    defaultValue: {
      valores: [
        {
          cor: 'ion-color-success',
          label: 'acertos',
          quantia: 32,
          ignoreBarra: false,
        },
        {
          cor: 'ion-color-caution',
          label: 'acertos',
          quantia: 16,
          ignoreBarra: false,
        },
        {
          cor: '',
          label: 'restantes',
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
