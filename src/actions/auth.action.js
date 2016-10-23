import AuthDispatcher from '../dispatchers/auth.dispatcher';
import AuthService from '../services/auth.service';
import $http from '../services/http.service';

class AuthAction {

  login(options) {
    AuthService.requestAuthorization(options)
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
      .then(null,() => {
        AuthDispatcher.dispatch({
          action: app.actions.auth.logout.error
        })
      })
  }

  register(options){
    AuthService.requestRegistration(options)
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
}

const $auth = new AuthAction();

export default $auth;
