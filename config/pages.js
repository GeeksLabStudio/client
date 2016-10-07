var roles = require('./roles');

module.exports = {
  home: {
    path: '/',
    title: 'Home',
    permissions: [
      roles.all
    ]
  },

  login: {
    path: '/login',
    title: 'Login',
    permissions: [
      roles.guest
    ]
  },

  register: {
    path: '/register',
    title: 'Register',
    permissions: [
      roles.guest
    ]
  },

  profile: {
    path: '/profile',
    title: 'Profile',
    permissions: [
      roles.user,
      roles.admin
    ]
  },

  blog: {
    path: '/articles',
    title: 'Blog',
    permissions: [
      roles.all
    ],
    children: {
      path: '/articles/:articleId',
      permissions: [
        roles.all
      ],
    }
  },

  admin: {
    path: '/admin',
    title: 'Admin',
    permissions: [
      roles.admin
    ]
  },
}
