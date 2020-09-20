import React from 'react';
import Chatbot from 'react-chatbot-kit';

import './App.css';

import config from './chatbot/configure';
import ActionProvider from './chatbot/actionProvider';
import MessageParser from './chatbot/messageParser';

function App() {
  return (
    <div className="App">
      <div style={{maxWidth: "300px"}}>
        <Chatbot 
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />   
      </div>
    </div>
  );
}

export default App;
