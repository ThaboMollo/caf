import React from 'react';

import ImageSlider from '../components/ImageSlider/ImageSlider';

const HeatLich = () => {
    return (
        <div id="events" className="text-center">
            <div className='container'>
                <div className='section-title'>
                    <h2>
                        Heatwave Transformational Session in <span>Lichternburg</span>
                    </h2>
                </div>
            </div>
            <ImageSlider images={[
                'img/events/HeatLichternburg/Heat1.jpg',
                'img/events/HeatLichternburg/Heat2.jpg',
                'img/events/HeatLichternburg/Heat3.jpg',
                'img/events/HeatLichternburg/Heat4.jpg',
                'img/events/HeatLichternburg/Heat5.jpg',
                'img/events/HeatLichternburg/Heat6.jpg',
                'img/events/HeatLichternburg/Heat7.jpg',
                'img/events/HeatLichternburg/Heat8.jpg'
            ]} />
        </div>
    )
}

export default HeatLich;