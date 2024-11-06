import React from 'react';
import '../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Gate Pass</h1>
      <button onClick={() => navigate('/admin-login')}>Login Administration</button>
      <button onClick={() => navigate('/student-login')}>Login Student</button>
    </div>
  );
};

export default HomePage;
