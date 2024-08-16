import { useState } from "react"
import Day1Films from "../days/films/day1Films/Day1Films";
import Day1Workshops from "../days/workshops/Day1Workshops";



const TwoNavs = () => {
    const primaryNavItems = ['Day 1', 'Day 2', 'Day 3'];
    const secondaryNavItems = ['Films', 'Workshops', 'Panels & Masterclasses','Entertainment'];
    const [activePrimaryNav , setActivePrimaryNav] = useState(primaryNavItems[0])
    const [activeSecondryNav , setActiveSecondryNav] = useState(secondaryNavItems[0])
    return (
        <div className="twoNavs">
            <div className="primary-nav">
                <ul>
                    {primaryNavItems.map((item , index) => {
                        return (<li key={index} className={activePrimaryNav === item ? 'active' : ''} onClick={() => setActivePrimaryNav(item)}>{item}</li>);
                    })}
                </ul>
            </div>
            <div className="secondry-nav">
                <ul>
                    {secondaryNavItems.map((item , index) => {
                        return (<li key={index} className={activeSecondryNav === item ? 'active' : ''} onClick={() => setActiveSecondryNav(item)}>{item}</li>);
                    })}
                </ul>
            </div>
            <div className="sectionContent">
                {(activePrimaryNav === 'Day 1' && activeSecondryNav === 'Films')&&(<Day1Films />)}
                {(activePrimaryNav === 'Day 1' && activeSecondryNav === 'Workshops')&&(<Day1Workshops />)}
            </div>
        </div>
    )
}

export default TwoNavs