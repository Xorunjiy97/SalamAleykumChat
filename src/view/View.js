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

    this.footerContainer.append(this.textArena);
    this.footerContainer.append(this.sendMessage);
    this.messageDiv.append(this.messageWindow);
    this.mainContainer.append(this.messageDiv);
    this.mainContainer.append(this.footerContainer);
    this.root.append(this.mainContainer);
  };

  createDiv = (props) => {
    const div = document.createElement("div");

    props.className && (div.className = props.className);

    return div;
  };

  createInput = (props) => {
    const input = document.createElement("input");

    props.className && (input.className = props.className);

    return input;
  };

  createButton = (props) => {
    const button = document.createElement("button");

    props.className && (button.className = props.className);
    props.buttonText && (button.innerText = props.buttonText);
    return button;
  };
}

export default View;
