import React from 'react';

const Partners = (props) => {
	return (
			<div id='partners'>
				<div className='container'>
					<div className='section-title text-center'>
						<h2>Our <span>Partners</span></h2>
					</div>
					<div className='row'>
					{
						props.data
						? props.data.map((d, i) => (
							<div key={`${d.name}-${i}`} className='col-md-4'>
								<div className='partner'>
									<div className='partner-image'>
										{' '}
										<img lazy src={d.img} alt='' />{' '}
									</div>
									<div className='partner-content'>
										<div className='partner-meta'>  {d.name} </div>
									</div>
								</div>
							</div>
						))
						: 'loading'}
					</div>
				</div>
			</div>
	)
}

export default Partners;