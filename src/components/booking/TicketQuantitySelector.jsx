import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Ticket, Info, ArrowRight, ArrowLeft } from 'lucide-react';
import { TICKET_TYPES } from '../../data/cinemaData';
import { useBooking, formatCurrency } from '../../context/BookingContext';
import './BookingStepComponents.css';

export const TicketQuantitySelector = () => {
  const { draft, updateTicketQuantity, totalTicketCount } = useBooking();
  const navigate = useNavigate();

  const handleProceed = () => {
    if (totalTicketCount > 0) {
      navigate('/booking/snacks');
    }
  };

  return (
    <div className="booking-step-content">
      <div className="step-header-area">
        <h2 className="step-main-title">Select Ticket Quantities</h2>
        <p className="step-subtitle">
          Choose ticket types for <strong className="highlight-text">{draft.movie.title}</strong> •{' '}
          <span className="badge-format">{draft.format}</span>
        </p>
      </div>

      <div className="ticket-types-list">
        {TICKET_TYPES.map((type) => {
          const count = draft.tickets[type.id] || 0;

          return (
            <div key={type.id} className="ticket-type-card card-surface">
              <div className="ticket-type-info">
                <div className="ticket-title-row">
                  <Ticket size={18} className="ticket-icon" />
                  <h4 className="ticket-name">{type.name}</h4>
                </div>
                <p className="ticket-desc">{type.description}</p>
                <span className="ticket-price-tag">{formatCurrency(type.price)} each</span>
              </div>

              <div className="stepper-counter-controls">
                <button
                  type="button"
                  className="counter-btn minus-btn"
                  onClick={() => updateTicketQuantity(type.id, -1)}
                  disabled={count === 0}
                  aria-label={`Decrease ${type.name}`}
                >
                  <Minus size={16} />
                </button>
                <span className="counter-value">{count}</span>
                <button
                  type="button"
                  className="counter-btn plus-btn"
                  onClick={() => updateTicketQuantity(type.id, 1)}
                  aria-label={`Increase ${type.name}`}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ticket-info-alert card-surface">
        <Info size={18} className="info-icon" />
        <p>
          Ticket prices include applicable Lagos State entertainment taxes. Online reservation fee is ₦500 per ticket.
        </p>
      </div>

      <div className="step-action-footer">
        <button className="btn-secondary step-back-btn" onClick={() => navigate('/booking/time')}>
          <ArrowLeft size={18} />
          <span>Back to Showtime</span>
        </button>

        <button
          className="btn-primary step-continue-btn"
          disabled={totalTicketCount === 0}
          onClick={handleProceed}
        >
          <span>Continue to Snacks & Combos ({totalTicketCount} {totalTicketCount === 1 ? 'Ticket' : 'Tickets'})</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
