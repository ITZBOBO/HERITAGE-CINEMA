import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Ticket, Utensils, AlertTriangle, CheckCircle, RefreshCw, XCircle } from 'lucide-react';
import { useBooking, formatCurrency } from '../../context/BookingContext';
import './BookingCard.css';

export const BookingCard = ({ booking }) => {
  const { cancelBooking, rescheduleBooking } = useBooking();
  const [rescheduleModalOpen, setRescheduleModalOpen] = useState(false);
  const [cancelConfirmOpen, setCancelConfirmOpen] = useState(false);
  const [newDate, setNewDate] = useState('Saturday, Aug 22, 2026');
  const [newTime, setNewTime] = useState('7:00PM');

  const isCancelled = booking.status === 'Cancelled';

  const handleConfirmCancel = () => {
    cancelBooking(booking.bookingId);
    setCancelConfirmOpen(false);
  };

  const handleConfirmReschedule = (e) => {
    e.preventDefault();
    rescheduleBooking(booking.bookingId, newDate, newTime);
    setRescheduleModalOpen(false);
  };

  return (
    <div className={`user-booking-card card-surface ${isCancelled ? 'cancelled-card' : ''}`}>
      <div className="booking-card-top">
        <div className="booking-poster-wrap">
          <img src={booking.posterImage} alt={booking.movieTitle} className="booking-poster-img" />
        </div>

        <div className="booking-details-main">
          <div className="booking-header-row">
            <div className="booking-id-tag">
              <span>Ref: {booking.bookingId}</span>
            </div>
            <span className={`booking-status-badge status-${booking.status.toLowerCase()}`}>
              {booking.status === 'Confirmed' && <CheckCircle size={12} />}
              {booking.status === 'Rescheduled' && <RefreshCw size={12} />}
              {booking.status === 'Cancelled' && <XCircle size={12} />}
              {booking.status}
            </span>
          </div>

          <h3 className="booking-movie-name">{booking.movieTitle}</h3>
          
          <div className="booking-info-grid">
            <div className="info-cell">
              <MapPin size={15} className="cell-icon" />
              <span>{booking.location}</span>
            </div>
            <div className="info-cell">
              <Calendar size={15} className="cell-icon" />
              <span>{booking.date}</span>
            </div>
            <div className="info-cell">
              <Clock size={15} className="cell-icon" />
              <span>{booking.time} • <strong className="format-strong">{booking.format}</strong></span>
            </div>
          </div>

          {/* Tickets & Snacks Lists */}
          <div className="booking-items-summary">
            <div className="items-summary-group">
              <Ticket size={14} className="items-icon" />
              <div className="items-text">
                {booking.tickets && booking.tickets.map((t, idx) => (
                  <span key={idx} className="item-pill">
                    {t.count}x {t.name}
                  </span>
                ))}
              </div>
            </div>

            {booking.snacks && booking.snacks.length > 0 && (
              <div className="items-summary-group">
                <Utensils size={14} className="items-icon" />
                <div className="items-text">
                  {booking.snacks.map((s, idx) => (
                    <span key={idx} className="item-pill snack-pill">
                      {s.count}x {s.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="booking-card-footer">
        <div className="booking-total-paid">
          <span className="paid-label">Total Amount Paid</span>
          <span className="paid-amount">{formatCurrency(booking.totalPaid)}</span>
        </div>

        {!isCancelled && (
          <div className="booking-actions-group">
            <button
              className="btn-secondary booking-action-btn"
              onClick={() => setRescheduleModalOpen(true)}
            >
              <RefreshCw size={14} />
              <span>Reschedule</span>
            </button>
            <button
              className="btn-outline booking-cancel-btn"
              onClick={() => setCancelConfirmOpen(true)}
            >
              <XCircle size={14} />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>

      {/* Reschedule Modal */}
      {rescheduleModalOpen && (
        <div className="booking-modal-backdrop" onClick={() => setRescheduleModalOpen(false)}>
          <div className="booking-modal-box card-surface" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Reschedule Showtime</h3>
            <p className="modal-desc">Select a new date and time for <strong>{booking.movieTitle}</strong></p>

            <form onSubmit={handleConfirmReschedule} className="modal-form">
              <div className="form-group">
                <label className="form-label">New Screening Date</label>
                <select
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="input-control"
                >
                  <option value="Friday, Aug 21, 2026">Friday, Aug 21, 2026</option>
                  <option value="Saturday, Aug 22, 2026">Saturday, Aug 22, 2026</option>
                  <option value="Sunday, Aug 23, 2026">Sunday, Aug 23, 2026</option>
                  <option value="Monday, Aug 24, 2026">Monday, Aug 24, 2026</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">New Screening Time</label>
                <select
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="input-control"
                >
                  <option value="1:00PM">1:00PM (Afternoon)</option>
                  <option value="3:00PM">3:00PM (Matinee)</option>
                  <option value="5:00PM">5:00PM (Evening)</option>
                  <option value="7:00PM">7:00PM (Prime Evening)</option>
                </select>
              </div>

              <div className="modal-buttons">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setRescheduleModalOpen(false)}
                >
                  Close
                </button>
                <button type="submit" className="btn-primary">
                  Confirm Reschedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Cancel Confirmation Modal */}
      {cancelConfirmOpen && (
        <div className="booking-modal-backdrop" onClick={() => setCancelConfirmOpen(false)}>
          <div className="booking-modal-box card-surface" onClick={(e) => e.stopPropagation()}>
            <div className="modal-alert-icon">
              <AlertTriangle size={32} />
            </div>
            <h3 className="modal-title">Cancel Reservation?</h3>
            <p className="modal-desc">
              Are you sure you want to cancel booking <strong>{booking.bookingId}</strong>?
              A full refund of <strong>{formatCurrency(booking.totalPaid)}</strong> will be credited back to your original bank card / account.
            </p>

            <div className="modal-buttons">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setCancelConfirmOpen(false)}
              >
                Keep Booking
              </button>
              <button
                type="button"
                className="btn-primary cancel-confirm-btn"
                onClick={handleConfirmCancel}
              >
                Yes, Cancel Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
