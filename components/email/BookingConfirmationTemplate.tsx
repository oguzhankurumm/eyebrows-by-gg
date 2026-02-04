import * as React from 'react';

interface BookingConfirmationProps {
  customerName: string;
  serviceName: string;
  date: string;
}

export const BookingConfirmationTemplate: React.FC<Readonly<BookingConfirmationProps>> = ({
  customerName,
  serviceName,
  date,
}) => (
  <div style={{ fontFamily: 'sans-serif', lineHeight: '1.5' }}>
    <h1 style={{ color: '#24222A' }}>Booking Confirmed!</h1>
    <p>Hi {customerName},</p>
    <p>Your appointment for <strong>{serviceName}</strong> on <strong>{date}</strong> has been confirmed.</p>
    <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ebebeb' }} />
    <p>We look forward to seeing you!</p>
    <p style={{ color: '#666', fontSize: '12px' }}>Eyebrows by GG</p>
  </div>
);
