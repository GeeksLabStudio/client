import Store from './Store';

class AuthStore extends Store {


  token = null;

  profile = {
    username: null
  }

  updateToken(options) {
    let {
      token,
      username
    } = options.auth;

    this.profile.username = username;

    this.__setToken(token);
  }

  cleanToken(options) {
    this.__setToken(null);
  }

  __setToken(token){
    if (token){
      this.__token = token;
      this.emit('auth:login');
    } else {
      this.__token = null;
      this.emit('auth:logout');
    }
  }

  handleError(error){
    console.log('Error', error.message)

    this.emit('auth:error', error)
  }

}

const $authStore = new AuthStore();

export default $authStore;
