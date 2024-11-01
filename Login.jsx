import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; 
import { signInWithEmailAndPassword } from "firebase/auth"; 
import './Login.css'; // Ensure the file is named Login.css

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State to hold success or failure message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages

    try {
      await signInWithEmailAndPassword(auth, email, password); 
      setMessage('Logged in successfully!');
      console.log('Logged in successfully');
      setTimeout(() => {
        navigate('/');  // Navigate to the home page after a short delay
      }, 1500); // Optional delay before navigating
    } catch (error) {
      console.error('Error logging in', error);
      setMessage('Error: ' + error.message); // Set the error message
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        
        <span className="sign-up-link" onClick={() => navigate('/Signup')}>
          Don't have an account? Sign up
        </span>

        {message && <p className={`message ${message.startsWith('Error') ? 'error' : 'success'}`}>{message}</p>} {/* Display the message */}
      </form>
    </div>
  );
};

export default Login;
