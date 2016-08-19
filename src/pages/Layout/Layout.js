import React from 'react';
import {Link} from 'react-router';

import {
    Nav
} from '../../components';

import AppStore from '../../stores/AppStore';
import AppAction from '../../actions/AppAction';

export default class ApplicationLayout extends React.Component{
    state = {
        sidebar: {
            show: false
        }
    }

    componentDidMount(){
        AppStore.on('sidebar:toggle', ::this._sidebarToggleHandler)
    }

    _sidebarToggleHandler(){
        let sidebar = this.state.sidebar;
        sidebar.show = !sidebar.show;

        this.setState({
            sidebar
        })
    }

    render(){
        let sidebar = (this.state.sidebar.show) ? <div>ETO EPTA SIDEBAR!!!!!!!!</div> : null;

        return <div>
                <Nav>
                    <a onClick={AppAction.toggleSidebar}>
                        {this.state.sidebar.show ? 'Close' : 'Open'}
                    </a>

                    <Link to={'users'}>
                        Users
                    </Link>

                    <Link to='/about'>
                        About
                    </Link>
                </Nav>

                {sidebar}

                <div>
                    <i className='fa fa-cog' />
                    Core Application Component
                </div>


                <div>
                    {this.props.children}
                </div>
            </div>
    }
}