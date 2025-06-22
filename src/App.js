import React, { useState } from 'react';
import { authenticate } from './pi';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState('');
  const [operator, setOperator] = useState('');
  const [amount, setAmount] = useState('');

  const handleLogin = async () => {
    try {
      const result = await authenticate();
      setUser(result);
    } catch (err) {
      alert("Pi login failed: " + err);
    }
  };

  const handleRecharge = () => {
    if (!phone || !operator || !amount) {
      alert("Please fill all fields.");
      return;
    }

    alert(`Recharge request submitted:\nNumber: ${phone}\nOperator: ${operator}\nAmount: ₹${amount}\n(Pi payment coming soon)`);
    // Here we’ll add Pi payment + API call later
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Pi Recharge</h2>
        {user ? (
          <>
            <p>Welcome, @{user.username}</p>

            <div className="form">
              <input
                type="text"
                placeholder="Enter Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Operator (e.g., Jio, Airtel)"
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter Amount (₹)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button onClick={handleRecharge}>Pay with Pi</button>
            </div>
          </>
        ) : (
          <button onClick={handleLogin}>Login with Pi</button>
        )}
      </header>
    </div>
  );
}

export default App;
