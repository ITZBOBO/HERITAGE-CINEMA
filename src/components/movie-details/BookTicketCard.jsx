import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Ticket, CheckCircle2 } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import './MovieDetailsComponents.css';

export const BookTicketCard = ({ movie }) => {
  const { startBookingForMovie } = useBooking();
  const navigate = useNavigate();

  const handleStartBooking = () => {
    startBookingForMovie(movie);
    navigate('/booking/location');
  };

  const isComingSoon = movie.status === 'coming_soon';

  return (
    <div className="book-ticket-sidebar-card card-surface">
      <div className="book-card-header">
        <span className="book-card-badge">
          {isComingSoon ? 'Coming Soon' : 'Now Showing'}
        </span>
        <div className="book-price-row">
          <span className="price-from-label">Tickets from</span>
          <span className="price-value">₦3,000</span>
        </div>
      </div>

      <div className="book-card-perks">
        <div className="perk-item">
          <CheckCircle2 size={16} className="perk-icon" />
          <span>Dolby 7.1 & VIP Lounge halls in Lagos & Mowe</span>
        </div>
        <div className="perk-item">
          <CheckCircle2 size={16} className="perk-icon" />
          <span>Instant seat & e-ticket confirmation</span>
        </div>
        <div className="perk-item">
          <CheckCircle2 size={16} className="perk-icon" />
          <span>Free cancellation up to 2 hours before showtime</span>
        </div>
      </div>

      {isComingSoon ? (
        <button
          className="btn-secondary book-action-btn"
          onClick={() => alert(`We will notify you when advance tickets for "${movie.title}" go on sale!`)}
        >
          <span>Remind Me On Release</span>
        </button>
      ) : (
        <button className="btn-primary book-action-btn" onClick={handleStartBooking}>
          <Ticket size={18} />
          <span>Book Tickets Now</span>
        </button>
      )}

      <p className="book-guarantee-note">
        Weekly screening schedules running at Abule-Egba (Lagos) & Mowe (Ogun State).
      </p>
    </div>
  );
};
