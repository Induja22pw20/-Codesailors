import React, { useState } from 'react';
import './App.css';
import Home from './Components/home';
import DesignSubmit from './Components/designsubmit';
import DesignView from './Components/designview';
import Chat from './Components/chat'; // Import Chat component

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleDesignerClick = () => {
    setCurrentPage('designSubmit');
  };

  const handleCustomerClick = () => {
    setCurrentPage('designView');
  };

  const handleChatClick = () => {
    setCurrentPage('chat');
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <Home
          onDesignerClick={handleDesignerClick}
          onCustomerClick={handleCustomerClick}
        />
      )}
      {currentPage === 'designSubmit' && <DesignSubmit />}
      {currentPage === 'designView' && <DesignView onChatClick={handleChatClick} />}
      {currentPage === 'chat' && <Chat />}
    </div>
  );
};

export default App;
