import React from 'react';

import ImageHolder from '../components/ImageHolder';
// import Subscribe from '../components/Subscribe/Subscribe';

const Events = (props) => {
	return (
		<div id='events' className='text-center'>
			<div className='container'>
				<div className='section-title'>
					<h2>Our <span>Events</span></h2>
					
				</div>
				<div className='row'>
					{
						props.data
							? props.data.map((d, i) => (
								<ImageHolder key={`${d.name}-${i}`}
									link={d.link}
									name={d.name}
									pic={d.pic}
									date={d.date}
								/>
							))
							: 'loading...'
					}
				</div>
			</div>
		</div>
	)
}

export default Events;