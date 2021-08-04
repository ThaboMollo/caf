import React from 'react';

import ImageSlider from '../components/ImageSlider/ImageSlider';

const MarriageKlerk = () => {
    return (
        <div id="events" className="text-center">
            <div className='container'>
                <div className='section-title'>
                    <h2>
                        Marriage Seminar in <span>Klerksdorp</span>
                    </h2>
                </div>
            </div>
            <ImageSlider images={[
                'img/events/MarriageKlerk/MarKlrk1.jpg',
                'img/events/MarriageKlerk/MarKlrk2.jpg',
                'img/events/MarriageKlerk/MarKlrk3.jpg',
                'img/events/MarriageKlerk/MarKlrk4.jpg',
                'img/events/MarriageKlerk/MarKlrk5.jpg'
            ]} />
        </div>
    )
}

export default MarriageKlerk;