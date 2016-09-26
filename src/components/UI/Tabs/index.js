import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('./style.less');

export default class Tabs extends React.Component {
  state = {
    active: 0
  }

  _handleClick(e) {
    let _index = e.target.getAttribute('data-index');
    this.setState({active: _index})
  }

  get _content() {
    let _children = this.props.children;
    let _tabs = [];
    let _titles = [];

    _children.forEach((el, i) => {
      let _iconClass = el.props.iconClass ? el.props.iconClass : '';
      let _labelClass = (i == this.state.active) ? 'title active' : 'title';

      _titles.push(
        <div key={i} className={_labelClass} data-index={i} onClick={::this._handleClick}>
          <i className={_iconClass}></i>
          {el.props.label}
        </div>
      )

      let _tabClass = (i == this.state.active) ? 'tab active' : 'tab';

      _tabs.push(
        <div key={i} className={_tabClass}>
          {el.props.children}
        </div>
      )
    })

    return (
      <div className="tabs">
        <div className="tabs-header">{_titles}</div>
        <div className="tabs-body">{_tabs}</div>
      </div>
    );
  }

  render() {
    return this._content;
  }
}