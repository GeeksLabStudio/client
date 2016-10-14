import React from 'react';
import {Link} from 'react-router';
import {Dropdown} from '../../UI';

export default class LangSwitcher extends React.Component {
  get _links() {
    // get current language
    let _current = localStorage.getItem('locale');

    // return links
    return app.locale.packs.map((el, i)=>{
      return _current == el ? <span key={i} className="active">{el}</span> : <span key={i} onClick={this._handleClick(el)}>{el}</span>;
    })
  }

  // set langPack and reload APP
  _handleClick(lang) {
    return ()=>{
      // set item
      localStorage.setItem('locale', lang);
      // reload app
      location.reload();
    }
  }

  render() {
    return (
      <Dropdown links={this._links}>
        {app.locale.components.navbar.langSwitcher} <i className="placeholder fa fa-globe"/>
      </Dropdown>
    )
  }
}