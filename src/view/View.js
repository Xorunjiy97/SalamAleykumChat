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
    this.header = this.createDiv({
      className: "main-container__header",
    });
    this.messageWindow = this.createDiv({
      className: "header__message-window",
    });
    this.footerContainer = this.createDiv({
      className: "header__footer-container",
    });
    this.textArena = this.createInput({
      className: "header__text-arena",
    });
    this.sendMessage = this.createButton({
      className: "header__send-message",
    });

    this.footerContainer.append(this.textArena);
    this.footerContainer.append(this.sendMessage);
    this.header.append(this.footerContainer);
    this.header.append(this.messageWindow);
    this.mainContainer.append(this.header);
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

    return button;
  };
}

export default View;
