import { Swiper, SwiperSlide } from 'swiper/react';
// import {IsMobileContext} from '../../utils/IsMobileContext'

// images for swiper
import img1 from '../../assets/awards1.png';
// ==================== //
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination , Autoplay  } from 'swiper/modules';

function AwardsSwiper() {
    return (
        <div className="awardsSwiper">
            <Swiper
                modules={[Navigation, Pagination , Autoplay ]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop ={true}
                >
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AwardsSwiper