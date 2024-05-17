// App.js
import React, { useState } from 'react';
import './SuccessSignUp.css';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [tokenID, setTokenID] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const generatedToken = 'DTP12345'; // This would be generated dynamically in a real application
    setTokenID(generatedToken);
    setIsRegistered(true);
  };

  return (
    <div className="App">
      {isRegistered ? (
        <div className="modal">
          <div className="modal-content">
            <h2>Successfully Registered!</h2>
            <p>Your Token ID is <strong>{tokenID}</strong></p>
            <button onClick={() => setIsRegistered(false)}>Continue</button>
          </div>
        </div>
      ) : (
        <SignUpForm onSubmit={handleSubmit} />
      )}
    </div>
  );
}

function SignUpForm({ onSubmit }) {
  return (
    <form className="sign-up-form" onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      <p>Already have an account? <a href="#">Log In</a></p>
      <div className="form-group">
        <input type="text" name="first" placeholder="First*" required />
        <input type="text" name="last" placeholder="Last*" required />
      </div>
      <div className="form-group">
        <input type="text" name="username" placeholder="Username*" required />
        <input type="email" name="email" placeholder="Email*" required />
        <input type="password" name="password" placeholder="Password*" required />
      </div>
      <div className="form-group">
        <label>
          <input type="checkbox" /> Show Password
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default App;
