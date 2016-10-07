var ui = require('./ui');
var roles = require('./roles');

module.exports = {
  home: {
    path: '/',
    icon: 'fa fa-home',
    label: 'Home',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: [
      roles.all
    ]
  },

  login: {
    path: '/login',
    icon: 'fa fa-sign-in',
    label: 'Login',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: [
      roles.guest
    ]
  },

  register: {
    path: '/register',
    icon: 'fa fa-user-plus',
    label: 'Register',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: [
      roles.guest
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
    // disable: true,
    permissions: [
      roles.user
    ]
  },

  blog: {
    path: '/articles',
    icon: 'fa fa-rss',
    label: 'Blog',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: [
      roles.all
    ]
  },

  logout: {
    action: 'logout',
    icon: 'fa fa-sign-out',
    label: 'Logout',
    position: [
      ui.ControlPosition.NAVBAR
    ],
    // disable: true,
    permissions: [
      roles.user
    ]
  }
}