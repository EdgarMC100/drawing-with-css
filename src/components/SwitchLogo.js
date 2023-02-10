import "./SwitchLogoRectangle";

class SwitchLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
     :host{
      --color: white;
      --size: 80px;
      --gap: calc(var(--size) / 12.5);
      --border: calc(var(--size) / 20);
      --size-ball: calc(var(--size) / 3.5 - var(--gap));
      --radius: calc(var(--size) / 3.5);
      margin: 0;
      background: #222;
      height: 100%;
      display:grid;
      place-items: center;
     }

     .logo{
      display: grid;
      grid-template-rows: 60% 1fr;
      place-items: center;
      width: 35%;
      height: 70%;
     }

     .logo-image{
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: var(--size);
      height: var(--size);
      gap: var(--gap);
      column-gap: 10px;
      position: relative;
      justify-content: space-between;
      height: 100%;
      border-bottom: 1px solid red;
      position: relative;
     }


     .logo-image .left{
      background: transparent;
      border: var(--border) solid var(--color);
      border-radius: var(--radius) 0 0 var(--radius);
     }

     .logo-image .left:after{
      content: '';
      display: block;
      background: var(--color);
      width: var(--size-ball);
      height: var(--size-ball);
      border-radius: 100%;
      position: relative;
      top: calc(var(--size) / 5 - var(--size-ball) / 3);
      left: calc((var(--size) / 2.3 - var(--gap)) / 2 - var(--size-ball) / 2);
     }

     .logo-image .right{
      background: var(--color);
      border-radius: 0 var(--radius) var(--radius) 0;
      -webkit-mask-image: radial-gradient(circle, transparent 20%, #000 22%);
     }
     .logo .logo-text{
      display: flex;
      flex-wrap: wrap;
      justify-content:center;
     }

     .logo .logo-text span:first-child{
      color: white;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 4px;
     }

     .logo .logo-text span:nth-child(2){
      color: white;
      font-weight: 600;
      font-size: 18px;
      letter-spacing: 5px;
     }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${SwitchLogo.styles}</style>
        <div class="logo">
          <div class="logo-image">
            <div class="left"></div>
            <div class="right"></div>
          </div>
          <div class="logo-text">
            <span>NINTENDO</span>
            <span>SWITCH</span>
          </div>
        </div>
    `;
  }
}

customElements.define("switch-logo", SwitchLogo);
