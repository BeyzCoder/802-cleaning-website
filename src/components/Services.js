
// Resources imports.
import '../styles/GridServices.css';

import * as module from '../module';

export default function Services() {
  return (
		<div className='service-options'>
			<h2>What We Offer</h2>
			<div className='grid-container'>
				{module.gridServices.map((service, index) => (
					<div className="service" key={index}>
						<div className="row-head">
							<img src={service.icon} alt='icon' />
							<div className="design-bullet">
                <div className="dot"></div>
              </div>
						</div>
						<div className="row-bottom">
							<h3>{service.title}</h3>
							<p>{service.desc}</p>
						</div>
					</div>
				))}
			</div>
			<div className='to-be-continue'><span>More To Come...</span></div>
		</div>
	);
}