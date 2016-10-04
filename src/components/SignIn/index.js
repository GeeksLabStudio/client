import React from 'react';
require('./style.less');

import AuthAction from '../../actions/auth.action'

export default class SignIn extends React.Component {
  static propTypes = {

  }

  state = {
    form: {
      username: '',
      password: '',
      remember: true
    }
  }

  formSubmitHandler(e) {
    e.preventDefault();
    AuthAction.login(this.state.form);
  }

  getFormValue(key) {
    return this.state.form[key]
  }

  getFormChangeHandler(key) {
    return (e) => {
      let form = {...this.state.form}
      let value = e.target.value;

      form[key] = value;

      this.setState({
        form
      })
    }
  }

  render() {
    return (
      <form onSubmit={::this.formSubmitHandler} className="sign-in">
        <div className='error'>
          {this.messages}
        </div>

        <div className="form-group">
          <input type="text"
            placeholder="Username"
            value={this.getFormValue('username')}
            onChange={this.getFormChangeHandler('username')}
            required="required"/>
        </div>

        <div className="form-group">
          <input type="password"
            placeholder="Password"
            value={this.getFormValue('password')}
            onChange={this.getFormChangeHandler('password')}
            required="required"/>
        </div>

        <div className="form-group remember">
          <input type="checkbox"
            checked={this.getFormValue('remember')}
            onChange={this.getFormChangeHandler('remember')}/>
          <label>
            Remember me
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Sign In
        </button>
      </form>
    )
  }
}