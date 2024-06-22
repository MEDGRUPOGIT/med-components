import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Components/Team/Questões/Alternativas/Skins/Skin A",
  decorators: [withDesign],
};

const Template = ({ alternativas }) => {
  const id = Math.random().toString(36).substr(2, 9);

  setTimeout(() => {
    const alternativasEl = document.getElementById(id);

    for (const key in alternativas) {
      alternativasEl[key] = alternativas[key];
    }
  }, 0);

  return html`
    <ion-app>
      <ion-content>
        <!-- component markdown -->
        <med-alternativas-a id=${id}></med-alternativas-a>
        <!-- component markdown -->
      </ion-content>
    </ion-app>
  `;
};

export const SkinA = Template.bind({});
SkinA.parameters = {
  design: {
    type: "figma",
    url: "",
  },
  actions: {
    handles: ["medChange", "medClick", "medGalleryRequest", "medRiscada"],
  },
};
SkinA.argTypes = {
  alternativas: {
    control: { type: "array" },
    description:
      "Define a listagem de alternativas. **OBS:** paa visualizar as alternativas com imagem basta colocar a string 'https://via.placeholder.com/500' no atributo **alternativas[0]['Imagem']** no objeto ao lado.",
    defaultValue: {
      alternativas: [
        {
          Alternativa: "A",
          Enunciado:
            "Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.",
          Imagem: "",
          Porcentagem: 0.55,
          Riscada: false,
        },
        {
          Alternativa: "B",
          Enunciado:
            "Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.",
          Imagem: null,
          Porcentagem: 0.55,
        },
        {
          Alternativa: "C",
          Enunciado:
            "Enunciado C Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.",
          Imagem: "",
          Porcentagem: 0.3,
        },
        {
          Alternativa: "D",
          Enunciado:
            "Enunciado D Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.",
          Imagem: null,
          Porcentagem: 0.05,
        },
        {
          Alternativa: "E",
          Enunciado:
            "Enunciado E Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.",
          Imagem: "",
          Porcentagem: 0,
        },
      ],
      alternativaSelecionada: null,
      respostaCorreta: "C",
      mostraResposta: true,
      permiteRiscar: true,
      permiteDesmarcar: false,
      mostrarProgressBar: true,
    },
    table: {
      type: { summary: "MedAlternativasInterface" },
      defaultValue: { summary: "undefined" },
    },
  },
};
