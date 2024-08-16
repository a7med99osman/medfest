import Countdown from 'react-countdown';
import { IsMobileContext } from "../../utils/IsMobileContext"
import { useContext } from "react"


const Timer = () => {
    const {isMobile} = useContext(IsMobileContext);
    // Renderer for the countdown
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
        // Render a completion message or callback
        return (<h2>done</h2>);
        } else {
        // Render the countdown
        return (
            <div className='timerContainer' style={{ textAlign: 'center', color: 'white' }}>
                <h1> <span>COMING</span> SOON</h1>
            <div className='timer' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <div>
                <h2>{days < 10 ? `0${days}` : days}</h2>
                <p>Days</p>
                </div>
                <div>
                <h2>{hours < 10 ? `0${hours}` : hours}</h2>
                <p>Hours</p>
                </div>
                <div>
                <h2>{minutes < 10 ? `0${minutes}` : minutes}</h2>
                <p>Minutes</p>
                </div>
                <div>
                <h2>{seconds < 10 ? `0${seconds}` : seconds}</h2>
                <p>Seconds</p>
                </div>
            </div>
                <div className='bar' style={{ width: isMobile? '95%' : '50%'  , margin: '55px auto', height: '2px', backgroundColor: '#F4F4F4' , position : 'relative' }}>   
                    <div className='completeBar' style={{ position : 'absolute' ,top : '-3.0px'  , width: `${100 - ((days * 86400 + hours * 3600 + minutes * 60 + seconds) / (4 * 3600)) * 100}%`, height: '7px', backgroundColor: '#EDA703' , borderRadius : '10px 0 0 10px ' }} />
                </div>
            </div>
        );
        }
    };

  // Timer duration in milliseconds (e.g., 2 hours)
  const timerDuration = Date.now() + 1 * 60 * 60 * 1000;

    return (
        <Countdown date={timerDuration} renderer={renderer} />
    );
};

export default Timer;

