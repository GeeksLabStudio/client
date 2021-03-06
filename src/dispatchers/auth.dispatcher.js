import Dispatcher from './dispatcher';
import AuthStore from '../stores/auth.store';
import AppStore from '../stores/app.store';

const $authDispatcher = new Dispatcher();

AuthStore.dispatchToken = $authDispatcher.register(payload => {

  app.utils.log.debug('auth:dispatcher', payload)

  switch(payload.action){
    case app.actions.auth.login.success:
      AuthStore.registerAuthentication(payload.data)
      AppStore.updateNavigation();
      break;
    case app.actions.auth.login.error:
      AuthStore.handleError(payload.error)
      break;
    case app.actions.auth.logout.success:
      AuthStore.removeAuthentication()
      AppStore.updateNavigation();
      break;
    case app.actions.auth.logout.error:
      AuthStore.handleError(payload.error)
      break;
    default:
      AuthStore.unknownAction(payload);
  }
})

export default $authDispatcher;