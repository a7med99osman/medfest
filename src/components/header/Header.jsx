// React Dom
import {  Link, NavLink } from "react-router-dom";
// icons
import logo from '../../assets/logo.png';
import whiteLogo from '../../assets/whiteLogo.png';
import arrow from '../../assets/Group3.png';
import download from '../../assets/download.png';
import blackArrow from '../../assets/blackArrow.png';
import { RxHamburgerMenu } from "react-icons/rx";

// context
import { IsMobileContext } from "../../utils/IsMobileContext"
import { useContext, useState } from "react"
const Header = () => {
    const [menuOn , setMenuOn] = useState(false);

    function handleMenu () {
        setMenuOn(!menuOn);
    }
    const [activeItem , setActiveItem] = useState('');
    const {isMobile} = useContext(IsMobileContext);
    return (
        <div className="header">    
            <div className="upperFrame">
                    {!isMobile? <div className="logo">
                        <Link className= {activeItem==='Home'?'active':''} onClick={() => setActiveItem('Home')} to={"/"}><img src={logo} alt="" /></Link>
                    </div>: ""}
                <div className="dateDiv">
                    <div className="date1">4<sup>th</sup> EDITION</div>
                    |
                    <div className="date2">24<sup>st</sup> <br/> 26<sup>th</sup></div>
                    |
                    <div className="date3">OCT <br /> NOV 2024 </div>
                </div>
                <div className="btns">
                    <button className='get'>
                        <div className='innerDiv'>
                            <h5>Get Your Ticket</h5>
                            <div className="arrow">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </button>
                    <button className='download'>
                        <div className='innerDiv'>
                            {!isMobile ? <h5>Download program</h5> :<h5>Submit your film</h5>   }    
                                <div className="arrow">
                                {!isMobile ? <img src={download} alt="" /> : <img src={blackArrow} alt="" />  }    
                                </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="navBar">
                <div className="nav">
                    {!isMobile ?(
                                    <ul>
                                        <NavLink className= {activeItem==='Home'?'active':''} onClick={() => setActiveItem('Home')} to={"/"}>Home</NavLink>
                                        <NavLink className= {activeItem==='MFE Festival'?'active':''} onClick={() => setActiveItem('MFE Festival')} to={"/MFEfestival"}>MFE Festival</NavLink>
                                        <NavLink className= {activeItem==='360 Program'?'active':''} onClick={() => setActiveItem('360 Program')} to={"/360program"}>360 Program</NavLink>
                                        <NavLink className= {activeItem==='Previous Events'?'active':''} onClick={() => setActiveItem('Previous Events')} to={"/previousEvents"}>Previous Events</NavLink>
                                        <NavLink className= {activeItem==='Press'?'active':''} onClick={() => setActiveItem('Press')} to={"/press"}>Press</NavLink>
                                        <NavLink className= {activeItem==='About Us'?'active':''} onClick={() => setActiveItem('About Us')} to={"/aboutUs"}>About Us</NavLink>
                                        <NavLink className= {activeItem==='Contact'?'active':''} onClick={() => setActiveItem('Contact')} to={"/Contact"}>Contact Us</NavLink>
                                    </ul>
                    ):
                    (
                        <div className="mobileNav" >
                            <div className="logo">
                                <Link className= {activeItem==='Home'?'active':''} onClick={() => setActiveItem('Home')} to={"/"}><img src={whiteLogo} alt="" /></Link>
                            </div>
                            <div onClick={() => {handleMenu()}} className="burgerIcon" >
                                <RxHamburgerMenu style={{color : "white" , width : "25px" , height : "25px"}}/>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
            {isMobile &&(
                <div style={{transform: menuOn? 'translateY(0%)' : ''}}  className="mobileMenu" >
                        <ul>
                            <NavLink onClick={() => {setMenuOn(false)}} to={"/"}>Home</NavLink>
                            <NavLink onClick={() => {setMenuOn(false)}} to={"/MFEfestival"}>MFE Festival</NavLink>
                            <NavLink onClick={() => {setMenuOn(false)}} to={"/MFEfestival"}>360 Program</NavLink>
                            <NavLink onClick={() => {setMenuOn(false)}} to={"/previousEvents"}>Previous Events</NavLink>
                            <NavLink onClick={() => {setMenuOn(false)}} to={"/press"}>Press</NavLink>
                            <NavLink onClick={() => {setMenuOn(false)}} to={"/aboutUs"}>About Us</NavLink>
                            <NavLink onClick={() => {setMenuOn(false)}} to={"/Contact"}>Contact Us</NavLink>
                        </ul>
                </div>
            )}
        </div>
    )
}

export default Header