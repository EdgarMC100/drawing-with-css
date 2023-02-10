import "./SwitchLogoCircle";
class SwitchLogoRectangle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
     :host{
      --radius-size: 15px;
     }

     .container{
      height: 100%;
      box-sizing: border-box;
      display: grid;
      justify-items: center;
      border: 6px solid white;
      padding-top: 8px;
     }

     :host(.left) .container{
      border-radius: var(--radius-size) 0px 0px var(--radius-size);
     }

     :host(.right) .container{
      border-radius: 0px var(--radius-size) var(--radius-size) 0px;
      border: none;
      background: white;
     }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${SwitchLogoRectangle.styles}</style>
      <div class="container">
          <switch-logo-circle></switch-logo-circle>
      </div>`;
  }
}

customElements.define("switch-logo-rectangle", SwitchLogoRectangle);
