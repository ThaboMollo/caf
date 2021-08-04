import React from 'react';

const About = (props) => {
	return (
		<div id='about' className='text-center'>
			<div className='container'>
				<div className='section-title'>
					<h2>About <span>Us</span></h2>
				</div>
				<h4>{props.data ? props.data.paragraph : 'loading...'}</h4>
				<div className='Cnt'>
					<div className='abtCnt1'>
						<div className='list-style'>
							<ul>
								{props.data
									? props.data.Why.map((d, i) => (
										<li key={`${d}-${i}`}>{d}</li>
									))
									: 'loading'}
							</ul>
						</div>
					</div>
					<div className='abtCnt1'>
						<img lazy src='img/about.jpg' className='abt-img' alt='' />
					</div>

					<div className="abtCnt1">
						<div className='about-text'>
							<ul>
								{props.data
									? props.data.Why2.map((d, i) => (
										<li key={`${d}-${i}`}> {d}</li>
									))
									: 'loading'}
							</ul>
						</div>
					</div>
				</div>
				<div className="Cnt">
					<div className="abtCnt">
						<h5>Vision</h5>
						<div className='list'>
							<h6>Redefining and harnessing the legacy of the humanity.</h6>
						</div>
					</div>

					<div className="abtCnt">
						<h5>Mission Statement</h5>
						<div className='list'>
							<h6>Functional marriages and healthy families.</h6>
						</div>
					</div>

					<div className="abtCnt">
						<h5>Our Approach</h5>
						<div className='list'>
							<h6>Power Talks.</h6>
							<h6>Dialogues.</h6>
							<h6>Seminars.</h6>
							<h6>Ambassadorship for Advocacy.</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;