class AppFooter extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
			<footer>
				<p class="footer__copyright">&copy; 2024 Restaurant Catalogue</p>
			</footer>
		`;
  }
}

customElements.define('app-footer', AppFooter);
