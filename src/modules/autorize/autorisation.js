class Autorisation {
    constructor() {
        
    
    }
    init = () => {
        this.root = document.getElementById("root");
        

        
    }

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
        // this.root.append(this.avtorizContainer);
        return this.avtorizContainer;
    }

    createDiv = (props) => {
        const div = document.createElement("div");
    
        props.className && (div.className = props.className);
        props.id && (div.id = props.id);
    
        return div;
    }

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

    activatedLogInButton = cb => {
        this.logInButton.addEventListener('click', () => {
          
        //   this.createMessageWindow();
         
          cb(this.logIn.value); 
        });
      };


}

export default Autorisation;