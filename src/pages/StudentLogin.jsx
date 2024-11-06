import React, { useState } from 'react';
import '../styles/StudentLogin.css';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    // Implement logic for student login verification
    if (rollNumber === "12345" && password === "password") { // Placeholder check
      navigate('/student-dashboard'); // Redirect to student dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <input
        type="text"
        placeholder="Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleStudentLogin}>Login</button>
      <p>
        <button onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
      </p>
    </div>
  );
};

export default StudentLogin;
