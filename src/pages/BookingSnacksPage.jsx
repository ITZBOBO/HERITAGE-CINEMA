import React from 'react';
import { ProgressStepper } from '../components/booking/ProgressStepper';
import { SnackGrid } from '../components/booking/SnackGrid';
import { OrderSummarySidebar } from '../components/booking/OrderSummarySidebar';
import './BookingPages.css';

export const BookingSnacksPage = () => {
  return (
    <div className="booking-page-wrap fade-in">
      <div className="container">
        <ProgressStepper />
        <div className="booking-two-column-layout">
          <div className="booking-main-step-col">
            <SnackGrid />
          </div>
          <div className="booking-sidebar-col">
            <OrderSummarySidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
