import backgroundImage from '../../assets/contactBanner.png';
import blackArrow from '../../assets/blackArrow.png'


export const ContactUs = () => {
    const backgroundStyle = {
        backgroundImage: `
        url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="contactPage">
            <div style={backgroundStyle} className="banner">
                <div className="bannerContent">
                    <div className="words">
                        <h2><span>Contact us</span></h2>
                        <h2>now</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Purus in faucibus quisque nulla egestas sit quis vitae. Eu nisl arcu proin non viverra neque.</p>
                </div>
                <div className="form-box">
                <div className="formDiv">
                    <form className='form' >
                        <input placeholder='Full Name' type="text" />
                        <input placeholder='Email' type="email" />
                        <input placeholder='Phone Number' type="number" />
                        <input placeholder='Subject' type="text" />
                        <input placeholder='Message' type="text" />
                        <button>
                            <div className="innerDiv">
                                <h3>Send Message</h3>
                                <div className="arrow">
                                    <img src={blackArrow} alt="" />
                                </div>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
            </div>

        </div>
    )
}
