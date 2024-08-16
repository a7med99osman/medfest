import event1 from '../../../assets/events/image (4).png';
import event2 from '../../../assets/events/image (5).png';
import event3 from '../../../assets/events/image (6).png';
import event4 from '../../../assets/events/image (7).png';
import {OrangeBtn} from '../../orangeBtn/OrangeBtn';

import {IsMobileContext} from '../../../utils/IsMobileContext';
import { useContext } from 'react';

const Events1 = () => {
    const {isMobile} = useContext(IsMobileContext);
    const events = [
        {
            date : "24NOV, 2017",
            location : 'cairo',
            title : 'UNDER THE SKIN' ,
            description : 'The 1st of its kind in the MENA region, merging between films, health, and social impact. through a Unique Cinematic Experience',
            img : event1 
        },
        {
            date : "24NOV, 2017",
            location : 'LA viennoise downtown cairo',
            title : 'UNDER THE SKIN' ,
            description : 'The 1st of its kind in the MENA region, merging between films, health, and social impact. through a Unique Cinematic Experience',
            img : event2 
        },
        {
            date : "24NOV, 2017",
            location : 'cairo',
            title : 'UNDER THE SKIN' ,
            description : 'The 1st of its kind in the MENA region, merging between films, health, and social impact. through a Unique Cinematic Experience',
            img : event3 
        },
        {
            date : "24NOV, 2017",
            location : 'LA viennoise downtown cairo',
            title : 'UNDER THE SKIN' ,
            description : 'The 1st of its kind in the MENA region, merging between films, health, and social impact. through a Unique Cinematic Experience',
            img : event4 
        }
    ]
    return (
        <div className='events-box'>
            {events.map((event,index) => {
                return (
                    <div  className= {(index%2 != 0)? 'eventCard right' : 'eventCard left'}  key={index}>
                        <div className="eventContent">
                            <h4>{event.date} | {event.location}</h4>
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                            <div className="btn">
                                <OrangeBtn text='Read More' arrowSize= {isMobile?'16px':'34px'} />
                            </div>
                        </div>
                        <div className="img">
                            <img src={event.img} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Events1