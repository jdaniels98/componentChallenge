import starBlack from "../images/star_black.png"

const AirBNBCard = (props) => {
    return (
        <div id="udemyCard">
            <img id="udemyImg" src = {props.image} alt="img"></img> 
            <p id="title">{props.title}</p>
            <p id="author">{props.author}</p>
            <div id="scoreRow">
                <p id="score">{props.score}</p>
                <div id="stars">
                    <img src={starBlack} alt="Black Star"/>
                </div>
                <p id="score2">{props.score2}</p>
            </div>
            <div id="priceRow">
                <p id="price">{props.price}</p>
                <p id="price2">{props.price2}</p>
            </div>
            <p id="bestseller">Bestseller</p>
        </div>
    )
}


export default AirBNBCard;