import FooterSwiper from "../footerSwiper/FooterSwiper"
import newsletter from '../../assets/newsletter.png'
import newsletterMob from '../../assets/newsletterMob.png'
import whiteLogo from '../../assets/whiteLogo.png';
import backgroundImage from '../../assets/background.jpeg';
import arrow from '../../assets/Group3.png';
import { useContext } from "react";
import { IsMobileContext } from "../../utils/IsMobileContext";
import { NavLink } from "react-router-dom";
// icons 
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
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
        <div className="footer">
            <FooterSwiper />
            <div className="newsLetter">
                <div className="image">
                    <img src={ isMobile? newsletterMob : newsletter} alt="" />
                    <div className="newsContent">
                        <h2><span>news</span>letter</h2>
                        <h4>Subscribe to our mailing list and receive our latest news and updates directly{isMobile?"" : <br /> }in your inbox.</h4>
                        <div className="input">
                            <input placeholder="Enter Your Email" /> 
                            <button className='get'>
                                <div className='innerDiv'>
                                    <h5>Subscribe Now</h5>
                                    <div className="arrow">
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={backgroundStyle} className="footerNav">
                <div className="image">
                    <img src={whiteLogo} alt="" />
                </div>
                <div className="h-line"></div>
                <div className="nav">
                    <ul>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/MFEfestival"}>MFE Festival</NavLink>
                        <NavLink to={"/360program"}>360 Program</NavLink>
                        <NavLink to={"/previousEvents"}>Previous Events</NavLink>
                        <NavLink to={"/press"}>Press</NavLink>
                        <NavLink to={"/aboutUs"}>About Us</NavLink>
                        <NavLink to={"/contact"}>Contact Us</NavLink>
                    </ul>
                </div>
                <div className="icons">
                    <FaInstagram style={{width :'25px', height :'25px'}} />
                    <FaFacebook style={{width :'25px', height :'25px'}}  />
                    <FaTwitter style={{width :'25px', height :'25px'}}  />
                    <FaYoutube style={{width :'25px', height :'25px'}}  />
                </div>
                <div className="copyrights">
                    <h3>© 2024, All Rights Reserved</h3>
                    <h3>Designed & developed by WebOps</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer