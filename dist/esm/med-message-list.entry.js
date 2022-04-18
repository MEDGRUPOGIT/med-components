import { r as registerInstance, h, H as Host } from './index-70672e81.js';

const medMessageListCss = "@charset \"UTF-8\";:host{--margin-top-message:24px;--margin-top-response:8px;--margin-left-response:40px;--margin-left-comment:64px;display:block}::slotted(.med-message){margin-top:var(--margin-top-message)}::slotted(.med-message--medgrupo),::slotted(.med-message--response){margin-left:var(--margin-left-response);width:calc( 100% - var(--margin-left-response))}::slotted(.med-message--comment),::slotted(.med-message--user-message){margin-left:64px;width:calc( 100% - var(--margin-left-comment))}::slotted(.med-message--medgrupo),::slotted(.med-message--response),::slotted(.med-message--comment),::slotted(.med-message--user-message){margin-top:var(--margin-top-response)}";

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
