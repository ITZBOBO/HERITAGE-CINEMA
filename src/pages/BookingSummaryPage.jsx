import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck, User, Mail, Phone, Lock, CheckCircle2, ArrowLeft } from 'lucide-react';
import { ProgressStepper } from '../components/booking/ProgressStepper';
import { OrderSummarySidebar } from '../components/booking/OrderSummarySidebar';
import { useBooking, formatCurrency } from '../context/BookingContext';
import { useAuth } from '../context/AuthContext';
import './BookingPages.css';

export const BookingSummaryPage = () => {
  const { user } = useAuth();
  const { draft, totalTicketCount, grandTotal, confirmBooking } = useBooking();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [customerDetails, setCustomerDetails] = useState({
    name: user ? user.name : 'Alexander Vance',
    email: user ? user.email : 'alex.vance@cinema.heritage',
    phone: user ? user.phone : '+234 812 345 6789',
    cardNumber: '5399 •••• •••• 8821',
    cardExp: '08/28',
    cardCvv: '921'
  });
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    setCustomerDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCompletePayment = (e) => {
    if (e) e.preventDefault();
    if (!agreeTerms) {
      alert('Please agree to the booking and cancellation policy to proceed.');
      return;
    }
    if (totalTicketCount === 0) {
      alert('Please select at least 1 ticket to proceed.');
      navigate('/booking/tickets');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const newBooking = confirmBooking(customerDetails);
      setIsProcessing(false);
      navigate('/my-bookings', { state: { justBookedId: newBooking.bookingId } });
    }, 900);
  };

  return (
    <div className="booking-page-wrap fade-in">
      <div className="container">
        <ProgressStepper />

        <div className="booking-two-column-layout">
          {/* Main Payment & Details Column */}
          <div className="booking-main-step-col">
            <div className="step-header-area">
              <h2 className="step-main-title">Review & Secure Payment</h2>
              <p className="step-subtitle">
                Enter your details to receive your digital cinema confirmation pass via email & SMS
              </p>
            </div>

            {/* Customer Details Form */}
            <div className="summary-form-card card-surface">
              <h3 className="form-card-title">1. Guest Contact Information</h3>
              <div className="form-fields-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="cust-name">Full Name</label>
                  <div className="input-with-icon">
                    <User size={18} className="field-icon" />
                    <input
                      id="cust-name"
                      type="text"
                      name="name"
                      value={customerDetails.name}
                      onChange={handleInputChange}
                      className="input-control field-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="cust-email">Email for Tickets</label>
                  <div className="input-with-icon">
                    <Mail size={18} className="field-icon" />
                    <input
                      id="cust-email"
                      type="email"
                      name="email"
                      value={customerDetails.email}
                      onChange={handleInputChange}
                      className="input-control field-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group span-two-cols">
                  <label className="form-label" htmlFor="cust-phone">Mobile Phone (SMS Ticket Alerts)</label>
                  <div className="input-with-icon">
                    <Phone size={18} className="field-icon" />
                    <input
                      id="cust-phone"
                      type="tel"
                      name="phone"
                      value={customerDetails.phone}
                      onChange={handleInputChange}
                      className="input-control field-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="summary-form-card card-surface">
              <h3 className="form-card-title">2. Payment Method</h3>
              
              <div className="payment-options-row">
                <label className={`payment-option-pill ${paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <CreditCard size={18} />
                  <span>Debit / Credit Card (Paystack / Flutterwave)</span>
                </label>

                <label className={`payment-option-pill ${paymentMethod === 'digital_wallet' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="digital_wallet"
                    checked={paymentMethod === 'digital_wallet'}
                    onChange={() => setPaymentMethod('digital_wallet')}
                  />
                  <ShieldCheck size={18} />
                  <span>Bank Transfer / USSD</span>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <div className="card-inputs-grid">
                  <div className="form-group span-two-cols">
                    <label className="form-label" htmlFor="card-num">Card Number</label>
                    <div className="input-with-icon">
                      <CreditCard size={18} className="field-icon" />
                      <input
                        id="card-num"
                        type="text"
                        name="cardNumber"
                        value={customerDetails.cardNumber}
                        onChange={handleInputChange}
                        className="input-control field-input"
                        placeholder="•••• •••• •••• ••••"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="card-exp">Expiry (MM/YY)</label>
                    <input
                      id="card-exp"
                      type="text"
                      name="cardExp"
                      value={customerDetails.cardExp}
                      onChange={handleInputChange}
                      className="input-control"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="card-cvv">CVV</label>
                    <div className="input-with-icon">
                      <Lock size={16} className="field-icon" />
                      <input
                        id="card-cvv"
                        type="password"
                        name="cardCvv"
                        value={customerDetails.cardCvv}
                        onChange={handleInputChange}
                        className="input-control field-input"
                        placeholder="CVV"
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Terms and Guarantee */}
            <div className="terms-checkbox-wrap">
              <label className="checkbox-custom-label">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <span>
                  I agree to the Heritage Cinemas Booking Terms and acknowledge that free cancellation is permitted up to 2 hours prior to showtime.
                </span>
              </label>
            </div>

            <div className="step-action-footer">
              <button className="btn-secondary step-back-btn" onClick={() => navigate('/booking/snacks')}>
                <ArrowLeft size={18} />
                <span>Back to Snacks</span>
              </button>

              <button
                className="btn-primary step-continue-btn"
                disabled={isProcessing || !agreeTerms || totalTicketCount === 0}
                onClick={handleCompletePayment}
              >
                {isProcessing ? (
                  <span>Processing Reservation...</span>
                ) : (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Authorize & Pay ({formatCurrency(grandTotal)})</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="booking-sidebar-col">
            <OrderSummarySidebar
              isSummaryPage={true}
              onProceedToPayment={handleCompletePayment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
