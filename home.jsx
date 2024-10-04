import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header>
        <h1>Harsh@Deakin</h1>
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="button-container">
          <button className="post-button" onClick={() => navigate('/post')}>Post</button>
          <button className="login-button" onClick={() => navigate('/login')}>Login</button>
        </div>
      </header>
    </div>
  );
};

export default Home;
