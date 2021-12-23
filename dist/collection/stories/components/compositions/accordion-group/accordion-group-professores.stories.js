import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions/Accordion Group/Professores',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <ion-content>
        <accordion-group class="cp-accordion-list" single-open="false">
          <accordion-item class="cp-accordion-list__item" color="aula" background>
            <div class="cp-accordion-list__header" slot="header">
              <ion-icon class="cp-accordion-list__icon cp-accordion-list__icon--color med-icon" name="med-video" ></ion-icon>
              <div class="cp-accordion-list__middle">
                <med-type token="p16b">Aula de Revisão</med-type>
                <med-type class="cp-accordion-list__caption" token="p14" ds-color="neutral-7">2 Professor, 17 Vídeos</med-type>
                <med-type token="p10" ds-color="neutral-7">9% Concluído</med-type>
              </div>
              <div class="cp-accordion-list__end">
                <ion-button ds-name="tertiary" ds-size="xxs">
                  <ion-icon class="cp-accordion-list__icon med-rotate med-icon" slot="icon-only" name="med-baixo"></ion-icon>
                </ion-button>
              </div>
            </div>
           <ion-progress-bar ds-name="minimalist" ds-color="aula" slot="header" value="0.3"></ion-progress-bar>
            <div class="cp-accordion-list__content" slot="content">
              <div class="cp-accordion-list__aulas">
                <med-base>
                  <med-avatar class="cp-accordion-list__aulas-start" slot="start" letter="A" ds-color="" ds-size="lg"></med-avatar>
                  <div class="cp-accordion-list__aulas-middle" slot="middle">
                    <med-type token="p12x" ds-color="neutral-8">Professor</med-type>
                    <med-type class="cp-accordion-list__caption" token="p16b">Felipe Marinho Bastos</med-type>
                    <med-type token="p10" ds-color="neutral-7">20% Concluído</med-type>
                    <med-rate-result class="cp-accordion-list__aulas-result" excelente="2K" bom="367" regular="117" ruim="12"></med-rate-result>
                  </div>
                  <div class="cp-accordion-list__aulas-end" slot="end">
                    <ion-button class="cp-accordion-list__aulas-btn-small" ds-name="tertiary" >
                      <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
                    </ion-button>
                    <ion-button class="cp-accordion-list__aulas-btn" ds-name="tertiary" ds-size="xs" .dsColor="neutral-3">
                      15 Vídeos
                      <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
                    </ion-button>
                  </div>
                </med-base>
                <ion-progress-bar ds-name="minimalist" ds-color="aula" value="0.8"></ion-progress-bar>
              </div>
              <div class="cp-accordion-list__aulas">
                <med-base>
                  <med-avatar class="cp-accordion-list__aulas-start" slot="start" letter="A" ds-color="" ds-size="lg"></med-avatar>
                  <div class="cp-accordion-list__aulas-middle" slot="middle">
                    <med-type token="p12x" ds-color="neutral-8">Professor</med-type>
                    <med-type class="cp-accordion-list__caption" token="p16b">Felipe Marinho Bastos</med-type>
                    <med-type token="p10" ds-color="neutral-7">20% Concluído</med-type>
                    <med-rate-result class="cp-accordion-list__aulas-result" excelente="2K" bom="367" regular="117" ruim="12"></med-rate-result>
                  </div>
                  <div class="cp-accordion-list__aulas-end" slot="end">
                    <ion-button class="cp-accordion-list__aulas-btn-small" ds-name="tertiary" >
                      <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
                    </ion-button>
                    <ion-button class="cp-accordion-list__aulas-btn" ds-name="tertiary" ds-size="xs" .dsColor="neutral-3">
                      15 Vídeos
                      <ion-icon slot="end" class="med-icon" name="med-direita"></ion-icon>
                    </ion-button>
                  </div>
                </med-base>
                <ion-progress-bar ds-name="minimalist" ds-color="aula" value="0.5"></ion-progress-bar>
              </div>
            </div>
          </accordion-item>
        </accordion-group>
      </ion-content>
    </ion-app>
  `
}

export const Professores = Template.bind({});
Professores.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Professores.argTypes = {
};
