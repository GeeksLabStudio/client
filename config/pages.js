var roles = require('./roles');
var ui = require('./ui');

module.exports = {
  home: {
    name: 'home',
    class: 'home-page',
    path: '/',
    icon: 'fa-home',
    layout: '1-col',
    disable: false,
    register: false,
    folder: 'Home',
    permissions: [
        roles.all
    ],
    position: [
        ui.ControlPosition.SIDEBAR
    ]
  },

  login: {
    name: 'login',
    class: 'login-page',
    path: '/login',
    icon: 'fa-sign-in',
    layout: '1-col',
    disable: false,
    register: true,
    folder: 'Login',
    permissions: [
        roles.guest
    ],
    position: [
        ui.ControlPosition.SIDEBAR,
        ui.ControlPosition.NAVBAR
    ]
  },

  profile: {
    name: 'profile',
    class: 'profile-page',
    path: '/profile',
    icon: 'fa-user',
    layout: '1-col',
    disable: true,
    register: true,
    requestAuth: true,
    folder: 'Profile',
    permissions: [
        roles.user
    ],
    position: [
        ui.ControlPosition.SIDEBAR
    ]
  }
}