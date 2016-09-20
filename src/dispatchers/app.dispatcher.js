import {
  Dispatcher
} from 'flux';

import AppStore from '../stores/app.store';

const $appDispatcher = new Dispatcher();

$appDispatcher.register(function(payload) {
  let {
    action
  } = payload;

  app.utils.log.debug('app:dispatcher', payload);

  switch(action){
    case 'TOGGLE_SIDEBAR':
      AppStore.toggleSidebar();
      break;
    case 'TOGGLE_POPUP':
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