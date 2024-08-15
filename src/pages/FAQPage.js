// Components.
import Header from '../components/Header';
import Footer from '../components/Footer';

// Resource imports.
import '../styles/FAQPage.css';
import faqImage from '../images/faq-img.jpeg';

export default function FAQPage() {
	return (
		<div className="FAQ-page">
			<Header />
			<div className='faq-landing'>
        <div className='faq-img-container'>
          <img src={faqImage} alt='faq-img' />
        </div>
        <div className='faq-headline'>
					<h1>FAQ</h1>
					<p>This page is to answer your question, you can still send message for futher detail.</p>
        </div>
      </div>
			<div className='faq-content'>
				<h1>Undermaintenance...</h1>
			</div>
			<Footer />
		</div>
	);
}