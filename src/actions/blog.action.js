import BlogDispatcher from '../dispatchers/blog.dispatcher';
import $http from '../services/http.service';

class BlogAction {
  fetchList (){
    let action = app.actions.blog.fetchList;

    $http.send(app.config.api.blog.list.path)
    	.then(data => {
        BlogDispatcher.dispatch({
          action: action.success,
          data
        })
      })
      .then(null, error => {
        BlogDispatcher.dispatch({
          action: action.error,
          error
        })
      })
  }

  fetchItem(_id) {
    let action = app.actions.blog.fetchItem;

    $http.send(app.config.api.blog.item.path + _id)
      .then(data => {
        BlogDispatcher.dispatch({
          action: action.success,
          data
        })
      })
      .then(null, error => {
        BlogDispatcher.dispatch({
          action: action.error,
          error
        })
      })
  }
}

const $blogAction = new BlogAction();

export default $blogAction;