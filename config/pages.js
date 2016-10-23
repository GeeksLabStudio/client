var roles = require('./roles');
var locale  = require('./locale');

module.exports = {
  home: {
    path: '/',
    title: locale.pages.home.title,
    permissions: [
      roles.all
    ]
  },

  login: {
    path: '/login',
    title: locale.pages.login.title,
    permissions: [
      roles.guest
    ]
  },

  register: {
    path: '/register',
    title: locale.pages.register.title,
    permissions: [
      roles.guest
    ]
  },

  profile: {
    path: '/profile',
    title: locale.pages.profile.title,
    permissions: [
      roles.user,
      roles.admin
    ]
  },

  blog: {
    path: '/articles',
    title: locale.pages.blog.title,
    itemsPerPage: 5,
    permissions: [
      roles.all
    ],
    children: {
      path: '/articles/:articleId',
      title: locale.pages.blog.title,
      permissions: [
        roles.all
      ],
    }
  },

  admin: {
    path: '/admin',
    title: locale.pages.admin.title,
    permissions: [
      roles.admin
    ]
  },
}
