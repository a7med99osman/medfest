export const Headline = ({span , headline1 , headline2}) => {
    return (
        <div className="headline" >
            <h3><span>{span}</span> {headline1}</h3>
            <h2>{headline2}</h2>
        </div>
    )
}
