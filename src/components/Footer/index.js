import React from 'react';
import {Link} from 'react-router';
import AppStore from '../../stores/app.store';
import FormAction from '../../actions/user.action';
import SocialNetworks from '../SocialNetworks'
require('./style.less');

export default class Footer extends React.Component {
  static propTypes = {}

  position = app.ui.ControlPosition.FOOTER

  state = {
    links: AppStore.getAvailablePages(this.position)
  }

  componentDidMount(){
    AppStore.on('ui:update', this.UIupdateHandler);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:update', this.UIupdateHandler)
  }

  UIupdateHandler = () => {
    let links = AppStore.getAvailablePages(this.position);

    this.setState({
      links
    })
  }

  get _footerLinks() {
    if (config.components.footer.links) {
      return (
        <div className="footer-links">
          {this._links}
        </div>
      )
    }
  }

  get _links() {
    return this.state.links.map(_link => {
      return <Link
          to={_link.path}
          key={_link.label}
          activeClassName='active'
          onlyActiveOnIndex={_link.path == '/'}
        >
        {_link.label}
      </Link>
    })
  }

  get _footerForm() {
    if (config.components.footer.form) {
      return (
        <form className="subscribe-form" onSubmit={::this._submit}>
          <label>{app.locale.components.footer.form.label}</label>
          <input type="email" ref="email" name="email" placeholder={app.locale.forms.inputs.email}/>
          <button className="btn" type="submit">{app.locale.buttons.submit}</button>
        </form>
      )
    }
  }

  get _socialLinks(){
    if (config.components.footer.socialNetworks) {
      return (
        <SocialNetworks links={config.components.socialNetworks}/>
      )
    }
  }

  _submit(e) {
    e.preventDefault();
    let _email = this.refs.email.value;
    FormAction.subscribe(_email);
  }

  render() {
    return (
      <footer className='footer'>
        {this._footerLinks}
        {this._footerForm}
        {this._socialLinks}
        <copyright>
          {app.locale.components.footer.copyright}
        </copyright>
      </footer>
    )
  }
}