import login from './login';
import home from './home';

const pages = {
  login,
  home,
  profile: {
    name: 'profile',
    class: 'profile-page',
    path: '/profile',
    icon: 'fa-user',
    layout: '1-col',
    header: false,
    sideBar: true,
    disable: true
  }
}

export default pages