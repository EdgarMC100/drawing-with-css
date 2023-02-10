import "./SwitchImageBackground";
class SwitchScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host{
        --width: 445px;
        --screen-size: 90%;
      }
      .container{
        width: var(--width);
        height: 100%;
        background: #333436;
        display: grid;
        place-items: center;
      }
      .screen{
        width: var(--screen-size);
        height: var(--screen-size);
        background: #000;
        border-radius: 8px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${SwitchScreen.styles}</style>
      <div class="container">
        <div class="screen">
          <switch-image-background></switch-image-background>
        </div>
      </div>
    `;
  }
}

customElements.define("switch-screen", SwitchScreen);
