import React from 'react';
import AuthAction from '../../actions/auth.action';

export default class SignIn extends React.Component {
  state = {
    form: {
      email: '',
      password: ''
    }
  }

  formSubmitHandler(e) {
    e.preventDefault();
    AuthAction.register(this.state.form);
  }

  getFormValue(key) {
    return this.state.form[key];
  }

  getFormChangeHandler(key) {
    return (e) => {
      let form = {...this.state.form};
      let value = e.target.value;

      form[key] = value;

      this.setState({
        form
      })
    }
  }

  render() {
    return (
      <form onSubmit={::this.formSubmitHandler} className="sign-up">
        <div className="form-group">
          <input 
            type="email"
            placeholder={app.locale.forms.inputs.email}
            value={this.getFormValue('email')}
            onChange={this.getFormChangeHandler('email')}
            required="required"/>
        </div>

        <div className="form-group">
          <input 
            type="password"
            placeholder={app.locale.forms.inputs.password}
            value={this.getFormValue('password')}
            onChange={this.getFormChangeHandler('password')}
            required="required"/>
        </div>

        <button className="btn btn-primary" type="submit">
          {app.locale.buttons.register}
        </button>
      </form>
    )
  }
}