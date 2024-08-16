import aboutBanner from '../../assets/aboutBanner.png'
import ourVision from '../../assets/ourVision.png';
import whyDeffrent from '../../assets/whyDefferent.png'
import {Headline} from '../../components/headline/Headline';
import founder1 from '../../assets/founder1.png';
import founder2 from '../../assets/founder2.png';
import founder3 from '../../assets/founder3.png';
import founder4 from '../../assets/founder4.png';
import founder5 from '../../assets/founder5.png';
import founder6 from '../../assets/founder6.png';
import founder12 from '../../assets/founder1-2.png';
import founder22 from '../../assets/founder2-2.png';
import founder32 from '../../assets/founder3-2.png';

import {IsMobileContext} from '../../utils/IsMobileContext';
import { useContext } from 'react';
export const AboutUs = () => {
    const {isMobile} = useContext(IsMobileContext);

    return (
        <div className="aboutPage">
            <div className="banner">
                <img src={aboutBanner} alt="" />
                <div className="bannerContent">
                    <div className="words">
                        <h2><span>About</span> Us</h2>
                    </div>
                </div>
            </div>
            <div className="aboutMedfest">
                <h4>MEDFEST EG IS AN EGYPTIAN TOURING INTERNATIONAL SHORT FILMS FESTIVAL.</h4>
                <p>The 1st of its kind in the MENA region, merging between films, health, and social impact. through a Unique Cinematic Experience.</p>
            </div>
            <div className="ourVision">
                <img src={ourVision} alt="" />
            </div>
            <div className="whyDifferent">
                    <img src={whyDeffrent} alt="" />
            </div>
            <div className="founders">
                <div className="founderHeadline">
                    <h3><span>meet</span> the <br /> {isMobile?'team':'founders'}</h3>
                </div>
                {isMobile? (
                    // mobile
                    <div className="foundersCards">
                    <div className="founderCard first">
                        <div className="image">
                            <img src={founder12} alt="" />
                        </div>
                        <div className="image">
                            <img src={founder22} alt="" />
                        </div>
                    </div>
                    <div className="founderCard second">
                        <div className="image">
                            <img src={founder32} alt="" />
                        </div>
                        <div className="image">
                            <img src={founder4} alt="" />
                        </div>
                    </div>
                    <div className="founderCard third">
                        <div className="image">
                            <img src={founder5} alt="" />
                        </div>
                        <div className="image">
                            <img src={founder6} alt="" />
                        </div>
                    </div>
                </div>) : (
                    //  pc
                    <div className="foundersCards">
                        <div className="founderCard">
                            <img src={founder1} alt="" />
                        </div>
                        <div className="founderCard">
                            <img src={founder2} alt="" />
                        </div>
                        <div className="founderCard">
                            <img src={founder3} alt="" />
                        </div>
                    </div>
                    )}
                
            </div>
        </div>
    )
}
