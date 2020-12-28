import * as actions from "../actions";
import {addNewUser} from "./REST";

class AutoriseController {
    constructor(view) {
        this.view = view;
      }

      init = () => {
        const root = document.getElementById("root");
        root.innerHTML = "";
        root.append(this.view.createAvtorizationWindow());
        this.view.activatedLogInButton(this.getLogIn.bind(this));
      };

      getLogIn = userName => {
          addNewUser({ userName: userName }).then(res => this.checkLogIn(userName, res))
      };

      checkLogIn = (userName, result) => {
        console.log(result);
        if(result){
          store.dispatch(actions.openChatPage());
          store.dispatch(actions.addUser(userName));
        }else{
          this.view.alertFalseLogIn();
        }
      }
}

export default AutoriseController