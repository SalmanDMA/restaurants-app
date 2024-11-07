import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';

// import WebSocketInitiator from './utils/websocket-initiator';
// import CONFIG from './globals/config';

const loadComponents = async () => {
  await import('./components/AppHeader');
  await import('./components/AppMain');
  await import('./components/AppFooter');
};

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponents();

  const app = new App({
    navlinks: document.querySelectorAll('#navigationDrawer ul li a'),
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
    backdrop: document.querySelector('#backdrop'),
    footerCopyright: document.querySelector('.footer__copyright'),
    footerSubscribeButton: document.querySelector('#subscribePushNotification'),
    footerUnsubscribeButton: document.querySelector('#unsubscribePushNotification'),
    skipToContentLink: document.querySelector('#skip-to-content'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', async () => {
    app.renderPage();
    await swRegister();
    // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
  });
});