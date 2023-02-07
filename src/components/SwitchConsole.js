import "./JoyController";
import "./SwitchScreen";
class SwitchConsole extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */ `
      :host{
        --width: 625px;
        --height: 275px;
        --white: white;
      }

      .container{
        width: var(--width);
        height: var(--height);
        background: #333;
        border: 10px dashed gray;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${SwitchConsole.styles}</style>
      <div class="container">
        <joy-controller class="left"></joy-controller>
        <switch-screen></switch-screen>
        <joy-controller class="right"></joy-controller>
      </div>
    `;
  }
}

customElements.define("switch-console", SwitchConsole);
