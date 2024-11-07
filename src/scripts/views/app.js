import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ navlinks, button, drawer, content, backdrop, footerCopyright, footerSubscribeButton, footerUnsubscribeButton, skipToContentLink }) {
    this._navlinks = navlinks;
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._backdrop = backdrop;
    this._footerCopyright = footerCopyright;
    this._footerSubscribeButton = footerSubscribeButton;
    this._footerUnsubscribeButton = footerUnsubscribeButton;
    this._skipToContentLink = skipToContentLink;

    this._initialAppShell();
    this._initializeRouting();
    this._initializeSkipToContent();
  }

  async _initialAppShell() {
    // const { default: DrawerInitiator } = await import('../utils/drawer-initiator');

    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      backdrop: this._backdrop,
    });

    const { default: NavlinkInitiator } = await import('../utils/navlink-initiator');
    NavlinkInitiator.init({
      navlinks: this._navlinks,
      drawer: this._drawer,
      backdrop: this._backdrop,
    });

    const { default: FooterInitiator } = await import('../utils/footer-initiator');
    FooterInitiator.init({
      copyright: this._footerCopyright,
    });
  }

  _initializeRouting() {
    window.addEventListener('hashchange', () => {
      this.renderPage();
    });

    this.renderPage();
  }

  _initializeSkipToContent() {
    this._skipToContentLink.addEventListener('click', (event) => {
      event.preventDefault();
      this.scrollToMainContent();
    });
  }

  scrollToMainContent() {
    this._content.scrollIntoView({ behavior: 'smooth' });
    this._content.setAttribute('tabindex', '-1');
    this._content.focus();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (page) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      this._content.innerHTML = '<h1>Page Not Found</h1>';
    }
  }
}

export default App;
