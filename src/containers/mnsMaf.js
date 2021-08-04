import React from 'react';

import ImageSlider from '../components/ImageSlider/ImageSlider';

const MothersAndSons = () => {
    return (
        <div id="events" className="text-center">
            <div className='container'>
                <div className='section-title'>
                    <h2>
                        Mothers and Sons Dialogue in <span>Mafikeng</span>
                    </h2>
                </div>
            </div>
            <ImageSlider images={[
                'img/events/mnsMaf/mns1.jpg',
                'img/events/mnsMaf/mns2.jpg',
                'img/events/mnsMaf/mns3.jpg',
                'img/events/mnsMaf/mns4.jpg',
                'img/events/mnsMaf/mns5.jpg',
                'img/events/mnsMaf/mns6.jpg'
            ]} />
        </div>
    )
}

export default MothersAndSons;