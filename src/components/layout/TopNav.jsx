import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, User, LogOut, Ticket, ShoppingCart, Menu, X } from 'lucide-react';
import { HeritageLogo } from '../common/HeritageLogo';
import { useAuth } from '../../context/AuthContext';
import { useBooking } from '../../context/BookingContext';
import './TopNav.css';

export const TopNav = () => {
  const { user, signOut } = useAuth();
  const { totalTicketCount } = useBooking();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/movies?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="main-site-header">
      <div className="container main-header-container">
        {/* Left: Official Heritage Cinemas Transparent Logo */}
        <Link to="/" className="site-logo-brand" onClick={() => setMobileMenuOpen(false)}>
          <HeritageLogo height={50} />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="center-nav-menu">
          <NavLink
            to="/movies"
            className={({ isActive }) => `header-nav-item ${isActive ? 'active' : ''}`}
          >
            Buy Tickets
          </NavLink>
          <NavLink
            to="/booking/snacks"
            className={({ isActive }) => `header-nav-item ${isActive ? 'active' : ''}`}
          >
            Food & Drinks
          </NavLink>
          <NavLink
            to="/movies?filter=now_showing"
            className={({ isActive }) => `header-nav-item ${isActive ? 'active' : ''}`}
          >
            The Cube
          </NavLink>

          {/* Search trigger icon / search input */}
          <div className="header-search-container">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="header-search-expanded">
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="header-search-field"
                  autoFocus
                />
                <button type="button" className="close-search-btn" onClick={() => setSearchOpen(false)}>
                  <X size={16} />
                </button>
              </form>
            ) : (
              <button
                type="button"
                className="header-search-icon-btn"
                onClick={() => setSearchOpen(true)}
                aria-label="Search movies"
              >
                <Search size={16} />
              </button>
            )}
          </div>
        </nav>

        {/* Right: Auth / Sign In & Shopping Cart */}
        <div className="right-header-actions">
          {user && user.isLoggedIn ? (
            <div className="user-profile-menu">
              <button
                className="header-signin-btn logged-in"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <User size={16} />
                <span>{user.name.split(' ')[0]}</span>
              </button>

              {userDropdownOpen && (
                <div className="user-dropdown-card card-surface">
                  <div className="dropdown-user-header">
                    <p className="dropdown-user-name">{user.name}</p>
                    <p className="dropdown-user-email">{user.email}</p>
                  </div>
                  <hr className="dropdown-divider" />
                  <Link
                    to="/my-bookings"
                    className="dropdown-item"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <Ticket size={16} />
                    <span>My Bookings</span>
                  </Link>
                  <button
                    className="dropdown-item logout-btn"
                    onClick={() => {
                      signOut();
                      setUserDropdownOpen(false);
                    }}
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signin" className="header-signin-btn">
              <User size={16} />
              <span>Sign In</span>
            </Link>
          )}

          {/* Cart Icon */}
          <Link to="/booking/summary" className="header-cart-btn" aria-label="Shopping Cart">
            <ShoppingCart size={18} />
            {totalTicketCount > 0 && <span className="cart-badge-pill">{totalTicketCount}</span>}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-header-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-menu-drawer">
          <Link to="/movies" onClick={() => setMobileMenuOpen(false)}>Buy Tickets</Link>
          <Link to="/booking/snacks" onClick={() => setMobileMenuOpen(false)}>Food & Drinks</Link>
          <Link to="/movies?filter=now_showing" onClick={() => setMobileMenuOpen(false)}>The Cube</Link>
          <Link to="/my-bookings" onClick={() => setMobileMenuOpen(false)}>My Bookings</Link>
          {user && user.isLoggedIn ? (
            <button className="mobile-logout-link" onClick={() => { signOut(); setMobileMenuOpen(false); }}>
              Sign Out ({user.name})
            </button>
          ) : (
            <Link to="/signin" onClick={() => setMobileMenuOpen(false)}>Sign In / Register</Link>
          )}
        </div>
      )}
    </header>
  );
};
