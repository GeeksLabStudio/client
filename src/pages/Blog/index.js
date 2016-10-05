import React from 'react';
import {Link} from 'react-router';
import AuthStore from '../../stores/auth.store';
import data from './seed';
require('./style.less');

export class BlogPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
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
            <div className="indicators">
              <span>
                <i className="fa fa-calendar"/> {el.date}
              </span>
              <span>
                <i className="fa fa-comment"/> {el.comments.length}
              </span>
              <span>
                <i className="fa fa-heart"/> {el.likes}
              </span>
            </div>
            <p className="desc">{el.short_desc}</p>
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
  state = {
    data: this._article
  }

  _articleHtml(__html) {
    return {__html};
  }

  get _article() {
    let articleId = this.props.params.articleId;
    
    return data.find(x => {
      return x._id == articleId
    })
  }

  get _comments() {
    return this.state.data.comments.map((el, i) => {
      return (
        <div className="comment" key={i}>
          <span className="author">{el.author}</span>
          <span className="date">({el.date})</span>:
          <div className="text">{el.text}</div>
        </div>
      )
    })
  }

  get _commentForm() {
    let _profile = AuthStore.profile;
    
    if (_profile.role == 'GUEST') {
      return (
        <Link to="/login" className="login-link">Please login to leave your comment</Link>
      )
    } else {
      return (
        <form onSubmit={::this._formSubmit}>
          <textarea type="text" ref="message" placeholder="Leave a comment"/>
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      )
    }
  }

  _formSubmit(e) {
    e.preventDefault();

    console.log(this.refs);
  }

  render() {
    let _article = this.state.data;

    return (
      <div className="blog-datail-page">
        <h1>{_article.title}</h1>

        <div className="indicators">
          <span>
            <i className="fa fa-comment"/> {_article.comments.length}
          </span>
          <span>
            <i className="fa fa-heart"/> {_article.likes}
          </span>
        </div>

        <div className="article" dangerouslySetInnerHTML={this._articleHtml(_article.html)}></div>

        <div className="comment-form">
          {this._commentForm}
        </div>

        <div className="comments">
          {this._comments}
        </div>
      </div>
    )
  }
}