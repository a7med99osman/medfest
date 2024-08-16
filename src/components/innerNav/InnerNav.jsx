import  { useState } from 'react';
import nav1 from '../../assets/nav1.png'
import nav2 from '../../assets/nav2.png'

const InnerNav = () => {
    const [activeItem, setActiveItem] = useState('Cinema clubs');
    
    const navItems = ['Cinema clubs', 'Workshops', 'Screening & Discussion', 'Panels & Masterclasses'];
    
    return (
        <div>
        <div className="inner-nav">
            {navItems.map((item) => (
            <button
                key={item}
                className={`nav-item ${activeItem === item ? 'active' : ''}`}
                onClick={() => setActiveItem(item)}
            >
                {item}
            </button>
            ))}
        </div>
        <div className="content">
            {activeItem === 'Cinema clubs' && (
            <div>
                <img src={nav1} alt="" />
            </div>
            )}
            {activeItem === 'Workshops' && (
            <div>
                <img src={nav2} alt="" />
            </div>
            )}
            {activeItem === 'Screening & Discussion' && (
            <div>
                <img src={nav1} alt="" />
            </div>
            )}
            {activeItem === 'Panels & Masterclasses' && (
            <div>
                <img src={nav2} alt="" />
            </div>
            )}
        </div>
        </div>
    );
};

export default InnerNav;

