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

  requestAuthorization(options){
    let {
      email,
      password
    } = options;

    return new Promise((resolve,reject) => {
      request
        .post(app.config.api.server + app.config.api.login)
        .send({
          email,
          password
        })
        .end((err,res) => {
          if (err || !res.ok)
            reject(err)
          else
            resolve(res.body)
        })
    })
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

  requestProfile(options){
    let {
      token
    } = options;

    return new Promise((resolve,reject) => {
      request
        .get(app.config.api.server + app.config.api.profile)
        .set('Authorization', token)
        .end((err,res) => {
          if (err || !res.ok)
            reject(err)
          else
            resolve(res.body.data)
        })
    })
  }

  requestRegistration(options){
    let {
      email,
      password
    } = options;

    return new Promise((resolve,reject) => {
      request
        .post(app.config.api.server + app.config.api.register)
        .send({
          email,
          password
        })
        .end((err,res) => {
          if (err || !res.ok)
            reject(err)
          else
            resolve(res.body)
        })
    })
  }
}

const $auth = new AuthService();

export default $auth;