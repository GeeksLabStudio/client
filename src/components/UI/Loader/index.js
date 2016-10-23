import React from 'react';
import AppStore from '../../../stores/app.store';

require('./style.less');

export default class Loader extends React.Component {
  state = {
    show: false
  }

  componentDidMount(){
    AppStore.on('loader:toggle', this.loaderToggleHandler);
  }

  componentWillUnmount(){
    AppStore.removeListener('loader:toggle', this.loaderToggleHandler);
  }

  loaderToggleHandler = (show) => {
    if (show) {
      this.setState({
        show
      })
    } else {
      setTimeout(()=>{
        this.setState({
          show
        })
      }, 300)
    }
  }

  render() {
    if (this.state.show)
      return <div className="loading-bar"></div>;
    else
      return null;
  }
}