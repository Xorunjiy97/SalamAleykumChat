import * as actions from './actions';
import * as api from './controller/Rest';

class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.currentUser = null;
    this.currentMessage = null;
  }

  init = () => {
    this.view.init();
    this.view.activatedLogInButton(this.getLogIn.bind(this));
  };
  
  getLogIn = userName => {
    this.currentUser = userName;
    this.view.createMessageWindow();
    this.getChatInfo();
    store.dispatch(actions.saveMessageStore());
    this.view.logOutButtonListener(this.activatedLogIn.bind(this));
    this.view.sendMessageListener(this.getMessage.bind(this));
    console.log(this.currentUser);
  };
  
  activatedLogIn = () => {
    this.view.activatedLogInButton(this.getLogIn.bind(this));
  }
  
  getMessage = newMessage => {
    this.currentMessage = newMessage;
    console.log(this.currentMessage);
    this.createMessage(); 
    store.dispatch(actions.addMessage());
    
  }

  createMessage = () => {
    const userMessage = { user: this.currentUser, message: this.currentMessage }
    this.model.setMessage(userMessage);
    api.addNewMessage(message);
    //обновлен
  }

  getChatInfo = () => {
    api.getChat()
    .then(chat => {
        console.log(chat);
        //запускается li
    });
  }
}
  
export default Controller;
  