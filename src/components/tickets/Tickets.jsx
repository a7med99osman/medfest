import { OrangeBtn } from "../orangeBtn/OrangeBtn"
import {IsMobileContext} from '../../utils/IsMobileContext';
import { useContext } from 'react';

const Tickets = () => {
    const {isMobile} = useContext(IsMobileContext);
    const tickets = [
        {
            title : 'Daily Pass',
            price : 600,
            details : {
            details1 : "Lorem ipsum dolor sit" ,
            details2 : "Lorem ipsum dolor sit" ,
            details3 : "Lorem ipsum dolor sit" ,
            details4 : "Lorem ipsum dolor sit" 
            },
            isEarlyBirds : false ,
            isDiscount : false ,
            discountRate : 0
        },
        {
            title : 'Premium ticket',
            price : 600,
            details : {
            details1 : "Lorem ipsum dolor sit" ,
            details2 : "Lorem ipsum dolor sit" ,
            details3 : "Lorem ipsum dolor sit" ,
            details4 : "Lorem ipsum dolor sit" 
            },
            isEarlyBirds : false ,
            isDiscount : false ,
            discountRate : 15
        },
        {
            title : 'Student ticket',
            price : 600,
            details : {
            details1 : "Lorem ipsum dolor sit" ,
            details2 : "Lorem ipsum dolor sit" ,
            details3 : "Lorem ipsum dolor sit" ,
            details4 : "Lorem ipsum dolor sit" 
            },
            isEarlyBirds : true ,
            isDiscount : true ,
            discountRate : 15
        },
        {
            title : 'Regular ticket',
            price : 600,
            details : {
            details1 : "Lorem ipsum dolor sit" ,
            details2 : "Lorem ipsum dolor sit" ,
            details3 : "Lorem ipsum dolor sit" ,
            details4 : "Lorem ipsum dolor sit" 
            },
            isEarlyBirds : true ,
            isDiscount : true ,
            discountRate : 30
        },
    ]
    return (
        <div className="ticketsContainer" >
            {tickets.map((ticket,index) => {
                return(
                <div key={index} className="ticketCard">
                        {(ticket.isEarlyBirds?(
                        <div className="earlyBirds" >
                            <h4>
                                Early birds
                            </h4>
                        </div>
                        ):'')}
                    <h2>{ticket.title}</h2>
                    <div className="price">
                        <h3>{ticket.price} LE</h3>
                        {(ticket.isDiscount?(
                        <div>
                            <h4>
                                {ticket.discountRate}% OFF
                            </h4>
                        </div>
                        ):'')}
                    </div>
                    <div className="h-line"></div>
                    <ul>
                        <li>{ticket.details.details1}</li>
                        <li>{ticket.details.details2}</li>
                        <li>{ticket.details.details3}</li>
                        <li>{ticket.details.details4}</li>
                    </ul>
                    <OrangeBtn text ="Get Ticket" arrowSize= {isMobile?'24px':'30px'}  />
                </div>
            )})}

            
        </div>
    )
}

export default Tickets