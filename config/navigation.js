var ui      = require('./ui');
var roles   = require('./roles');
var pages   = require('./pages');
var locale  = require('./locale');

module.exports = {
  home: {
    path: pages.home.path,
    icon: 'fa fa-home',
    label: locale.components.navigation.home.label,
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.home.permissions
  },

  login: {
    path: pages.login.path,
    icon: 'fa fa-sign-in',
    label: locale.components.navigation.login.label,
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
    label: locale.components.navigation.register.label,
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
    label: locale.components.navigation.profile.label,
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
    label: locale.components.navigation.blog.label,
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
    label: locale.components.navigation.admin.label,
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
    label: locale.components.navigation.logout.label,
    position: [
      ui.ControlPosition.NAVBAR
    ],
    permissions: [
      roles.user,
      roles.admin
    ]
  }
}