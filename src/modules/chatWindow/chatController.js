import * as actions from './actions';

class ChatController {
    constructor(view) {
      this.view = view;
      this.currentUser = null;
      this.currentMessage = null;
    }
  
    init = () => {
      this.view.init();
    };
    
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
    
  export default ChatController;