import UserDispatcher from '../dispatchers/user.dispatcher';

class UserAction {
  subscribe (email){
    let action = app.actions.user.subscribe;

    UserDispatcher.dispatch({
      action,
      email
    });
  }
}

const $userAction = new UserAction();

export default $userAction;