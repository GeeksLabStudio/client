import request from 'superagent';
import { browserHistory } from 'react-router'

class AuthService{
  auth = null;

  goto(path){
    if (path)
      browserHistory.push(path)
  }


  updateLocalAuthorization(auth){
    if (auth){
      localStorage.setItem('token', auth.token)
      localStorage.setItem('profile', JSON.stringify(auth.profile))
    } else {
      localStorage.clear()
    }
  }

  requestAuthorization(options){
    let {
      email,
      password
    } = options;

    return new Promise((resolve,reject) => {
      request
        .post(config.api.server + config.api.login)
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
    let profile = localStorage.getItem('profile');

    if (profile)
      return {
        token: localStorage.getItem('token'),
        profile: JSON.parse(profile)
      }

    return {
      token: null,
      profile: null
    }
  }

  requestRegistration(options){
    let {
      email,
      password
    } = options;

    return new Promise((resolve,reject) => {
      request
        .post(config.api.server + config.api.register)
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