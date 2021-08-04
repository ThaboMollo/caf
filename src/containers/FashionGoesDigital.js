import React from 'react';

import ImageSlider from '../components/ImageSlider/ImageSlider';

const FashionGoesDigital = () => {
    return (
        <div id="events" className="text-center">
            <div className='container'>
                <div className='section-title'>
                    <h2>
                        Fashion Goes <span>Digital</span>
                    </h2>
                </div>
            </div>
            <ImageSlider images={[
                'img/events/fashion/fashion.jpg',
            ]} />
        </div>
    )
}

export default FashionGoesDigital;