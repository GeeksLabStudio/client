var roles = require('./roles');

module.exports = {
  home: {
    permissions: [
      roles.all
    ]
  },

  login: {
    permissions: [
      roles.guest
    ]
  },

  profile: {
    permissions: [
      roles.user
    ]
  }
}
