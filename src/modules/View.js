class View {
  constructor() {
    this.root = null;
    this.logOutButton = null;
    store.subscribe(this.onShowChat);
  }

  init = () => {
    this.root = document.getElementById("root");
    this.createAvtorizationWindow();
    
  };

  logOutButtonListener = cb => {
    this.logOutButton.addEventListener('click', () =>{
      this.createAvtorizationWindow();
      cb();
    });
  }
  
  activatedLogInButton = cb => {
    this.logInButton.addEventListener('click', () => {
      
      this.createMessageWindow();
     
      cb(this.logIn.value); 
    });
  }

  sendMessageListener = cb => {
    this.sendMessage.addEventListener('click', () => {
      cb(this.textArena.value);
    });
  }
  
  createMessageWindow = () => {
    this.root.innerHTML = " ";
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

    this.logOutButton = this.createButton({ className: "root__log-out-button", buttonText: "LogOut", id: "logOut" });

    this.footerContainer.append(this.textArena);
    this.footerContainer.append(this.sendMessage);
    this.messageDiv.append(this.messageWindow);
    this.mainContainer.append(this.messageDiv);
    this.mainContainer.append(this.footerContainer);
    this.root.append(this.logOutButton);
    this.root.append(this.mainContainer);

  };

  createAvtorizationWindow = () => {
    this.root.innerHTML = " ";
    const hederContainer = this.createDiv({
      className: "avtoriz-container__heder-div",
    });

    const hederTxt = this.createH1({
      className: "heder-div__heder-text",
      txt: "Salam Aleykum",
    });

    const vindowBody = this.createDiv({
      className: "avtoriz-container__vindow-body",
    });

    this.avtorizContainer = this.createDiv({
      className: "root__avtoriz-container",
      id: "avtoriz-container",
    });

    const logInInputContainer = this.createDiv({
      className: "avtoriz-container__login-input-div"
    });

    const logInButtonContainer = this.createDiv({
      className: "avtoriz-container__login-button-div"
    });

    this.logIn = this.createInput({
      className: "login-input-div__login-input",
      id: "login-input",
    }); 

    this.logInButton = this.createButton({
      className: "login-button-div__login-button",
      id: "login-button",
      buttonText: "login",
    });

    this.logIn.setAttribute("placeholder", "введите логин...")
    this.logIn.setAttribute("headers", "login");
    hederContainer.append(hederTxt);
    logInInputContainer.append(this.logIn);
    vindowBody.append(logInInputContainer);
    vindowBody.append(logInButtonContainer);
    this.avtorizContainer.append(hederContainer);
    this.avtorizContainer.append(vindowBody);
    logInButtonContainer.append(this.logInButton);
    this.root.append(this.avtorizContainer);
    
  }

  createDiv = (props) => {
    const div = document.createElement("div");

    props.className && (div.className = props.className);
    props.id && (div.id = props.id);

    return div;
  };

  createH1 = props => {
    const h1 = document.createElement("h1");
    props.className && (h1.className = props.className);
    props.txt && (h1.innerText = props.txt);

    return h1;
  }

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

export default View;
