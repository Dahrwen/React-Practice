import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
  //chatMessages will get array[0] and setChatMessages will get array[1]
  const [chatMessages, setChatMessages] = useState(
    []//empty because the initial state which is chat messages should not have a value before the user enters a message
  );

  return(
    <div className="app-container">
      <ChatMessages 
        chatMessages = {chatMessages}
      />
      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  );
}

export default App
