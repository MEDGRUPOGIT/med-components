import { Component, Host, h, Prop, getAssetPath } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
/**
 * @slot - Slot destinado a listagem de badges
 * @slot avatar - Slot destinado ao avatar.
 * @slot menu - Slot destinado ao componete med-context-menu.
 * @slot footer - Slot destinado a listagem de botões.
 */
export class MedMessage {
  render() {
    const { dsName, nome, concurso, texto, messageId } = this;
    return (h(Host, { "from-stencil": true, class: createColorClasses(null, {
        'med-message': true,
        [`med-message--${dsName}`]: dsName !== undefined,
      }, null) },
      h("div", { class: "med-message__balao" }),
      h("div", { class: "med-message__content" },
        h("div", { class: "med-message__header" },
          h("div", { class: "med-message__avatar" },
            dsName !== 'medgrupo' && h("slot", { name: "avatar" }),
            dsName === 'medgrupo' && h("img", { class: "med-message__img", src: getAssetPath(`./assets/avatar_medgrupo.png`) })),
          h("div", { class: "med-message__id" },
            h("p", { class: "med-message__nome" },
              nome,
              " - ",
              concurso),
            h("p", { class: "med-message__number" }, messageId)),
          h("div", { class: "med-message__controls" },
            h("med-tooltip", { class: "med-message__tooltip", content: "Possui resposta da Equipe Acad\u00EAmica", placement: "top", position: "end" },
              h("ion-icon", { slot: "icon", class: "med-icon med-message__icon", name: "med-equipe-homologada" })),
            h("slot", { name: "menu" }))),
        h("slot", null),
        h("p", { class: "med-message__texto" }, texto)),
      h("div", { class: "med-message__footer" },
        h("slot", { name: "footer" }))));
  }
  static get is() { return "med-message"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-message.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-message.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "dsName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'medgrupo' | 'response' | 'comment' | 'user-message'",
        "resolved": "\"comment\" | \"medgrupo\" | \"response\" | \"user-message\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define a varia\u00E7\u00E3o do componente."
      },
      "attribute": "ds-name",
      "reflect": false
    },
    "nome": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o nome do aluno."
      },
      "attribute": "nome",
      "reflect": false
    },
    "concurso": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o nome do concurso."
      },
      "attribute": "concurso",
      "reflect": false
    },
    "texto": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o conte\u00FAdo de texto."
      },
      "attribute": "texto",
      "reflect": false
    },
    "messageId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Define o id da mensagem."
      },
      "attribute": "message-id",
      "reflect": false
    }
  }; }
}
