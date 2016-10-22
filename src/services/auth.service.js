import request from 'superagent';
import { browserHistory } from 'react-router'

const TOKEN_KEY_NAME = '_t'

class AuthService{
  auth = null;

  goto(path){
    if (path)
      browserHistory.push(path)
  }


  updateLocalAuthorization(auth){
    if (auth){
      localStorage.setItem(TOKEN_KEY_NAME, auth.token)
    }
  }

  removeAuthorization(){
    return new Promise((resolve,reject) => {
      this.removeLocalAuthorization();
      resolve({
        message: "You logged out"
      });
    });
  }

  /*
    @desc Method used for resolving auth from local storage
    Need for init AuthService

    @return {token,profile}
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