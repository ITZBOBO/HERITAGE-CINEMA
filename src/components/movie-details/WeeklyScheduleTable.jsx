import React from 'react';
import { Calendar, Clock, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import './WeeklyScheduleTable.css';

export const WeeklyScheduleTable = ({ movie }) => {
  const { startBookingForMovie, setDateWithKey } = useBooking();
  const navigate = useNavigate();

  if (!movie.showtimes) return null;

  const daysConfig = [
    { label: 'Friday', fullDate: 'Friday, Aug 14, 2026', key: 'friday' },
    { label: 'Saturday', fullDate: 'Saturday, Aug 15, 2026', key: 'saturday' },
    { label: 'Sunday', fullDate: 'Sunday, Aug 16, 2026', key: 'sunday' },
    { label: 'Mon – Tue', fullDate: 'Monday, Aug 17, 2026', key: 'monTue' },
    { label: 'Wed – Thu', fullDate: 'Wednesday, Aug 19, 2026', key: 'wedThu' }
  ];

  const handleBookSlot = (fullDate, dayKey, timeStr) => {
    startBookingForMovie(movie);
    setDateWithKey(fullDate, dayKey);
    navigate('/booking/location');
  };

  return (
    <section className="details-section-block weekly-schedule-block">
      <div className="schedule-header-wrap">
        <h2 className="details-section-heading">Weekly Screening Schedule</h2>
        <span className="schedule-badge">14th Aug – 20th Aug 2026</span>
      </div>

      <div className="schedule-table-wrap card-surface">
        <div className="schedule-table-grid">
          {daysConfig.map((day) => {
            const times = movie.showtimes[day.key] || [];

            return (
              <div key={day.key} className="schedule-day-column">
                <div className="schedule-day-header">
                  <span className="day-name">{day.label}</span>
                </div>
                <div className="schedule-day-times">
                  {times.length > 0 ? (
                    times.map((t) => (
                      <button
                        key={t}
                        className="slot-time-btn"
                        onClick={() => handleBookSlot(day.fullDate, day.key, t)}
                        title={`Book for ${day.label} at ${t}`}
                      >
                        <Clock size={12} />
                        <span>{t}</span>
                      </button>
                    ))
                  ) : (
                    <span className="no-show-text">No screening</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
