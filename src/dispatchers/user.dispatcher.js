import Dispatcher from './dispatcher';
import AppAction from '../actions/app.action';

const $userDispatcher = new Dispatcher();

$userDispatcher.register(function(payload) {
  let {
    action
  } = payload;

  app.utils.log.debug('user:dispatcher', payload);

  switch(action) {
    case app.actions.user.subscribe:
      let email = payload.email;
      AppAction.notify(`${email} added to subscription list`);
      break;
    default:
      console.log('no action specified')
  }
})

export default $userDispatcher;