/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MOCK_DROPDOWN_OPTIONS } from '../utils/multi-select-dropdown.mock';
export default {
  title: 'Components/Core/Multi Select Dropdown',
  decorators: [withDesign]
};
const Template = () => {
  setTimeout(() => {
    const teste1 = document.querySelector('#teste-1');
    // @ts-ignore
    teste1.options = MOCK_DROPDOWN_OPTIONS;
  }, 0);
  return html `
      <tp-multi-select-dropdown
        id="teste-1"
        name="teste-1"
        placeholder="Escolha um produto"
        numeric
      >
      </tp-multi-select-dropdown>
    </ion-checkbox>
  `;
};
export const Default = Template.bind({});
