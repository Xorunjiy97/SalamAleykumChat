import * as actions from './actions';

class AutoriseController {
    constructor(view) {
        this.view = view;
        this.currentUser = null;
      }

      init = () => {
        this.view.init();
        this.view.activatedLogInButton(this.getLogIn.bind(this));
      };

      getLogIn = userName => {
        this.currentUser = userName;
        // this.view.createMessageWindow();
        // this.getChatInfo();
        // store.dispatch(actions.saveMessageStore());
        // this.view.logOutButtonListener(this.activatedLogIn.bind(this));
        // this.view.sendMessageListener(this.getMessage.bind(this));
        console.log(this.currentUser);
      };

      getUser = () => {this.currentUser};


}

export default AutoriseController