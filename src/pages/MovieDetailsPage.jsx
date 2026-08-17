import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Ticket } from 'lucide-react';
import { MOVIES } from '../data/cinemaData';
import { HeroSection } from '../components/movie-details/HeroSection';
import { Synopsis } from '../components/movie-details/Synopsis';
import { WeeklyScheduleTable } from '../components/movie-details/WeeklyScheduleTable';
import { CastGrid } from '../components/movie-details/CastGrid';
import { TrailerSection } from '../components/movie-details/TrailerSection';
import { TechSpecs } from '../components/movie-details/TechSpecs';
import { BookTicketCard } from '../components/movie-details/BookTicketCard';
import { useBooking } from '../context/BookingContext';
import './MovieDetailsPage.css';

export const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { startBookingForMovie } = useBooking();

  const movie = MOVIES.find((m) => m.id === id) || MOVIES[0];

  // Similar movies
  const similarMovies = MOVIES.filter(
    (m) => m.id !== movie.id && (m.category === movie.category || m.genre.some(g => movie.genre.includes(g)))
  ).slice(0, 3);

  const handleBookSimilar = (e, simMovie) => {
    e.preventDefault();
    e.stopPropagation();
    startBookingForMovie(simMovie);
    navigate('/booking/location');
  };

  return (
    <div className="movie-details-page-wrap fade-in">
      {/* Back Navigation Bar */}
      <div className="details-back-bar">
        <div className="container">
          <Link to="/movies" className="back-to-movies-link">
            <ArrowLeft size={18} />
            <span>Back to All Movies</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection movie={movie} />

      {/* Main 2-Column Content */}
      <div className="container details-body-container">
        <div className="details-main-column">
          <WeeklyScheduleTable movie={movie} />
          <Synopsis movie={movie} />
          <CastGrid cast={movie.cast} />
          <TrailerSection movie={movie} />

          {/* Similar Movies Section */}
          {similarMovies.length > 0 && (
            <section className="details-section-block similar-movies-section">
              <h2 className="details-section-heading">You May Also Like</h2>
              <div className="similar-movies-grid">
                {similarMovies.map((sim) => (
                  <div key={sim.id} className="similar-movie-card card-surface">
                    <Link to={`/movies/${sim.id}`} className="similar-poster-wrap">
                      <img src={sim.posterImage} alt={sim.title} className="similar-poster-img" />
                      <div className="similar-rating-badge">
                        <Star size={11} fill="currentColor" />
                        <span>{sim.rating}</span>
                      </div>
                    </Link>
                    <div className="similar-info">
                      <Link to={`/movies/${sim.id}`}>
                        <h4 className="similar-title">{sim.title}</h4>
                      </Link>
                      <div className="similar-meta">
                        <span>{sim.genre[0]}</span>
                        <span>{sim.runtime}</span>
                      </div>
                      <button
                        className="btn-primary similar-book-btn"
                        onClick={(e) => handleBookSimilar(e, sim)}
                      >
                        <Ticket size={13} />
                        <span>Book</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="details-sidebar-column">
          <BookTicketCard movie={movie} />
          <TechSpecs techSpecs={movie.techSpecs} />
        </aside>
      </div>
    </div>
  );
};
