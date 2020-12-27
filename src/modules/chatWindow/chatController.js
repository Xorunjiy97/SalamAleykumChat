import * as api from './Rest';
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
      this.getChatFromBack();
    };

    getChatFromBack = () => {
      const chat = api.getChat();
      store.dispatch(actions.addMessage(chat));
    }
  
    createMessage = newMessage => {
      const { user } = store.getState();
      const userMessage = { userName: user.user, message: newMessage };
      api.addNewMessage(userMessage).then(this.getChatFromBack());
    }

    openAuthPage = () => {
      const { user } = store.getState();
      api.deleteUser(user.user);
      store.dispatch(actions.deleteUser());
      store.dispatch(actions.openAutorisationPage());
    }
  }
    
  export default ChatController;