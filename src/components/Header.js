import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

// Resources import.
import '../styles/Header.css';
import businessLogo from '../images/business-logo.png';
import locationIcon from '../assets/location.svg';
import phoneIcon from '../assets/phone.svg';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/close.svg';

import * as module from '../module';

export default function Header() {
	const menuBarRef = useRef(null);

	const showMenuBar = (event) => {
		event.preventDefault();
		if (menuBarRef.current)
			menuBarRef.current.style.display = "flex";
	}

	const closeMenuBar = (event) => {
		event.preventDefault();
		if (menuBarRef.current)
			menuBarRef.current.style.display = "none";
	}

  return (
		<header>
			<div className='header-container'>
				<div className='info-container'>
					<div className='info'>
						<img src={locationIcon} alt='location-icon' />
						<span>{module.address}</span>
					</div>
					<div className='info'>
						<img src={phoneIcon} alt='phone-icon' />
						<span>{module.phoneNumber}</span>
					</div>
				</div>

				<div className='navigation-container'>
					<div className='img-container'>
						<img src={businessLogo} alt='business-logo' />
					</div>

					<nav className='horizontal-view'>
						<ul>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/about'>About</Link></li>
							<li><Link to='/service'>Service</Link></li>
							<li><Link to='/faq'>FAQ</Link></li>
						</ul>
					</nav>

					<div className='btn-container'>
						<Link to='/booking'>
							<button>Book an Appointment</button>
						</Link>
					</div>

					<div className='menu-btn' onClick={showMenuBar}>
						<img src={menuIcon} alt='menu-icon' />
					</div>
					<nav className='vertical-view' ref={menuBarRef}>
						<ul>
							<li onClick={closeMenuBar}><img src={closeIcon} alt='close-icon' /></li>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/about'>About</Link></li>
							<li><Link to='/service'>Service</Link></li>
							<li><Link to='/faq'>FAQ</Link></li>
						</ul>
						<div className='btn-container'>
							<Link to='/booking'>
								<button>Book an Appointment</button>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}