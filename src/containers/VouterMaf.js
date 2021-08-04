import React from 'react';

import ImageSlider from '../components/ImageSlider/ImageSlider';

const VouterMaf = () => {
    return (
        <div id="events" className="text-center">
            <div className='container'>
                <div className='section-title'>
                    <h2>
                        Vouter Molefe Launch Session in <span>Rusternburg</span>
                    </h2>
                </div>
            </div>
            <ImageSlider images={[
                'img/events/VouterMaf/Maf1.jpg',
                'img/events/VouterMaf/Maf2.jpg',
                'img/events/VouterMaf/Maf3.jpg',
                'img/events/VouterMaf/Maf4.jpg',
                'img/events/VouterMaf/Maf5.jpg',
                'img/events/VouterMaf/Maf6.jpg',
                'img/events/VouterMaf/Maf7.jpg'
            ]} />
        </div>
    )
}

export default VouterMaf;