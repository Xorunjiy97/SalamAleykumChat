class ChatWindow {
    constructor() {
        this.logOutButton = null;
        store.subscribe(this.onShowChat);
    }
  
    logOutButtonListener = cb => {
        this.logOutButton.addEventListener('click', () =>{
            this.createAvtorizationWindow();
            cb();
        });
    }
  
    sendMessageListener = cb => {
        this.sendMessage.addEventListener('click', () => {
            cb(this.textArena.value);
        });
    }
    
    createMessageWindow = () => {
        this.mainContainer = this.createDiv({
            className: "root__main-container",
        });
        this.messageDiv = this.createDiv({
            className: "main-container__message-div",
        });
        this.messageWindow = this.createDiv({
            className: "message-div__message-window",
        });
        this.footerContainer = this.createDiv({
            className: "main-container__footer-container",
        });
        this.textArena = this.createInput({
            className: "footer-container__text-arena",
        });
        this.sendMessage = this.createButton({
            className: "footer-container__send-message",
            buttonText: "Send",
        });
    
        this.logOutButton = this.createButton({ 
            className: "root__log-out-button", 
            buttonText: "LogOut", 
            id: "logOut" 
        });
  
        this.footerContainer.append(this.textArena);
        this.footerContainer.append(this.sendMessage);
        this.messageDiv.append(this.messageWindow);
        this.mainContainer.append(this.logOutButton);
        this.mainContainer.append(this.messageDiv);
        this.mainContainer.append(this.footerContainer);
    //   this.root.append(this.logOutButton);
    //   this.root.append(this.mainContainer);
      return this.mainContainer;
    };
  
    createDiv = (props) => {
      const div = document.createElement("div");
  
      props.className && (div.className = props.className);
      props.id && (div.id = props.id);
  
      return div;
    };
  
    createInput = (props) => {
      const input = document.createElement("input");
  
      props.className && (input.className = props.className);
      props.id && (input.id = props.id)
  
      return input;
    };
  
    createButton = (props) => {
      const button = document.createElement("button");
  
      props.className && (button.className = props.className);
      props.buttonText && (button.innerText = props.buttonText);
      props.id && (button.id = props.id);
  
      return button;
    };
    onShowChat = () => {
      const { counter } = store.getState();
  
      this._count.innerText = counter.counter;
      // Рисуются li
  
    }
  }
  
  export default ChatWindow;