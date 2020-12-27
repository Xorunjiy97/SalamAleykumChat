import * as actions from '../actions';

class ChatController {
    constructor(view) {
      this.view = view;
    }
  
    init = () => {
      const root = document.getElementById('root');
      root.innerHTML ='';
      root.append(this.view.createChatWindow());

      this.view.sendMessageListener(this.createMessage.bind(this));
      this.view.logOutButtonListener(this.openAuthPage.bind(this));
    };
  
    createMessage = newMessage => {
      const { user } = store.getState();
      const userMessage = { userName: user.user, message: newMessage };
      store.dispatch(actions.addMessage(userMessage));
    }

    openAuthPage = () => {
      store.dispatch(actions.deleteUser());
      store.dispatch(actions.openAutorisationPage());
    }
  }
    
  export default ChatController;