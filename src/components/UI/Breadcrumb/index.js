import React from 'react';
import {
  Link
} from 'react-router'

require('./style.less')

export default class Breadcrumb extends React.Component {
  static propTypes = {
    routes: React.PropTypes.arrayOf(
        React.PropTypes.object
      ).isRequired
  };


  get breadcrumbs(){
    let _b = []
    
    this.props.routes.forEach((item, index) => {
      console.log(item)
      if (item.path)
        _b.push(item.path.slice(1).replace(/\/?\:\w+\/?/,''))
    })

    return _b.map((path,index) => (
        <li key={index}>
          <Link
            onlyActiveOnIndex={true}
            activeClassName="breadcrumb-active"
            to={'/'+path}>

            {this.getBreadcrumbIcon(path,index)}

          </Link>
        </li>
      ));

  }

  getBreadcrumbIcon(path,index){
    if (path == '' && index == 0)
      return <span className='fa fa-home'></span>
    if (path == '*')
      return <span>Not found</span>
    else
      return <span>{path}</span>
  }

  render() {
    let routes = this.props.routes;
    let depth = routes.length;

    return (
      <ul className="breadcrumbs">
        {this.breadcrumbs}
      </ul>
    )
  }
}
