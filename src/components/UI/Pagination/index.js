import React from 'react';
import {
  Link
} from 'react-router'

require('./style.less');

let config = app.config.components.ui.pagination;

export default class Pagination extends React.Component {
  static propTypes = {
    perPage: React.PropTypes.number
  };

  state = {
    page: 0
  }

  _prev() {
    let page = this.state.page - 1;

    this.setState({
      page
    })
  }

  _next() {
    let page = this.state.page + 1;

    this.setState({
      page
    })
  }

  _prevButton(_currentPage) {
    let _class = _currentPage == 0 ? `prev fa ${config.prev.icon}` : `prev active fa ${config.prev.icon}`;
    return <div className={_class} key={'prev'} onClick={::this._prev}></div>
  }

  _nextButton(_currentPage, _pages) {
    let _class = (_currentPage+1) >= _pages ? `next fa ${config.next.icon}` : `next active fa ${config.next.icon}`;
    return <div className={_class} key={'next'} onClick={::this._next}></div>
  }

  _setPage(page) {
    return () => {
      this.setState({
        page
      })
    }
  }

  get _toolbar() {
    let _children = this.props.children;
    let _step = this.props.perPage;
    let _pages = Math.ceil(_children.length / _step);
    let _currentPage = this.state.page;

    if (_pages > 1) {
      let _toolbarPages = [];

      for (let i = 0; i < _pages; i++) {
        let _class = _currentPage == i ? 'page active' : 'page';
        _toolbarPages.push(
          <div key={i} className={_class} onClick={::this._setPage(i)}> {i + 1} </div>
        )
      }

      let _prevButton = this._prevButton(_currentPage);
      let _nextButton = this._nextButton(_currentPage, _pages);
      let _html = [_prevButton, _toolbarPages, _nextButton];

      return _html;
    }
  }

  get _content() {
    let _children = this.props.children;
    let _step = this.props.perPage;
    let _currentPage = this.state.page;
    return _children.slice(_currentPage * _step, (_currentPage * _step) + _step);
  }

  render() {
    return (
      <div>
        {this._content}
        <div className="pagination">
          {this._toolbar}
        </div>
      </div>
    )
  }
}
