import arrow from '../../assets/Group3.png';

export const OrangeBtn = ({text , arrowSize}) => {
    return (
        <button className='orangeBtn'>
            <div className='innerDiv'>
                <h5>{text}</h5>
                <div className="arrow">
                    <img style={{width : arrowSize , height : arrowSize}} src={arrow} alt="" />
                </div>
            </div>
        </button>
    )
}
