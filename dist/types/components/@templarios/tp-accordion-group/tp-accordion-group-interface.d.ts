export interface TpAccordionGroupChangeEventDetail<T = any> {
    value: T;
}
export interface TpAccordionGroupCustomEvent<T = any> extends CustomEvent {
    detail: TpAccordionGroupChangeEventDetail<T>;
    target: any;
}
