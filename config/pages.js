var roles = require('./roles');

module.exports = {
  home: {
    title: 'Home',
    permissions: [
      roles.all
    ]
  },

  login: {
    title: 'Login',
    permissions: [
      roles.guest
    ]
  },

  profile: {
    title: 'Profile',
    permissions: [
      roles.user
    ]
  }
}
