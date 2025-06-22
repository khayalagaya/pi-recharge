import React, { useState } from 'react';
import { authenticate } from './pi';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await authenticate();
      setUser(result);
    } catch (err) {
      alert("Pi login failed: " + err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Pi Recharge</h2>
        {user ? (
          <p>Welcome, @{user.username}</p>
        ) : (
          <button onClick={handleLogin}>Login with Pi</button>
        )}
      </header>
    </div>
  );
}

export default App;
