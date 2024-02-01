import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Compositions/Video Thumbnail',
};

const Template = ({value = 0, url, dsColor, dsSize}) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown -->
          <med-video-thumbnail .dsColor=${dsColor} ds-size=${dsSize} value=${value / 100} url=${url}></med-video-thumbnail>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  url: {
    defaultValue: 'https://i.vimeocdn.com/video/1259043113-c9a7f9c87a196970fbe75705e1896b6fee497eedde2569c55ed79b634a2bfffa-d_1920x1080?r=pad',
    control: { type: 'text'},
    description: 'Define a url da imagem a ser mostrada.',
    table: {
      type:  { summary: 'String' },
      defaultValue: { summary: 'undefined' },
    },
  },
  value: {
    defaultValue: '50',
    control: { type: 'range', min: 0, max: 100, step: 1 },
    description: 'Define a porcentagem a ser mostrada.',
    table: {
      type:  { summary: 'Number' },
      defaultValue: { summary: '0' },
    },
  }
};
