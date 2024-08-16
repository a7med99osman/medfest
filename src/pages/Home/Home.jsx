import HomeSwiper from "../../components/homeSwiper/HomeSwiper"
import { Headline } from "../../components/headline/Headline";
import Timer from "../../components/timer/Timer"
import backgroundImage from '../../assets/background.jpeg';
import numbers from '../../assets/numbers.png';
import numbersMob from '../../assets/numbersMob.png';
import { useContext } from "react";
import { IsMobileContext } from "../../utils/IsMobileContext";
import Timeline from "../../components/timeline/Timeline";
import bannerHealth from '../../assets/bannerHealth.png'
import bannerHealthMob from '../../assets/bannerHealthMob.png'
import  InnerNav  from "../../components/innerNav/InnerNav";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export const Home = () => {
    const {isMobile} = useContext(IsMobileContext);
    const backgroundStyle = {
        backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .2)), 
        url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <>
            < HomeSwiper />
            <div style={backgroundStyle}className="comingSoon">
                <div className="timer">
                    < Timer />
                </div>
                <h3>Wednesday - 23 Sep,2024 | LA viennoise,Down town</h3>
                <h2>Medfest Egypt 6th Edition</h2>
                <div className="overlay"></div>
            </div>
            <div className="homeheadline">
                <Headline span="Medfest in" headline1="numbers" headline2="Since 2017"/>
            </div>
            <div className="numbers">
                <img src={isMobile?numbersMob:numbers} alt="" />
            </div>
            <div className="homeheadline">
                <Headline span="previous" headline1="editions" headline2="MFE Timeline"/>
            </div>
            <div className="timelineDiv">
                <Timeline />
            </div>
            <div className="banner">
                <img src={isMobile?bannerHealthMob:bannerHealth} alt="" />
                <div className="overlay"></div>
            </div>
            <div className="homeheadline">
                <Headline  span="Happening" headline1='now' headline2='Upcoming Events'/>
            </div>
            <InnerNav />
            {!isMobile &&(
            <div className="social">
                <FaInstagram  style={{width : '22px' ,height : '22px'}} /> 
                <FaFacebook style={{width : '22px' ,height : '22px'}} />
            </div>)}
            
        </>
    )
}
