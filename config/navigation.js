var ui      = require('./ui');
var roles   = require('./roles');
var pages   = require('./pages');
var locale  = require('./locale');

module.exports = {
  home: {
    icon: 'home',
    path: pages.home.path,
    label: locale.components.navigation.home.label,
    position: [
      ui.ControlPosition.SIDEBAR
    ],
    permissions: pages.home.permissions
  },

  login: {
    icon: 'login',
    path: pages.login.path,
    label: locale.components.navigation.login.label,
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.HEADER
    ],
    permissions: pages.login.permissions
  },

  register: {
    icon: 'register',
    path: pages.register.path,
    label: locale.components.navigation.register.label,
    position: [
      ui.ControlPosition.SIDEBAR,
      ui.ControlPosition.HEADER
    ],
    permissions: pages.register.permissions
  },

  profile: {
    icon: 'profile',
    path: pages.profile.path,
    label: locale.components.navigation.profile.label,
    position: [
      ui.ControlPosition.HEADER,
      ui.ControlPosition.SIDEBAR
    ],
    permissions: pages.profile.permissions
  },

  admin: {
    path: pages.admin.path,
    label: locale.components.navigation.admin.label,
    position: [
      ui.ControlPosition.HEADER
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