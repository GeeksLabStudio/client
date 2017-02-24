import request from 'superagent';
import { browserHistory } from 'react-router'
import $http from './http.service';

const TOKEN_KEY_NAME = '_t'

// Helping utils for Auth Store

class AuthService{
  auth = null;

  // this must be moved xD
  goto(path){
    if (path)
      browserHistory.push(path)
  }

  // currently not used
  removeAuthorization(){
    return new Promise((resolve,reject) => {
      this.removeLocalAuthorization();

      resolve({
        message: "You logged out"
      });
    })
  }

  // Methods for requesting api.auth
  requestAuthorization(options){
    return $http.send(
        app.config.api.login.path,
        app.config.api.login.method,
        options
      )
  }

  requestRegistration(options){
    return $http.send(
        app.config.api.register.path,
        app.config.api.register.method,
        options
      )
  }

  requestProfile(){
    return $http.send(
        app.config.api.profile.path
      )
  }

  // Methods for managing stored auth token
  updateLocalAuthorization(auth){
    if (auth){
      localStorage.setItem(TOKEN_KEY_NAME, auth.token)
    }
  }

  /*
    @desc Method used for resolving auth from local storage
    Need for init AuthService

    @return {auth.token}
  */
  resolveLocalAuthorization(){
    let token = localStorage.getItem(TOKEN_KEY_NAME)

    return {
      token
    }
  }

  removeLocalAuthorization(){
    return localStorage.removeItem(TOKEN_KEY_NAME)
  }
}

const $auth = new AuthService();

export default $auth;