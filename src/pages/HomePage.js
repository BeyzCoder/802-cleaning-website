import { Link } from 'react-router-dom';

// Components
import Header from '../components/Header';

// Resources imports.
import '../styles/Home.css';
import homeLanding from '../images/home-landing.jpeg';

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
    </div>
  );
}
