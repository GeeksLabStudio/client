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
    AuthAction.login(this.state.form);
    e.preventDefault();
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

  get messages(){
    if (!this.props.error)
      return

    let err = JSON.stringify(this.props.error, false, 2);

    return (
      <pre>
        {err}
      </pre>
    )
  }

  render() {
    return <div className="sign-in">
        <div className='error'>
          {this.messages}
        </div>

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
    </div>
  }
}