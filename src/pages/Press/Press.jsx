import background from '../../assets/background.jpeg';
import blackArrow from '../../assets/blackArrow.png'
import pressReleaseImg1 from '../../assets/pressRelease.png';
export const Press = () => {
    const pressReleases = [
        {   
            img :pressReleaseImg1 ,
            date : 'Mon May 26, 2024 ' ,
            title : 'FESTIVAL DIRECTOR, INTISHAL AL-TIMIMI TO TRANSITION TO NEW'
        },
        {   
            img :pressReleaseImg1 ,
            date : 'Mon May 26, 2024 ' ,
            title : 'FESTIVAL DIRECTOR, INTISHAL AL-TIMIMI TO TRANSITION TO NEW'
        },
        {   
            img :pressReleaseImg1 ,
            date : 'Mon May 26, 2024 ' ,
            title : 'FESTIVAL DIRECTOR, INTISHAL AL-TIMIMI TO TRANSITION TO NEW'
        },
        {   
            img :pressReleaseImg1 ,
            date : 'Mon May 26, 2024 ' ,
            title : 'FESTIVAL DIRECTOR, INTISHAL AL-TIMIMI TO TRANSITION TO NEW'
        },
        {   
            img :pressReleaseImg1 ,
            date : 'Mon May 26, 2024 ' ,
            title : 'FESTIVAL DIRECTOR, INTISHAL AL-TIMIMI TO TRANSITION TO NEW'
        }
    ]
    const backgroundStyle = {
        backgroundImage: `
        linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 1) 100%), 
        url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="pressPage">
            <div style={backgroundStyle} className="banner">
                <div className="bannerContent">
                    <div className="words">
                        <h2><span>press</span></h2>
                        <h2>releases</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Purus in faucibus quisque nulla egestas sit quis vitae. Eu nisl arcu proin non viverra neque.</p>
                </div>
            </div>
            <div className="form-box">
                <div className="formContent">
                    <h3>get accreditation</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Vitae est faucibus libero eros velit quam elementum. </p>
                </div>
                <div className="formDiv">
                    <form className='form' >
                        <input placeholder='Full Name' type="text" />
                        <input placeholder='Email' type="email" />
                        <input placeholder='Phone Number' type="number" />
                        <input placeholder='Subject' type="text" />
                        <input placeholder='Message' type="text" />
                        <button>
                            <div className="innerDiv">
                                <h3>Get Accreditation</h3>
                                <div className="arrow">
                                    <img src={blackArrow} alt="" />
                                </div>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
            <div className="pressHeadline">
                <h3>Press releases</h3>
            </div>
            <div className="pressReleases">
                    {pressReleases.map((press,index) => {
                        return (
                        <div className='pressCard' key={index} >
                            <div className="image">
                                <img src={press.img} alt="" />
                            </div>
                            <h5>{press.date}</h5>
                            <h2>{press.title}</h2>
                        </div>)
                    })}
                </div>
        </div>
    )
}
