'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc2e4509.js');

const medMessageListCss = "@charset \"UTF-8\";:host{--margin-top-message:var(--med-spacing-stack-xxs);--margin-top-response:var(--med-spacing-stack-xxxs);--margin-left-response:var(--med-spacing-inline-sm);--margin-left-comment:var(--med-spacing-inline-xl);display:block}::slotted(.med-message){margin-top:var(--margin-top-message)}::slotted(.med-message--medgrupo),::slotted(.med-message--response){margin-left:var(--margin-left-response);width:calc( 100% - var(--margin-left-response))}::slotted(.med-message--comment),::slotted(.med-message--user-message){margin-left:var(--med-spacing-inline-xl);width:calc( 100% - var(--margin-left-comment))}::slotted(.med-message--medgrupo),::slotted(.med-message--response),::slotted(.med-message--comment),::slotted(.med-message--user-message){margin-top:var(--margin-top-response)}";

const MedMessageList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MedMessageList.style = medMessageListCss;

exports.med_message_list = MedMessageList;
