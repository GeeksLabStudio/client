import React from 'react';
// components
import {
  Header,
  Sidebar
} from '../../components'

export default class ApplicationLayout extends React.Component {
  render() {
    return (
      <div className="app-body">
        <Header/>

        <main>
          {this.props.children}
        </main>

        <Sidebar/>
      </div>
    )
  }
}