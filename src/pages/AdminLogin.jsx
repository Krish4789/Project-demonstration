import React, { useState } from 'react';

const AdminLogin = () => {
  // State for username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle login on form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Clear any previous error message
    setErrorMessage('');

    try {
      // Make a POST request to the backend API for admin login
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
        },
        body: JSON.stringify({ username, password }), // Send the username and password in the request body
      });

      // Parse the response as JSON
      const result = await response.json();

      // Check if login was successful
      if (result.success) {
        alert('Admin logged in successfully');
        // Redirect to the admin dashboard page after successful login
        window.location.href = '/admin-dashboard'; // Update this to the correct route
      } else {
        // If login failed, show the error message from the backend
        setErrorMessage(result.message || 'Invalid credentials, please try again.');
      }
    } catch (error) {
      // Handle any errors that occur during the fetch request
      console.error('Error:', error);
      setErrorMessage('An error occurred while trying to login. Please try again.');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state on input change
          placeholder="Admin ID"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} {/* Display error message */}
    </div>
  );
};

export default AdminLogin;
