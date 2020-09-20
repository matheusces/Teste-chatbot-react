class ActionProvider {
    constructor(createChatBotMessage, setStateFunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet = (msg) => {
        var message = "";

        if(msg.includes("ello")){
            message = this.createChatBotMessage("Hello friend, how are you?");
        }

        if(msg.includes("fine")){
            message = this.createChatBotMessage("I´m fine too, thanks for ask :)");
        }

        if(msg.includes("ye")){
            message = this.createChatBotMessage("Goobye!");
        }

        this.addMessageToState(message);

    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
}

export default ActionProvider;