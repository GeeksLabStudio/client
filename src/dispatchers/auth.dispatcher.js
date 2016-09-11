import {
  Dispatcher
} from 'flux';

import AuthStore from '../stores/auth.store';
import AppStore from '../stores/AppStore';

const $appDispatcher = new Dispatcher();

$appDispatcher.register(function(payload) {
  console.log('AuthDispatcher:action', payload)

  switch(payload.action){
    case app.actions.auth.login.success:
      AuthStore.updateToken(payload.data)
      AppStore.updateNavigation({
        login: {
          disable: true
        },
        profile: {
          disable: false
        }
      })
      break;
    case app.actions.auth.login.error:
      AuthStore.handleError(payload.error)
      break;
    case app.actions.auth.logout.success:
      AuthStore.cleanToken(payload.data)
      break;
    case app.actions.auth.logout.error:
      AuthStore.handleError(payload.error)
      break;
    default:
      AuthStore.unknownAction(payload);
  }
})

export default $appDispatcher;