import Store from './Store';
import AuthStore from './auth.store';

import _ from 'lodash';

class AppStore extends Store {
  data = {
    sidebar: false,
    popup: false,
    loader: false
  }

  constructor(){
    super();

    this.navigation = app.config.navigation;
  }

  toggleSidebar() {
    this.data.sidebar = !this.data.sidebar;

    this.emit('sidebar:toggle');
  }

  togglePopup() {
    this.data.popup = !this.data.popup;

    this.emit('popup:toggle');
  }

  toggleLoader(option) {
    this.data.loader = !this.data.loader;

    this.emit('loader:toggle', option);
  }

  updateNavigation(navigation){
    // _.merge(this.navigation, navigation)

    // this will trigers components they own methods
    // and update there state
    this.emit('ui:update');
  }

  /*
    @desc Method for geting navigation available for user
    for Sidebar,Navbar components

    @return Pages[]
  */
  getAvailablePages(controlPosition){
    let links = Object.keys(this.navigation);

    return links.map(key => {
        return this.navigation[key]
      })
      .filter(link => !link.disable) // filtering disabled by default pages
      .filter(link => link.position.indexOf(controlPosition)>=0 ) // filtering by position
      .filter(link => AuthStore.checkPermissions(link.permissions)) // filtering by permission
  }

  createNotification(notification){
    // broadcasting event
    this.emit('ui:notification', notification)
  }
}

const $appStore = new AppStore();

export default $appStore;
