import film1 from '../../../../assets/films/film1.jpeg';
import film2 from '../../../../assets/films/film2.jpeg';
import film3 from '../../../../assets/films/film3.jpeg';
import { GoPlay } from "react-icons/go";
import {IsMobileContext} from '../../../../utils/IsMobileContext';
import { useContext } from 'react';


const Day1Films = () => {
    const {isMobile} = useContext(IsMobileContext);

    const films =[
        {
            title : "A STRANGE PATH",
            directdBy :"Guto Parente",
            ReleaseYear: 2023,
            img : film1 
        },
        {
            title : "Xlarge",
            directdBy :"hamada",
            ReleaseYear: 2020,
            img : film2
        },
        {
            title : "ELSO",
            directdBy :"Guto Opera",
            ReleaseYear: 2015,
            img : film3
        },
        {
            title : "A STRANGE PATH",
            directdBy :"Guto Parente",
            ReleaseYear: 2012,
            img : film1 
        }
    ]
    return (
        <div className="day1Films">
            {films.map((film , index) => {
                return (<div className="filmCard" key={index} >
                    <div className="image">
                        <img src={film.img} alt="" />
                        <div className="play"><GoPlay style={{width :'60px', height :'60px'}} /></div>
                        <div className="overlay"></div>
                    </div>
                    <div className= {index % 2 != 0 ? 'right' : 'left'} >
                        <h2>{film.title}</h2>
                        <h4>Directed by: {film.directdBy}</h4>
                        <h4>Release Year: {film.ReleaseYear}</h4>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Day1Films