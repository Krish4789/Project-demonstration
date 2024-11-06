import React, { useState } from 'react';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleSendOtp = () => {
    // Logic to send OTP to the email
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Logic to verify OTP
    setIsOtpVerified(true);
  };

  const handleChangePassword = () => {
    // Logic to change the password
    alert("Password changed successfully!");
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      { !isOtpSent ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </>
      ) : !isOtpVerified ? (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      ) : (
        <>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handleChangePassword}>Change Password</button>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
