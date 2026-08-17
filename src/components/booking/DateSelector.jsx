import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import './BookingStepComponents.css';

export const DateSelector = () => {
  const { draft, setDateWithKey } = useBooking();
  const navigate = useNavigate();

  // 7-day schedule matching real cinema weekly blocks
  const dateOptions = [
    { label: 'Friday', dayName: 'FRI', dayNumber: '14', month: 'AUG', fullDate: 'Friday, Aug 14, 2026', dayKey: 'friday' },
    { label: 'Saturday', dayName: 'SAT', dayNumber: '15', month: 'AUG', fullDate: 'Saturday, Aug 15, 2026', dayKey: 'saturday' },
    { label: 'Sunday', dayName: 'SUN', dayNumber: '16', month: 'AUG', fullDate: 'Sunday, Aug 16, 2026', dayKey: 'sunday' },
    { label: 'Monday', dayName: 'MON', dayNumber: '17', month: 'AUG', fullDate: 'Monday, Aug 17, 2026', dayKey: 'monTue' },
    { label: 'Tuesday', dayName: 'TUE', dayNumber: '18', month: 'AUG', fullDate: 'Tuesday, Aug 18, 2026', dayKey: 'monTue' },
    { label: 'Wednesday', dayName: 'WED', dayNumber: '19', month: 'AUG', fullDate: 'Wednesday, Aug 19, 2026', dayKey: 'wedThu' },
    { label: 'Thursday', dayName: 'THU', dayNumber: '20', month: 'AUG', fullDate: 'Thursday, Aug 20, 2026', dayKey: 'wedThu' },
  ];

  const handleSelectDate = (item) => {
    setDateWithKey(item.fullDate, item.dayKey);
  };

  const handleProceed = () => {
    if (draft.date) {
      navigate('/booking/time');
    }
  };

  return (
    <div className="booking-step-content">
      <div className="step-header-area">
        <h2 className="step-main-title">Choose Screening Date</h2>
        <p className="step-subtitle">
          Viewing weekly schedule for <strong className="highlight-text">{draft.movie.title}</strong> at{' '}
          <strong className="highlight-text">{draft.location.name}</strong>
        </p>
      </div>

      <div className="dates-grid">
        {dateOptions.map((item) => {
          const isSelected = draft.date === item.fullDate;

          return (
            <div
              key={item.fullDate}
              className={`date-card card-surface ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectDate(item)}
            >
              <span className="date-tag-label">{item.label}</span>
              <span className="date-day-name">{item.dayName}</span>
              <span className="date-day-number">{item.dayNumber}</span>
              <span className="date-month-name">{item.month}</span>
            </div>
          );
        })}
      </div>

      <div className="step-action-footer">
        <button className="btn-secondary step-back-btn" onClick={() => navigate('/booking/location')}>
          <ArrowLeft size={18} />
          <span>Back to Location</span>
        </button>

        <button
          className="btn-primary step-continue-btn"
          disabled={!draft.date}
          onClick={handleProceed}
        >
          <span>Continue to Showtime</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
