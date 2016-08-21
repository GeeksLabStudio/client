import AppDispatcher from '../dispatchers/AppDispatcher';

class AppAction {
	
  toggleSidebar() {
    let action = 'TOGGLE_SIDEBAR';

    AppDispatcher.dispatch({
      action
    })
  }
}

const $appAction = new AppAction();

export default $appAction;