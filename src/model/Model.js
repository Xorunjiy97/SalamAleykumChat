class Model {
    constructor() {
        this.chat = [];
    }

    setMessage = message => {
        this.chat.push(message);
        console.log(this.chat);
    }
}

export default Model;