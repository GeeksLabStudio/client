var ui = require('./ui');

module.exports = {
  home: {
    path: '/',
    icon: 'fa fa-home',
    label: 'Home',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.FOOTER
    ]
  },

  login: {
    path: '/login',
    icon: 'fa fa-sign-in',
    label: 'Sign In',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ]
  },

  profile: {
    path: '/profile',
    icon: 'fa fa-user',
    label: 'Profile',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ],
    disable: true
  },

  blog: {
    path: '/articles',
    icon: 'fa fa-rss',
    label: 'Blog',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ]
  },

  logout: {
    action: 'logout',
    icon: 'fa fa-sign-out',
    label: 'Logout',
    position: [
      ui.ControlPosition.NAVBAR
    ],
    disable: true
  }
}