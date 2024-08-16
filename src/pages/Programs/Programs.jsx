import { useState } from 'react';
import background from '../../assets/background.jpeg';
import Events1 from '../../components/events/events1/Events1';


export const Programs = () => {
    
    const [activeNavItem , setActiveNavItem] = useState('Cinema clubs')
    const backgroundStyle = {
        backgroundImage: `
        linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 1) 100%), 
        url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="programsPage">
            <div style={backgroundStyle} className="banner">
                <div className="bannerContent">
                    <div className="words">
                        <h2><span>Upcoming</span></h2>
                        <h2>Events</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Purus in faucibus quisque nulla egestas sit quis vitae. Eu nisl arcu proin non viverra neque.</p>
                </div>
            </div>
            <div className="nav">
                <ul>
                    <li className={activeNavItem === 'Cinema clubs' ?'active':''} onClick={() => setActiveNavItem('Cinema clubs')} >Cinema clubs</li>
                    <li className={activeNavItem === 'workshops' ?'active':''} onClick={() => setActiveNavItem('workshops')}>workshops</li>
                    <li className={activeNavItem === 'screening & discussion' ?'active':''} onClick={() => setActiveNavItem('screening & discussion')}>screening & discussion</li>
                    <li className={activeNavItem === 'panels & masterclasses' ?'active':''} onClick={() => setActiveNavItem('panels & masterclasses')}>panels & masterclasses</li>
                </ul>
            </div>
            <div className="eventsContent">
                {activeNavItem === 'Cinema clubs' ? (<Events1 />):('')}
            </div>
        </div>
    )
}
