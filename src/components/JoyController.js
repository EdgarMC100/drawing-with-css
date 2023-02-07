class JoyController extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
     :host{
      display: none;
     }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${JoyController.styles}</style>
      <div>
        <img src="">
      </div>`;
  }
}

customElements.define("joy-controller", JoyController);
