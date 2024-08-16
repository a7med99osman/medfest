import { Swiper, SwiperSlide } from 'swiper/react';
import {IsMobileContext} from '../../utils/IsMobileContext'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import logos 
import logo1 from '../../assets/Frame230.png'
import logo2 from '../../assets/Frame231.png'
import logo3 from '../../assets/Frame232.png'
import logo4 from '../../assets/Frame233.png'
import logo5 from '../../assets/Frame234.png'
// ================== //
// Import required modules
import { Navigation, Pagination , Autoplay   } from 'swiper/modules';
import { useContext } from 'react';

export default function FooterSwiper ()  {
    const {isMobile} = useContext(IsMobileContext)
    return (
        <div className= "footerSwiper">
            <Swiper
                modules={[Navigation, Pagination , Autoplay  ]}
                spaceBetween={isMobile?13:60}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop ={true}
                >
                    <SwiperSlide><img style={{width : isMobile?'96px' :"164px" ,  height : isMobile? '34px' :'63px'}} src={logo1} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width : isMobile?'37px' :"78px" , height : isMobile?'37px' : '76px'}}  src={logo2} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width : isMobile?'38px' :"84px" , height : isMobile?'38px' : '84px'}}  src={logo3} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width : isMobile?'58px' :"111px" , height : isMobile?'46px': '87px'}} src={logo4} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width : isMobile?'45px' :"81px" , height : isMobile?'45px' : '81px'}}  src={logo5} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width : isMobile?'37px' :"78px" , height : isMobile?'37px' : '76px'}}  src={logo2} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

