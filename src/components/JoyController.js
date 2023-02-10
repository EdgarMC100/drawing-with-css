class JoyController extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
     :host{
      --radius-size: 50px;
     }

     .container{
      height: 100%;
      background: var(--color);
     }

     :host(.right) .container{
      --color: #de5e53;
      border-radius: 0 var(--radius-size) var(--radius-size) 0;
     }

     :host(.left) .container{
      --color: #67b9de;
      border-radius: var(--radius-size) 0 0 var(--radius-size);
     }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${JoyController.styles}</style>
      <div class="container">
        <img src="">
      </div>`;
  }
}

customElements.define("joy-controller", JoyController);
