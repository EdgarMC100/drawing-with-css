class SwitchScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host{
        --width: 445px;
      }
      .container{
        width: var(--width);
        height: 100%;
        background: #000;
      }`;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${SwitchScreen.styles}</style>
      <div class="container">
      </div>
    `;
  }
}

customElements.define("switch-screen", SwitchScreen);
