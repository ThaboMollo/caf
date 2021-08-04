import React from 'react';

import ImageSlider from '../components/ImageSlider/ImageSlider';

const FathersAndSons = () => {
    return (
            <div id="events" className="text-center">
                <div className='container'>
                    <div className='section-title'>
                        <h2>
                            Fathers And <span>Sons</span>
                        </h2>
                    </div>
                </div>
                <ImageSlider images={[
                                    'img/events/fns/01.jpg',
                                    'img/events/fns/02.jpg',
                                    'img/events/fns/03.jpg',
                                    'img/events/fns/04.jpg',
                                    'img/events/fns/06.jpg'
                            ]}/>
            </div>
    )
}

export default FathersAndSons;