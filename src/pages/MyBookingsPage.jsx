import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Ticket, CheckCircle2, Film, ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { BookingCard } from '../components/bookings/BookingCard';
import './MyBookingsPage.css';

export const MyBookingsPage = () => {
  const { bookingsHistory } = useBooking();
  const location = useLocation();
  const justBookedId = location.state?.justBookedId;

  const [activeTab, setActiveTab] = useState('all');

  const filteredBookings = bookingsHistory.filter(b => {
    if (activeTab === 'upcoming') {
      return b.status === 'Confirmed' || b.status === 'Rescheduled';
    }
    if (activeTab === 'cancelled') {
      return b.status === 'Cancelled';
    }
    return true;
  });

  return (
    <div className="my-bookings-page-wrap fade-in">
      <div className="container">
        {/* Just Booked Success Banner */}
        {justBookedId && (
          <div className="booking-success-banner card-surface">
            <div className="banner-icon-wrap">
              <CheckCircle2 size={28} className="banner-icon" />
            </div>
            <div className="banner-text-wrap">
              <h3 className="banner-title">Reservation Confirmed!</h3>
              <p className="banner-desc">
                Your ticket pass <strong>{justBookedId}</strong> is confirmed. A receipt and digital ticket pass has been emailed to your account.
              </p>
            </div>
          </div>
        )}

        {/* Page Header */}
        <div className="my-bookings-header">
          <div className="header-text-group">
            <h1 className="my-bookings-title">My Bookings</h1>
            <p className="my-bookings-subtitle">
              Manage your upcoming cinema reservations, showtimes, and digital tickets
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="bookings-filter-tabs">
            <button
              className={`booking-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All ({bookingsHistory.length})
            </button>
            <button
              className={`booking-tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming ({bookingsHistory.filter(b => b.status !== 'Cancelled').length})
            </button>
            <button
              className={`booking-tab-btn ${activeTab === 'cancelled' ? 'active' : ''}`}
              onClick={() => setActiveTab('cancelled')}
            >
              Cancelled ({bookingsHistory.filter(b => b.status === 'Cancelled').length})
            </button>
          </div>
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <div className="no-bookings-card card-surface">
            <Ticket size={54} className="no-bookings-icon" />
            <h3 className="no-bookings-title">No Bookings Found</h3>
            <p className="no-bookings-desc">
              You don't have any bookings matching this filter. Explore our latest blockbuster releases and book your seat now.
            </p>
            <Link to="/movies" className="btn-primary no-bookings-cta">
              <Film size={16} />
              <span>Explore Movies & Showtimes</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="bookings-stack">
            {filteredBookings.map((b) => (
              <BookingCard key={b.bookingId} booking={b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
