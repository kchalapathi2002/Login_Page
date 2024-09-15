import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Welcome.css'

function Welcome() {
  const location = useLocation();
  const { name } = location.state || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="welcome">
        <button className="logout" onClick={handleLogout} style={{ position: 'absolute', top: 10, right: 10 }}>
            Logout
        </button>
        <h2>Welcome, {name}!</h2>
    </div>
  );
}

export default Welcome;
