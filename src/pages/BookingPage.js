// Components.
import Header from '../components/Header';
import Footer from '../components/Footer';

// Resource imports.
import '../styles/Booking.css';
import bookingImage from '../images/booking-img.jpg';

export default function BookingPage() {
	return (
		<div className="booking-page">
			<Header />
			<div className="booking-landing">
				<div className="page-img-container">
					<img src={bookingImage} alt='booking-img' />
				</div>
				<div className="booking-headline">
					<h1>Book An Appointment</h1>
				</div>
			</div>
			<div className='google-scheduling'>
				<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2phcpPw6ySqJkAnsa6nmEJ5eo56RIbO_gGm-bkcPjzYZInMmkp9DjN11Kyv-uMk-590kLrThXz?gv=true" style={{border: 0}} width="100%" height="780" frameborder="0"></iframe>
			</div>
			<Footer />
		</div>
	);
}