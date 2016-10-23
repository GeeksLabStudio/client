import Dispatcher from './dispatcher';
import BlogStore from '../stores/blog.store';

const $blogDispatcher = new Dispatcher();

$blogDispatcher.register(function(payload) {
  let {
    action
  } = payload;

  app.utils.log.debug('blog:dispatcher', payload);

  switch(action){
    case app.actions.blog.fetchList.success:
      BlogStore.updateBlogList(payload.data);
      break;
    case app.actions.blog.fetchList.error:
      BlogStore.handleError(payload.error)
      break;
    case app.actions.blog.fetchItem.success:
      BlogStore.updateBlogItem(payload.data);
      break;
    case app.actions.blog.fetchItem.error:
      BlogStore.handleError(payload.error)
      break;
    default:
      BlogStore.unknownAction();
  }
})

export default $blogDispatcher;