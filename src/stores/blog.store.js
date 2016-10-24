import Store from './Store';
import _ from 'lodash';
import AppAction from '../actions/app.action';

class BlogStore extends Store {
  constructor(){
    super();
  }

  data = {
    list: [],
    detail: {}
  }

  updateBlogList(data) {
    this.data.list = data;
    this.emit('blogList:update', data);
  }

  updateBlogItem(data) {
    this.data.detail = data;
    this.emit('blogItem:update', data);
  }

  handleError(error){
    app.utils.log.error(error)
    AppAction.notify(error.message);
  }
}

const $blogStore = new BlogStore();

export default $blogStore;