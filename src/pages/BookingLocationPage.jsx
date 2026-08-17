import React from 'react';
import { ProgressStepper } from '../components/booking/ProgressStepper';
import { LocationSelector } from '../components/booking/LocationSelector';
import './BookingPages.css';

export const BookingLocationPage = () => {
  return (
    <div className="booking-page-wrap fade-in">
      <div className="container">
        <ProgressStepper />
        <LocationSelector />
      </div>
    </div>
  );
};
