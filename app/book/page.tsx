import { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { BookingRedirect } from '@/components/booking/BookingRedirect';

export const metadata: Metadata = {
  title: 'Redirecting to Booking...',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookPage() {
  return (
    <Section className="py-20">
      <BookingRedirect />
    </Section>
  );
}
