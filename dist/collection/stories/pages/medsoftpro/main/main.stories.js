import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/MedsoftPro/Main',
  decorators: [withDesign],
};

const Template = () => {

  setTimeout(() => {
    const semanas = document.querySelectorAll('med-semanas');
    const semanaList = document.querySelectorAll('med-semana');
    const skinButton = document.getElementById('skin');

    console.log(semanaList);
    console.log(skinButton);

    // skin
    skinButton.addEventListener('click', () => {
      semanaList.forEach(semana => {
        if (semana.skin) {
          semana.skin = undefined;
          return;
        }

        semana.skin = 'lista';
      });

      semanas.forEach(semana => {
        if (semana.skin) {
          semana.skin = undefined;
          return;
        }

        semana.skin = 'lista';
      });
    });
  }, 1000);

  return html `
    <style>
      .main-header-right {
        position: relative;
      }

      .badge {
        --med-color-feedback-contrast: var(--med-color-neutral-10) !important;
        position: absolute;
        z-index: 1;
        top: -3px;
        left: -20px;
      }

      .med-scrollbar {
        --style: 0;
        --width: 0;
        --height: 0;
      }

      .search-bar {
        padding: 16px;
      }

      ion-content {
        --background: hsl(var(--med-color-neutral-2));
      }
    </style>

    <ion-app>

      <med-header>
        <med-navbar slot="navbar">

          <ion-button ds-name="tertiary" slot="left">
            <ion-icon slot="icon-only" class="med-icon" name="med-qrcode"></ion-icon>
          </ion-button>

          <ion-button id="skin" ds-name="tertiary" slot="left">
            <ion-icon slot="icon-only" class="med-icon" name="med-cartao"></ion-icon>
          </ion-button>

          <ion-button ds-name="tertiary" slot="title">
            2021 MEDCURSO
            <ion-icon slot="end" class="med-icon" name="med-baixo"></ion-icon>
          </ion-button>

          <div slot="right" class="main-header-right">
            <ion-badge class="badge" ds-color="fb-warning" ds-size="xs">
              123
            </ion-badge>
            <ion-button ds-name="tertiary">
              <ion-icon slot="icon-only" class="med-icon" name="med-notificacao"></ion-icon>
            </ion-button>
          </div>

        </med-navbar>

        <med-tabs class="med-scrollbar" slot="auxiliar">
          <med-tab-button active ds-color="aula">Aulas</med-tab-button>
          <med-tab-button ds-color="material">Material</med-tab-button>
          <med-tab-button ds-color="questoes">Questões</med-tab-button>
          <med-tab-button ds-color="revalida">Revalida</med-tab-button>
          <med-tab-button ds-color="brand">Smart</med-tab-button>
        </med-tabs>

        <div class="search-bar" slot="auxiliar">
          <ion-searchbar show-clear-button="never" show-cancel-button="focus" cancel-button-text="Cancelar" mode="ios" search-icon="med-busca"></ion-searchbar>
        </div>
      </med-header>

      <ion-content>
        <ion-slides>

          <ion-slide>
            <med-semanas>
              <med-semana ds-color="aula" active></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula" active></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula" active></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula" active></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula" active></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula" active></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula" active></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula" active></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula" active></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula" active></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
              <med-semana ds-color="aula"></med-semana>
            </med-semanas>
          </ion-slide>

          <ion-slide>
            <med-semanas>
              <med-semana ds-color="material" active></med-semana>
              <med-semana ds-color="material"></med-semana>
              <med-semana ds-color="material"></med-semana>
              <med-semana ds-color="material"></med-semana>
              <med-semana ds-color="material"></med-semana>
              <med-semana ds-color="material"></med-semana>
              <med-semana ds-color="material"></med-semana>
            </med-semanas>
          </ion-slide>

          <ion-slide>
            <med-semanas>
              <med-semana ds-color="questoes" active></med-semana>
              <med-semana ds-color="questoes"></med-semana>
              <med-semana ds-color="questoes"></med-semana>
              <med-semana ds-color="questoes"></med-semana>
              <med-semana ds-color="questoes"></med-semana>
              <med-semana ds-color="questoes"></med-semana>
              <med-semana ds-color="questoes"></med-semana>
            </med-semanas>
          </ion-slide>

          <ion-slide>
            <med-semanas>
              <med-semana ds-color="revalida" active></med-semana>
              <med-semana ds-color="revalida"></med-semana>
              <med-semana ds-color="revalida"></med-semana>
              <med-semana ds-color="revalida"></med-semana>
              <med-semana ds-color="revalida"></med-semana>
              <med-semana ds-color="revalida"></med-semana>
              <med-semana ds-color="revalida"></med-semana>
            </med-semanas>
          </ion-slide>

          <ion-slide>
            <med-semanas>
              <med-semana ds-color="brand" active></med-semana>
              <med-semana ds-color="brand"></med-semana>
              <med-semana ds-color="brand"></med-semana>
              <med-semana ds-color="brand"></med-semana>
              <med-semana ds-color="brand"></med-semana>
              <med-semana ds-color="brand"></med-semana>
              <med-semana ds-color="brand"></med-semana>
            </med-semanas>
          </ion-slide>

        </ion-slides>
      </ion-content>

    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
Default.argTypes = {};
