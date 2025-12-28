import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    // Focus email input on mount
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    // If already authenticated, go to admin
    if (isAuthenticated) navigate('/admin', { replace: true });
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = 'admin@gmail.com';
    const validPassword = 'admin1234';

    if (email.trim() === validEmail && password === validPassword) {
      alert('Login success');
      login();
      navigate('/admin', { replace: true });
    } else {
      alert('Wrong email or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Email
          <input
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}