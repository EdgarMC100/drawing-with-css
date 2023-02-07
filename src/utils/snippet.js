class $1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles(){
    return
     : host{
        $4
     }
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */`
      <style>${$1.styles}</style>
      <div>
        $3
      </div>
    `
  }
}

customElements.define('$2', $1);
