var ui      = require('./ui');
var roles   = require('./roles');
var pages   = require('./pages');
var locale  = require('./locale');

module.exports = {
  home: {
    path: pages.home.path,
    label: locale.components.navigation.home.label,
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.home.permissions
  },

  login: {
    path: pages.login.path,
    label: locale.components.navigation.login.label,
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.HEADER,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.login.permissions
  },

  register: {
    path: pages.register.path,
    label: locale.components.navigation.register.label,
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.HEADER,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.register.permissions
  },

  profile: {
    path: pages.profile.path,
    label: locale.components.navigation.profile.label,
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.HEADER,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.profile.permissions
  },

  admin: {
    path: pages.admin.path,
    label: locale.components.navigation.admin.label,
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.HEADER,
      ui.ControlPosition.FOOTER
    ],
    permissions: pages.admin.permissions
  },

  logout: {
    action: 'logout',
    label: locale.components.navigation.logout.label,
    position: [
      ui.ControlPosition.HEADER
    ],
    permissions: [
      roles.user,
      roles.admin
    ]
  }
}