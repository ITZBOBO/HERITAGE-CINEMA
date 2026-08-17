import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Film, Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './AuthForms.css';

export const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please enter both email and password.');
      return;
    }

    signIn({
      email: formData.email,
      password: formData.password
    });

    navigate('/my-bookings');
  };

  return (
    <div className="auth-form-card card-surface">
      <div className="auth-form-header">
        <div className="auth-logo-badge">
          <Film size={28} />
        </div>
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to access your booked tickets, preferences, and fast checkout.</p>
      </div>

      {error && <div className="auth-error-banner">{error}</div>}

      <form onSubmit={handleSubmit} className="auth-actual-form">
        <div className="form-group">
          <label className="form-label" htmlFor="signin-email">Email Address</label>
          <div className="input-with-icon">
            <Mail size={18} className="field-icon" />
            <input
              id="signin-email"
              type="email"
              name="email"
              placeholder="e.g. alex.vance@cinema.heritage"
              value={formData.email}
              onChange={handleChange}
              className="input-control field-input"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="label-with-action">
            <label className="form-label" htmlFor="signin-password">Password</label>
            <a href="#forgot" className="forgot-link" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to email.'); }}>Forgot?</a>
          </div>
          <div className="input-with-icon">
            <Lock size={18} className="field-icon" />
            <input
              id="signin-password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="input-control field-input"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn-primary auth-submit-btn">
          <span>Sign In</span>
          <ArrowRight size={18} />
        </button>
      </form>

      <div className="auth-demo-hint">
        <span>💡 Demo: Use any email and password to sign in instantly.</span>
      </div>

      <div className="auth-footer-note">
        <span>Don't have an account?</span>
        <Link to="/signup" className="auth-switch-link">Sign Up</Link>
      </div>
    </div>
  );
};
