class View {
  constructor() {
    this.root = null;
  }

  init = () => {
    this.createMessageWindow();
  };

  createMessageWindow = () => {
    this.root = document.getElementById("root");
    this.mainContainer = this.createDiv({
      id: "main-container",
      className: "root__main-container",
    });
    this.messageContainer = this.createDiv({
      id: "message-div",
      className: "main-container__message-container",
    });
    this.messageWindow = this.createDiv({
      className: "message-container__message-window",
    });
    this.footerContainer = this.createDiv({
      className: "main-container__footer-container",
    });
    this.textArena = this.createInput({
      id: "text-arena",
      className: "footer-container__text-arena",
    });
    this.sendMessage = this.createButton({
      id: "send-message",
      className: "footer-container__send-message",
      buttonText: "Send",
    });
    this.messageListDiv = this.createDiv({
      id: "message-list",
      className: "message-window__message-list-div",
    });
    this.messageList = this.createUl({
      className: "message-list-div__message-list",
    });

    this.messageWindow.append(this.messageListDiv);
    this.messageListDiv.append(this.messageList);
    this.footerContainer.append(this.textArena);
    this.footerContainer.append(this.sendMessage);
    this.messageContainer.append(this.messageWindow);
    this.mainContainer.append(this.messageContainer);
    this.mainContainer.append(this.footerContainer);
    this.root.append(this.mainContainer);
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

    props.id && (button.id = props.id);
    props.className && (button.className = props.className);
    props.buttonText && (button.innerText = props.buttonText);

    return button;
  };

  createUl = (props) => {
    const ul = document.createElement("ul");

    props.className && (ul.className = props.className);

    return ul;
  };
}

export default View;
