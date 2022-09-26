import AirBNBCard from "./AirBNBCard";
import bnb1 from "../images/abnb_img1.png"
import bnb2 from "../images/abnb_img2.png"
import bnb3 from "../images/abnb_img3.png"
import bnb4 from "../images/abnb_img4.png"


const AirBNB = (props) => {
    return(
        <div id="udemy">
            <p id="udemyHeader">Students are viewing</p>
            <div id="cardRow">
                <AirBNBCard image={bnb1} title="The Complete 2022 Web Development Bootcamp" author="Dr Angela Yu" score="4.7" price="£19.99" score2="(224,949)" price2="£69.99" />
                <AirBNBCard image={bnb2} title="The Complete 2022 Web Development Bootcamp" author="Dr Angela Yu" score="4.7" price="£19.99" score2="(224,949)" price2="£69.99" />
                <AirBNBCard image={bnb3} title="The Complete 2022 Web Development Bootcamp" author="Dr Angela Yu" score="4.7" price="£19.99" score2="(224,949)" price2="£69.99" />
                <AirBNBCard image={bnb4} title="The Complete 2022 Web Development Bootcamp" author="Dr Angela Yu" score="4.7" price="£19.99" score2="(224,949)" price2="£69.99" />
            </div>
        </div>
    )
}


export default AirBNB;