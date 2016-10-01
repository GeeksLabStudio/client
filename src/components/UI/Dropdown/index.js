import React from 'react';

require('./style.less');

export default class Dropdown extends React.Component {
  static propTypes = {
    links: React.PropTypes.array
  };

  _toggle(e) {
    e.target.closest('.dropdown').classList.toggle('active');
  }

  _hide(e) {
    e.target.closest('.dropdown').classList.remove('active');
  }

  render() {
    return (
      <div className="dropdown" onClick={::this._toggle} onMouseLeave={::this._hide}>
        {this.props.children}

        <i className="arrow fa fa-angle-down"/>

        <div className="links">
          {this.props.links}
        </div> 
      </div>
    )
  }
}
