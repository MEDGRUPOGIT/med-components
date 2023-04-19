import "./scripts/menu";

if (import.meta.env.DEV) {
  window.addEventListener("DOMContentLoaded", () => {
    const head = document.querySelector("head");
    const scriptIonic = document.createElement("script");
    scriptIonic.type = "module";
    scriptIonic.src = "/node_modules/@ionic/core/dist/ionic/ionic.esm.js";
    head.appendChild(scriptIonic);
  });
}
