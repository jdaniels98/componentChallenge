import starFull from "../images/star_full.png"
import starHalf from "../images/star_half.png"

const UdemyCard = (props) => {
    return (
        <div id="udemyCard">
            <img id="udemyImg" src = {props.image} alt="img"></img> 
            <p id="title">{props.title}</p>
            <p id="author">{props.author}</p>
            <div id="scoreRow">
                <p id="score">{props.score}</p>
                <div id="stars">
                    <img src={starFull} alt="Full Star"/>
                    <img src={starFull} alt="Full Star"/>
                    <img src={starFull} alt="Full Star"/>
                    <img src={starFull} alt="Full Star"/>
                    <img src={starHalf} alt="Half Star"/>
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


export default UdemyCard;