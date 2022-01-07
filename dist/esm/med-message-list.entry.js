import { r as registerInstance, h, H as Host } from './index-70672e81.js';

const medMessageListCss = "@charset \"UTF-8\";:host{--margin-top-message:var(--med-spacing-stack-xxs);--margin-top-response:var(--med-spacing-stack-xxxs);--margin-left-response:var(--med-spacing-inline-sm);--margin-left-comment:var(--med-spacing-inline-xl);display:block}::slotted(.med-message){margin-top:var(--margin-top-message)}::slotted(.med-message--medgrupo),::slotted(.med-message--response){margin-left:var(--margin-left-response);width:calc( 100% - var(--margin-left-response))}::slotted(.med-message--comment),::slotted(.med-message--user-message){margin-left:var(--med-spacing-inline-xl);width:calc( 100% - var(--margin-left-comment))}::slotted(.med-message--medgrupo),::slotted(.med-message--response),::slotted(.med-message--comment),::slotted(.med-message--user-message){margin-top:var(--margin-top-response)}";

const MedMessageList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MedMessageList.style = medMessageListCss;

export { MedMessageList as med_message_list };
