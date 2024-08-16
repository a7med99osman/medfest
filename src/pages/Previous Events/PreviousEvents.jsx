import background from '../../assets/background.jpeg';
import rightArrow from '../../assets/rightArrow.png';
export const PreviousEvents = () => {
    const backgroundStyle = {
        backgroundImage: `
        linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 1) 100%), 
        url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="previousEventsPage">
            <div style={backgroundStyle} className="banner">
                <div className="bannerContent">
                    <div className="words">
                        <h2><span>Previous</span></h2>
                        <h2>Events</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Purus in faucibus quisque nulla egestas sit quis vitae. Eu nisl arcu proin non viverra neque.</p>
                </div>
            </div>
            <div className="ourEvents-box">
                <div className="headline-Rline">
                    <div className="h-line"></div>
                    <h3>our type of events</h3>
                    <p>select a category from the following options to explore the events available</p>
                </div>
            </div>
            <div className="eventsGrid">
                {[...Array(9)].map((_, index) => (
                    <div key={index} className="singleEvent">
                        <div className="arrow">
                            <img src={rightArrow} alt="" />
                        </div>
                        <h3>Our type of events</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
