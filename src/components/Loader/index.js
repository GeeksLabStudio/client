import React from 'react';
// stores
import {AppStore} from '../../stores';
// material-ui
import LinearProgress from 'material-ui/LinearProgress';
// css
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

	render(){
		if (this.state.show)
			return (
				<div className="progress-bar">
					<LinearProgress 
						mode="indeterminate" 
						color={theme.palette.mainColor}
						style={{
							position: 'absolute',
							background: 'transparent'
						}}
					/>
				</div>
			)
		else
      return null;
	}
}