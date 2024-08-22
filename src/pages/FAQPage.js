import React, { useState } from 'react';

// Components.
import Header from '../components/Header';
import Footer from '../components/Footer';

// Resource imports.
import '../styles/FAQPage.css';
import faqImage from '../images/faq-img.jpeg';
import arrowBtn from '../assets/arrow-btn.svg';
import * as module from '../module';

export default function FAQPage() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	}

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
				<h2>Frequently Asked Questions</h2>
				{module.faqList.map((faq, index) => (
					<div
						className={`faq ${activeIndex === index ? 'active' : ''}`}
						key={index}
						onClick={() => toggleFAQ(index)}
					>
						<div className="question">
							<h3>{faq.question}</h3>
							<img src={arrowBtn} alt="arror-btn" />
						</div>
						<div className="answer">
							<p>{faq.answer}</p>
						</div>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
}