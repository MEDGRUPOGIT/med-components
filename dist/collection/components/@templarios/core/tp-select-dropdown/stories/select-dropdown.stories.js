/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MOCK_DROPDOWN_OPTIONS } from "../utils/select-dropdown.mock";
export default {
  title: "Components/Core/Select dropdown",
  decorators: [withDesign],
};
const Template = (_a) => {
  var args = __rest(_a, []);
  setTimeout(() => {
    const teste1 = document.querySelector(".teste-1");
    // @ts-ignore
    teste1.options = MOCK_DROPDOWN_OPTIONS;
  }, 0);
  return html `
    <tp-select-dropdown
      class="teste-1"
      name="teste-1"
      color="${args.color}"
      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      value="opt1"
      .disabled=${args.disabled}
    >
    </tp-select-dropdown>
  `;
};
export const Default = Template.bind({});
// @ts-ignore
Default.argTypes = {
  disabled: {
    disabled: false,
    control: { type: "boolean" },
    description: "Define o estado disabled do componente.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "undefined" },
    },
  },
};
