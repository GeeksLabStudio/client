import React from 'react';
// components
import {
  Header,
  Sidebar,
  Notification,
  Loader
} from '../../components'

export default class ApplicationLayout extends React.Component {
  render() {
    return (
      <div className="app-body">
        <Header/>
        <Loader/>

        <main>
          {this.props.children}
        </main>

        <Sidebar/>

        <Notification/>
      </div>
    )
  }
}