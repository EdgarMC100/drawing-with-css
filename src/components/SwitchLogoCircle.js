class SwitchLogoCircle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
     :host{
      width: 15px;
      height: 15px;
     }

    .circle{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid red;
    }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${SwitchLogoCircle.styles}</style>
       <div class="circle">
      </div>`;
  }
}

customElements.define("switch-logo-circle", SwitchLogoCircle);
