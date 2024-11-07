const DrawerInitiator = {
  init({ button, drawer, backdrop }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, backdrop);
    });

    backdrop.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, backdrop);
    });
  },

  _toggleDrawer(event, drawer, backdrop) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      backdrop.classList.add('active');
    } else {
      backdrop.classList.remove('active');
    }
  },

  _closeDrawer(event, drawer, backdrop) {
    event.stopPropagation();
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
  },
};

export default DrawerInitiator;