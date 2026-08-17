import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { MOVIES } from '../../data/cinemaData';
import { useBooking } from '../../context/BookingContext';
import './HomeScheduleMatrix.css';

export const HomeScheduleMatrix = () => {
  const { startBookingForMovie, setDateWithKey } = useBooking();
  const navigate = useNavigate();

  const handleBookSlot = (movie, fullDate, dayKey) => {
    startBookingForMovie(movie);
    setDateWithKey(fullDate, dayKey);
    navigate('/booking/location');
  };

  const scheduleMovies = MOVIES.filter(m => m.status === 'now_showing');

  return (
    <section className="home-schedule-section">
      <div className="container">
        {/* Banner Header matching Flyer */}
        <div className="flyer-header-banner">
          <div className="flyer-badge-row">
            <span className="flyer-pill-badge">HERITAGE CINEMAS</span>
            <span className="flyer-location-badge">
              <MapPin size={12} /> ABULE - EGBA • MOWE
            </span>
          </div>

          <div className="flyer-title-row">
            <h2 className="flyer-main-title">14th August 2026 – 20th August 2026</h2>
            <div className="flyer-schedule-stamp">MOVIES SCHEDULE</div>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="flyer-table-card card-surface">
          <div className="flyer-table-scroll">
            <table className="flyer-schedule-table">
              <thead>
                <tr>
                  <th className="th-movie">MOVIES</th>
                  <th className="th-duration">DURATION</th>
                  <th className="th-day">FRIDAY</th>
                  <th className="th-day">SATURDAY</th>
                  <th className="th-day">SUNDAY</th>
                  <th className="th-day">MON – TUE</th>
                  <th className="th-day">WED – THUR</th>
                </tr>
              </thead>
              <tbody>
                {scheduleMovies.map((movie) => {
                  const s = movie.showtimes || {};
                  return (
                    <tr key={movie.id} className="flyer-table-row">
                      <td className="td-movie">
                        <span className="row-movie-name">{movie.shortTitle || movie.title}</span>
                      </td>
                      <td className="td-duration">
                        <span className="duration-tag">{movie.runtimeMinutes || 120} MIN</span>
                      </td>
                      <td className="td-slots">
                        {s.friday && s.friday.length > 0 ? (
                          s.friday.map(t => (
                            <button
                              key={t}
                              className="flyer-slot-btn"
                              onClick={() => handleBookSlot(movie, 'Friday, Aug 14, 2026', 'friday')}
                            >
                              {t}
                            </button>
                          ))
                        ) : (
                          <span className="no-slot">-</span>
                        )}
                      </td>
                      <td className="td-slots">
                        {s.saturday && s.saturday.length > 0 ? (
                          s.saturday.map(t => (
                            <button
                              key={t}
                              className="flyer-slot-btn"
                              onClick={() => handleBookSlot(movie, 'Saturday, Aug 15, 2026', 'saturday')}
                            >
                              {t}
                            </button>
                          ))
                        ) : (
                          <span className="no-slot">-</span>
                        )}
                      </td>
                      <td className="td-slots">
                        {s.sunday && s.sunday.length > 0 ? (
                          s.sunday.map(t => (
                            <button
                              key={t}
                              className="flyer-slot-btn"
                              onClick={() => handleBookSlot(movie, 'Sunday, Aug 16, 2026', 'sunday')}
                            >
                              {t}
                            </button>
                          ))
                        ) : (
                          <span className="no-slot">-</span>
                        )}
                      </td>
                      <td className="td-slots">
                        {s.monTue && s.monTue.length > 0 ? (
                          s.monTue.map(t => (
                            <button
                              key={t}
                              className="flyer-slot-btn"
                              onClick={() => handleBookSlot(movie, 'Monday, Aug 17, 2026', 'monTue')}
                            >
                              {t}
                            </button>
                          ))
                        ) : (
                          <span className="no-slot">-</span>
                        )}
                      </td>
                      <td className="td-slots">
                        {s.wedThu && s.wedThu.length > 0 ? (
                          s.wedThu.map(t => (
                            <button
                              key={t}
                              className="flyer-slot-btn"
                              onClick={() => handleBookSlot(movie, 'Wednesday, Aug 19, 2026', 'wedThu')}
                            >
                              {t}
                            </button>
                          ))
                        ) : (
                          <span className="no-slot">-</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flyer-table-footer">
            <div className="footer-address-pill">
              <MapPin size={15} className="pin-gold" />
              <span>117a, Lagos-Abeokuta Expressway, U-Turn, Abule-Egba, Lagos</span>
            </div>
            <div className="footer-handle-pill">
              <span>@heritage_cinemas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
