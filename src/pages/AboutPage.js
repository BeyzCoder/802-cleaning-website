// Components.
import Header from '../components/Header';
import Footer from '../components/Footer';

// Resource imports.
import '../styles/AboutPage.css';
import aboutImage from '../images/about-landing-page.jpg';
import aboutShowcase1 from '../images/about-showcase1.jpg';
import aboutShowcase2 from '../images/about-showcase2.jpg';

import * as module from '../module';

export default function AboutPage() {
	return (
		<div className="about-page">
			<Header />
			<div className='about-landing'>
        <div className='page-img-container'>
          <img src={aboutImage} alt='about-img' />
        </div>
        <div className='about-headline'>
					<h1>About The Company</h1>
        </div>
      </div>
			<div className="about-content">
				<div className="content-row">
					<div className="about-img-container">
						<img src={aboutShowcase1} alt='about-img' />
					</div>
					<div className='paragraph-container'>
						<h2>Our Story</h2>
						<p>{module.aboutContent1}</p>
					</div>
				</div>
				<div className="content-row">
					<div className='paragraph-container'>
						<h2>What is Our Goal</h2>
						<p>{module.aboutContent2}</p>
					</div>
					<div className="about-img-container">
						<img src={aboutShowcase2} alt='about-img' />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}