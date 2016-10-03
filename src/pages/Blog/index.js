import React from 'react';
import {Link} from 'react-router';
import data from './seed';
require('./style.less');

export class Blog extends React.Component {
  render(){
    return <div>
        {this.props.children}
      </div>
  }
}

export class BlogList extends React.Component {
  state = {
    data
  }

  get _articles() {
  	return this.state.data.map((el, i)=>{
  		return (
  			<div className="article" key={i}>
  				<img src={el.image} className="thumb"/>
  				<div className="info">
  					<h2 className="title">{el.title}</h2>
	  				<p className="desc">{el.desc}</p>
	  				<div className="more" to={`articles/${el._id}`}>
	            <Link to={`/articles/${el._id}`}>
		            Read more
		          </Link>
	          </div>
  				</div>
  			</div>
  		)
  	})
  }

  render() {
    return (
      <div className="blog-page">
        <h1>{config.pages.blog.title}</h1>

        <div className="articles">
	        {this._articles}
	      </div>
      </div>
    )
  }
}

export class BlogDetails extends React.Component {
  render() {
    const { articleId } = this.props.params;
    
    let el = data.find(x => {
      return x._id == articleId
    })

    return <div className="article">
      <img src={el.image} className="thumb"/>
      <div className="info">
        <h2 className="title">{el.title}</h2>
        <p className="desc">{el.desc}</p>
        <div className="more" to={`articles/${el._id}`}>
          <Link to={`/articles/${el._id}`}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  }
}