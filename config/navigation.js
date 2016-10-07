var ui = require('./ui');
var roles = require('./roles');
var pages = require('./pages');

module.exports = {
  home: {
    path: pages.home.path,
    icon: 'fa fa-home',
    label: 'Home',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.home.permissions
  },

  login: {
    path: pages.login.path,
    icon: 'fa fa-sign-in',
    label: 'Login',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.login.permissions
  },

  register: {
    path: pages.register.path,
    icon: 'fa fa-user-plus',
    label: 'Register',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.register.permissions
  },

  profile: {
    path: pages.profile.path,
    icon: 'fa fa-user',
    label: 'Profile',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.profile.permissions
  },

  blog: {
    path: pages.blog.path,
    icon: 'fa fa-rss',
    label: 'Blog',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.blog.permissions
  },

  admin: {
    path: pages.admin.path,
    icon: 'fa fa-cogs',
    label: 'Admin',
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.NAVBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.admin.permissions
  },

  logout: {
    action: 'logout',
    icon: 'fa fa-sign-out',
    label: 'Logout',
    position: [
      ui.ControlPosition.NAVBAR
    ],
    permissions: [
      roles.user,
      roles.admin
    ]
  }
}