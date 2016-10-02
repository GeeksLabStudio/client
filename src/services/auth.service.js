import request from 'superagent';
import { browserHistory } from 'react-router'

class AuthService{
  auth = null;

  server = {
    hostname: 'localhost',
    port: 9000
  };

  get serverUrl(){
    let {
      hostname,
      port
    } = this.server;

    return `${hostname}:${port}/api/auth`
  }

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
      username,
      password
    } = options;

    return new Promise((resolve,reject) => {
    // will be enabled with server
    //   request
    //     .post(this.serverUrl+'/login')
    //     .send({
    //       username,
    //       password
    //     })
    //     .end((err,res) => {
    //       if (err || !res.ok)
    //         reject(err)
    //       else
    //         resolve(res.body)
    //     })
    // })

    // for testing
    // -----------------------
      setTimeout(() => {
        resolve({
          status: 200,
          message: "You logged in",
          auth: {
            profile: {
              username,
              name: 'Michael',
              lastName: 'Jackson JR.',
              sex: 'male',
              role: app.roles.user,
              image: 'http://www.rush-agency.ru/wp-content/uploads/avatar-1.png'
            },
            token: 'TEST'
          }
        });

      }, 400);
    // -----------------------
    });
  }

  removeAuthorization(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({
          message: "You logged out"
        });
      }, 400);
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

}

const $auth = new AuthService();

export default $auth;