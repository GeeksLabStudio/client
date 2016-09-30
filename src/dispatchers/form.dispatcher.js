import Dispatcher from './dispatcher';
import AppAction from '../actions/app.action';

const $formDispatcher = new Dispatcher();

$formDispatcher.register(function(payload) {
  let {
    action
  } = payload;

  app.utils.log.debug('form:dispatcher', payload);

  switch(action) {
    case app.actions.forms.subscribe:
      let email = payload.email;
      AppAction.notify(`${email} added to subscription list`)
      break;
    default:
      console.log('no action specified')
  }
})

export default $formDispatcher;