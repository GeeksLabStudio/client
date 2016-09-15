import Store from './Store';
import AuthService from '../services/auth.service'

class AuthStore extends Store {

  __token = null;
  profile = null

  constructor(options){
    super();

    let {
      token,
      profile
    } = options;

    if (token)
      this.__setToken(token)

    if (profile)
      this.profile = profile
  }

  /*
    Public methods
    Used by auth.dispatcher
  */

  get isAuthenticated(){
    return Boolean(this.__token)
  }

  registerAuthentication(auth){
    let {
      token,
      profile
    } = auth;

    this.__setToken(token)
    this.__setProfile(profile)
    AuthService.updateLocalAuthorization(auth)
  }

  removeAuthentication() {
    this.__setToken(null);
    this.__setProfile(null);
    AuthService.updateLocalAuthorization(null)
  }

  updateProfile(profile){
    if (profile)
      this.__setProfile()
  }

  getProfile(){
    return {
      ...this.profile
    }
  }

  /*
    ---------------
    Private methods
    ---------------
  */

  __setProfile(profile){
    this.profile = profile;

    this.emit('profile:update')
  }

  __setToken(token){
      this.__token = token;
  }

  /*
    Error handling
  */

  handleError(error){
    console.log('Error', error.message)

    this.emit('auth:error', error)
  }

}

let initAuth = AuthService.resolveLocalAuthorization()

app.utils.log.debug('AuthService:resolveLocalAuthorization', initAuth);

const $authStore = new AuthStore(initAuth);

export default $authStore;
