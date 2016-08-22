const config = {
  debug: true,
  sideBar: {
    isActive: true,
    links: {
      dashboard: {
        name: 'dashboard',
        path: '/dashboard',
        icon: 'fa-tachometer',
        isActive: true
      },
      search: {
        name: 'search',
        path: '/search',
        icon: 'fa-search',
        isActive: true
      }
    }
  },
  pages: {
    home: {
      name: 'home',
      path: '/',
      icon: 'fa-home',
      isActive: true
    },
    about: {
      name: 'about',
      path: '/about',
      icon: 'fa-info-circle',
      isActive: true
    },
    users: {
      name: 'users',
      path: '/users',
      icon: 'fa-user',
      isActive: false
    }
  }
}

export default config;