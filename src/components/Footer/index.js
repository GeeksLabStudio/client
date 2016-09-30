import React from 'react';
import {Link} from 'react-router';
import AppStore from '../../stores/app.store';
import FormAction from '../../actions/user.action';

require('./style.less');

export default class Footer extends React.Component {
  static propTypes = {}

  position = app.ui.ControlPosition.FOOTER

  state = {
    links: AppStore.getAvailablePages(this.position)
  }

  componentDidMount(){
    this.__onUiUpdate = ::this.UIupdate
    AppStore.on('ui:update', this.__onUiUpdate);
  }

  componentWillUnmount(){
    AppStore.removeListener('ui:update', this.__onUiUpdate)
  }

  UIupdate(){
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
          <label>Subscribe to newsletters</label>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <button className="btn" type="submit">Submit</button>
        </form>
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
      <div className='footer'>
        {this._footerLinks}
        {this._footerForm}
      </div>
    )
  }
}