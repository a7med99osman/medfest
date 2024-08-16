import { useState } from 'react';
import Slider from 'react-slick';
import moments2022 from '../../assets/moments2022.png'
import moments2 from '../../assets/moments2.png'

const Timeline = () => {
    const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
    const events = {
        '2017': {
        date: '1 Jan, 2017',
        img : moments2022
        },
        '2018': {
        date: '1 Jan, 2018',
        img : moments2
        },
        '2019': {
        date: '1 Jan, 2019',
        img : moments2022
        },
        '2020': {
        date: '1 Jan, 2020',
        img : moments2
        },
        '2021': {
        date: '1 Jan, 2021',
        img : moments2022
        },
        '2022': {
        date: '1 Feb, 2022',
        img : moments2
        },
        '2023': {
        date: '15 Jun, 2023',
        img : moments2022
        
        },
        '2024': {
            date: '15 Jun, 2024',
            img : moments2
            
            },
        '2025': {
            date: '15 Jun, 2025',
            img :moments2022
        },
        '2026': {
            date: '15 Jun, 2026',
            img : moments2
        },
        
    };

    const [selectedYear, setSelectedYear] = useState('2017');

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        beforeChange: (current, next) => setSelectedYear(years[next])
    };

    return (
        <div className="timeline-container">
        <Slider {...settings} className="timeline">
            {years.map(year => (
            <div className='bigDiv' key={year}>
                <div className="v-lines" >
                    {[...Array(14)].map((_, index) => (
                        <div key={index} className="v-line"></div>
                    ))}
                </div>
                <div
                className={`year-marker ${year === selectedYear ? 'selected' : ''}`}
                onClick={() => setSelectedYear(year)}
                >
                <div className="v-line-year"></div>
                <span>{year}</span>
                </div>
            </div>
            ))}
        </Slider>
        {events[selectedYear] && (
            <div className="event">
                <div className="event-content">
                    <img src={events[selectedYear].img} alt="" />
                </div>
            </div>
        )}
        </div>
    );
};

export default Timeline;
