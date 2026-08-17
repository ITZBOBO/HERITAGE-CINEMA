import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { HeritageLogo } from '../common/HeritageLogo';
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
  const location = useLocation();

  const redirectPath = location.state?.from || '/movies';

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
      setError('Please enter your email and password.');
      return;
    }

    const success = signIn(formData.email, formData.password);
    if (success) {
      navigate(redirectPath);
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="auth-form-card card-surface">
      <div className="auth-form-header">
        <Link to="/" className="auth-logo-wrapper">
          <HeritageLogo height={42} />
        </Link>
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to access your Heritage Cinema passes, rewards, and booking history.</p>
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
              placeholder="e.g. john@example.com"
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
            <a href="#forgot" className="forgot-pass-link" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to email!'); }}>
              Forgot password?
            </a>
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

      <div className="auth-footer-note">
        <span>Don't have an account?</span>
        <Link to="/signup" className="auth-switch-link">Create Account</Link>
      </div>
    </div>
  );
};
