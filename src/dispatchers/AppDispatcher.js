import {
  Dispatcher
} from 'flux';

import AppStore from '../stores/AppStore';

const $appDispatcher = new Dispatcher();

$appDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action){
    case 'TOGGLE_SIDEBAR':
      AppStore.toggleSidebar();
      break;
    case 'TOGGLE_POPUP':
      AppStore.togglePopup();
      break;
    default:
      AppStore.unknownAction();
  }
})

export default $appDispatcher;