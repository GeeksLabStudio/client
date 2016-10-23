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
    this.data.list = data.data;
    this.emit('blogList:update', data.data);
  }

  updateBlogItem(data) {
    this.data.detail = data.data;
    this.emit('blogItem:update', data.data);
  }

  handleError(error){
    console.log('Error', error.message)
    AppAction.notify(error.message);
  }
}

const $blogStore = new BlogStore();

export default $blogStore;