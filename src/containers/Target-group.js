import React from 'react';

const TargetGroup = (props) => {
	return (
		<div id='target-group' className='text-center'>
			<div className='container'>
				<div className='section-title'>
					<h2>Target <span>groups</span></h2>
				</div>
				<div className='row'>
					{
						props.data
							? props.data.map((d, i) => (
								<div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
									{' '}
									<i className={d.icon}></i>
									<h3>{d.title}</h3>
									<p>{d.text}</p>
								</div>
							))
							: 'Loading...'
					}
				</div>
			</div>
		</div>
	)
}

export default TargetGroup;