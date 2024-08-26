import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Resource imports.
import '../styles/Contact.css';
import * as module from '../module';
import businessLogo from '../images/business-logo.png';

export default function Contact() {
	const formRef = useRef();

	const serviceID = process.env.REACT_APP_SERVICE_ID;
	const templateID = process.env.REACT_APP_TEMPLATE_ID;
	const publicKey = process.env.REACT_APP_PUBLIC_KEY;

	const [formData, setFormData] = useState({
		first: '',
		last: '',
		phone: '',
		email: '',
		message: '',
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(serviceID, templateID, formRef.current, {
			publicKey: publicKey,
		})
		.then(() => {
			console.log('SUCCESS!');
		}, (error) => {
			console.log('FAILED...', error.text);
		},);
	}

	return (
		<div className="contact-section">
			<div className="contact-wrapper">
				<div className="contact-content">
					<h2>Contact Us Today - We Are Here to Listen</h2>
					<p>{module.contactContent}</p>
					<img src={businessLogo} alt="business-logo" />
				</div>
				<div className="form-container">
					<form ref={formRef} onSubmit={handleSubmit}>
						<div className="full-name">
							<input type="text" id='first' name='first' value={formData.first} onChange={handleChange} placeholder='First Name' />
							<input type="text" id='last' name='last' value={formData.last} onChange={handleChange} placeholder='Last Name' />
						</div>
						<div className='contact-info'>
							<input type="tel" id='phone' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone Number' />
							<input type="email" id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
						</div>
						<div className='question-container'>
							<textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder='Question/Suggestion/Comment'></textarea>
						</div>
						<button type='submit' value='Send'>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}