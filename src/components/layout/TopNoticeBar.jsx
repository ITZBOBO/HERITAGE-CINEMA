import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, MapPin, Gift, Utensils, Ticket } from 'lucide-react';
import { LOCATIONS } from '../../data/cinemaData';
import { useBooking } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';
import './TopNoticeBar.css';

export const TopNoticeBar = () => {
  const { user } = useAuth();
  const { draft, setLocation } = useBooking();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelectLocation = (loc) => {
    setLocation(loc);
    setDropdownOpen(false);
  };

  return (
    <div className="top-utility-system">
      {/* 1. Top Blue/Purple Notice Bar */}
      <div className="top-benefit-bar">
        {user && user.isLoggedIn ? (
          <span>Welcome back, <strong>{user.name}</strong>! Enjoy exclusive member discounts & passes.</span>
        ) : (
          <Link to="/signin" className="benefit-link">
            <span>Login to enjoy exclusive benefits</span>
          </Link>
        )}
      </div>

      {/* 2. Sub-Nav Location & Quick Action Bar */}
      <div className="sub-utility-bar">
        <div className="container sub-utility-container">
          {/* Location Selector Dropdown */}
          <div className="location-picker-wrap">
            <button
              type="button"
              className="location-dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              <MapPin size={14} className="location-icon" />
              <span className="location-btn-text">
                {draft.location ? draft.location.name.toUpperCase() : 'PLEASE SELECT A LOCATION:'}
              </span>
              <ChevronDown size={14} className={`chevron-icon ${dropdownOpen ? 'rotated' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="location-dropdown-menu card-surface">
                <div className="dropdown-header-title">Select Cinema Location:</div>
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    className={`location-option-item ${draft.location?.id === loc.id ? 'active' : ''}`}
                    onClick={() => handleSelectLocation(loc)}
                  >
                    <div className="loc-opt-name">{loc.name}</div>
                    <div className="loc-opt-address">{loc.address}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="utility-quick-links">
            <button
              type="button"
              className="quick-link-btn"
              onClick={() => alert('Gift Cards feature is available at the cinema box office!')}
            >
              <Gift size={13} />
              <span>Gift Cards</span>
            </button>
            <Link to="/booking/snacks" className="quick-link-btn">
              <Utensils size={13} />
              <span>Food Delivery</span>
            </Link>
            <Link to="/my-bookings" className="quick-link-btn">
              <Ticket size={13} />
              <span>My Tickets</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
