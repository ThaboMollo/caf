import { useState, useEffect } from 'react';

import { Header } from './components/header';
import { Contact } from './containers/contact';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import Subscribe from './components/Subscribe/Subscribe';

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
})


const Caf = () => {
	const [landingPageData, setLandingPageData] = useState({})
	useEffect(() => {
		setLandingPageData(JsonData)
	}, [])
	
	return (
		<div>
			<Header data={landingPageData.Header} />
			<div className="learn-more">
				<h3>Be part of our next events and trainings.</h3>
				<h4>Hit the subscribe button, leave the email and we will will update you of our next event.</h4>
				<Subscribe />
			</div>
			<Contact data={landingPageData.Contact} />
		</div>
	)
}

export default Caf;
