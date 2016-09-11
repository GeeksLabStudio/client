import Store from './Store';
import * as pages from '../configs/pages';

import _ from 'lodash';

class AppStore extends Store {
  data = {
    sidebar: false,
    navigation: {
      ...pages
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
