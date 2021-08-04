import React from 'react';

import ImageSlider from '../components/ImageSlider/ImageSlider';

const SingleRusty = () => {
    return (
            <div id="events" className="text-center">
                <div className='container'>
                    <div className='section-title'>
                        <h2>
                            Singleness Relationship Seminar in <span>Rusternburg</span>
                        </h2>
                    </div>
                </div>
                <ImageSlider images={[
                                    'img/events/SingleRusty/rusty.jpg',
                                    'img/events/SingleRusty/rusty2.jpg',
                                    'img/events/SingleRusty/rusty3.jpg',
                                    'img/events/SingleRusty/rusty4.jpg',
                                    'img/events/SingleRusty/rusty5.jpg',
                                    'img/events/SingleRusty/rusty6.jpg',
                                    'img/events/SingleRusty/rusty7.jpg',
                                    'img/events/SingleRusty/rusty8.jpg',
                                    'img/events/SingleRusty/rusty9.jpg',
                                    'img/events/SingleRusty/rusty10.jpg',
                                    'img/events/SingleRusty/rusty11.jpg',
                                    'img/events/SingleRusty/rusty12.jpg'
                            ]}/>
            </div>
    )
}

export default SingleRusty;