import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin, Calendar, Clock, Ticket, Utensils, CheckCircle } from 'lucide-react';
import './ProgressStepper.css';

const STEPS = [
  { path: '/booking/location', label: 'Location', stepNum: 1, icon: MapPin },
  { path: '/booking/date', label: 'Date', stepNum: 2, icon: Calendar },
  { path: '/booking/time', label: 'Time', stepNum: 3, icon: Clock },
  { path: '/booking/tickets', label: 'Tickets', stepNum: 4, icon: Ticket },
  { path: '/booking/snacks', label: 'Snacks', stepNum: 5, icon: Utensils },
  { path: '/booking/summary', label: 'Summary', stepNum: 6, icon: CheckCircle }
];

export const ProgressStepper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentStepIndex = STEPS.findIndex(s => s.path === location.pathname);
  const activeIndex = currentStepIndex >= 0 ? currentStepIndex : 0;

  return (
    <div className="progress-stepper-container">
      <div className="stepper-track">
        {STEPS.map((step, index) => {
          const isCompleted = index < activeIndex;
          const isCurrent = index === activeIndex;
          const StepIcon = step.icon;

          return (
            <React.Fragment key={step.path}>
              <div
                className={`stepper-node ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
                onClick={() => {
                  if (index < activeIndex) {
                    navigate(step.path);
                  }
                }}
                style={{ cursor: index < activeIndex ? 'pointer' : 'default' }}
              >
                <div className="node-icon-circle">
                  {isCompleted ? (
                    <CheckCircle size={16} className="completed-check" />
                  ) : (
                    <StepIcon size={16} />
                  )}
                </div>
                <div className="node-text-wrap">
                  <span className="node-step-label">Step {step.stepNum}</span>
                  <span className="node-title">{step.label}</span>
                </div>
              </div>

              {index < STEPS.length - 1 && (
                <div className={`stepper-connector ${index < activeIndex ? 'filled' : ''}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
