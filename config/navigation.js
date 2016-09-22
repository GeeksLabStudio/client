var ui = require('./ui');

module.exports = {
  home: {
    path: '/',
    icon: 'fa-home',
    label: 'Home',
    position: [
      ui.ControlPosition.SIDEBAR
    ]
  },

  login: {
    path: '/login',
    icon: 'fa-sign-in',
    label: 'Sign In',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR
    ]
  },

  profile: {
    path: '/profile',
    icon: 'fa-user',
    label: 'Profile',
    position: [
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.SIDEBAR
    ],
    disable: true
  },

  logout: {
    path: '/logout',
    label: 'Logout',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR
    ],
    disable: true
  }
}