const config = {
  home: {
    name: 'home',
    class: 'home-page',
    path: '/',
    icon: 'fa-home',
    layout: '1-col',
    header: false,
    sideBar: false
  },
  about: {
    name: 'about',
    class: 'about-page',
    path: '/about',
    icon: 'fa-info-circle',
    layout: '1-col',
    header: true,
    sideBar: true
  },
  users: {
    name: 'users',
    class: 'users-page',
    path: '/users',
    icon: 'fa-user',
    layout: '1-col',
    header: true,
    sideBar: true
  },
  user: {
    name: 'user',
    class: 'user-page',
    path: ':userId',
    icon: 'fa-user',
    layout: '1-col',
    header: false,
    sideBar: false
  },
  notFound: {
    name: 'pageNotFound',
    class: 'pageNotFound-page',
    layout: '1-col',
    header: false,
    sideBar: false
  }
}

export default config;