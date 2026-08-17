import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { LOCATIONS } from '../../data/cinemaData';
import { useBooking } from '../../context/BookingContext';
import './BookingStepComponents.css';

export const LocationSelector = () => {
  const { draft, setLocation } = useBooking();
  const navigate = useNavigate();

  const handleSelectLocation = (loc) => {
    setLocation(loc);
  };

  const handleProceed = () => {
    if (draft.location) {
      navigate('/booking/date');
    }
  };

  return (
    <div className="booking-step-content">
      <div className="step-header-area">
        <h2 className="step-main-title">Select Cinema Location</h2>
        <p className="step-subtitle">Choose your preferred Heritage Cinema theatre in Metropolis</p>
      </div>

      <div className="locations-grid">
        {LOCATIONS.map((loc) => {
          const isSelected = draft.location && draft.location.id === loc.id;

          return (
            <div
              key={loc.id}
              className={`location-card card-surface ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectLocation(loc)}
            >
              <div className="location-card-image-wrap">
                <img src={loc.image} alt={loc.name} className="location-card-img" />
                {isSelected && (
                  <div className="location-selected-badge">
                    <CheckCircle2 size={16} />
                    <span>Selected</span>
                  </div>
                )}
              </div>

              <div className="location-card-body">
                <h3 className="location-name">{loc.name}</h3>
                
                <div className="location-address-row">
                  <MapPin size={15} className="loc-icon" />
                  <span>{loc.address}</span>
                </div>

                <div className="location-phone-row">
                  <Phone size={14} className="loc-icon" />
                  <span>{loc.phone}</span>
                </div>

                <div className="location-features-wrap">
                  {loc.features.map((f) => (
                    <span key={f} className="badge-tag">
                      {f}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className={`btn-select-location ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectLocation(loc);
                  }}
                >
                  {isSelected ? 'Selected Location' : 'Choose This Theatre'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="step-action-footer">
        <button
          className="btn-primary step-continue-btn"
          disabled={!draft.location}
          onClick={handleProceed}
        >
          <span>Continue to Date Selection</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
