class ChatWindow {
  constructor() {
    this.logOutButton = null;
    this.textArena = null;
    this.sendMessage = null;
    this.messageUl = null;
  }

  logOutButtonListener = (cb) => {
    this.logOutButton.addEventListener("click", () => {
      cb();
    });
  };

  sendMessageListener = (cb) => {
    this.sendMessage.addEventListener("click", () => {
      if (this.textArena.value) {
        cb(this.textArena.value);
      } else {
        alert("Введите сообщение");
      }
    });
  };

  createChatWindow = () => {
    const mainContainer = this.createDiv({
      className: "root__main-container",
    });
    const messageDiv = this.createDiv({
      className: "main-container__message-div",
    });
    const messageWindow = this.createDiv({
      className: "message-div__message-window",
    });
    const footerContainer = this.createDiv({
      className: "main-container__footer-container",
    });
    this.textArena = this.createInput({
      className: "footer-container__text-arena",
    });
    this.sendMessage = this.createButton({
      className: "footer-container__send-message",
      buttonText: "Send",
    });
    const messageShow = this.createDiv({
      className: "message-window__message-show",
    });

    this.messageUl = this.createUl({
      className: "message-li__message-ul",
    });

    this.logOutButton = this.createButton({
      className: "root__log-out-button",
      buttonText: "X",
      id: "logOut",
    });

    store.subscribe(this.onShowChat);

    messageShow.append(this.messageUl);
    messageWindow.append(this.logOutButton);
    messageWindow.append(messageShow);
    messageDiv.append(messageWindow);
    footerContainer.append(this.textArena);
    footerContainer.append(this.sendMessage);
    mainContainer.append(messageDiv);
    mainContainer.append(footerContainer);

    return mainContainer;
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
    props.id && (input.id = props.id);

    return input;
  };

  createButton = (props) => {
    const button = document.createElement("button");

    props.className && (button.className = props.className);
    props.buttonText && (button.innerText = props.buttonText);
    props.id && (button.id = props.id);

    return button;
  };

  createUl = (props) => {
    const ul = document.createElement("ul");

    props.className && (ul.className = props.className);

    return ul;
  };

  createLi = (props) => {
    const li = document.createElement("li");

    props.className && (li.className = props.className);
    props.text && (li.innerText = props.text);

    return li;
  };

  onShowChat = () => {
    const { chat } = store.getState().chat;
    this.messageUl.innerText = "";
    chat.forEach((element) => {
      const li = this.createLi({
        className: "ul_li",
        text: `${element.userName}` + " : " + `${element.message}`,
      });
      this.messageUl.append(li);
    });
  };
}

export default ChatWindow;
