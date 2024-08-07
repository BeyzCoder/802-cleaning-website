import { Link } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Services from '../components/Services';

// Resources imports.
import '../styles/Home.css';
import homeLanding from '../images/home-landing-page.jpg';
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
            <Link to='/booking'><button>Book an Appointment</button></Link>
          </div>
        </div>
      </div>
      <div className="selling-landing">
        <div className="content-container">
          <div className="selling-img">
            <img src={sellingLanding} alt='selling-img' />
            <div className="img-desc-container">
              <p>{module.textImage}</p>
            </div>
          </div>
          <div className="selling-detail">
            <h2>What Makes Us Different From The Others</h2>
            <p>{module.description}</p>
            <div className="list-features">
              {module.listFeatures.map((feat,index) => (
                <div className="feature" key={index}>
                  {/* <div className="design-bullet">
                    <div className="dot"></div>
                  </div> */}
                  <img src={check} alt='check-icon' />
                  <p>{feat.feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="selling-point">
        <h1>"We can give you a <span>FREE QUOTE</span> by just calling us and we'll be there in no time 
        then give you the quote on the spot."</h1>
      </div>
      <Services />
    </div>
  );
}
