import React, { useState, useEffect, useRef } from 'react';
import './chat.css';
import a1 from './Image/d2.jpg';
import des from './Image/des.jpg';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [firstReplySent, setFirstReplySent] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessage = {
        id: messages.length,
        text: input,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages([...messages, newMessage]);
      setInput('');

      setTimeout(() => {
        const botReply = {
          id: messages.length + 1,
          text: firstReplySent ? 'Thank you for reaching me.' : '',
          imageUrl: firstReplySent ? '' : a1,
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prevMessages) => [...prevMessages, botReply]);
        setFirstReplySent(true);
      }, 1000);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="top-bar">
        <img src={des} alt="profile" className="profile-pic" />
        <span className="profile-name">Designer Preethi</span>
      </div>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text && <div className="message-text">{message.text}</div>}
            {message.imageUrl && <img src={message.imageUrl} alt="bot reply" className="message-image" />}
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
