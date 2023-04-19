import { html, css, LitElement } from "lit";

export class DisplayCase extends LitElement {
  static styles = css`
    .displaycase {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-top: 24px;
      margin-top: 24px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid hsl(var(--med-color-brand-3));
    }

    .displaycase__component-box {
      height: 200px;
      padding: 24px;
      border: none;
    }

    .displaycase__code-box {
      height: 460px;
      padding: 24px;
      font-family: "Fira Mono", monospace;
      font-size: 14px;
      line-height: 24px;
      color: hsl(var(--med-color-brand-4));
      border: none;
      background: hsl(var(--med-color-neutral-15));
      white-space: pre-wrap;
    }
  `;

  static properties = {
    component: { type: String },
    height: { type: String },
    loadIframes: { type: Boolean },
  };

  constructor() {
    super();

    this.component = "";
    this.height = "";
    this.loadIframes = false;
  }

  load() {
    const { displayCase, loadIframes } = this;
    const { top, width } = displayCase.getBoundingClientRect();
    const shoulLoad = top - window.innerHeight < 0;

    if (!loadIframes && width && shoulLoad) {
      this.loadIframes = true;
    }
  }

  get componentBox() {
    return this.renderRoot?.querySelector(".displaycase__component-box");
  }

  get displayCase() {
    return this.renderRoot?.querySelector(".displaycase");
  }

  render() {
    const { component, height, loadIframes } = this;

    return loadIframes
      ? html`
          <style>
            ${height &&
            `
              .displaycase__component-box {
                height: ${height}px !important;
              }
            `}
          </style>

          <div class="displaycase">
            <iframe
              title="${component}"
              class="displaycase__component-box"
              src="http://desenv.ordomederi.com/templarios/iframe.html?args=&id=components-${component}&viewMode=story"
            ></iframe>

            <iframe
              title="${component} docs"
              class="displaycase__code-box"
              src="http://desenv.ordomederi.com/templarios/iframe.html?id=components-${component}&viewMode=docs&full=1"
            ></iframe>
          </div>
        `
      : html` <div class="displaycase">
          <div class="displaycase__component-box"></div>
          <div class="displaycase__code-box"></div>
        </div>`;
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener("DOMContentLoaded", () => {
      // aplica altura vinda de prop
      if (this.height) {
        this.componentBox.style.height = `${this.height}px`;
      }

      // carrega os iframes se necessário
      this.load();
    });

    window.addEventListener("scroll", () => {
      this.load();
    });

    window.addEventListener("resize", () => {
      this.load();
    });
  }
}
customElements.define("display-case", DisplayCase);
