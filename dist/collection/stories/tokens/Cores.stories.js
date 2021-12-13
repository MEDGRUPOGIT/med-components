import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Tokens/Cores',
  decorators: [withDesign],
};

const Template = () => {
  return `
    <style>
      .token-h, .token-p, .token-span {
        text-align: center;
      }

      .token-pre {
        background: hsl(var(--med-color-neutral-2));
        border-radius: 4px;
        max-width: 500px;
        margin: 0 auto;
      }

      .token-span {
        color: hsl(var(--med-color-brand-3));
      }
    </style>

    <h2 class="token-h">⚠️ Para visualizar clique na aba <span class="token-span">Design</span> abaixo! ⚠️</h2>
    <p class="token-p">Utilização do token:</p>
<pre class="token-pre">
  <code>
    .class {
      color: hsl(var(--med-color-neutral-5));
    }
  </code>
</pre>
  `;
};

export const Cores = Template.bind({});
Cores.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/4QvnRfhttlJ2hIKQbuEPZl/Tokens?node-id=1191%3A1346',
  },
};
