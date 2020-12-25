class Model {
    constructor() {
        this.chat = [];
    }

    setMessage = message => {
        this.chat.push(message);
    }
}

export default Model;