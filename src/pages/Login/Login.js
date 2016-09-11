import React from 'react';
import {Link} from 'react-router';

import AuthAction from '../../actions/auth.action'
import AuthStore from '../../stores/auth.store'

export default class LoginPage extends React.Component {

  formSubmitHandler(e){


    e.preventDefault();

    AuthAction.login(this.state.form)
  }

  componentDidMount(){
    this.__errorHandler = ::this.handleError;
    AuthStore.on('auth:error', this.__errorHandler)
  }

  componentWillUnmount(){
    AuthStore.removeListener('auth:error', this.__errorHandler)
  }

  handleError(error){
    let message = error.message;

    this.setState({
      message
    })
  }

  state = {
    form: {
      username: '',
      password: '',
      remember: true
    },

    message: null
  }

  getFormValue(key){
    return this.state.form[key]
  }

  getFormChangeHandler(key){

    return (e) => {
      let form = {...this.state.form}
      let value = e.target.value;

      form[key] = value;

      this.setState({
        form
      })
    }
  }

  get messages(){
    if (!this.state.message)
      return

    return <pre>
      {this.state.message}
    </pre>
  }

  render() {
    return <div>

        {this.messages}

        <h2>Sign In</h2>

        <form name="login" noValidate="">
            <div>
                 <label htmlFor="username">
                      Username
                 </label>
                 <input type="text"
                  value={this.getFormValue('username')}
                  onChange={this.getFormChangeHandler('username')}
                  required="required"/>
            </div>


            <div>
                 <label htmlFor="password">
                      Password
                 </label>
                 <input type="password"
                  value={this.getFormValue('password')}
                  onChange={this.getFormChangeHandler('password')}
                  required="required"/>
            </div>


            <div>

                 <div>
                      <input type="checkbox"
                        checked={this.getFormValue('remember')}
                        onChange={this.getFormChangeHandler('remember')}/>
                      <span>
                           Remember me
                      </span>
                      <br />
                 </div>
            </div>


            <div id="login-submit">
                 <input type="submit" value="Sign In" onClick={::this.formSubmitHandler} />
            </div>
       </form>

    </div>
  }
}