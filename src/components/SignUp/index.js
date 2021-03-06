import React from 'react';
// actions
import AuthAction from '../../actions/auth.action';
// material-ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// css
require('./style.less');

export default class SignUn extends React.Component {
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
        <h2>{config.pages.register.title}</h2>
        
        <TextField
          type="email"
          floatingLabelText={app.locale.forms.inputs.email}
          value={this.getFormValue('email')}
          onChange={this.getFormChangeHandler('email')}
          required="required"
          style={{width: '100%', marginTop: -10}}
        />

        <TextField
          type="password"
          floatingLabelText={app.locale.forms.inputs.password}
          value={this.getFormValue('password')}
          onChange={this.getFormChangeHandler('password')}
          required="required"
          style={{width: '100%', marginTop: -10}}
        />

        <RaisedButton label={app.locale.buttons.register} type="submit" primary={true} style={{width: '100%', marginTop: 30}}/>
      </form>
    )
  }
}