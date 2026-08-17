import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import './BookingStepComponents.css';

export const TimeSelector = () => {
  const { draft, setTimeAndFormat } = useBooking();
  const navigate = useNavigate();

  const dayKey = draft.dayKey || 'friday';
  const movieShowtimes = draft.movie.showtimes ? (draft.movie.showtimes[dayKey] || []) : ['1:00PM', '3:00PM', '7:00PM'];

  const formats = [
    {
      format: 'Heritage Standard Screen',
      tag: 'STANDARD',
      description: 'Crystal-clear digital projection with Dolby Digital 7.1 surround sound'
    },
    {
      format: 'Heritage VIP Dolby Lounge',
      tag: 'DOLBY',
      description: 'Immersive Dolby Atmos spatial audio with luxury electric recliners'
    }
  ];

  const handleSelectTime = (timeStr, formatName) => {
    setTimeAndFormat(timeStr, formatName);
  };

  const handleProceed = () => {
    if (draft.time && draft.format) {
      navigate('/booking/tickets');
    }
  };

  return (
    <div className="booking-step-content">
      <div className="step-header-area">
        <h2 className="step-main-title">Select Show Time & Hall</h2>
        <p className="step-subtitle">
          Weekly schedule times for <strong className="highlight-text">{draft.movie.title}</strong> on{' '}
          <strong className="highlight-text">{draft.date}</strong> at{' '}
          <strong className="highlight-text">{draft.location.name}</strong>
        </p>
      </div>

      {movieShowtimes.length === 0 ? (
        <div className="empty-showtimes-alert card-surface">
          <AlertCircle size={28} className="empty-icon" />
          <h3 className="empty-title">No Showtimes Available on this Date</h3>
          <p className="empty-desc">
            "{draft.movie.title}" does not have regular public screenings scheduled on {draft.date}. Please pick an alternate date to see available showtimes.
          </p>
          <button className="btn-secondary" onClick={() => navigate('/booking/date')}>
            <Calendar size={16} />
            <span>Choose Another Date</span>
          </button>
        </div>
      ) : (
        <div className="format-showtimes-stack">
          {formats.map((fmt) => (
            <div key={fmt.format} className="format-experience-card card-surface">
              <div className="format-experience-header">
                <div className="format-title-group">
                  <span className="badge-format format-large-badge">{fmt.tag}</span>
                  <h3 className="format-name">{fmt.format}</h3>
                </div>
                <p className="format-desc">{fmt.description}</p>
              </div>

              <div className="times-pills-row">
                {movieShowtimes.map((timeStr) => {
                  const isSelected = draft.time === timeStr && draft.format === fmt.format;

                  return (
                    <button
                      key={timeStr}
                      type="button"
                      className={`time-pill-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelectTime(timeStr, fmt.format)}
                    >
                      <Clock size={14} />
                      <span>{timeStr}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="step-action-footer">
        <button className="btn-secondary step-back-btn" onClick={() => navigate('/booking/date')}>
          <ArrowLeft size={18} />
          <span>Back to Date</span>
        </button>

        <button
          className="btn-primary step-continue-btn"
          disabled={!draft.time || !draft.format || movieShowtimes.length === 0}
          onClick={handleProceed}
        >
          <span>Continue to Select Tickets</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
