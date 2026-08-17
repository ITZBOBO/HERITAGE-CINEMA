import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, ArrowRight } from 'lucide-react';
import { HeritageLogo } from '../common/HeritageLogo';
import { useAuth } from '../../context/AuthContext';
import './AuthForms.css';

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { signUp } = useAuth();
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

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    signUp({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    });

    navigate('/movies');
  };

  return (
    <div className="auth-form-card card-surface">
      <div className="auth-form-header">
        <Link to="/" className="auth-logo-wrapper">
          <HeritageLogo height={60} />
        </Link>
        <h1 className="auth-title">Join Heritage Cinemas</h1>
        <p className="auth-subtitle">Create an account to book tickets, save favorites, and manage your cinema passes.</p>
      </div>

      {error && <div className="auth-error-banner">{error}</div>}

      <form onSubmit={handleSubmit} className="auth-actual-form">
        <div className="form-group">
          <label className="form-label" htmlFor="signup-name">Full Name</label>
          <div className="input-with-icon">
            <User size={18} className="field-icon" />
            <input
              id="signup-name"
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
              className="input-control field-input"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signup-email">Email Address</label>
          <div className="input-with-icon">
            <Mail size={18} className="field-icon" />
            <input
              id="signup-email"
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
          <label className="form-label" htmlFor="signup-phone">Phone Number (Optional)</label>
          <div className="input-with-icon">
            <Phone size={18} className="field-icon" />
            <input
              id="signup-phone"
              type="tel"
              name="phone"
              placeholder="+234 800 000 0000"
              value={formData.phone}
              onChange={handleChange}
              className="input-control field-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signup-password">Password</label>
          <div className="input-with-icon">
            <Lock size={18} className="field-icon" />
            <input
              id="signup-password"
              type="password"
              name="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleChange}
              className="input-control field-input"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signup-confirm-password">Confirm Password</label>
          <div className="input-with-icon">
            <Lock size={18} className="field-icon" />
            <input
              id="signup-confirm-password"
              type="password"
              name="confirmPassword"
              placeholder="Repeat your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-control field-input"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn-primary auth-submit-btn">
          <span>Create Account</span>
          <ArrowRight size={18} />
        </button>
      </form>

      <div className="auth-footer-note">
        <span>Already have an account?</span>
        <Link to="/signin" className="auth-switch-link">Sign In</Link>
      </div>
    </div>
  );
};
