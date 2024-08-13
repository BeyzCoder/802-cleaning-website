import { Link } from 'react-router-dom';

// Resource imports.
import '../styles/Footer.css';
import locationIcon from '../assets/location.svg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import githubIcon from '../assets/github.svg';

import * as module from '../module';

export default function Footer() {
  return (
		<div className="footer-section">
			<div className="sale-container">
				<div className="slogan-container">
					<h2>Make a Difference with Your Home with Our <span>Window Cleaning</span>.</h2>
				</div>
				<div className='book-container'>
					<Link to='/booking'><button>Make an Appointment</button></Link>
				</div>
				<div className="contact-row">
					<div className='info-foot'>
						<img src={locationIcon} alt='location-icon' />
						<span>{module.address}</span>
					</div>
					<div className='info-foot'>
						<img src={phoneIcon} alt='phone-icon' />
						<span>{module.phoneNumber}</span>
					</div>
					<div className='info-foot'>
						<img src={emailIcon} alt='email-icon' />
						<span>{module.email}</span>
					</div>
				</div>
			</div>
			<div className="license-row">
				<p>802 Window Cleaning © All Rights Reserved 2024. Powered by Vercel.</p>
				<div className="info-foot">
					<img src={githubIcon} alt="github-icon" />
					<a href="https://github.com/BeyzCoder/802-cleaning-website">Github Link. Made by Steven Baes.</a>
				</div>
			</div>
		</div>
	);
}