import * as api from "./REST";
import * as actions from "../actions";

class ChatController {
    constructor(view) {
      this.view = view;
    }
  
    init = () => {
      const root = document.getElementById("root");
      root.innerHTML ="";
      root.append(this.view.createChatWindow());

      this.view.sendMessageListener(this.createMessage.bind(this));
      this.view.logOutButtonListener(this.openAuthPage.bind(this));
      this.getChatFromBack();
    };

    getChatFromBack = () => {
      api.getChat().then(res => this.addChat(res));
    }

    addChat = chat => {
      console.log(chat);
        store.dispatch(actions.addMessage(chat));
    }
  
    createMessage = newMessage => {
      const { user } = store.getState();
      const userMessage = { userName: user.user, message: newMessage };
      api.addNewMessage(userMessage).then(this.getChatFromBack);
    }

    openAuthPage = () => {
      const { user } = store.getState().user;
      api.deleteUser({user});
      store.dispatch(actions.openAutorisationPage());
      store.dispatch(actions.deleteUser());
    }
  }
    
  export default ChatController;