import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film, Send, CheckCircle2 } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const [newsletterData, setNewsletterData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newsletterData.email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterData({ firstName: '', lastName: '', email: '' });
      }, 2000);
    }
  };

  return (
    <footer className="filmhouse-footer">
      <div className="container footer-layout-container">
        {/* 4-Column Layout */}
        <div className="footer-columns-grid">
          {/* Col 1: Cinema Solution By Brand Logo */}
          <div className="footer-col-solution">
            <span className="solution-label">Cinema Solution By</span>
            <div className="cine-sync-badge">
              <div className="cine-dot" />
              <span className="cine-brand-name">HERITAGE <span className="cine-accent">CINEMAS</span></span>
            </div>
            <p className="footer-branch-note">
              Abule-Egba, Lagos & Mowe, Ogun State
            </p>
          </div>

          {/* Col 2: Newsletter Subscription & Mobile App */}
          <div className="footer-col-newsletter">
            <h4 className="newsletter-heading">
              Subscribe to our newsletter for fresh updates and special savings.
            </h4>

            {subscribed ? (
              <div className="newsletter-success-box">
                <CheckCircle2 size={16} className="success-icon" />
                <span>Thank you for subscribing! Check your inbox for exclusive cinema discounts.</span>
              </div>
            ) : (
              <form className="newsletter-signup-form" onSubmit={handleSubmit}>
                <div className="form-name-row">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={newsletterData.firstName}
                    onChange={(e) => setNewsletterData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="newsletter-input"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={newsletterData.lastName}
                    onChange={(e) => setNewsletterData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="newsletter-input"
                    required
                  />
                </div>

                <div className="form-email-row">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={newsletterData.email}
                    onChange={(e) => setNewsletterData(prev => ({ ...prev, email: e.target.value }))}
                    className="newsletter-input email-input"
                    required
                  />
                  <button type="submit" className="newsletter-submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            )}

            {/* Mobile App Downloads */}
            <div className="mobile-app-download-section">
              <span className="mobile-app-label">Switch to our mobile experience</span>
              <div className="app-badges-row">
                <button
                  type="button"
                  className="app-badge-btn"
                  onClick={() => alert('Heritage Cinemas App on Google Play Store.')}
                >
                  <div className="app-icon-play">▶</div>
                  <div className="app-text-group">
                    <span className="app-sub-text">GET IT ON</span>
                    <span className="app-main-text">Google Play</span>
                  </div>
                </button>

                <button
                  type="button"
                  className="app-badge-btn"
                  onClick={() => alert('Heritage Cinemas App on Apple App Store.')}
                >
                  <div className="app-icon-apple"></div>
                  <div className="app-text-group">
                    <span className="app-sub-text">Download on the</span>
                    <span className="app-main-text">App Store</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links Column 1 */}
          <div className="footer-col-nav">
            <ul className="footer-vertical-links">
              <li><Link to="/movies">About us</Link></li>
              <li><Link to="/booking/tickets">Ticket Prices</Link></li>
              <li><Link to="/movies?filter=now_showing">Experiences</Link></li>
              <li><Link to="/">General</Link></li>
              <li><a href="#terms">Terms and Conditions</a></li>
              <li><Link to="/my-bookings">Heritage+</Link></li>
            </ul>
          </div>

          {/* Col 4: Navigation Links Column 2 */}
          <div className="footer-col-nav">
            <ul className="footer-vertical-links">
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#privacy">Privacy policy</a></li>
              <li><a href="#refund">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-copyright">
          <p>© {new Date().getFullYear()} Heritage Cinemas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
