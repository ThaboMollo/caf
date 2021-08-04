import React from 'react';

import ImageSlider from '../components/ImageSlider/ImageSlider';

const gentsNWU = () => {
    return (
        <div id="events" className="text-center">
            <div className='container'>
                <div className='section-title'>
                    <h2>
                        Gentlemen's Talk at <span>NWU Mafikeng</span>
                    </h2>
                </div>
            </div>
            <ImageSlider images={[
                'img/events/gentsTalkNWUMaf/gent1-20191105.jpg',
                'img/events/gentsTalkNWUMaf/gent2-20191105.jpg',
                'img/events/gentsTalkNWUMaf/gent3-20191105.jpg',
                'img/events/gentsTalkNWUMaf/gent4-20191105.jpg',
                'img/events/gentsTalkNWUMaf/gent5-20191105.jpg',
                'img/events/gentsTalkNWUMaf/gent6-20191105.jpg'
            ]} />
        </div>
    )
}

export default gentsNWU;