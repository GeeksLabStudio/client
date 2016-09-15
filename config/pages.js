module.exports = {
  home: {
    name: 'home',
    class: 'home-page',
    path: '/',
    icon: 'fa-home',
    layout: '1-col',
    header: false,
    sideBar: true,
    disable: false,
    register: false,
    folder: 'Home'
  },

  login: {
    name: 'login',
    class: 'login-page',
    path: '/login',
    icon: 'fa-sign-in',
    layout: '1-col',
    header: true,
    sideBar: true,
    disable: false,
    register: true,
    folder: 'Login'
  },

  profile: {
    name: 'profile',
    class: 'profile-page',
    path: '/profile',
    icon: 'fa-user',
    layout: '1-col',
    header: false,
    sideBar: true,
    disable: true,
    register: true,
    requestAuth: true,
    folder: 'Profile'
  }
}