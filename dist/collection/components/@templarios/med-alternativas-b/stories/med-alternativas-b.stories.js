import { html } from 'lit-html';

import { modalController } from '../../../../../dist/ionic/index.esm';

const meta = {
  title: 'Components/Alternativas Skin B',
  parameters: {
    actions: {
      handles: ['medChange', 'medClick', 'medGalleryRequest', 'medRiscada'],
    },
  },
  argTypes: {
    alternativas: {
      control: { type: 'array' },
      description:
        "Define a listagem de alternativas. **OBS:** paa visualizar as alternativas com imagem basta colocar a string 'https://via.placeholder.com/500' no atributo **alternativas[0]['Imagem']** no objeto ao lado.",
      defaultValue: undefined,
      table: {
        type: { summary: 'MedAlternativasInterface' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    alternativas: {
      alternativas: [
        {
          Alternativa: 'A',
          Enunciado:
            'Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: 'https://via.placeholder.com/500',
          Porcentagem: 0.55,
          Riscada: true,
        },
        {
          Alternativa: 'B',
          Enunciado:
            'Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: null,
          Porcentagem: 0.55,
        },
        {
          Alternativa: 'C',
          Enunciado:
            'Enunciado C Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: 'https://via.placeholder.com/500',
          Porcentagem: 0.3,
        },
        {
          Alternativa: 'D',
          Enunciado:
            'Enunciado D Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: null,
          Porcentagem: 0.05,
        },
        {
          Alternativa: 'E',
          Enunciado:
            'Enunciado E Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: 'https://via.placeholder.com/500',
          Porcentagem: 0,
        },
      ],
      alternativaSelecionada: null,
      respostaCorreta: 'C',
      mostraResposta: true,
      permiteRiscar: true,
    },
  },
};

export default meta;

export const SkinB = {
  render: ({ ...args }) => {
    setTimeout(() => {
      const medAlternativasB = document.querySelector('med-alternativas-b');

      for (const key in args.alternativas) {
        medAlternativasB[key] = args.alternativas[key];
      }
    }, 0);

    const createModal = async (imagemUrl) => {
      modalController
        .create({
          component: 'med-image-zoom',
          cssClass: 'med-image-zoom',
          componentProps: {
            imagens: [
              {
                src: imagemUrl,
                legenda: '',
              },
            ],
          },
        })
        .then((modal) => {
          modal.present();
        });
    };

    window.addEventListener('medGalleryRequest', (e) => {
      createModal(e?.detail?.Imagem);
    });

    return html`
      <ion-app>
        <ion-content>
          <!-- component markdown -->
          <med-alternativas-b></med-alternativas-b>
          <!-- component markdown -->
        </ion-content>
      </ion-app>
    `;
  },
};
