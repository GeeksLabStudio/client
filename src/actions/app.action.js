import AppDispatcher from '../dispatchers/app.dispatcher';

class AppAction {

  toggleSidebar() {
    let action = 'TOGGLE_SIDEBAR';

    AppDispatcher.dispatch({
      action
    })
  }

  togglePopup() {
  	let action = 'TOGGLE_POPUP';

  	AppDispatcher.dispatch({
      action
    })
  }
}

const $appAction = new AppAction();

export default $appAction;