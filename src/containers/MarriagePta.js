import React from 'react';

import ImageSlider from '../components/ImageSlider/ImageSlider';

const MarriagePta = () => {
    return (
        <div id="events" className="text-center">
            <div className='container'>
                <div className='section-title'>
                    <h2>
                        Marriage Seminar <span>Pretoria</span>
                    </h2>
                </div>
            </div>
            <ImageSlider images={[
                'img/events/MarriagePta/pta1.jpg',
                'img/events/MarriagePta/pta2.jpg',
                'img/events/MarriagePta/pta3.jpg',
                'img/events/MarriagePta/pta4.jpg',
                'img/events/MarriagePta/pta5.jpg',
                'img/events/MarriagePta/pta6.jpg',
                'img/events/MarriagePta/pta7.jpg',
                'img/events/MarriagePta/pta8.jpg'
            ]} />
        </div>
    )
}

export default MarriagePta;