import UdemyCard from "./UdemyCard";
import udemy1 from '../images/udemy_img1.png'
import udemy2 from '../images/udemy_img2.png'
import udemy3 from '../images/udemy_img3.png'


const Udemy = (props) => {
    return(
        <div id="udemy">
            <p id="udemyHeader">Students are viewing</p>
            <div id="cardRow">
                <UdemyCard image={udemy1} title="The Complete 2022 Web Development Bootcamp" author="Dr Angela Yu" score="4.7" price="£19.99" score2="(224,949)" price2="£69.99" />
                <UdemyCard image={udemy2} title="100 Days of Code The Complete Python Pro Bootcamp for 2022" author="Dr Angela Yu" score="4.7" score2="(139,610)" price="£17.99" price2="£59.99" />
                <UdemyCard image={udemy3} title="Ultimate AWS Certified Solutions Architect Associate..." author="Stephanie Maarek | AWS Certified Cloud Pra..." score="4.7" score2="(145,685)" price="£17.99" price2="£59.99" />
            </div>
        </div>
    )
}


export default Udemy;