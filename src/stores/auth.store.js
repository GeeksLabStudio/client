import Store from './Store';

class AuthStore extends Store {


  token = null;

  updateToken(options) {
    let {
      token
    } = options;

    this.token = token;

    this.emit('auth:login')
  }

  cleanToken(options) {
    this.token = null;

    this.emit('auth:logout')
  }

  handleError(error){
    console.log('Error', error.message)

    this.emit('auth:error', error)
  }
}

const $authStore = new AuthStore();

export default $authStore;
