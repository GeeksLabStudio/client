import Store from './Store';

class AppStore extends Store{
    data = {
        sidebar: false
    }

    toggleSidebar(){
        this.data.sidebar = !this.data.sidebar;

        this.emit('sidebar:toggle');
    }
}

const $appStore = new AppStore();

export default $appStore;