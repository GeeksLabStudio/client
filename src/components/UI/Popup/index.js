import React from 'react';
import AppStore from '../../../stores/app.store';
require('./style.less');

export default class Popup extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    style: React.PropTypes.object,
    show: React.PropTypes.bool
  }

  state = {
    show: this.props.show ? this.props.show : false
  }

  componentDidMount(){
    this.__popupToggleHandler = ::this.popupToggleHandler;
    AppStore.on('popup:toggle', this.__popupToggleHandler);
  }

  componentWillUnmount(){
    AppStore.removeListener('popup:toggle', this.__popupToggleHandler);
  }

  close() {
    let popup = document.getElementById('popup');
    popup.className += ' close';

    setTimeout(()=>{
      this.setState({ show: false });
    }, 500)
  }

  popupToggleHandler() {
    let show = this.state.show;
    show = !show;

    this.setState({
      show
    })
  }

  render() {
    let className = this.state.show ? 'popup-container active' : 'popup-container';
    return (
      <div className={className} id="popup">
        <div className="popup" style={this.props.style}>
          <div className="title">{this.props.title}</div>
          <div className="body">{this.props.children}</div>
          <div className="actions">
            <button className="btn btn-primary submit" key={0} onClick={this.props.submit}>submit</button>
            <button className="btn cancel" key={1} onClick={::this.close}>cancel</button>
          </div>
        </div>
      </div>
    )
  }
}