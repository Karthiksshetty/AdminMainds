// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSendOtp = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // Simulate sending OTP
    setOtpSent(true);
    alert('OTP sent to your email!');
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6 || isNaN(otp)) {
      setError('Please enter a valid 6-digit OTP.');
      return;
    }
    setError('');
    // Simulate verifying OTP
    if (otp === '123456') {
      alert('Login successful!');
    } else {
      alert('Invalid OTP!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <form className="space-y-6">
          {!otpSent ? (
            <>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded border-gray-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="button"
                onClick={handleSendOtp}
                className="w-full px-4 py-2 font-bold text-white bg-gray-800 hover:bg-gray-600"
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">OTP</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded border-gray-300"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="w-full px-4 py-2 font-bold text-white bg-gray-800 hover:bg-gray-600"
              >
                Verify OTP
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;



