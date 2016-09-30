import Dispatcher from './dispatcher';
import AppStore from '../stores/app.store';

const $appDispatcher = new Dispatcher();

$appDispatcher.register(function(payload) {
  let {
    action
  } = payload;

  app.utils.log.debug('app:dispatcher', payload);

  switch(action){
    case app.actions.ui.sidebar:
      AppStore.toggleSidebar();
      break;
    case app.actions.ui.popup:
      AppStore.togglePopup();
      break;
    case app.actions.ui.notification:
      let {
        type,
        message
      } = payload.notification;

      AppStore.createNotification({
        type,
        message
      });
      break;
    default:
      AppStore.unknownAction();
  }
})

export default $appDispatcher;