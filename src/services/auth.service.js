import request from 'superagent';

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

  constructor(){

  }

  requestAuthorization(options){
    let {
      username,
      password
    } = options;

    return new Promise((resolve,reject) => {
      request
        .post(this.serverUrl+'/login')
        .send({
          username,
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
      })
    })
  }
}

const $auth = new AuthService();

export default $auth;