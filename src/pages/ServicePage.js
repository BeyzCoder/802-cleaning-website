// Components.
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

// Resource imports.
import '../styles/ServicePage.css';
import serviceImg from '../images/service-img.webp';

export default function ServicePage() {
	return (
		<div className="service-page">
			<Header />
			<div className='service-landing'>
        <div className='service-img-container'>
          <img src={serviceImg} alt='about-img' />
        </div>
        <div className='service-headline'>
					<h1>Services</h1>
					<p>Most of our service can be negotiate or discuss for further details.</p>
        </div>
      </div>
			<Services />
			<Footer />
		</div>
	);
}