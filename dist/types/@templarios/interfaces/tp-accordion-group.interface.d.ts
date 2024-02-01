export interface TpAccordionGroup {
    /**
     * If `true`, all accordions inside of the accordion group will animate when expanding or collapsing.
     */
    animated: boolean;
    /**
     * If `true`, the accordion group cannot be interacted with.
     */
    disabled: boolean;
    /**
     * Describes the expansion behavior for each accordion. Possible values are `"compact"` and `"inset"`. Defaults to `"compact"`.
     */
    expand: "compact" | "inset";
    getAccordions: () => Promise<any[]>;
    /**
     * The mode determines which platform styles to use.
     */
    mode?: "ios" | "md";
    /**
     * If `true`, the accordion group can have multiple accordion components expanded at the same time.
     */
    multiple?: boolean;
    /**
     * If `true`, the accordion group cannot be interacted with, but does not alter the opacity.
     */
    readonly: boolean;
    /**
     * This method is used to ensure that the value of ion-accordion-group is being set in a valid way. This method should only be called in response to a user generated action.
     */
    requestAccordionToggle: (accordionValue: string | undefined, accordionExpand: boolean) => Promise<void>;
    /**
     * The value of the accordion group. This controls which accordions are expanded. This should be an array of strings only when `multiple="true"`
     */
    value?: string | string[] | null;
}
