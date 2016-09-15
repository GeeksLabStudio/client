import Store from './Store';
import AuthStore from './auth.store';

import _ from 'lodash';

class AppStore extends Store {
  data = {
    sidebar: false,
    popup: false,
  }

  constructor(){
    super();

    this.navigation = {
      ...app.config.pages
    };


    // if profile exist
    // updating navigation
    if (AuthStore.profile)
      _.merge(this.navigation,{
        login: {
          disable: true
        },
        profile: {
          disable: false
        }
      });

  }

  toggleSidebar() {
    this.data.sidebar = !this.data.sidebar;

    this.emit('sidebar:toggle');
  }

  togglePopup() {
    this.data.popup = !this.data.popup;

    this.emit('popup:toggle');
  }

  updateNavigation(navigation){
    _.merge(this.navigation, navigation)

    // this will trigers components they own methods
    // and update there state
    this.emit('ui:update');
  }

  /*
    @desc Method for geting navigation available for user
    for Sidebar,Navbar components

    @return Pages[]
  */
  getAvailablePages(){
    let pages = Object.keys(this.navigation);

    return pages.map(key => {
        let page = this.navigation[key];

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
