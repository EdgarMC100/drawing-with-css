class SwitchScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host{

      }

      .container{
        width: 100%;
        height: 100%;
        background: var(--white);
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
