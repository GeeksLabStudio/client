import Store from './Store';
import AuthService from '../services/auth.service';
import $http from '../services/http.service';

class AuthStore extends Store {

  __token = null;
  profile = {}

  constructor(options){
    super();

    let {
      token
    } = options;

    if (token){
      app.utils.log.debug(`token detected in storage: [${token}]`);
      this.__setToken(token);

      $http.send(app.config.api.profile)
        .then(res => {
          let data = res.data;
          app.utils.log.debug('Profile have been successfully resolved', data)

          this.updateProfile(data.profile)
        })
        .then(null, error => {
          app.utils.log.error('Profile resolving failed.', error)

          //remove token from localstorage
          AuthService.removeLocalAuthorization();

          //set profile to Guest
          this.updateProfile()
        })
    } else
      this.updateProfile();
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
    this.__setProfile(profile)
  }

  checkPermissions(permissions){
    let role = this.profile.role;

    if (permissions.indexOf(app.roles.all) >= 0){
      return true; //if permissions have full access
    }

    return (permissions.indexOf(role) >= 0) //checking match
  }

  getProfile(){
    return this.profile
  }

  /*
    Getters for types of profile
  */

  // GUEST PROFILE
  // used for setting profile after log out, etc...
  get guestProfile(){
    return {
      role: app.roles.guest
    }
  }

  /*
    ---------------
    Private methods
    ---------------
  */

  __setProfile(profile){
    if (profile)
      this.profile = profile;
    else
      this.profile = this.guestProfile;

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
