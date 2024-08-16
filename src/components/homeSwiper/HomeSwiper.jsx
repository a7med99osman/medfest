import { Swiper, SwiperSlide } from 'swiper/react';
// import {IsMobileContext} from '../../utils/IsMobileContext'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import required modules
import { Navigation, Pagination , Autoplay  } from 'swiper/modules';
// import { useContext } from 'react';

import img1 from '../../assets/homeSwiper/img1.jpeg'
import img2 from '../../assets/homeSwiper/img2.jpeg'
import arrow from '../../assets/Group3.png'
export default function HomeSwiper ()  {
    // const {isMobile} = useContext(IsMobileContext)
    return (
        <div className= "homeSwiper">
            <Swiper
                modules={[Navigation, Pagination , Autoplay ]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop ={true}
                >
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            </Swiper>
            <div className='overlay'></div>
            <div className='swiperText'>
                <h3><span>International </span>Film festival</h3>
                <h4>Entertaining | Engaging | Educational</h4>
                <h2>first touring international <br /> film festival</h2>
                <button className='know'>
                    <div className='innerDiv'>
                        <h5>Know More</h5>
                        <div className="arrow">
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}
