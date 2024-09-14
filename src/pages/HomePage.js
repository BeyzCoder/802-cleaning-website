import { Link } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Resources imports.
import '../styles/Home.css';
import '../styles/Slide.css';
import homeLanding from '../images/home-landing-page2.jpg';
import sellingLanding from '../images/selling-landing2.jpg';
import check from '../assets/check.svg';

import * as module from '../module';

export default function HomePage() {
  return (
    <div className='home-page'>
      <Header />
      <div className='home-landing'>
        <div className='landing-img'>
          <img src={homeLanding} alt='landing-img' />
        </div>
        <div className='landing-headline'>
          <div className='headline-container'>
            <h1>{module.headline}</h1>
            <p>{module.context}</p>
            <Link to='/booking'><button>Make an Appointment</button></Link>
          </div>
        </div>
      </div>
      <div className="selling-landing">
        <div className="content-container">
          <div className="selling-img">
            <img src={sellingLanding} alt='selling-img' />
            {/* <div className="img-desc-container">
              <p>{module.textImage}</p>
            </div> */}
          </div>
          <div className="selling-detail">
            <h2>What Makes Us Different</h2>
            <p>{module.description}</p>
            <div className="list-features">
              {module.listFeatures.map((feat,index) => (
                <div className="feature" key={index}>
                  <img src={check} alt='check-icon' />
                  <p>{feat.feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="selling-point">
        <h1>We provide <span>FREE QUOTES</span> for our services. Reach out to us,
        and we will take care of the rest.</h1>
      </div>
      <Services />
      <div className="slide-landing">
        <h2>Enjoy Clearer View From Your Window</h2>
        <div className="slide-tracker">
          {module.slideList1.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.image} alt='slide' />
            </div>
          ))}
        </div>
        <div className="slide-center">
          <img src={module.centerSlide} alt="slide" />
        </div>
        <div className="slide-tracker">
          {module.slideList2.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.image} alt='slide' />
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <div className="google-review-container">
        <div class="elfsight-app-d8e862e1-3c01-4400-90bf-bcaa2e2d5f9d" data-elfsight-app-lazy></div>
      </div>
      <Footer />
    </div>
  );
}
