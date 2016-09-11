import Store from './Store';
import pages from '../configs/pages'

import _ from 'lodash';

class AppStore extends Store {
  data = {
    sidebar: false,
    navigation: {
      ...pages,
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
  }

  toggleSidebar() {
    this.data.sidebar = !this.data.sidebar;

    this.emit('sidebar:toggle');
  }

  updateNavigation(navigation){
    // this.data.navigation = {
    //   ...this.data.navigation,
    //   ...navigation
    // };

    _.merge(this.data.navigation, navigation)

    // this will trigers components they own methods
    // and update there state
    this.emit('ui:update');
  }

  getAvailablePages(){

    let pages = Object.keys(this.data.navigation);

    console.log('available pages', this.data.navigation, pages)

    return pages.map(key => {
        let page = this.data.navigation[key];

        // if (page.icon)
        //   page.icon = `fa${page.icon}`;
        page.icon += ' fa';

        return page
      })
      .filter(page => !page.disable)

  }
}

const $appStore = new AppStore();

export default $appStore;
