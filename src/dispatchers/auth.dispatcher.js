import Dispatcher from './dispatcher';
import AuthStore from '../stores/auth.store';
import AppStore from '../stores/app.store';

const $appDispatcher = new Dispatcher();

$appDispatcher.register(function(payload) {

  app.utils.log.debug('auth:dispatcher', payload)

  switch(payload.action){
    case app.actions.auth.login.success:
      AuthStore.registerAuthentication(payload.data.auth)
      AppStore.updateNavigation({
        login: {
          disable: true
        },
        profile: {
          disable: false
        },
        logout: {
          disable: false
        }
      })
      break;
    case app.actions.auth.login.error:
      AuthStore.handleError(payload.error)
      break;
    case app.actions.auth.logout.success:
      AuthStore.removeAuthentication()
      AppStore.updateNavigation({
        login: {
          disable: false
        },
        profile: {
          disable: true
        },
        logout: {
          disable: true
        }
      })
      break;
    case app.actions.auth.logout.error:
      AuthStore.handleError(payload.error)
      break;
    default:
      AuthStore.unknownAction(payload);
  }
})

export default $appDispatcher;