import { IsMobileContext } from "../../utils/IsMobileContext"
import { useContext } from "react"

const ActorsGrid = ({actors , headline}) => {
    const {isMobile} = useContext(IsMobileContext);

    return (
        <div className="actorsGrid" >
            <div className="headline">
                <div className="h-line"></div>
                <h3>{headline}</h3>
            </div>
            <div className="cardsContainer">
                {actors?.map((actor,index) => {
                    return (
                    <div key={index} className="actorCard">
                        <div className="image">
                            <img src={actor.img} alt="" />
                            <div className="overlay"></div>
                            <div className="overlay2"></div>
                        </div>
                        <div className="descripe">
                            <h2>{actor.head}</h2>
                            <h4>{actor.name} <span>{actor.jop}</span> </h4>
                            {!isMobile? (<p>{actor.about}</p>) : ('')}
                        </div>
                    </div>
                    )})}
            </div>
        </div>
    )
}

export default ActorsGrid