import "./SwitchLogo";
class SwitchLogoBackground extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
     :host{
      --background-size: 80%;
      --width: 85%;
      --height: 85%;
      --width-size: var(--width);
      --height-size: var(--height);
     }

     .container{
      display: grid;
      place-items: center;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      background: green;
     }

     .background{
      width: var(--width-size);
      height: var(--height-size);
      background: blue;
     }

  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${SwitchLogoBackground.styles}</style>
      <div class="container">
        <div class="background">
         <switch-logo></switch-logo>
        </div>
      </div>`;
  }
}

customElements.define("switch-image-background", SwitchLogoBackground);
