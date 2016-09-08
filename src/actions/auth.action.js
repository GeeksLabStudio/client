import AuthDispatcher from '../dispatchers/auth.dispatcher';

class AuthAction {

  login(options) {
    let {
      username,
      password
    } = options;

    AuthService.requestAuthorization({
      username,
      password
    })
      .then(data => {
        AuthDispatcher.dispatch({
          action: app.actions.auth.login.success,
          data
        })
      })
      .then(null, error => {
        AuthDispatcher.dispatch({
          action: app.actions.auth.login.error,
          error
        })
      })

  }

  logout(){
    AuthService.removeAuthorization()
      .then(() => {
        AuthDispatcher.dispatch({
          action: app.actions.auth.logout.success
        })
      })
      .then(() => {
        AuthDispatcher.dispatch({
          action: app.actions.auth.logout.error
        })
      })
  }
}

const $auth = new AuthAction();

export default $auth;
