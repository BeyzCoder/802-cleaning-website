// Components import.
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

// Resource import.
import '../styles/ContactPage.css';
import showcase5 from '../images/showcase-5.jpg';

export default function ContactPage() {
	return (
		<div className='contact-page'>
			<Header />
			<div className="contact-landing">
				<div className="page-img-container">
					<img src={showcase5} alt='contact-img' />
				</div>
				<div className="contact-headline">
					<h1>Contact Us</h1>
					<p>Before sending double check your email and phone number it will help us to reach you.</p>
				</div>
			</div>
			<Contact />
			<Footer />
		</div>
	);
}