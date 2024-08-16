import arrow from '../../assets/Group3.png';
import fistivalBG from '../../assets/festivalBG.jpeg'
import {Headline} from '../../components/headline/Headline';
import { OrangeBtn } from '../../components/orangeBtn/OrangeBtn';
import { LeftHeadline } from '../../components/leftHeadline/LeftHeadline';
import backgroundImage from '../../assets/background.jpeg';
import video from '../../assets/video.png';
import AwardsSwiper from '../../components/awardsSwiper/AwardsSwiper';
import download from '../../assets/whiteDownload.png';
import TwoNavs from '../../components/twoNavs/TwoNavs';
import ActorsGrid from '../../components/grid/ActorsGrid';
// actors images
import amir from '../../assets/actors/amirEid.jpeg'
import kemo from '../../assets/actors/kimo.jpeg'
import mahdy from '../../assets/actors/mahdy.jpeg'
// best films images 
import best1 from '../../assets/bestFilms/bestFilm1.png';
import best2 from '../../assets/bestFilms/bestFilm2.png';
import best3 from '../../assets/bestFilms/bestFilm3.png';
import Tickets from '../../components/tickets/Tickets';
import {IsMobileContext} from '../../utils/IsMobileContext';
import { useContext } from 'react';


export const MFE = () => {
    const {isMobile} = useContext(IsMobileContext);
    const actors = [
        {
            img : amir ,
            name : 'Amir Eid' ,
            jop : 'Actor / Singer',
            head : 'Head of Jury',
            about : ' labore voluptatibus uta am m e, veritatis odit quisquam'
        },
        {
            img : kemo ,
            name : 'Karim AbdElaziz',
            jop : 'Actor ',
            head : 'Head of Jury',
            about : ' tempore aliquam modi arch itatis odit quisquam'
        },
        {
            img : mahdy ,
            name : 'Mahmoud Mahdy',
            head : 'Head of Jury',
            about : ' labore voluptatibus pr repellendus officia, aliquam modi architecto est similique, veritatis odit quisquam'
        },
        {
            img : mahdy ,
            name : 'Mahmoud Mahdy',
            jop : '',
            head : 'Head of Jury',
            about : 'labore voluptatibus provid atioi architecto est similique, veritatis odit quisquam'
        },
        {
            img : amir ,
            name : 'Amir Eid' ,
            jop : 'Actor / Singer',
            head : 'Head of Jury',
            about : '  tempore consequuntur exf fio odit quisquam'
        }
    ]
    const actors3= [
        {
            img : amir ,
            name : 'Amir Eid' ,
            jop : 'Actor / Singer',
            head : 'Head of Jury',
            about : 'Lorem ipsum dosti est similique, veritatis odit quisquam'
        },
        {
            img : kemo ,
            name : 'Karim AbdElaziz',
            jop : 'Actor ',
            head : 'Head of Jury',
            about : 'Lorem ipsum dolor sitent velit quasi quos molestiae soluta tempore consequuntur exercitationem repellendus officia, aliquam modi architecto est similique, veritatis odit quisquam'
        },
        {
            img : mahdy ,
            name : 'Mahmoud Mahdy',
            jop : '',
            head : 'Head of Jury',
            about : 'Lorem ipsum dolor sit amovident velit quasi quos molestiae soluta tempore consequuntur exercitationem repellendus officia, aliquam modi architecto est similique, veritatis odit quisquam'
        },
    ]
    const backgroundStyle = {
        backgroundImage: `
        linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1) 100%), 
        url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="mfePage">
            <div className="mfeFestival">
                <div className="image">
                    <img src={fistivalBG} alt="" />
                    <div className="overlay"></div>
                </div>
                <div className="festivalContent">
                    <div className="words">
                        <h2><span>MFE</span></h2>
                        <h4>4<sup>th</sup> EDITION</h4>
                        <h2>festival</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Purus in faucibus quisque nulla egestas sit quis vitae. Eu nisl arcu proin non viverra neque.</p>
                    <div className="date">
                        <h2>24<sup>st</sup> <br />26<sup>th</sup></h2>
                        <div className="v-line"></div>
                        <h2>OCT<br />NOV 2024</h2>
                    </div>
                    <button className='get'>
                        <div className='innerDiv'>
                            <h5>Get Your Ticket</h5>
                            <div className="arrow">
                                <img style={{width : isMobile? '28px' :'40px'}} src={arrow} alt="" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div style={backgroundStyle} className="submitFilm">
                <Headline span ="Join our" headline1="Creatives" headline2="Submit your film" />
                <p>Lorem ipsum dolor sit amet consectetur. Nibh sed adipiscing lacinia duis pellentesque sit a amet dictum. Tempor egestas nunc commodo ut lorem.</p>
                <OrangeBtn text ="Submit Now" arrowSize= {isMobile?'27px':'40px'}/>
            </div>
            <div className="trailer">
                <LeftHeadline span="MFE Festival" headline="trailer" />
                <div className="image">
                    <img src={video} alt="" />
                </div>
            </div>
            
            <div className="awards">
                <Headline span="Key" headline1= "highlights" headline2='Honorary awards'/>
                <AwardsSwiper />
            </div>
            
            <div className="program">
                <Headline span="Festival" headline1='details' headline2='MFE festival program' />
                {!isMobile?(
                    <button className='download'>
                        <div className='innerDiv'>
                            <h5>Download Full Program</h5> 
                                <div className="arrow">
                                    <img style={{width :"41px"}} src={download} alt="" />    
                                </div>
                        </div>
                    </button>):('')}
                
            </div>
            <TwoNavs />
            <Headline span="Panel" headline1='members' headline2='our juries' />
            <ActorsGrid actors={actors} headline='photography Competition jury'  />
            <ActorsGrid actors={actors3} headline='pitching session jury'  />
            <ActorsGrid actors={actors} headline='photography Competition jury'  />
            
            <div className="filmAwards">
                <Headline span='Types' headline1 ='of awards' headline2 ='Films awards' />
                <div className="imgsContainer">
                    <div className="image">
                        <img src={best1} alt="" />
                    </div>
                    <div className="image">
                        <img src={best2} alt="" />
                    </div>
                    <div className="image">
                        <img src={best3} alt="" />
                    </div>
                </div>
            </div>
            
            <div className="tickets">
                <Headline span="Accreditation" headline1='details' headline2='MFE Passes & tickets' />
                <Tickets />
            </div> 
        </div>
    )
}

