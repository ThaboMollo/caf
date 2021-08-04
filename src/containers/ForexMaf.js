import React from 'react';

import ImageSlider from '../components/ImageSlider/ImageSlider';

const ForexMan = () => {
    return (
        <div id="events" className="text-center">
            <div className='container'>
                <div className='section-title'>
                    <h2>
                        Empowerment Talk at Forex Trade Session <span>(External Invite Mafikeng)</span>
                    </h2>
                </div>
            </div>
            <ImageSlider images={[
                'img/events/ForexMaf/Forex1.jpg',
                'img/events/ForexMaf/Forex2.jpg',
                'img/events/ForexMaf/Forex3.jpg',
                'img/events/ForexMaf/Forex4.jpg',
                'img/events/ForexMaf/Forex5.jpg'
            ]} />
        </div>
    )
}

export default ForexMan;