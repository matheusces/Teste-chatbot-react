class MessageParser{
    constructor(actionProvider){
        this.actionProvider = actionProvider;
    }

    parse(message){
        console.log(message);

        if(message.includes("ello")){
            this.actionProvider.greet(message);
        }

        if(message.includes("fine")){
            this.actionProvider.greet(message);
        }

        if(message.includes("ye")){
            this.actionProvider.greet(message);
        }
    }
}

export default MessageParser;