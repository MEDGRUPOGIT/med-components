import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Accordion Group',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <ion-content>
        <accordion-group class="cp-accordion-list" single-open="false">
          <accordion-item class="cp-accordion-list__item" color="aula" background>
            <div class="cp-accordion-list__header" slot="header">
              <med-video-thumbnail class="cp-accordion-list__thumbnail"ds-color="aula" value="50" url="https://i.vimeocdn.com/video/1259043113-c9a7f9c87a196970fbe75705e1896b6fee497eedde2569c55ed79b634a2bfffa-d_1920x1080?r=pad"></med-video-thumbnail>
              <div class="cp-accordion-list__middle">
                <med-type token="p14">Cardiologia</med-type>
                <div class="cp-time-stamp">
                  <ion-icon class="med-icon med-icon--xs cp-time-stamp__icon" name="med-retafinal"></ion-icon>
                  <med-type token="p12x" ds-color="aula">00:42:25</med-type>
                </div>
              </div>
              <div class="cp-accordion-list__end">
                <ion-button ds-name="tertiary" ds-size="xxs">
                  <ion-icon class="cp-accordion-list__icon med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
                </ion-button>
                <med-download-button ds-color="aula"></med-download-button>
              </div>
            </div>

            <div class="cp-accordion-list__content" slot="content">
              <med-video-list-item ds-color="aula"></med-video-list-item>
              <med-video-list-item ds-color="aula"></med-video-list-item>
            </div>
          </accordion-item>
        </accordion-group>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Default.argTypes = {
};
