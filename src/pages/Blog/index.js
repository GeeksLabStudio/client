import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import AuthStore from '../../stores/auth.store';
import BlogStore from '../../stores/blog.store';
import {Pagination} from '../../components/UI';
import BlogAction from '../../actions/blog.action';

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
    data: []
  }

  componentWillMount(){
    BlogAction.fetchList();
  }

  componentDidMount(){
    BlogStore.on('blogList:update', ::this.blogListUpdateHandler);
  }

  componentWillUnmount(){
    BlogStore.removeListener('blogList:update', ::this.blogListUpdateHandler)
  }

  blogListUpdateHandler(data){
    this.setState({
      data
    })
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
                <i className="fa fa-comment"/> {el.comments}
              </span>
              <span>
                <i className="fa fa-heart"/> {el.likes}
              </span>
            </div>
            <p className="desc">{el.short_desc}</p>
            <div className="more" to={`articles/${el._id}`}>
              <Link to={`/articles/${el._id}`}>
                {app.locale.pages.blog.readMore}
              </Link>
            </div>
          </div>
        </div>
      )
    })
  }

  get _html() {
    let perPage = app.config.pages.blog.itemsPerPage;

    if (this.state.data.length > 0) {
      return (
        <Pagination perPage={perPage}>
          {this._articles}
        </Pagination>
      )
    } else{
      return <h2>{app.locale.pages.blog.notFound}</h2>
    }
  }

  render() {
    return (
      <div className="blog-page">
        <h1>{config.pages.blog.title}</h1>

        <div className="articles">
          {this._html}
        </div>
      </div>
    )
  }
}

export class BlogDetails extends React.Component {
  state = {
    data: {}
  }

  componentWillMount(){
    let _id = this.props.params.articleId;
    BlogAction.fetchItem(_id);
  }

  componentDidMount(){
    BlogStore.on('blogItem:update', ::this.blogItemUpdateHandler);
  }

  componentWillUnmount(){
    BlogStore.removeListener('blogItem:update', ::this.blogItemUpdateHandler)
  }

  blogItemUpdateHandler(data){
    this.setState({
      data
    })
  }

  _articleHtml(__html) {
    return {__html};
  }

  get _comments() {
    return this.state.data.comments.map((el, i) => {
      return (
        <div className="comment" key={i}>
          <span className="author">{el.author}</span>
          <span className="date">({el.date})</span>:
          <div className="text">{el.message}</div>
        </div>
      )
    })
  }

  get _commentForm() {
    let _profile = AuthStore.profile;
    
    if (_profile.role == 'GUEST') {
      return (
        <Link to="/login" className="login-link">{app.locale.pages.blog.pleaseLogin}</Link>
      )
    } else {
      return (
        <form onSubmit={::this._formSubmit}>
          <textarea type="text" ref="message" placeholder={app.locale.forms.textarea.leaveComment}/>
          <button className="btn btn-primary" type="submit">{app.locale.buttons.submit}</button>
        </form>
      )
    }
  }

  _formSubmit(e) {
    e.preventDefault();
  }

  get _html(){
    let _article = this.state.data;

    return (
      <div className="blog-datail-page">
        <h1>{_article.title}</h1>

        <div className="indicators">
          <span>
            <i className="fa fa-comment"/> {_article.comments.length}
          </span>
          <span>
            <i className="fa fa-heart"/> {_article.likes.length}
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

  render() {
    let _article = this.state.data;

    if (!_.isEmpty(_article))
      return this._html;
    else 
      return null;
  }
}