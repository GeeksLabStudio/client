import React from 'react';
import {Link} from 'react-router';
require('./style.less');

export default class SocialNetworks extends React.Component {
  static propTypes = {
    links: React.PropTypes.object
  }

  get _links() {
    return Object.keys(this.props.links).map((el, i)=>{
      let _link = this.props.links[el];

      return (
        <a href={_link.link} className="link" target="_blank" key={i}>
          <i className={_link.icon}/>
        </a>
      )
    })
  }

  render() {
    return (
      <div className='social-networks'>
        {this._links}
      </div>
    )
  }
}