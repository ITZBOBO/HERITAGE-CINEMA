import React from 'react';
import { MapPin, Calendar, Clock, Ticket, Utensils, ShieldCheck } from 'lucide-react';
import { TICKET_TYPES, SNACKS } from '../../data/cinemaData';
import { useBooking, formatCurrency } from '../../context/BookingContext';
import './OrderSummarySidebar.css';

export const OrderSummarySidebar = ({ isSummaryPage = false, onProceedToPayment = null }) => {
  const { draft, totalTicketCount, ticketsSubtotal, snacksSubtotal, bookingFee, grandTotal } = useBooking();

  const selectedTickets = Object.entries(draft.tickets || {})
    .filter(([_, count]) => count > 0)
    .map(([typeId, count]) => {
      const item = TICKET_TYPES.find(t => t.id === typeId);
      return {
        id: typeId,
        name: item ? item.name : typeId,
        price: item ? item.price : 0,
        count,
        subtotal: (item ? item.price : 0) * count
      };
    });

  const selectedSnacks = Object.entries(draft.snacks || {})
    .filter(([_, count]) => count > 0)
    .map(([snackId, count]) => {
      const item = SNACKS.find(s => s.id === snackId);
      return {
        id: snackId,
        name: item ? item.name : snackId,
        price: item ? item.price : 0,
        count,
        subtotal: (item ? item.price : 0) * count
      };
    });

  return (
    <aside className="order-summary-sidebar card-surface">
      <h3 className="summary-sidebar-title">Order Summary</h3>

      {/* Movie Info Header */}
      <div className="summary-movie-header">
        <img
          src={draft.movie.posterImage}
          alt={draft.movie.title}
          className="summary-movie-poster"
        />
        <div className="summary-movie-details">
          <span className="badge-format summary-format-tag">{draft.format}</span>
          <h4 className="summary-movie-name">{draft.movie.title}</h4>
          <span className="summary-movie-meta">{draft.movie.ageRating} • {draft.movie.runtime}</span>
        </div>
      </div>

      {/* Booking Details (Location, Date, Time) */}
      <div className="summary-meta-block">
        <div className="summary-meta-row">
          <MapPin size={15} className="summary-icon" />
          <span>{draft.location.name}</span>
        </div>
        <div className="summary-meta-row">
          <Calendar size={15} className="summary-icon" />
          <span>{draft.date}</span>
        </div>
        <div className="summary-meta-row">
          <Clock size={15} className="summary-icon" />
          <span>{draft.time} ({draft.format})</span>
        </div>
      </div>

      <hr className="summary-divider" />

      {/* Itemized Tickets List */}
      <div className="summary-section">
        <div className="summary-section-heading">
          <Ticket size={16} />
          <span>Tickets ({totalTicketCount})</span>
        </div>
        {selectedTickets.length === 0 ? (
          <p className="summary-empty-text">No tickets selected yet</p>
        ) : (
          <div className="summary-items-list">
            {selectedTickets.map((t) => (
              <div key={t.id} className="summary-item-row">
                <span className="item-name">{t.count}x {t.name}</span>
                <span className="item-price">{formatCurrency(t.subtotal)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Itemized Snacks List */}
      {selectedSnacks.length > 0 && (
        <div className="summary-section">
          <div className="summary-section-heading">
            <Utensils size={16} />
            <span>Concessions</span>
          </div>
          <div className="summary-items-list">
            {selectedSnacks.map((s) => (
              <div key={s.id} className="summary-item-row">
                <span className="item-name">{s.count}x {s.name}</span>
                <span className="item-price">{formatCurrency(s.subtotal)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <hr className="summary-divider" />

      {/* Pricing Breakdown */}
      <div className="summary-breakdown-block">
        <div className="breakdown-row">
          <span>Tickets Subtotal</span>
          <span>{formatCurrency(ticketsSubtotal)}</span>
        </div>
        {snacksSubtotal > 0 && (
          <div className="breakdown-row">
            <span>Concessions Subtotal</span>
            <span>{formatCurrency(snacksSubtotal)}</span>
          </div>
        )}
        <div className="breakdown-row">
          <span>Online Booking Fee</span>
          <span>{formatCurrency(bookingFee)}</span>
        </div>
        
        <div className="breakdown-total-row">
          <span className="total-label">Total Due</span>
          <span className="total-amount">{formatCurrency(grandTotal)}</span>
        </div>
      </div>

      <div className="summary-guarantee-badge">
        <ShieldCheck size={16} className="guarantee-icon" />
        <span>100% Encrypted & Secure Checkout</span>
      </div>

      {isSummaryPage && onProceedToPayment && (
        <button
          className="btn-primary summary-proceed-btn"
          disabled={totalTicketCount === 0}
          onClick={onProceedToPayment}
        >
          <span>Complete Payment ({formatCurrency(grandTotal)})</span>
        </button>
      )}
    </aside>
  );
};
