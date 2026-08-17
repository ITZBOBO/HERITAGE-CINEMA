import React from 'react';
import { ProgressStepper } from '../components/booking/ProgressStepper';
import { TimeSelector } from '../components/booking/TimeSelector';
import './BookingPages.css';

export const BookingTimePage = () => {
  return (
    <div className="booking-page-wrap fade-in">
      <div className="container">
        <ProgressStepper />
        <TimeSelector />
      </div>
    </div>
  );
};
