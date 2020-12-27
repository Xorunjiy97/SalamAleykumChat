import * as actions from '../actions';

class AutoriseController {
    constructor(view) {
        this.view = view;
      }

      init = () => {
        const root = document.getElementById('root');
        root.innerHTML = '';
        root.append(this.view.createAvtorizationWindow());
        this.view.activatedLogInButton(this.getLogIn.bind(this));
      };

      getLogIn = userName => {
        store.dispatch(actions.addUser(userName));
        store.dispatch(actions.openChatPage());
      };
}

export default AutoriseController