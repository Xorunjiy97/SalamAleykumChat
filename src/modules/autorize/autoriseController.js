import * as actions from '../actions';
import {addNewUser} from './REST';

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
        const chekUser = addNewUser(userName);
        if(chekUser){
            store.dispatch(actions.addUser(userName));
            store.dispatch(actions.openChatPage());
        }else{
          this.view.alertFalseLogIn();
        }
      };
}

export default AutoriseController