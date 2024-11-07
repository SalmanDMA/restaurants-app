class AppMain extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
			<main id="mainContent"></main>
		`;
  }
}

customElements.define('app-main', AppMain);
