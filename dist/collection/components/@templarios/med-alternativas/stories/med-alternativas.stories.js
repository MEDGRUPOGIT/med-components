import { html } from 'lit-html';
import { MedColors } from '../../../../@templarios/templarios';

export default {
  title: 'Components/Alternativas'
};

const TemplateDefault = ({ alternativas, dsColor}) => {
  const id = Math.random().toString(36).substr(2, 9);
  const dsSkinConfig = alternativas.dsSkinConfig;

  setTimeout(() => {
    const alternativasEl = document.getElementById(id);
    //alternativasEl.dsSkinConfig = dsSkinConfig;

    for (const key in alternativas) {
      alternativasEl[key] = alternativas[key];
    }
  }, 5000);

  return html`
    <ion-app>
      <ion-content>

        <!-- component markdown -->
        <med-alternativas id=${id} .dsColor=${dsColor} .dsSkinConfig=${dsSkinConfig}></med-alternativas>
        <!-- component markdown -->

      </ion-content>
    </ion-app>
    `
  }

export const Alternativas = TemplateDefault.bind({});
Alternativas.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
  actions: {
    handles: ['medChange','medClick', 'medGalleryRequest', 'medRiscada'],
  },
}
Alternativas.argTypes = {
  alternativas: {
    defaultValue: {
      alternativas: [
        {
          Alternativa: 'A',
          Enunciado: 'Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: '',
          Porcentagem: 0.55,
          Riscada: true,
        },
        {
          Alternativa: 'B',
          Enunciado: 'Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: null,
          Porcentagem: 0.55
        },
        {
          Alternativa: 'C',
          Enunciado: 'Enunciado C Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: '',
          Porcentagem: 0.3
        },
        {
          Alternativa: 'D',
          Enunciado: 'Enunciado D Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: null,
          Porcentagem: 0.05
        },
        {
          Alternativa: 'E',
          Enunciado: 'Enunciado E Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.',
          Imagem: '',
          Porcentagem: 0
        },
      ],
      alternativaSelecionada: null,
      respostaCorreta: 'C',
      mostraResposta: true,
      permiteRiscar: true,
      dsSkinConfig: { alternativas: 'A' }
    },
    control: { type: 'array' },
    description: 'Define a listagem de alternativas.',
    table: {
      type:  { summary: 'MedAlternativaInterface[]' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
