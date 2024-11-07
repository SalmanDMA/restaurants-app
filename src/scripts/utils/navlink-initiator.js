const NavlinkInitiator = {
  init({ navlinks, drawer, backdrop }) {
    navlinks.forEach((navlink) => {
      navlink.addEventListener('click', (event) => {
        this._toggleNavlink(event, drawer, backdrop);
      });
    });
  },

  _toggleNavlink(event, drawer, backdrop) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      backdrop.classList.add('active');
    } else {
      backdrop.classList.remove('active');
    }
  },
};

export default NavlinkInitiator;