import Store from './Store';
import pages from '../configs/pages'

class AppStore extends Store {
  data = {
    sidebar: false,
    navigation: pages
  }

  toggleSidebar() {
    this.data.sidebar = !this.data.sidebar;

    this.emit('sidebar:toggle');
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
  }
}

const $appStore = new AppStore();

export default $appStore;
