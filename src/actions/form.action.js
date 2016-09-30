import FormDispatcher from '../dispatchers/form.dispatcher';

class FormAction {
  subscribe (email){
    let action = app.actions.forms.subscribe;

    FormDispatcher.dispatch({
      action,
      email
    });
  }
}

const $formAction = new FormAction();

export default $formAction;