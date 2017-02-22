import AppDispatcher from '../dispatchers/app.dispatcher';

class AppAction {

  toggleSidebar() {
    let action = app.actions.ui.sidebar;

    AppDispatcher.dispatch({
      action
    })
  }

  setTitle(option){
    let action = app.actions.ui.setTitle;

    AppDispatcher.dispatch({
      action,
      option
    })
  }

  togglePopup() {
  	let action = app.actions.ui.popup;

  	AppDispatcher.dispatch({
      action
    })
  }

  toggleLoader(option) {
    let action = app.actions.ui.loader;

    AppDispatcher.dispatch({
      action,
      option
    })
  }

  notify(message,type = 'default'){
    let action = app.actions.ui.notification;

    let notification = {
      type,
      message
    }

    AppDispatcher.dispatch({
      action,
      notification
    });

  }
}

const $appAction = new AppAction();

export default $appAction;