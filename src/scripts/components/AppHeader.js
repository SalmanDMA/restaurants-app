class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<header class="app-bar">
				<div class="app-bar__menu">
					<button id="hamburgerButton">☰</button>
				</div>
				<div class="app-bar__brand">
					<h1>Restaurant Catalogue</h1>
				</div>
				<nav class="app-bar__navigation">
					<ul>
						<li><a href="#/home">Home</a></li>
						<li><a href="#/favorite">Favorite</a></li>
						<li><a href="https://bit.ly/my-portofolio-salmandma" target="_blank">About</a></li>
					</ul>
				</nav>
			</header>
		`;
  }
}

customElements.define('app-header', AppHeader);
